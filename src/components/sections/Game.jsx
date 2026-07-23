import { useState, useRef, useCallback, useEffect } from "react";
import { PiSirenBold } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import doodles from "../../assets/images/doodles.jpg";
import Reveal from "../ui/Reveal";

const LANES = [20, 50, 80];

export default function Game() {
  const [status, setStatus] = useState("briefing"); // briefing | countdown | playing | report
  const [countdownText, setCountdownText] = useState("Connecting...");
  
  const [lane, setLane] = useState(1);
  const [distance, setDistance] = useState(0);
  const [speed, setSpeed] = useState(80);
  const [evidenceCount, setEvidenceCount] = useState(0);
  const [wantedLevel, setWantedLevel] = useState("★☆☆☆☆");
  const [bestDistance, setBestDistance] = useState(5.4);
  const [collisionsCount, setCollisionsCount] = useState(0);
  const [highestSpeed, setHighestSpeed] = useState(80);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [endReason, setEndReason] = useState("failed"); // "failed" or "quit"

  const [entities, setEntities] = useState([]);

  const gameLoopRef = useRef(null);
  const spawnerRef = useRef(null);
  const difficultyRef = useRef(null);
  
  // Keep refs updated for the game loop to avoid stale closures
  const stateRef = useRef({ lane, speed, distance, status, entities });
  useEffect(() => {
    stateRef.current = { lane, speed, distance, status, entities };
  }, [lane, speed, distance, status, entities]);

  useEffect(() => {
    const stored = Number(localStorage.getItem("caseFile006BestDistance") || 5.4);
    setBestDistance(stored);
  }, []);

  const clearAllTimers = useCallback(() => {
    if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    if (spawnerRef.current) clearInterval(spawnerRef.current);
    if (difficultyRef.current) clearInterval(difficultyRef.current);
  }, []);

  const startOperationSequence = () => {
    setStatus("countdown");
    setCountdownText("Connecting...");

    setTimeout(() => setCountdownText("Loading GPS..."), 800);
    setTimeout(() => setCountdownText("Police Network Online..."), 1600);
    setTimeout(() => setCountdownText("Tracking Suspect..."), 2400);
    setTimeout(() => setCountdownText("3"), 3200);
    setTimeout(() => setCountdownText("2"), 4000);
    setTimeout(() => setCountdownText("1"), 4800);
    setTimeout(() => {
      setCountdownText("GO");
      setTimeout(() => {
        beginActualGameplay();
      }, 600);
    }, 5600);
  };

  const triggerGameOver = useCallback((reason = "failed") => {
    clearAllTimers();
    setEndReason(reason);
    setStatus("report");

    setDistance((finalDistVal) => {
      if (finalDistVal > bestDistance) {
        localStorage.setItem("caseFile006BestDistance", String(finalDistVal));
        setBestDistance(finalDistVal);
        setIsNewRecord(true);
      } else {
        setIsNewRecord(false);
      }
      return finalDistVal;
    });
  }, [bestDistance, clearAllTimers]);

  const beginActualGameplay = () => {
    setStatus("playing");
    setDistance(0);
    setSpeed(80);
    setEvidenceCount(0);
    setWantedLevel("★☆☆☆☆");
    setCollisionsCount(0);
    setHighestSpeed(80);
    setEntities([]);

    let lastTime = performance.now();

    const loop = (currentTime) => {
      if (stateRef.current.status !== "playing") return;

      const delta = Math.min((currentTime - lastTime) / 1000, 0.1); // cap delta to prevent huge jumps
      lastTime = currentTime;

      // Update Distance
      setDistance((prev) => {
        const added = (stateRef.current.speed / 3600) * (delta * 70);
        const newDist = prev + added;
        
        if (newDist > 12 && newDist < 25) setWantedLevel("★★☆☆☆");
        else if (newDist >= 25 && newDist < 40) setWantedLevel("★★★☆☆");
        else if (newDist >= 40 && newDist < 60) setWantedLevel("★★★★☆");
        else if (newDist >= 60) setWantedLevel("★★★★★");

        return newDist;
      });

      // Update Entities Positions & Collision Check
      setEntities((prevEntities) => {
        const updated = [];
        for (let i = 0; i < prevEntities.length; i++) {
          const ent = prevEntities[i];
          const newY = ent.y + delta * 40;

          // Remove if out of bounds
          if (newY > 110) continue;

          // Collision zone: y between 70 and 90 (interceptor is fixed at bottom-12 roughly matching this range)
          if (newY >= 70 && newY <= 90 && ent.lane === stateRef.current.lane) {
            if (ent.type === "police" || ent.type === "roadblock") {
              triggerGameOver("failed");
              return [];
            } else if (ent.type === "traffic") {
              setSpeed((s) => Math.max(40, s - 20));
              setCollisionsCount((c) => c + 1);
              // skip adding this entity (collected/hit)
              continue;
            } else if (ent.type === "evidence") {
              setEvidenceCount((e) => e + 1);
              // skip adding this entity (collected)
              continue;
            }
          }

          updated.push({ ...ent, y: newY });
        }
        return updated;
      });

      gameLoopRef.current = requestAnimationFrame(loop);
    };

    gameLoopRef.current = requestAnimationFrame(loop);

    // Entity Spawner
    spawnerRef.current = setInterval(() => {
      if (stateRef.current.status !== "playing") return;

      const randomLane = Math.floor(Math.random() * 3);
      const types = ["traffic", "police", "roadblock", "evidence", "evidence"];
      const chosenType = types[Math.floor(Math.random() * types.length)];

      setEntities((prev) => [
        ...prev,
        {
          id: Math.random() + Date.now(),
          type: chosenType,
          lane: randomLane,
          y: -15, // Starts above the viewport
        },
      ]);
    }, 1200);

    // Difficulty Speed Escalation
    difficultyRef.current = setInterval(() => {
      if (stateRef.current.status !== "playing") return;
      setSpeed((prev) => {
        const next = Math.min(180, prev + 10);
        if (next > highestSpeed) setHighestSpeed(Math.round(next));
        return next;
      });
    }, 15000);
  };

  useEffect(() => () => clearAllTimers(), [clearAllTimers]);

  // Handle keyboard inputs & Esc to quit
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (status === "playing" || status === "countdown") {
          triggerGameOver("quit");
        }
        return;
      }

      if (status !== "playing") return;

      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        setLane((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        setLane((prev) => Math.min(2, prev + 1));
      } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        setSpeed((prev) => Math.min(180, prev + 10));
      } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        setSpeed((prev) => Math.max(40, prev - 15));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [status, triggerGameOver]);

  return (
    <section id="games" className="relative overflow-hidden bg-[#F8F4EC] dark:bg-[#121212] py-36 transition-colors duration-300">
      <div
        className="absolute inset-0 pointer-events-none opacity-15 dark:opacity-5"
        style={{
          backgroundImage: `url(${doodles})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1000px",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-20">

        {status === "briefing" && (
          <Reveal>
            <div className="bg-[#F7F2E9] dark:bg-[#1E1E1E] border-2 border-[#D8CDBA] dark:border-[#333] hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all p-8 sm:p-12 rounded-2xl shadow-2xl max-w-3xl mx-auto font-mono text-sm text-gray-800 dark:text-gray-200 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-700 text-white px-6 py-1 text-[10px] tracking-[4px] font-bold uppercase rotate-12 translate-x-4 translate-y-2">
                CLASSIFIED
              </div>

              <div className="text-center border-b border-[#D8CDBA] dark:border-[#333] pb-4">
                <span className="text-xs uppercase tracking-[6px] text-[#B48947] dark:text-[#D4AF37] font-bold block mb-1">━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1F1F] dark:text-white tracking-widest">CASE FILE #006</h2>
                <h3 className="text-sm uppercase tracking-[4px] text-red-700 dark:text-red-400 font-bold mt-1">OPERATION : GETAWAY</h3>
                <span className="text-xs uppercase tracking-[6px] text-[#B48947] dark:text-[#D4AF37] font-bold block mt-1">━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-[#EFE8DC] dark:bg-[#252525] p-4 rounded-xl border border-[#D8CDBA] dark:border-[#333] text-xs">
                <div><span className="text-gray-500 dark:text-gray-400 block">Time:</span> <strong className="text-[#1F1F1F] dark:text-gray-100">23:47</strong></div>
                <div><span className="text-gray-500 dark:text-gray-400 block">Location:</span> <strong className="text-[#1F1F1F] dark:text-gray-100">Karachi Central</strong></div>
                <div><span className="text-gray-500 dark:text-gray-400 block">Suspect:</span> <strong className="text-[#1F1F1F] dark:text-gray-100">Unknown</strong></div>
                <div><span className="text-gray-500 dark:text-gray-400 block">Vehicle:</span> <strong className="text-[#1F1F1F] dark:text-gray-100">Black Sedan</strong></div>
                <div><span className="text-gray-500 dark:text-gray-400 block">Status:</span> <strong className="text-red-700 dark:text-red-400">Escaping</strong></div>
                <div><span className="text-gray-500 dark:text-gray-400 block">Agency:</span> <strong className="text-[#2F4F46] dark:text-[#4E8074]">Special Bureau</strong></div>
              </div>

              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed pt-2">
                <p>The suspect has escaped with confidential evidence.</p>
                <p>Your task is to pursue the target, recover as much evidence as possible, and avoid fatal collisions.</p>
                <p className="text-red-700 dark:text-red-400 font-bold">Failure will result in the loss of the case. Good luck, detective.</p>
              </div>

              <div className="text-center pt-6">
                <button
                  onClick={startOperationSequence}
                  className="px-10 py-4 bg-[#2F4F46] dark:bg-[#3B6359] text-white font-bold rounded-xl shadow-xl hover:bg-[#234039] dark:hover:bg-[#2F4F46] transition-all tracking-[3px] text-xs uppercase"
                >
                  START OPERATION
                </button>
              </div>
            </div>
          </Reveal>
        )}

        {status === "countdown" && (
          <div className="bg-[#1F1F1F] border-4 border-[#3A2E22] dark:border-[#444] p-16 rounded-2xl shadow-2xl max-w-3xl mx-auto text-center space-y-6 relative">
            <button
              onClick={() => triggerGameOver("quit")}
              className="absolute top-4 right-4 px-3 py-1 bg-red-600/80 hover:bg-red-600 text-white font-mono text-xs rounded transition"
            >
              QUIT (ESC)
            </button>
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block animate-ping mr-2" />
            <span className="font-mono text-xs uppercase tracking-[4px] text-green-400">SECURE TERMINAL ACTIVE</span>
            <div className="font-serif text-5xl sm:text-6xl text-white tracking-widest py-10 animate-pulse">
              {countdownText}
            </div>
          </div>
        )}

        {status === "playing" && (
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 font-mono text-xs sm:text-sm flex-1 mr-4">
                <div className="bg-[#F7F2E9] dark:bg-[#1E1E1E] border border-[#D8CDBA] dark:border-[#333] p-3 rounded-lg shadow text-gray-800 dark:text-gray-200">
                  <span className="text-gray-500 dark:text-gray-400 block text-[10px] uppercase">Distance</span>
                  <span className="font-bold text-[#1F1F1F] dark:text-white text-base">{distance.toFixed(1)} km</span>
                </div>
                <div className="bg-[#F7F2E9] dark:bg-[#1E1E1E] border border-[#D8CDBA] dark:border-[#333] p-3 rounded-lg shadow text-center text-gray-800 dark:text-gray-200">
                  <span className="text-gray-500 dark:text-gray-400 block text-[10px] uppercase">Evidence</span>
                  <span className="font-bold text-[#B48947] dark:text-[#D4AF37] text-base">{evidenceCount}</span>
                </div>
                <div className="bg-[#F7F2E9] dark:bg-[#1E1E1E] border border-[#D8CDBA] dark:border-[#333] p-3 rounded-lg shadow text-right text-gray-800 dark:text-gray-200">
                  <span className="text-gray-500 dark:text-gray-400 block text-[10px] uppercase">Wanted Level</span>
                  <span className="font-bold text-red-600 dark:text-red-400 text-base">{wantedLevel}</span>
                </div>
              </div>
              <button
                onClick={() => triggerGameOver("quit")}
                className="px-4 py-3 bg-red-700 hover:bg-red-800 text-white font-mono text-xs font-bold rounded-lg shadow transition"
              >
                QUIT
              </button>
            </div>

            <div className="relative w-full h-[500px] rounded-2xl border-4 border-[#3A2E22] dark:border-[#444] shadow-2xl overflow-hidden bg-[#222]">
              <div 
                className="absolute inset-0 bg-[#2A2A2A]"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, transparent 33%, #444 33%, #444 35%, transparent 35%),
                    linear-gradient(90deg, transparent 66%, #444 66%, #444 68%, transparent 68%),
                    linear-gradient(0deg, #374151 2px, transparent 2px)
                  `,
                  backgroundSize: "100% 50px",
                }}
              >
                <div className="absolute left-6 top-0 bottom-0 w-3 bg-red-700/80" />
                <div className="absolute right-6 top-0 bottom-0 w-3 bg-red-700/80" />

                {entities.map((ent) => {
                  const leftPos = LANES[ent.lane];
                  return (
                    <div
                      key={ent.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10"
                      style={{ top: `${ent.y}%`, left: `${leftPos}%` }}
                    >
                      {ent.type === "police" && (
                        <div className="px-3 py-1 bg-blue-700 text-white font-mono text-xs rounded border border-blue-400 shadow-lg flex items-center gap-1 animate-pulse">
                          <PiSirenBold className="text-red-500 text-sm" /> 🚓 POLICE
                        </div>
                      )}
                      {ent.type === "roadblock" && (
                        <div className="px-3 py-1 bg-yellow-600 text-white font-mono text-xs rounded border border-yellow-300 shadow-lg">
                          🚧 BARRICADE
                        </div>
                      )}
                      {ent.type === "traffic" && (
                        <div className="px-3 py-1 bg-gray-700 text-white font-mono text-xs rounded border border-gray-500 shadow-lg">
                          🚙 SEDAN
                        </div>
                      )}
                      {ent.type === "evidence" && (
                        <div className="w-10 h-10 rounded-full bg-[#B48947] text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                          📁
                        </div>
                      )}
                    </div>
                  );
                })}

                <div 
                  className="absolute bottom-12 -translate-x-1/2 z-20 flex flex-col items-center transition-all duration-75"
                  style={{ left: `${LANES[lane]}%` }}
                >
                  <div className="px-3 py-1.5 bg-[#1E3A8A] text-white font-mono text-xs rounded-md border-2 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] flex items-center gap-2">
                    <PiSirenBold className="text-red-500 animate-pulse text-base" />
                    <span>INTERCEPTOR</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm p-3 flex items-center justify-between text-white font-mono text-xs z-30">
                <div>
                  <span className="text-gray-400 text-[10px] block">SPEED</span>
                  <span className="text-green-400 font-bold text-base">{Math.round(speed)} km/h</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded border border-white/20"><FaArrowLeft /></span>
                  <span className="px-2 py-1 bg-white/10 rounded border border-white/20"><FaArrowRight /></span>
                  <span className="text-gray-400 text-[10px]">Steer Lanes</span>
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] block">BEST DISTANCE</span>
                  <span className="text-amber-400 font-bold text-base">{bestDistance.toFixed(1)} km</span>
                </div>
              </div>

              <div className="absolute bottom-16 inset-x-4 flex justify-between sm:hidden pointer-events-auto z-30">
                <button 
                  onTouchStart={(e) => {
                    e.preventDefault();
                    if (status === "playing") setLane((prev) => Math.max(0, prev - 1));
                  }}
                  onClick={() => {
                    if (status === "playing") setLane((prev) => Math.max(0, prev - 1));
                  }}
                  className="px-6 py-3 bg-white/20 text-white font-bold rounded-xl border border-white/30 backdrop-blur select-none active:scale-95 transition-transform"
                >
                  ◀ LEFT
                </button>
                <button 
                  onTouchStart={(e) => {
                    e.preventDefault();
                    if (status === "playing") setLane((prev) => Math.min(2, prev + 1));
                  }}
                  onClick={() => {
                    if (status === "playing") setLane((prev) => Math.min(2, prev + 1));
                  }}
                  className="px-6 py-3 bg-white/20 text-white font-bold rounded-xl border border-white/30 backdrop-blur select-none active:scale-95 transition-transform"
                >
                  RIGHT ▶
                </button>
              </div>
            </div>
          </div>
        )}

        {status === "report" && (
          <div className="bg-[#F7F2E9] dark:bg-[#1E1E1E] border-2 border-[#D8CDBA] dark:border-[#333] p-8 sm:p-10 rounded-2xl shadow-2xl max-w-md mx-auto font-mono text-[#1F1F1F] dark:text-gray-200 space-y-6 relative overflow-hidden">
            {isNewRecord && (
              <div className="absolute right-4 top-4 border-4 border-red-700 text-red-700 px-4 py-1 text-xs uppercase tracking-[3px] font-bold rotate-[-8deg] bg-white/80 dark:bg-black/80 shadow">
                NEW RECORD
              </div>
            )}

            <div className="text-center border-b border-[#D8CDBA] dark:border-[#333] pb-3">
              <span className="text-[10px] uppercase tracking-[4px] text-[#B48947] dark:text-[#D4AF37] font-bold">━━━━━━━━━━━━━━━━━━━</span>
              <h3 className="font-serif text-2xl text-[#1F1F1F] dark:text-white mt-1">MISSION REPORT</h3>
              <span className="text-[10px] uppercase tracking-[4px] text-[#B48947] dark:text-[#D4AF37] font-bold">━━━━━━━━━━━━━━━━━━━</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-1">
                <span className="text-gray-600 dark:text-gray-400">Status</span>
                <span className={`font-bold ${endReason === "quit" ? "text-amber-600 dark:text-amber-400" : "text-red-700 dark:text-red-400"}`}>
                  {endReason === "quit" ? "MISSION QUIT" : "MISSION FAILED"}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-1">
                <span className="text-gray-600 dark:text-gray-400">Distance</span>
                <span className="font-bold text-[#1F1F1F] dark:text-white">{distance.toFixed(1)} km</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-1">
                <span className="text-gray-600 dark:text-gray-400">Evidence Recovered</span>
                <span className="font-bold text-[#B48947] dark:text-[#D4AF37]">{evidenceCount}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-1">
                <span className="text-gray-600 dark:text-gray-400">Highest Speed</span>
                <span className="font-bold text-[#1F1F1F] dark:text-white">{highestSpeed} km/h</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-1">
                <span className="text-gray-600 dark:text-gray-400">Collisions</span>
                <span className="font-bold text-red-600 dark:text-red-400">{collisionsCount}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-gray-600 dark:text-gray-400">Rank</span>
                <span className="font-bold text-[#B48947] dark:text-[#D4AF37]">Senior Detective</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={startOperationSequence}
                className="flex-1 py-3 bg-[#2F4F46] dark:bg-[#3B6359] text-white rounded-xl font-medium text-xs uppercase tracking-wider hover:bg-[#234039] dark:hover:bg-[#2F4F46] transition shadow"
              >
                Retry Mission
              </button>
              <button
                onClick={() => setStatus("briefing")}
                className="flex-1 py-3 bg-[#EFE8DC] dark:bg-[#252525] border border-[#D8CDBA] dark:border-[#333] text-[#1F1F1F] dark:text-gray-200 rounded-xl font-medium text-xs uppercase tracking-wider hover:border-[#B48947] transition shadow-sm"
              >
                Return to Portfolio
              </button>
            </div>
          </div>
        )}

        <Reveal delay={0.3}>
          <div className="mt-20 max-w-3xl mx-auto bg-[#F7F2E9] dark:bg-[#1E1E1E] border-2 border-[#D8CDBA] dark:border-[#333] hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-[3px] text-[#B48947] dark:text-[#D4AF37] font-bold">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
              <h3 className="font-serif text-2xl text-[#1F1F1F] dark:text-white mt-1">TECHNICAL BREAKDOWN</h3>
              <span className="text-xs uppercase tracking-[3px] text-[#B48947] dark:text-[#D4AF37] font-bold">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              {[
                "Canvas Rendering",
                "Game Loop",
                "Collision Detection",
                "Object Pooling",
                "Keyboard Controls",
                "Responsive Mobile Controls",
                "Local Storage",
                "High Score System",
                "Physics Calculations",
                "Animation Engine"
              ].map((tech, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#EFE8DC] dark:bg-[#252525] p-3 rounded-xl border border-[#D8CDBA] dark:border-[#333] hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all cursor-pointer text-center text-[#1F1F1F] dark:text-gray-200 font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B48947] dark:bg-[#D4AF37]" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}