import { useState } from "react";

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
    title: "LUMEN",
    category: "Frontend Development",
    image: lumen,
    tech: "React • Tailwind CSS • Framer Motion",
    story:
      "LUMEN is a modern web experience focused on elegant UI design, smooth animations, and responsive layouts. The project demonstrates clean component architecture, reusable React components, and attention to user experience while maintaining excellent performance across all screen sizes.",
  },
  {
    title: "Oak & Stream",
    category: "Frontend Development",
    image: oak,
    tech: "React • Tailwind CSS • JavaScript",
    story:
      "Oak & Stream is a luxury café website designed to create a premium online identity. It features elegant typography, immersive layouts, responsive design, and interactive sections that communicate the café's atmosphere while delivering an engaging browsing experience.",
  },
  {
    title: "Theatre Live Café",
    category: "Frontend Development",
    image: theatre,
    tech: "React • Tailwind CSS • Framer Motion",
    story:
      "The Theatre Live Café project combines storytelling with modern web design. Inspired by detective aesthetics, the website uses cinematic layouts, subtle animations, and a luxurious visual style to provide visitors with a memorable digital experience.",
  },
  {
    title: "Dungeon Escape",
    category: "Game Development",
    image: dungeon,
    tech: "C++ • SFML",
    story:
      "Dungeon Escape is a 2D adventure game where players solve puzzles, avoid enemies, and escape dangerous environments. The project demonstrates object-oriented programming, collision detection, player movement, game logic, and sprite animation using SFML.",
  },
  {
    title: "Arizona Airport Dashboard",
    category: "Data Analysis",
    image: airport,
    tech: "Power BI • Excel",
    story:
      "This dashboard analyzes airport performance through interactive visualizations. It provides insights into passenger traffic, flight operations, delays, and operational efficiency, enabling stakeholders to make informed decisions through real-time business intelligence.",
  },
  {
    title: "Oil & Gas Dashboard",
    category: "Data Analysis",
    image: oil,
    tech: "Power BI • Excel",
    story:
      "An executive dashboard developed for an Oil & Gas company to visualize production metrics, revenue, operational KPIs, and business performance. Interactive reports help identify trends and support strategic decision-making through data-driven insights.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden bg-[#F8F4EC] py-36"
      >
        {/* Background Doodles */}

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

        {/* Content */}

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20">

          <p className="uppercase tracking-[8px] text-[#B48947] text-sm mb-5">
            Case File 004
          </p>

          <TypewriterHeading
            text="Solved Cases"
            className="font-serif text-6xl text-[#1F1F1F] mb-20"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <Reveal key={index} delay={(index % 3) * 0.12}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  {/* IMAGE */}

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-64
                      object-cover
                      rounded-xl
                      border-2
                      border-transparent
                      shadow-lg
                      transition-all
                      duration-300
                      ease-in-out
                      group-hover:scale-[1.03]
                      group-hover:border-[#B48947]
                      group-hover:shadow-2xl
                    "
                  />

                  {/* CONTENT */}

                  <div className="mt-6">
                    <p className="uppercase tracking-[4px] text-xs text-[#B48947] mb-2">
                      {project.category}
                    </p>

                    <h3 className="font-serif text-3xl text-[#1F1F1F] mb-3">
                      {project.title}
                    </h3>

                    <p className="text-[#2F4F46] font-medium transition-all duration-300 group-hover:translate-x-1">
                      Open Case File →
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* POPUP */}

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              bg-[#F7F2E9]
              rounded-2xl
              border
              border-[#D8CDBA]
              overflow-hidden
              max-w-6xl
              w-full
              grid
              lg:grid-cols-2
              shadow-2xl
              animate-in
              fade-in
              zoom-in-95
              duration-300
            "
          >
            {/* IMAGE */}

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="
                w-full
                h-full
                min-h-[500px]
                object-cover
                border-r
                border-[#D8CDBA]
              "
            />

            {/* DETAILS */}

            <div className="p-10 overflow-y-auto">
              <p className="uppercase tracking-[6px] text-[#B48947] text-sm mb-3">
                Confidential Case File
              </p>

              <h2 className="font-serif text-5xl text-[#1F1F1F] mb-8">
                {selectedProject.title}
              </h2>

              <div className="mb-8">
                <h3 className="uppercase tracking-[4px] text-[#B48947] text-sm mb-3">
                  Investigation Report
                </h3>

                <p className="text-gray-700 leading-8 text-lg">
                  {selectedProject.story}
                </p>
              </div>

              <div className="mb-10">
                <h3 className="uppercase tracking-[4px] text-[#B48947] text-sm mb-3">
                  Evidence Collected
                </h3>

                <p className="text-gray-700 text-lg">
                  {selectedProject.tech}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="
                  px-8
                  py-3
                  rounded-lg
                  bg-[#2F4F46]
                  text-white
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-[#234039]
                  hover:scale-105
                "
              >
                Close Case
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}