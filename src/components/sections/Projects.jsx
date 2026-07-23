import { useState } from "react";
import { motion } from "framer-motion";
import lumen from "../../assets/images/lumen.jpg";
import oak from "../../assets/images/oak.jpg";
import theatre from "../../assets/images/theatre.jpg";
import dungeon from "../../assets/images/dungeon.jpg";
import airport from "../../assets/images/airport.jpg";
import oil from "../../assets/images/oil.jpg";
import doodles from "../../assets/images/doodles.jpg";
import TypewriterHeading from "../ui/TypewriterHeading";
import Reveal from "../ui/Reveal";

const projects = [
  {
    id: "001",
    title: "LUMEN",
    category: "Frontend Development",
    image: lumen,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Responsive"],
    story:
    "LUMEN is a modern web experience focused on elegant UI design, smooth animations, and responsive layouts. The project demonstrates clean component architecture, reusable React components, and attention to user experience while maintaining excellent performance across all screen sizes.",
    difficulty: "★★★★★",
    complexity: "Advanced",
    status: "Closed",
    stats: { files: "24", components: "61", animations: "18", weeks: "4" },
    notes: "One of the strongest UI projects, demonstrating advanced animation and responsive layouts.",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: "002",
    title: "Oak & Stream",
    category: "Frontend Development",
    image: oak,
    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive", "Dark Mode"],
    story:
    "Oak & Stream is a luxury café website designed to create a premium online identity. It features elegant typography, immersive layouts, responsive design, and interactive sections that communicate the café's atmosphere while delivering an engaging browsing experience.",
    difficulty: "★★★★☆",
    complexity: "Intermediate",
    status: "Closed",
    stats: { files: "18", components: "42", animations: "12", weeks: "3" },
    notes: "Exemplifies clean typography and immersive layout creation for food and beverage branding.",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: "003",
    title: "Theatre Live Café",
    category: "Frontend Development",
    image: theatre,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Paper UI"],
    story:
    "The Theatre Live Café project combines storytelling with modern web design. Inspired by detective aesthetics, the website uses cinematic layouts, subtle animations, and a luxurious visual style to provide visitors with a memorable digital experience.",
    difficulty: "★★★★★",
    complexity: "Advanced",
    status: "Closed",
    stats: { files: "29", components: "74", animations: "22", weeks: "5" },
    notes: "Brilliant thematic integration matching detective aesthetics with modern full-stack presentation.",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: "004",
    title: "Dungeon Escape",
    category: "Game Development",
    image: dungeon,
    tech: ["C++", "SFML", "Object-Oriented", "Game Logic"],
    story:
    "Dungeon Escape is a 2D adventure game where players solve puzzles, avoid enemies, and escape dangerous environments. The project demonstrates object-oriented programming, collision detection, player movement, game logic, and sprite animation using SFML.",
    difficulty: "★★★★★",
    complexity: "Advanced",
    status: "Closed",
    stats: { files: "15", components: "30", animations: "25", weeks: "6" },
    notes: "Solid implementation of custom collision detection loops and core object-oriented structures.",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: "005",
    title: "Arizona Airport Dashboard",
    category: "Data Analysis",
    image: airport,
    tech: ["Power BI", "Excel", "Data Viz", "Cleaning"],
    story:
    "This dashboard analyzes airport performance through interactive visualizations. It provides insights into passenger traffic, flight operations, delays, and operational efficiency, enabling stakeholders to make informed decisions through real-time business intelligence.",
    difficulty: "★★★☆☆",
    complexity: "Proficient",
    status: "Closed",
    stats: { files: "8", components: "14", animations: "4", weeks: "2" },
    notes: "Provides clean, structured metrics breakdown for fast operational visibility.",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: "006",
    title: "Oil & Gas Dashboard",
    category: "Oil & Gas",
    image: oil,
    tech: ["Power BI", "Excel", "Analytics", "KPIs"],
    story:
    "An executive dashboard developed for an Oil & Gas company to visualize production metrics, revenue, operational KPIs, and business performance. Interactive reports help identify trends and support strategic decision-making through data-driven insights.",
    difficulty: "★★★★☆",
    complexity: "Advanced",
    status: "Closed",
    stats: { files: "10", components: "19", animations: "5", weeks: "3" },
    notes: "Advanced KPI tracking and interactive filtering models tailored for heavy corporate stakeholders.",
    github: "https://github.com",
    live: "https://example.com"
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend Development", "Game Development", "Data Analysis", "Oil & Gas"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden bg-bg-main py-36 isolate transition-colors duration-300"
      >
        {/* Advanced Background: Blueprint grid, evidence markings, red stamps, coffee stains, subtle lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15 dark:opacity-5"
          style={{
            backgroundImage: `url(${doodles})`,
            backgroundRepeat: "repeat",
            backgroundSize: "1000px",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Faded investigation lines & coffee stains watermark accents */}
        <div className="absolute top-20 left-12 w-72 h-72 rounded-full border border-brass/10 pointer-events-none" />
        <div className="absolute bottom-40 right-16 w-96 h-96 rounded-full border border-brass/10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-custom-border pb-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brass" />
              <p className="uppercase tracking-[8px] text-brass text-xs sm:text-sm font-semibold">
                Case File Archive — Active Records
              </p>
            </div>
            <span className="px-3 py-1 rounded bg-red-700 text-white text-[10px] uppercase tracking-[2px] font-bold shadow-sm">
              CONFIDENTIAL
            </span>
          </div>

          <TypewriterHeading
            text="Evidence Locker"
            className="font-serif text-5xl sm:text-6xl text-text-main mb-10"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-md text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-primary text-bg-main border-primary shadow-md scale-105"
                    : "bg-card text-text-main border-custom-border hover:border-brass"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Alternate Layout Projects Grid */}
          <div className="space-y-24">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal key={project.id} delay={0.1}>
                  <div
                    onClick={() => setSelectedProject(project)}
                    className={`group cursor-pointer grid lg:grid-cols-12 gap-8 items-center bg-card border-2 border-custom-border p-6 sm:p-10 rounded-2xl shadow-xl hover:border-primary hover:shadow-[0_0_30px_var(--primary)] transition-all duration-500 relative overflow-hidden`}
                  >
                    {/* Red Stamp on Card */}
                    <div className="absolute right-6 top-6 rotate-[-10deg] border-2 border-red-700 text-red-700 px-3 py-1 text-[10px] tracking-[3px] font-bold opacity-75 uppercase z-20 pointer-events-none">
                      STATUS: {project.status}
                    </div>

                    {/* Pinned Tape Element */}
                    <div className="absolute -top-4 left-12 w-28 h-7 bg-yellow-200/80 dark:bg-yellow-600/30 rotate-[-4deg] border border-yellow-300/50 shadow-sm z-20" />

                    {/* Image Container with Stack Effect */}
                    <div className={`lg:col-span-7 relative ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                      <div className="absolute inset-0 bg-custom-border translate-x-3 translate-y-3 rounded-xl pointer-events-none" />
                      <div className="relative border-2 border-custom-border bg-surface p-2 rounded-xl shadow-inner overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-72 sm:h-96 object-cover rounded-lg case-image group-hover:filter-none group-hover:scale-[1.02] transition-all duration-700"
                        />
                        <div className="absolute bottom-4 left-4 bg-card/90 border border-custom-border px-3 py-1 text-xs font-mono text-text-main shadow-sm">
                          CASE {project.id}
                        </div>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className={`lg:col-span-5 space-y-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                      <div className="flex items-center gap-3">
                        <span className="text-xs uppercase tracking-[3px] text-brass font-semibold">
                          CASE {project.id} — {project.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-4xl sm:text-5xl text-text-main group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-ink-soft text-sm sm:text-base leading-relaxed line-clamp-3">
                        {project.story}
                      </p>

                      {/* Paper Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded bg-surface border border-custom-border text-[11px] font-medium text-primary shadow-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Timeline / Statistics Strip */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-custom-border text-xs font-mono text-ink-soft">
                        <div>
                          <span className="block text-brass font-semibold uppercase tracking-wider">Difficulty</span>
                          <span className="text-sm font-bold text-text-main">{project.difficulty}</span>
                        </div>
                        <div>
                          <span className="block text-brass font-semibold uppercase tracking-wider">Complexity</span>
                          <span className="text-sm font-bold text-text-main">{project.complexity}</span>
                        </div>
                      </div>

                      {/* Detective Notes */}
                      <div className="bg-surface/80 border-l-4 border-brass p-3 text-xs italic text-ink-soft">
                        <span className="font-bold not-italic block text-brass uppercase tracking-wider mb-0.5">Investigator's Notes</span>
                        "{project.notes}"
                      </div>

                      <div className="pt-2 flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform duration-300">
                          Inspect Evidence →
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Final Section Footer Banner */}
          <div className="mt-24 border-2 border-dashed border-brass/60 bg-card rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
            <div className="absolute right-10 top-1/2 -translate-y-1/2 rotate-[-12deg] border-4 border-red-700 text-red-700 px-6 py-3 text-2xl sm:text-3xl tracking-[6px] font-extrabold opacity-80 uppercase pointer-events-none">
              CONFIDENTIAL
            </div>
            <h4 className="font-serif text-3xl sm:text-4xl text-text-main mb-3">
              Archive Complete
            </h4>
            <p className="text-ink-soft text-sm sm:text-base max-w-xl mx-auto mb-6">
              6 Investigations Processed • 100% Closed Cases • More Files Incoming
            </p>
            <div className="inline-block px-6 py-2 rounded bg-primary text-bg-main text-xs font-bold uppercase tracking-[3px]">
              Status: Verified Secure
            </div>
          </div>

        </div>
      </section>

      {/* FULL SCREEN CASE FILE POPUP */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-3xl border-2 border-custom-border overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl relative text-text-main"
          >
            {/* Top Bar Header */}
            <div className="bg-surface text-text-main px-6 sm:px-10 py-5 flex items-center justify-between border-b border-custom-border">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                <span className="ml-4 font-mono text-xs uppercase tracking-widest text-brass">
                  CASE FILE #{selectedProject.id} — {selectedProject.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs uppercase font-bold tracking-widest bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded transition-colors"
              >
                Close File [X]
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-12 overflow-y-auto space-y-10">
              
              {/* Large Hero Image Evidence */}
              <div className="relative border-2 border-custom-border bg-surface p-3 rounded-2xl shadow-inner">
                <div className="absolute right-6 top-6 rotate-[-10deg] border-2 border-red-700 text-red-700 px-3 py-1 text-xs tracking-[3px] font-bold opacity-80 uppercase z-20 pointer-events-none">
                  STATUS: {selectedProject.status}
                </div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-72 sm:h-[450px] object-cover rounded-xl case-image"
                />
              </div>

              {/* Title & Metadata Grid */}
              <div className="grid md:grid-cols-3 gap-6 pb-8 border-b border-custom-border">
                <div className="md:col-span-2">
                  <p className="uppercase tracking-[6px] text-brass text-xs font-bold mb-2">
                    Verified Investigation Report
                  </p>
                  <h2 className="font-serif text-4xl sm:text-5xl text-text-main">
                    {selectedProject.title}
                  </h2>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-custom-border space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-ink-soft">Classification:</span>
                    <span className="font-bold text-text-main">{selectedProject.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-soft">Difficulty:</span>
                    <span className="font-bold text-text-main">{selectedProject.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-soft">Timeline:</span>
                    <span className="font-bold text-text-main">{selectedProject.stats.weeks} Weeks</span>
                  </div>
                </div>
              </div>

              {/* Story / Full Investigation Details */}
              <div className="space-y-4">
                <h3 className="uppercase tracking-[4px] text-brass text-sm font-bold">
                  Case Summary & Story
                </h3>
                <p className="text-ink-soft leading-8 text-base sm:text-lg">
                  {selectedProject.story}
                </p>
              </div>

              {/* Project Statistics Grid */}
              <div className="space-y-4">
                <h3 className="uppercase tracking-[4px] text-brass text-sm font-bold">
                  Evidence Statistics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-surface p-4 rounded-xl border border-custom-border text-center">
                    <span className="block text-xs uppercase tracking-wider text-ink-soft">Files</span>
                    <span className="text-xl font-bold text-text-main">{selectedProject.stats.files}</span>
                  </div>
                  <div className="bg-surface p-4 rounded-xl border border-custom-border text-center">
                    <span className="block text-xs uppercase tracking-wider text-ink-soft">Components</span>
                    <span className="text-xl font-bold text-text-main">{selectedProject.stats.components}</span>
                  </div>
                  <div className="bg-surface p-4 rounded-xl border border-custom-border text-center">
                    <span className="block text-xs uppercase tracking-wider text-ink-soft">Animations</span>
                    <span className="text-xl font-bold text-text-main">{selectedProject.stats.animations}</span>
                  </div>
                  <div className="bg-surface p-4 rounded-xl border border-custom-border text-center">
                    <span className="block text-xs uppercase tracking-wider text-ink-soft">Weeks</span>
                    <span className="text-xl font-bold text-text-main">{selectedProject.stats.weeks}</span>
                  </div>
                </div>
              </div>

              {/* Technologies / Evidence Tags */}
              <div className="space-y-4">
                <h3 className="uppercase tracking-[4px] text-brass text-sm font-bold">
                  Technologies Recovered
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-md bg-surface border border-custom-border text-xs font-semibold text-primary shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lessons Learned / Investigator's Notes */}
              <div className="space-y-2 bg-surface border-l-4 border-brass p-6 rounded-r-xl">
                <h3 className="uppercase tracking-[4px] text-brass text-xs font-bold">
                  Investigator's Notes & Lessons Learned
                </h3>
                <p className="text-ink-soft italic text-sm sm:text-base">
                  "{selectedProject.notes} This asset was thoroughly tested and verified under strict performance guidelines."
                </p>
              </div>

              {/* Action Buttons: Github & Live Demo */}
              <div className="pt-6 border-t border-custom-border flex flex-wrap items-center gap-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-lg bg-primary text-bg-main font-medium hover:opacity-90 transition-all shadow-md text-sm uppercase tracking-wider"
                >
                  Visit Live Site →
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-lg bg-surface border border-custom-border text-text-main font-medium hover:border-brass transition-all shadow-sm text-sm uppercase tracking-wider"
                >
                  GitHub Repository
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}