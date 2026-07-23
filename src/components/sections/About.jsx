import photo from "../../assets/images/photo.jpg";
import doodles from "../../assets/images/doodles.jpg";
import TypewriterHeading from "../ui/TypewriterHeading";
import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-paper py-16 sm:py-20 lg:py-24"
    >
      {/* Background Doodles */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 dark:opacity-30 dark:invert"
        style={{
          backgroundImage: `url(${doodles})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1000px",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-20">

        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-border pb-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brass" />
              <p className="uppercase tracking-[8px] text-brass text-xs sm:text-sm font-semibold">
                Case File 002 — Background Investigation
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded border border-brass text-brass text-[10px] sm:text-xs uppercase tracking-[2px] bg-paperDark/40">
                File No: HH-2026-002
              </span>
              <span className="px-3 py-1 rounded bg-[#00bcd4] text-white text-[10px] sm:text-xs uppercase tracking-[2px] font-bold shadow-sm">
                Classified
              </span>
            </div>
          </div>

          <TypewriterHeading
            text="Background Investigation"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-ink"
          />
        </div>

        {/* Main Grid: Left Column & Right Column */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE (7 Cols) */}
          <Reveal className="lg:col-span-7">
            <div className="space-y-10">
              
              {/* Subject Identification */}
              <div className="border-l-2 border-forest pl-6 sm:pl-8 space-y-6 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-forest border-4 border-paper shadow-sm" />
                
                <div>
                  <p className="uppercase tracking-[5px] text-brass text-xs mb-1">
                    SUBJECT IDENTIFICATION
                  </p>
                  <h3 className="font-heading text-ink text-3xl sm:text-4xl">
                    Hafsah Haq
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="border border-border bg-paperDark/40 rounded-lg p-3.5 hover:border-[#00bcd4] hover:bg-[#00bcd4]/10 hover:shadow-md transition-all group">
                    <p className="text-[10px] uppercase tracking-[2px] text-brass group-hover:text-[#00bcd4] transition-colors">Occupation</p>
                    <p className="text-sm font-bold text-forest group-hover:text-[#00bcd4] transition-colors mt-1">Full Stack Dev</p>
                  </div>
                  <div className="border border-border bg-paperDark/40 rounded-lg p-3.5 hover:border-[#00bcd4] hover:bg-[#00bcd4]/10 hover:shadow-md transition-all group">
                    <p className="text-[10px] uppercase tracking-[2px] text-brass group-hover:text-[#00bcd4] transition-colors">Location</p>
                    <p className="text-sm font-bold text-forest group-hover:text-[#00bcd4] transition-colors mt-1">Karachi, PK</p>
                  </div>
                  <div className="border border-border bg-paperDark/40 rounded-lg p-3.5 hover:border-[#00bcd4] hover:bg-[#00bcd4]/10 hover:shadow-md transition-all group">
                    <p className="text-[10px] uppercase tracking-[2px] text-brass group-hover:text-[#00bcd4] transition-colors">Status</p>
                    <p className="text-sm font-bold text-green-600 mt-1">Available</p>
                  </div>
                </div>
              </div>

              {/* Evidence Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-border bg-paper/80 p-5 rounded-xl shadow-sm hover:border-[#00bcd4] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-[10px] uppercase tracking-[3px] text-brass font-semibold mb-1">Evidence #01</p>
                  <h4 className="font-heading text-lg text-ink">Specialization</h4>
                  <p className="text-xs text-inkSoft mt-2">React, FastAPI, Python, Tailwind CSS & modern web architectures.</p>
                </div>

                <div className="border border-border bg-paper/80 p-5 rounded-xl shadow-sm hover:border-[#00bcd4] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-[10px] uppercase tracking-[3px] text-brass font-semibold mb-1">Evidence #02</p>
                  <h4 className="font-heading text-lg text-ink">Experience</h4>
                  <p className="text-xs text-inkSoft mt-2">Building responsive, production-ready web apps and scalable dashboards.</p>
                </div>

                <div className="border border-border bg-paper/80 p-5 rounded-xl shadow-sm hover:border-[#00bcd4] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-[10px] uppercase tracking-[3px] text-brass font-semibold mb-1">Evidence #03</p>
                  <h4 className="font-heading text-lg text-ink">Education & DSA</h4>
                  <p className="text-xs text-inkSoft mt-2">Computer Science background mastering advanced algorithms and system design.</p>
                </div>

                <div className="border border-border bg-paper/80 p-5 rounded-xl shadow-sm hover:border-[#00bcd4] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="text-[10px] uppercase tracking-[3px] text-brass font-semibold mb-1">Evidence #04</p>
                  <h4 className="font-heading text-lg text-ink">Core Interests</h4>
                  <p className="text-xs text-inkSoft mt-2">UI/UX branding aesthetics, interactive data visualization, and software craftsmanship.</p>
                </div>
              </div>

              {/* Profile Summary Box */}
              <div className="p-6 rounded-xl border border-border bg-paperDark/30 hover:border-[#00bcd4] transition-all">
                <p className="uppercase tracking-[5px] text-brass text-xs mb-2 font-semibold">PROFILE SUMMARY</p>
                <p className="leading-relaxed text-sm sm:text-base text-inkSoft">
                  I'm a developer passionate about creating elegant user experiences using React, modern frontend technologies, and meaningful backend systems. Alongside development, I enjoy transforming raw information into insights through data analysis and visualization.
                </p>
              </div>

            </div>
          </Reveal>

          {/* RIGHT SIDE (5 Cols) */}
          <Reveal delay={0.15} className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full flex flex-col items-center pt-8 sm:pt-12">

              {/* Back Layered Paper & Shadows */}
              <div className="absolute top-10 sm:top-14 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-6 w-[260px] sm:w-[320px] lg:w-[350px] h-[350px] sm:h-[410px] lg:h-[440px] bg-paperDark rotate-3 shadow-lg rounded-lg border border-border" />

              {/* Main Photo Card with #00bcd4 Theme Hover */}
              <div className="relative bg-paper border-2 border-border shadow-2xl p-4 sm:p-5 w-[260px] sm:w-[320px] lg:w-[350px] rounded-lg hover:border-[#00bcd4] hover:shadow-[0_0_25px_rgba(0,188,212,0.35)] transition-all duration-300 group/card">

                {/* Tape Effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-yellow-200/80 dark:bg-yellow-300/40 rotate-[-3deg] border border-yellow-300/50 shadow-sm" />

                {/* Stamped Markings */}
                <div className="absolute right-4 top-5 rotate-12 border-2 border-red-700 text-red-700 px-3 py-0.5 text-[10px] tracking-[3px] font-bold opacity-75 uppercase">
                  VERIFIED
                </div>

                {/* Photograph */}
                <div className="border border-border rounded overflow-hidden group-hover/card:border-[#00bcd4]/60 transition-colors">
                  <img
                    src={photo}
                    alt="Photo of Hafsah Haq"
                    className="w-full h-[220px] sm:h-[260px] object-cover grayscale dark:brightness-90 group-hover/card:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="mt-4">
                  <p className="uppercase tracking-[2px] text-brass text-[10px] font-semibold">
                    PERSON OF INTEREST
                  </p>
                  <h3 className="font-heading text-ink text-xl sm:text-2xl mt-1">
                    Creative Problem Solver
                  </h3>
                </div>

              </div>

              {/* Verified Dossier Badge */}
              <div className="absolute right-2 top-6 sm:right-6 sm:top-10 bg-[#00bcd4] text-white rounded-full px-4 py-1.5 shadow-lg tracking-[2px] uppercase text-xs border border-white/25 z-20 font-bold">
                Verified Dossier
              </div>

              {/* Floating Handwritten Annotations */}
              <p
                className="hidden xl:block absolute -left-16 bottom-10 text-3xl text-forest rotate-[-4deg] pointer-events-none drop-shadow-sm"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Interview Complete ✓
              </p>

            </div>

            {/* Mission Statement: Pushed down even further with an extra spacing buffer */}
            <div className="w-[260px] sm:w-[320px] lg:w-[350px] mt-20 sm:mt-32">
              <div className="p-6 rounded-xl border border-border bg-paperDark/30 hover:border-[#00bcd4] transition-all">
                <p className="uppercase tracking-[5px] text-brass text-xs mb-2 font-semibold">MISSION STATEMENT</p>
                <p className="leading-relaxed text-sm sm:text-base text-inkSoft">
                  Design interfaces that feel thoughtful, solve real-world problems, and build software that people genuinely enjoy using.
                </p>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Bottom "Case Notes" Box with #00bcd4 Accent Styling */}
        <Reveal delay={0.2}>
          <div className="mt-16 sm:mt-20 border-2 border-[#00bcd4]/50 bg-paperDark/40 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden backdrop-blur-sm hover:border-[#00bcd4] hover:shadow-[0_0_25px_rgba(0,188,212,0.25)] transition-all">
            <div className="absolute top-0 right-0 px-4 py-1 bg-[#00bcd4] text-white text-[10px] uppercase tracking-[3px] font-bold rounded-bl-xl">
              Confidential Summary
            </div>

            <h4 className="font-heading text-2xl sm:text-3xl text-ink mb-4">
              Case Notes & Investigation Summary
            </h4>
            
            <p className="text-inkSoft text-sm sm:text-base leading-relaxed max-w-4xl mb-8">
              Subject demonstrates advanced technical aptitude across frontend frameworks and backend data structures. Verified clearance permits immediate deployment on high-impact production environments, collaborative development squads, and independent architectural planning.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
              <div className="p-4 rounded-xl border border-border bg-paper/80 shadow-sm hover:border-[#00bcd4] transition-colors">
                <span className="block text-2xl sm:text-3xl font-bold text-forest">100%</span>
                <span className="text-xs text-inkSoft uppercase tracking-wider mt-1 block">Commitment</span>
              </div>
              <div className="p-4 rounded-xl border border-border bg-paper/80 shadow-sm hover:border-[#00bcd4] transition-colors">
                <span className="block text-2xl sm:text-3xl font-bold text-forest">React</span>
                <span className="text-xs text-inkSoft uppercase tracking-wider mt-1 block">Primary Stack</span>
              </div>
              <div className="p-4 rounded-xl border border-border bg-paper/80 shadow-sm hover:border-[#00bcd4] transition-colors">
                <span className="block text-2xl sm:text-3xl font-bold text-forest">FastAPI</span>
                <span className="text-xs text-inkSoft uppercase tracking-wider mt-1 block">Backend Core</span>
              </div>
              <div className="p-4 rounded-xl border border-border bg-paper/80 shadow-sm hover:border-[#00bcd4] transition-colors">
                <span className="block text-2xl sm:text-3xl font-bold text-green-600">Active</span>
                <span className="text-xs text-inkSoft uppercase tracking-wider mt-1 block">Clearance Status</span>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}