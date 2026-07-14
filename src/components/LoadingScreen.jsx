import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import paper from "../assets/images/paper.jpg";
import doodles from "../assets/images/doodles.jpg";

function LoadingScreen({ onFinish }) {
  const [stage, setStage] = useState("enter"); // enter -> strike -> stamped -> exit

  useEffect(() => {
    const t1 = setTimeout(() => setStage("strike"), 600);
    const t2 = setTimeout(() => setStage("stamped"), 950);
    const t3 = setTimeout(() => setStage("exit"), 2100);
    const t4 = setTimeout(() => onFinish?.(), 2800);

    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
    };
  }, [onFinish]);

  return (
    <motion.div
      animate={{ y: stage === "exit" ? "-100%" : 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] overflow-hidden"
    >
      {/* Paper texture as the full background/stage */}
      <img
        src={paper}
        alt=""
        className="absolute inset-0 w-full h-full object-cover select-none"
        draggable={false}
      />

      {/* Same tiled doodle pattern used across Hero / Projects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${doodles})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1000px",
          backgroundPosition: "center",
          opacity: 0.35,
        }}
      />

      {/* Subtle dark vignette so the stamp reads clearly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, rgba(0,0,0,.25) 100%)",
        }}
      />

      <div className="relative w-full h-full flex items-center justify-center">
        {/* Red stamp mark - custom SVG, appears on impact */}
        <AnimatePresence>
          {(stage === "stamped" || stage === "exit") && (
            <motion.svg
              key="red-stamp"
              initial={{ opacity: 0, scale: 1.5, rotate: 4 }}
              animate={{ opacity: 0.88, scale: 1, rotate: -8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              width="260"
              height="260"
              viewBox="0 0 260 260"
              className="absolute pointer-events-none"
            >
              <circle
                cx="130"
                cy="130"
                r="105"
                fill="none"
                stroke="#a11d1d"
                strokeWidth="6"
                strokeDasharray="14 6"
              />
              <circle
                cx="130"
                cy="130"
                r="88"
                fill="none"
                stroke="#a11d1d"
                strokeWidth="2"
              />
              <text
                x="130"
                y="118"
                textAnchor="middle"
                fill="#a11d1d"
                fontFamily="Fraunces, serif"
                fontWeight="700"
                fontSize="28"
                letterSpacing="2"
              >
                CASE FILE
              </text>
              <text
                x="130"
                y="156"
                textAnchor="middle"
                fill="#a11d1d"
                fontFamily="Fraunces, serif"
                fontWeight="700"
                fontSize="30"
                letterSpacing="3"
              >
                OPENED
              </text>
              <line x1="45" y1="130" x2="215" y2="130" stroke="#a11d1d" strokeWidth="1.5" />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Wooden stamp striking down - bigger, darker */}
        <motion.div
          initial={{ y: -500, opacity: 0, rotate: -4 }}
          animate={
            stage === "enter"
              ? { y: -500, opacity: 0, rotate: -4 }
              : stage === "strike"
              ? { y: -8, opacity: 1, rotate: 2 }
              : { y: -420, opacity: 1, rotate: -6 }
          }
          transition={{
            duration: stage === "strike" ? 0.24 : 0.45,
            ease: stage === "strike" ? "easeIn" : "easeOut",
          }}
          className="absolute flex flex-col items-center pointer-events-none"
          style={{ transformOrigin: "center bottom" }}
        >
          {/* handle knob */}
          <div
            className="w-14 h-14 rounded-full shadow-lg"
            style={{ background: "radial-gradient(circle at 35% 30%, #6b4423, #3f280f)" }}
          />
          {/* handle neck */}
          <div
            className="w-6 h-16 -mt-1"
            style={{ background: "linear-gradient(to right, #3f280f, #5c3a17, #3f280f)" }}
          />
          {/* red stamp head */}
          <div
            className="w-36 h-14 rounded-sm shadow-2xl"
            style={{ background: "linear-gradient(to bottom, #5c1414, #3d0d0d)" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;