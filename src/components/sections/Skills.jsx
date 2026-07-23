import { motion } from "framer-motion";
import frontend from "../../assets/images/frontend.jpg";
import backend from "../../assets/images/backend.jpg";
import analyst from "../../assets/images/analyst.jpg";
import doodles from "../../assets/images/doodles.jpg";
import TypewriterHeading from "../ui/TypewriterHeading";
import Reveal from "../ui/Reveal";

export default function Skills() {
  const sections = [
    {
      title: "Frontend Development",
      label: "Exhibit A",
      badgeText: "Primary Specialty",
      badgeColor: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/30",
      image: frontend,
      exhibitNo: "EXHIBIT-01-FE",
      stats: { cases: "12 Projects", level: "Advanced", status: "Verified" },
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "HTML5 / CSS3", level: 92 },
        { name: "Responsive UI", level: 94 },
      ],
    },
    {
      title: "Backend Development",
      label: "Exhibit B",
      badgeText: "Growing Expertise",
      badgeColor: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30",
      image: backend,
      exhibitNo: "EXHIBIT-02-BE",
      stats: { cases: "8 Projects", level: "Intermediate", status: "Verified" },
      skills: [
        { name: "Python", level: 88 },
        { name: "FastAPI", level: 85 },
        { name: "REST APIs", level: 86 },
        { name: "SQL & Databases", level: 80 },
        { name: "Git & GitHub", level: 90 },
      ],
    },
    {
      title: "Data Analysis",
      label: "Exhibit C",
      badgeText: "Supporting Skill",
      badgeColor: "bg-[#00bcd4]/10 text-[#00bcd4] border-[#00bcd4]/30",
      image: analyst,
      exhibitNo: "EXHIBIT-03-DA",
      stats: { cases: "6 Dashboards", level: "Proficient", status: "Verified" },
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Data Visualization", level: 88 },
        { name: "Data Cleaning", level: 82 },
        { name: "Excel Analytics", level: 85 },
        { name: "Problem Solving", level: 95 },
      ],
    },
  ];

  const toolbox = [
    "VS Code",
    "Git",
    "GitHub",
    "Figma",
    "Power BI",
    "Postman",
    "Vercel",
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--bg-main)] py-20 sm:py-28 lg:py-36 isolate transition-colors duration-300"
    >
      {/* Background Elements with Dark Mode Doodles support */}
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
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-20">

        {/* Premium Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-[var(--border-color)] pb-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />
              <p className="uppercase tracking-[8px] text-[var(--accent)] text-xs sm:text-sm font-semibold">
                Case File 003 — Recovered Technologies
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded border border-[var(--accent)] text-[var(--accent)] text-[10px] sm:text-xs uppercase tracking-[2px] bg-[var(--color-surface)]">
                File ID: HH-2026-003
              </span>
              <span className="px-3 py-1 rounded bg-green-600 text-white text-[10px] sm:text-xs uppercase tracking-[2px] font-bold shadow-sm">
                Investigation Active
              </span>
            </div>
          </div>

          <TypewriterHeading
            text="Evidence Board"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--color-ink)] mb-4"
          />
          <p className="text-[var(--color-ink-soft)] text-base sm:text-lg max-w-2xl leading-relaxed">
            Detailed breakdown of technical assets, specialized skill proficiencies, and evidentiary records collected throughout active development operations.
          </p>
        </div>

        {/* Skill Cards Grid - Equal height cards using flex */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.15} className="flex">
              <motion.div 
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col w-full bg-[var(--card-bg)] border-2 border-[var(--border-color)] shadow-xl p-6 sm:p-8 rounded-lg hover:border-[var(--primary)] hover:shadow-[0_0_25px_var(--primary)] transition-all duration-300 group"
              >
                {/* Floating Handwritten Element Tag */}
                <div className="absolute -right-3 -top-3 z-30 bg-[var(--accent)] text-[var(--bg-main)] text-[10px] uppercase font-bold tracking-[2px] px-2.5 py-1 rounded shadow-sm rotate-3">
                  Recovered
                </div>

                {/* Tape */}
                <div className="absolute -top-4 left-8 w-24 h-7 bg-yellow-200/80 dark:bg-yellow-600/35 rotate-[-6deg] border border-yellow-300/50 shadow-sm z-20" />

                {/* Better Image Area */}
                <div className="relative border border-[var(--border-color)] bg-[var(--color-surface)] p-3 shadow-inner mb-6 sm:mb-8 rounded">
                  <div className="absolute inset-0 bg-black/5 rounded pointer-events-none" />
                  
                  <div className="absolute left-4 top-4 bg-[var(--card-bg)]/90 border border-[var(--border-color)] px-2 py-0.5 text-[10px] font-mono tracking-wider text-[var(--color-ink)] z-10 shadow-sm">
                    {section.exhibitNo}
                  </div>

                  <div className="absolute right-4 bottom-4 rotate-[-12deg] border-2 border-red-700 text-red-700 px-2 py-0.5 text-[9px] tracking-[2px] font-bold opacity-75 uppercase z-10 pointer-events-none">
                    VERIFIED
                  </div>

                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-40 sm:h-48 object-cover rounded filter grayscale brightness-95 group-hover:grayscale-0 transition-all duration-500"
                  />
                  
                  <p 
                    className="absolute right-3 -bottom-3 text-xl text-[var(--color-ink)] rotate-[4deg] pointer-events-none font-serif italic opacity-85"
                  >
                    Exhibit analyzed ✓
                  </p>
                </div>

                {/* Header with Colored Importance Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="uppercase tracking-[4px] text-xs text-[var(--accent)] font-semibold">
                    {section.label}
                  </p>
                  <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border ${section.badgeColor}`}>
                    {section.badgeText}
                  </span>
                </div>

                <h3 className="font-serif text-[var(--color-ink)] text-2xl sm:text-3xl mb-6">
                  {section.title}
                </h3>

                {/* Skill Proficiency Bars */}
                <div className="space-y-4 mb-8 flex-grow">
                  {section.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-[var(--color-ink)]">{skill.name}</span>
                        <span className="text-[var(--primary)] font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[var(--color-surface)] rounded-full h-2 overflow-hidden border border-[var(--border-color)]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="bg-[var(--primary)] h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Evidence Statistics Box at the Bottom of Card */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-dashed border-[var(--border-color)] bg-[var(--color-surface)]/40 p-3 rounded-lg text-center mt-auto">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold">Cases</p>
                    <p className="text-xs font-bold text-[var(--color-ink)] mt-0.5">{section.stats.cases}</p>
                  </div>
                  <div className="border-x border-[var(--border-color)]">
                    <p className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold">Level</p>
                    <p className="text-xs font-bold text-[var(--color-ink)] mt-0.5">{section.stats.level}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold">Status</p>
                    <p className="text-xs font-bold text-green-600 dark:text-green-400 mt-0.5">{section.stats.status}</p>
                  </div>
                </div>

              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Toolbox Section */}
        <Reveal delay={0.3}>
          <div className="mt-16 sm:mt-20 border border-[var(--border-color)] hover:border-[var(--primary)] transition-colors duration-300 bg-[var(--color-surface)]/40 p-6 sm:p-8 rounded-xl shadow-sm backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 px-4 py-1 bg-[var(--accent)] text-[var(--bg-main)] text-[10px] uppercase tracking-[3px] font-bold rounded-br-xl">
              Secondary Equipment
            </div>
            
            <h4 className="font-serif text-xl sm:text-2xl text-[var(--color-ink)] mb-4 mt-2">
              Recovered Tools & Utilities
            </h4>
            <p className="text-[var(--color-ink-soft)] text-xs sm:text-sm mb-6 max-w-2xl">
              Supplementary applications and version control instruments utilized during development workflows.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {toolbox.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] text-xs sm:text-sm font-medium text-[var(--color-ink)] shadow-sm hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-main)] transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Investigation Notes / Case Note Box */}
        <Reveal delay={0.4}>
          <div className="mt-10 sm:mt-12 border-2 border-[var(--accent)]/60 hover:border-[var(--primary)] transition-colors duration-300 bg-[var(--color-surface)]/60 rounded-2xl p-6 sm:p-10 shadow-lg relative">
            <div className="absolute top-0 right-0 px-4 py-1 bg-[var(--primary)] text-[var(--bg-main)] text-[10px] uppercase tracking-[3px] font-bold rounded-bl-xl">
              Official Assessment
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-[var(--color-ink)] mb-4">
              Investigator's Notes
            </h4>

            <p className="text-[var(--color-ink-soft)] text-sm sm:text-base leading-relaxed max-w-4xl mb-6">
              Subject demonstrates strong frontend expertise, a growing backend foundation, and practical experience in data analytics. Fully capable of tackling complex technical structures and executing end-to-end full-stack architectures.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border-color)]">
              <div>
                <span className="text-xs uppercase tracking-[2px] text-[var(--accent)] font-semibold block">Final Evaluation Status</span>
                <span className="text-lg font-bold text-[var(--primary)] mt-0.5 block">Highly Recommended</span>
              </div>
              <div 
                className="text-2xl sm:text-3xl text-[var(--color-ink)] rotate-[-2deg] font-serif italic opacity-90"
              >
                Every solved problem leaves behind a new skill.
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}