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
      image: frontend,
      skills: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      label: "Exhibit B",
      image: backend,
      skills: [
        "Python",
        "FastAPI",
        "REST APIs",
        "Git & GitHub",
        "Firebase",
        "SQL",
      ],
    },
    {
      title: "Data Analysis",
      label: "Exhibit C",
      image: analyst,
      skills: [
        "Excel",
        "Power BI",
        "Data Cleaning",
        "Data Visualization",
        "Dashboard Design",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section
      id="skills"
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
          Case File 003
        </p>

        <TypewriterHeading
          text="Evidence Board"
          className="font-serif text-6xl text-[#1F1F1F] mb-20"
        />

        <div className="grid lg:grid-cols-3 gap-10">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.15}>
              <div className="relative bg-[#F7F2E9] border border-[#D9CEBA] shadow-xl p-8 rotate-[-1deg] hover:rotate-0 hover:-translate-y-2 duration-500">
                {/* Tape */}

                <div className="absolute -top-4 left-8 w-20 h-7 bg-yellow-200 opacity-70 rotate-[-6deg]" />

                {/* Image */}

                <div className="border border-[#D9CEBA] bg-white p-3 shadow-md mb-8">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-48 object-contain"
                  />
                </div>

                <p className="uppercase tracking-[4px] text-xs text-[#B48947] mb-2">
                  {section.label}
                </p>

                <h3 className="font-serif text-3xl mb-8">
                  {section.title}
                </h3>

                <div className="space-y-3">
                  {section.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex justify-between border-b border-dashed border-[#D8CDBA] pb-2"
                    >
                      <span>{skill}</span>

                      <span className="text-[#2F4F46] font-bold">
                        ✓
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p
            className="text-4xl text-[#2F4F46] mt-16 rotate-[-2deg]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            Every solved problem leaves behind a new skill.
          </p>
        </Reveal>

      </div>
    </section>
  );
}