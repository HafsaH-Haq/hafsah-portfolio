import web from "../../assets/images/web.jpg";
import dashboard from "../../assets/images/dashboard.jpg";
import doodles from "../../assets/images/doodles.jpg";
import TypewriterHeading from "../ui/TypewriterHeading";
import Reveal from "../ui/Reveal";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Web Developer",
      company: "Redline Intelligence",
      duration: "2025 – Present",
      type: "Freelance • Upwork",
      image: web,
      description:
        "Developed responsive, modern web applications using React, JavaScript, HTML, CSS and Tailwind CSS. Worked directly with international clients to transform ideas into polished, production-ready websites with strong attention to performance, user experience and clean code.",
    },
    {
      title: "Dashboard Builder / Data Analyst",
      company: "Redline Intelligence",
      duration: "2025 – Present",
      type: "Freelance • Upwork",
      image: dashboard,
      description:
        "Designed interactive dashboards and analytical reports using Excel, Power BI and data visualization techniques. Converted raw datasets into meaningful insights, KPIs and business reports that helped clients make data-driven decisions.",
    },
  ];

  return (
    <section
      id="experience"
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
          Case File 005
        </p>

        <TypewriterHeading
          text="Employment Records"
          className="font-serif text-6xl text-[#1F1F1F] mb-20"
        />

        <div className="space-y-20">
          {experiences.map((job, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="grid lg:grid-cols-[170px_1fr] gap-12 items-start">
                {/* IMAGE */}

                <div className="flex justify-center lg:justify-start">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="
                      w-36
                      h-36
                      object-cover
                      rounded-xl
                      border-2
                      border-transparent
                      shadow-lg
                      cursor-pointer
                      transition-all
                      duration-300
                      ease-in-out
                      hover:scale-105
                      hover:border-[#B48947]
                      hover:shadow-2xl
                    "
                  />
                </div>

                {/* CONTENT */}

                <div>
                  <p className="uppercase tracking-[5px] text-[#B48947] text-xs">
                    EMPLOYMENT RECORD
                  </p>

                  <h3 className="font-serif text-4xl mt-3 text-[#1F1F1F]">
                    {job.title}
                  </h3>

                  <p className="text-xl text-[#2F4F46] mt-4">
                    {job.company}
                  </p>

                  <div className="mt-6 space-y-3 text-gray-700">
                    <p>
                      <span className="font-semibold">Duration:</span>{" "}
                      {job.duration}
                    </p>

                    <p>
                      <span className="font-semibold">Type:</span>{" "}
                      {job.type}
                    </p>
                  </div>

                  <div className="mt-8 border-l-2 border-[#2F4F46] pl-6">
                    <p className="leading-8 text-gray-700 text-lg">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}