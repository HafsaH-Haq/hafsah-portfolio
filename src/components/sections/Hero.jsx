import { useState } from "react";
import { motion } from "framer-motion";

import profile from "../../assets/images/profile.png";
import doodles from "../../assets/images/doodles.jpg";
import TypewriterHeading from "../ui/TypewriterHeading";

const techStack = [
  "React",
  "FastAPI",
  "Python",
  "Tailwind CSS",
  "Power BI",
  "JavaScript",
];

const stats = [
  { value: "10+", label: "Cases Solved" },
  { value: "React", label: "Primary Stack" },
  { value: "FastAPI", label: "Backend" },
  { value: "24/7", label: "Available" },
];

const dossierInfo = [
  { title: "FILE NO.", value: "HH-2026-001" },
  { title: "STATUS", value: "ACTIVE" },
  { title: "LOCATION", value: "PAKISTAN" },
  { title: "CLEARANCE", value: "PUBLIC" },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero() {
  const [nameDone, setNameDone] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[var(--bg-main)] pt-24 pb-16 flex items-center isolate overflow-hidden transition-colors duration-300"
    >
      {/* Background Doodles with increased opacity in dark mode */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 dark:opacity-30 dark:invert"
        style={{
          backgroundImage: `url(${doodles})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1000px",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* ================= LEFT SIDE (7 Cols) ================= */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          className="relative z-20 order-2 lg:order-1 lg:col-span-7"
        >
          {/* Confidential Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="h-px w-10 bg-[var(--accent)]" />
            <p className="uppercase tracking-[6px] text-[var(--accent)] text-xs font-semibold">
              Confidential Dossier
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[var(--color-ink-soft)] uppercase tracking-[3px] text-xs font-medium"
          >
            Subject Identification
          </motion.p>

          {/* Name */}
          <div className="mt-3">
            <TypewriterHeading
              as="h1"
              text={"Hafsah\nHaq"}
              className="font-serif text-5xl sm:text-6xl lg:text-[75px] leading-[0.9] text-[var(--color-ink)]"
              onDone={() => setNameDone(true)}
            />
          </div>

          {/* Profession */}
          <div className="mt-4">
            <TypewriterHeading
              as="h2"
              text={"Full Stack Developer"}
              startWhen={nameDone}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[var(--primary)] leading-tight"
            />
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="h-[2px] bg-[var(--accent)] my-5"
          />

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-soft)] max-w-xl"
          >
            I design and develop premium digital experiences with a strong focus on clean architecture, 
            modern interactions, and timeless visual design. Specializing in{" "}
            <span className="text-[var(--primary)] font-semibold">React</span>,{" "}
            <span className="text-[var(--primary)] font-semibold">FastAPI</span>, and{" "}
            <span className="text-[var(--primary)] font-semibold">Python</span>.
          </motion.p>

          {/* Dossier Info Grid with Theme Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
          >
            {dossierInfo.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="border border-[var(--border-color)] bg-[var(--color-surface)]/50 rounded-lg p-3 backdrop-blur-sm cursor-pointer hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:shadow-md transition-all group"
              >
                <p className="text-[10px] uppercase tracking-[2px] text-[var(--accent)] font-medium group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </p>
                <p className="mt-1 text-sm font-bold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {techStack.map((item) => (
              <motion.span
                key={item}
                whileHover={{ y: -2, scale: 1.03 }}
                className="px-3.5 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-xs font-medium text-[var(--primary)] shadow-sm hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-main)] transition-all cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* Status Availability Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-[var(--primary)]">
              Available for Freelance & Internships
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl bg-[var(--primary)] px-6 py-3 text-sm text-[var(--bg-main)] font-medium shadow-lg transition-all flex items-center gap-2 group hover:bg-[var(--accent)] hover:text-[var(--bg-main)]"
            >
              Open Case File
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/70 px-6 py-3 text-sm text-[var(--color-ink)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-main)] transition-all"
            >
              Resume ↗
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl border border-[var(--accent)] px-6 py-3 text-sm text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-main)] hover:shadow-lg transition-all"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Compact Stats Row with Theme Hover Effects */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-xl">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/70 p-3.5 shadow-sm cursor-pointer hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:shadow-md transition-all group"
              >
                <h4 className="text-xl font-bold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">{item.value}</h4>
                <p className="text-xs text-[var(--color-ink-soft)] mt-0.5 group-hover:text-[var(--primary)] transition-colors">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE (5 Cols) ================= */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center order-1 lg:order-2 lg:col-span-5"
        >
          {/* Glow Behind */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-[var(--accent)]/15 blur-[100px]" />

          {/* Main Evidence Card with Complete Theme Boundary Highlight on Hover */}
          <motion.div
            whileHover={{ y: -5, rotate: -0.5 }}
            transition={{ duration: 0.3 }}
            className="relative z-20 w-[300px] sm:w-[360px] bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-2xl overflow-hidden rounded-lg hover:border-[var(--accent)] hover:shadow-[0_0_25px_var(--accent)] transition-all duration-300 group/card"
          >
            {/* Top Tape */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-32 h-8 rotate-[-4deg] bg-yellow-200/80 dark:bg-yellow-600/35 border border-yellow-300/50 shadow-sm" />

            {/* Confidential Stamp */}
            <div className="absolute right-4 top-4 rotate-12 border-2 border-red-700 text-red-700 px-2.5 py-0.5 text-[10px] tracking-[3px] font-bold opacity-70">
              VERIFIED
            </div>

            {/* Photo */}
            <div className="m-4 border border-[var(--border-color)] rounded overflow-hidden group-hover/card:border-[var(--accent)]/60 transition-colors duration-300">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                src={profile}
                alt="Hafsah Haq"
                className="w-full h-[260px] sm:h-[320px] object-cover filter grayscale brightness-95 group-hover/card:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Information inside card */}
            <div className="px-5 pb-6">
              <p className="uppercase tracking-[4px] text-[var(--accent)] text-[10px] font-semibold">
                Subject Information
              </p>
              <h3 className="font-serif text-2xl mt-1 text-[var(--color-ink)]">
                Hafsah Haq
              </h3>
              <p className="text-[var(--primary)] text-sm font-medium">
                Full Stack Developer
              </p>

              <div className="mt-4 border-t border-dashed border-[var(--border-color)] pt-3 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[var(--color-ink-soft)]">Status</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-ink-soft)]">Specialization</span>
                  <span className="text-[var(--color-ink)]">React + FastAPI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-ink-soft)]">Location</span>
                  <span className="text-[var(--color-ink)]">Karachi, PK</span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;