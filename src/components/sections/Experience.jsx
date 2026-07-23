import { motion } from "framer-motion";
import web from "../../assets/images/web.jpg";
import dashboard from "../../assets/images/dashboard.jpg";
import doodles from "../../assets/images/doodles.jpg";
import TypewriterHeading from "../ui/TypewriterHeading";
import Reveal from "../ui/Reveal";

export default function Experience() {
  const experiences = [
    {
      id: "001",
      title: "Frontend Web Developer",
      company: "Redline Intelligence",
      duration: "2025 – Present",
      type: "Freelance • Upwork",
      status: "VERIFIED",
      classification: "Verified",
      accessLevel: "Public",
      image: web,
      missions: [
        "Built responsive websites with modern architecture.",
        "Improved UX and mobile responsiveness.",
        "Optimized client-side web performance.",
        "Collaborated with international clients.",
        "Maintained production quality standards."
      ],
      metrics: {
        projects: "12+",
        satisfaction: "100%",
        performance: "95+",
        techCount: "8"
      },
      evidence: ["REACT", "FASTAPI", "TAILWIND", "API", "FRAMER", "JS", "HTML", "CSS"],
      notes: "“Excellent UI attention and strong frontend execution.”"
    },
    {
      id: "002",
      title: "Dashboard Builder / Data Analyst",
      company: "Redline Intelligence",
      duration: "2025 – Present",
      type: "Freelance • Upwork",
      status: "TOP SECRET",
      classification: "Confidential",
      accessLevel: "Restricted",
      image: dashboard,
      missions: [
        "Designed interactive analytical reports.",
        "Converted raw datasets into business KPIs.",
        "Streamlined operational data visualization.",
        "Empowered data-driven client decisions.",
        "Built dynamic executive dashboards."
      ],
      metrics: {
        projects: "8+",
        satisfaction: "100%",
        performance: "98+",
        techCount: "5"
      },
      evidence: ["POWER BI", "EXCEL", "DATA VIZ", "ANALYTICS", "SQL"],
      notes: "“Rigorous data organization and deep analytical insights.”"
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-paper py-36 isolate"
    >
      {/* Background Elements */}
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">

        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-border pb-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brass" />
            <p className="uppercase tracking-[8px] text-brass text-xs sm:text-sm font-semibold">
              Case File 005 — Personnel Records
            </p>
          </div>
          <span className="px-3 py-1 rounded bg-green-700 text-white text-[10px] uppercase tracking-[2px] font-bold shadow-sm">
            ACTIVE ARCHIVE
          </span>
        </div>

        <TypewriterHeading
          text="Employment Records"
          className="font-serif text-5xl sm:text-6xl text-ink mb-16"
        />

        <div className="space-y-24 relative">
          {experiences.map((job, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={job.id} className="relative">
                {/* Connection Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-1/2 -bottom-24 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none hidden lg:flex">
                    <span className="w-2 h-2 rounded-full bg-brass mb-2 shadow" />
                    <span className="w-0.5 h-20 bg-dashed border-l-2 border-dotted border-brass/60" />
                    <span className="w-2 h-2 rounded-full bg-brass mt-2 shadow" />
                  </div>
                )}

                <Reveal delay={index * 0.15}>
                  <motion.div 
                    whileHover={{ scale: 1.01, rotate: isEven ? 0.5 : -0.5, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`relative bg-paper border-2 border-border p-8 sm:p-12 rounded-2xl shadow-xl hover:border-[#00bcd4] hover:shadow-[0_0_35px_rgba(0,188,212,0.25)] transition-all duration-500 overflow-hidden ${isEven ? 'rotate-[-0.5deg]' : 'rotate-[0.5deg]'}`}
                  >
                    {/* Faded Background Confidential Stamp */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
                      <span className="font-serif text-8xl sm:text-9xl uppercase tracking-[20px] font-extrabold text-ink">
                        CLASSIFIED
                      </span>
                    </div>

                    {/* Tape Element */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-7 bg-yellow-200/80 rotate-[-2deg] border border-yellow-300/50 shadow-sm z-20" />

                    {/* Status Stamp */}
                    <div className="absolute right-6 top-6 rotate-[-10deg] border-2 border-red-700 text-red-700 px-3 py-1 text-xs tracking-[3px] font-bold opacity-80 uppercase z-20 pointer-events-none">
                      {job.status}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
                      
                      {/* Left Side: Cinematic Wide Image & Side Labels */}
                      <div className="lg:col-span-5 space-y-6">
                        <div className="relative border-2 border-border bg-ink p-2 rounded-xl shadow-inner group">
                          <img
                            src={job.image}
                            alt={job.title}
                            className="w-full h-64 sm:h-72 object-cover rounded-lg filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                          />
                          <div className="absolute bottom-4 left-4 bg-paper/90 border border-border px-3 py-1 text-xs font-mono text-ink shadow-sm">
                            EMPLOYEE RECORD #{job.id}
                          </div>
                        </div>

                        {/* Side Labels Box */}
                        <div className="bg-paperDark/60 p-4 rounded-xl border border-border space-y-2 text-xs font-mono">
                          <div className="flex justify-between">
                            <span className="text-inkSoft">CASE ID:</span>
                            <span className="font-bold text-ink">005-{job.id}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-inkSoft">CLASSIFICATION:</span>
                            <span className="font-bold text-ink">{job.classification}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-inkSoft">ACCESS LEVEL:</span>
                            <span className="font-bold text-ink">{job.accessLevel}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-inkSoft">LAST UPDATED:</span>
                            <span className="font-bold text-ink">2026</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Rich Company Metadata & Breakdown */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="uppercase tracking-[5px] text-brass text-xs font-semibold">
                            EMPLOYMENT RECORD #{job.id}
                          </span>
                          <span className="px-2.5 py-0.5 rounded bg-green-500/10 text-green-700 border border-green-500/30 text-[10px] uppercase font-bold tracking-wider">
                            ● 2025-PRESENT (Active)
                          </span>
                        </div>

                        <h3 className="font-serif text-3xl sm:text-4xl text-ink">
                          {job.title}
                        </h3>

                        {/* Company Information Block */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-paperDark/60 p-4 rounded-xl border border-border text-xs">
                          <div>
                            <span className="block text-[10px] uppercase tracking-wider text-brass font-semibold">Company</span>
                            <span className="font-bold text-ink text-sm mt-0.5 block">{job.company}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] uppercase tracking-wider text-brass font-semibold">Role Type</span>
                            <span className="font-bold text-ink text-sm mt-0.5 block">{job.type}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] uppercase tracking-wider text-brass font-semibold">Duration</span>
                            <span className="font-bold text-ink text-sm mt-0.5 block">{job.duration}</span>
                          </div>
                        </div>

                        {/* Broken Mission Summary */}
                        <div className="space-y-2 border-l-2 border-forest pl-4">
                          <span className="text-xs uppercase tracking-[2px] text-brass font-bold block mb-1">Investigation Summary</span>
                          {job.missions.map((mission, idx) => (
                            <p key={idx} className="text-inkSoft text-sm sm:text-base leading-relaxed">
                              • {mission}
                            </p>
                          ))}
                        </div>

                        {/* Evidence Tags (Stamps) */}
                        <div className="space-y-2">
                          <span className="text-xs uppercase tracking-[2px] text-brass font-bold block">Evidence Collected</span>
                          <div className="flex flex-wrap gap-2">
                            {job.evidence.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded bg-paperDark/80 border border-border text-[10px] font-mono tracking-wider font-bold text-forest shadow-sm uppercase"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project Statistics / Mini Cards */}
                        <div className="grid grid-cols-4 gap-2 pt-2">
                          <div className="bg-paperDark/60 p-3 rounded-lg border border-border text-center">
                            <span className="block text-[9px] uppercase tracking-wider text-inkSoft font-semibold">Projects</span>
                            <span className="text-sm font-bold text-ink">{job.metrics.projects}</span>
                          </div>
                          <div className="bg-paperDark/60 p-3 rounded-lg border border-border text-center">
                            <span className="block text-[9px] uppercase tracking-wider text-inkSoft font-semibold">Satisfaction</span>
                            <span className="text-sm font-bold text-ink">{job.metrics.satisfaction}</span>
                          </div>
                          <div className="bg-paperDark/60 p-3 rounded-lg border border-border text-center">
                            <span className="block text-[9px] uppercase tracking-wider text-inkSoft font-semibold">Performance</span>
                            <span className="text-sm font-bold text-ink">{job.metrics.performance}</span>
                          </div>
                          <div className="bg-paperDark/60 p-3 rounded-lg border border-border text-center">
                            <span className="block text-[9px] uppercase tracking-wider text-inkSoft font-semibold">Tech Stack</span>
                            <span className="text-sm font-bold text-ink">{job.metrics.techCount}</span>
                          </div>
                        </div>

                        {/* Small Handwritten Detective Note */}
                        <div 
                          className="text-lg text-forest pt-2"
                          style={{ fontFamily: "'Caveat', cursive" }}
                        >
                          {job.notes}
                        </div>

                      </div>

                    </div>
                  </motion.div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Final CTA Section */}
        <Reveal delay={0.3}>
          <div className="mt-24 border-2 border-dashed border-brass/60 bg-paper rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
            <div className="absolute right-10 top-1/2 -translate-y-1/2 rotate-[-12deg] border-4 border-red-700 text-red-700 px-6 py-3 text-2xl sm:text-3xl tracking-[6px] font-extrabold opacity-80 uppercase pointer-events-none">
              VERIFIED SECURE
            </div>
            <h4 className="font-serif text-3xl sm:text-4xl text-ink mb-3">
              Want to work together?
            </h4>
            <p className="text-inkSoft text-sm sm:text-base max-w-xl mx-auto mb-6">
              Open a new investigation or get in touch for upcoming collaborations and full-stack projects.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-forest text-paper font-medium hover:bg-[#00bcd4] hover:text-white transition-all shadow-md text-sm uppercase tracking-wider"
              >
                Open New Investigation →
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-paperDark border border-border text-ink font-medium hover:border-brass transition-all shadow-sm text-sm uppercase tracking-wider"
              >
                Contact Me
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}