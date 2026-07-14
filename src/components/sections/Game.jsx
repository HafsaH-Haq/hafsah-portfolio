import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiSirenBold } from "react-icons/pi";
import doodles from "../../assets/images/doodles.jpg";
import TypewriterHeading from "../ui/TypewriterHeading";
import Reveal from "../ui/Reveal";

const GAME_LENGTH = 30; // seconds
const SPAWN_INTERVAL = 850; // ms between spawns
const CLUE_LIFETIME = 1500; // ms a clue stays before vanishing
const HERRING_CHANCE = 0.3;

function randomPosition() {
  return {
    top: 12 + Math.random() * 66,
    left: 8 + Math.random() * 84,
  };
}

export default function Game() {
  const [status, setStatus] = useState("idle"); // idle | playing | ended
  const [timeLeft, setTimeLeft] = useState(GAME_LENGTH);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [items, setItems] = useState([]);

  const spawnTimer = useRef(null);
  const countdownTimer = useRef(null);
  const idCounter = useRef(0);
  const scoreRef = useRef(0);

  useEffect(() => {
    const stored = Number(localStorage.getItem("caseFileBestScore") || 0);
    setBest(stored);
  }, []);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  const clearTimers = useCallback(() => {
    clearInterval(spawnTimer.current);
    clearInterval(countdownTimer.current);
  }, []);

  const endGame = useCallback(
    (finalScore) => {
      clearTimers();
      setStatus("ended");
      setItems([]);
      setBest((prevBest) => {
        if (finalScore > prevBest) {
          localStorage.setItem("caseFileBestScore", String(finalScore));
          return finalScore;
        }
        return prevBest;
      });
    },
    [clearTimers]
  );

  const spawnItem = useCallback(() => {
    const id = idCounter.current++;
    const isHerring = Math.random() < HERRING_CHANCE;
    const pos = randomPosition();

    setItems((prev) => [...prev, { id, isHerring, ...pos }]);

    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }, CLUE_LIFETIME);
  }, []);

  const startGame = () => {
    clearTimers();
    setScore(0);
    setTimeLeft(GAME_LENGTH);
    setItems([]);
    setStatus("playing");

    spawnTimer.current = setInterval(spawnItem, SPAWN_INTERVAL);

    countdownTimer.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          endGame(scoreRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => () => clearTimers(), [clearTimers]);

  const handleItemClick = (item) => {
    setItems((prev) => prev.filter((i) => i.id !== item.id));
    setScore((prev) => Math.max(0, prev + (item.isHerring ? -5 : 10)));
  };

  return (
    <section id="game" className="relative overflow-hidden bg-paper py-36">
      {/* Background Doodles - matches Hero / Projects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${doodles})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1000px",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-20">
        <p className="uppercase tracking-[8px] text-brass text-sm mb-5">
          Case File 006
        </p>

        <TypewriterHeading
          text="Crack the Case"
          className="font-heading text-6xl text-ink mb-6"
        />

        <Reveal>
          <p className="text-inkSoft text-lg max-w-2xl mb-16 leading-8">
            Clues are scattered across the evidence board and won't stay long.
            Click each <span className="text-forest font-medium">magnifying glass</span> before
            it disappears. Watch out for <span className="text-stamp font-medium">red herrings</span>,
            they'll cost you points.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="border border-border bg-paperDark px-6 py-3 rounded-lg">
              <p className="text-xs uppercase tracking-[3px] text-inkSoft mb-1">Score</p>
              <p className="font-heading text-3xl text-forest">{score}</p>
            </div>

            <div className="border border-border bg-paperDark px-6 py-3 rounded-lg">
              <p className="text-xs uppercase tracking-[3px] text-inkSoft mb-1">Best</p>
              <p className="font-heading text-3xl text-brass">{best}</p>
            </div>

            <div className="border border-border bg-paperDark px-6 py-3 rounded-lg">
              <p className="text-xs uppercase tracking-[3px] text-inkSoft mb-1">Time Left</p>
              <p className="font-heading text-3xl text-ink">{timeLeft}s</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div
            className="relative w-full h-[460px] rounded-2xl border-2 border-[#5C4633] shadow-2xl overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, #7a5c42, #5c4430 70%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(0,0,0,.35) 1px, transparent 1px)",
                backgroundSize: "6px 6px",
              }}
            />

            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-red-700 shadow" />
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-red-700 shadow" />
            <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-red-700 shadow" />
            <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-red-700 shadow" />

            <AnimatePresence>
              {status === "playing" &&
                items.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    initial={{ scale: 0, opacity: 0, rotate: -8 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ top: `${item.top}%`, left: `${item.left}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-2
                      ${
                        item.isHerring
                          ? "bg-[#7a1f1f] border-red-900 text-paper"
                          : "bg-paper border-brass text-forest"
                      }`}
                  >
                    {item.isHerring ? (
                      <PiSirenBold className="text-2xl" />
                    ) : (
                      <FaMagnifyingGlass className="text-xl" />
                    )}
                  </motion.button>
                ))}
            </AnimatePresence>

            {status === "idle" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/50 backdrop-blur-sm">
                <p className="font-doodle text-4xl text-paper">
                  Ready to investigate?
                </p>
                <button
                  onClick={startGame}
                  className="px-8 py-4 bg-brass text-ink font-medium rounded-lg shadow-lg hover:bg-[#a17838] transition"
                >
                  Begin Investigation
                </button>
              </div>
            )}

            {status === "ended" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 1.6, opacity: 0, rotate: -12 }}
                  animate={{ scale: 1, opacity: 1, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="border-4 border-red-700 text-red-700 uppercase tracking-[4px] font-heading text-3xl px-8 py-3 rounded"
                >
                  Case Solved
                </motion.div>

                <p className="text-paper text-lg">
                  Final Score: <span className="font-semibold">{score}</span>
                </p>

                <button
                  onClick={startGame}
                  className="px-8 py-4 bg-forest text-paper font-medium rounded-lg shadow-lg hover:bg-[#24423A] transition"
                >
                  Investigate Again
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}