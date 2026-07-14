import photo from "../../assets/images/photo.jpg";
import doodles from "../../assets/images/doodles.jpg";
import TypewriterHeading from "../ui/TypewriterHeading";
import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <section
      id="about"
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

        {/* Section Label */}

        <p className="uppercase tracking-[8px] text-[#B48947] text-sm mb-5">
          Case File 002
        </p>

        <TypewriterHeading
          text="Background Investigation"
          className="font-serif text-6xl text-[#1F1F1F] mb-20"
        />

        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* LEFT SIDE */}

          <Reveal>

            <div className="border-l-2 border-[#2F4F46] pl-8">

              <p className="uppercase tracking-[5px] text-[#B48947] text-xs mb-2">
                SUBJECT
              </p>

              <h3 className="font-serif text-4xl mb-10">
                Hafsah Haq
              </h3>

              <div className="space-y-8 text-gray-700">

                <div>
                  <p className="text-xs uppercase tracking-[4px] text-[#B48947]">
                    Occupation
                  </p>

                  <p className="text-xl">
                    Web Developer & Data Analyst
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[4px] text-[#B48947]">
                    Location
                  </p>

                  <p className="text-xl">
                    Karachi, Pakistan
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[4px] text-[#B48947]">
                    Status
                  </p>

                  <p className="text-xl text-[#2F4F46] font-semibold">
                    Available for Freelance
                  </p>
                </div>

              </div>

            </div>

            {/* PROFILE */}

            <div className="mt-20">

              <p className="uppercase tracking-[5px] text-[#B48947] text-xs mb-4">
                PROFILE
              </p>

              <p className="leading-9 text-lg text-gray-700">
                I'm a developer passionate about creating elegant user
                experiences using React, modern frontend technologies,
                and meaningful backend systems. Alongside development,
                I enjoy transforming raw information into insights
                through data analysis and visualization.
              </p>

            </div>

            {/* MISSION */}

            <div className="mt-16">

              <p className="uppercase tracking-[5px] text-[#B48947] text-xs mb-4">
                MISSION
              </p>

              <p className="leading-9 text-lg text-gray-700">
                Design interfaces that feel thoughtful, solve real-world
                problems, and build software that people genuinely enjoy
                using.
              </p>

            </div>

          </Reveal>

          {/* RIGHT */}

          <Reveal delay={0.15}>

            <div className="relative flex justify-center">

              {/* Back Paper */}

              <div className="absolute top-8 left-8 w-[330px] h-[430px] bg-[#E6DED1] rotate-3 shadow-md" />

              {/* Main Paper */}

              <div className="relative bg-[#F7F2E9] border border-[#D8CDBA] shadow-xl p-6 w-[330px]">

                {/* Tape */}

                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-200 opacity-70 rotate-[-3deg]" />

                <img
                  src={photo}
                  alt="Photo of Hafsah Haq"
                  className="w-full h-[320px] object-cover grayscale"
                />

                <div className="mt-6">

                  <p className="uppercase tracking-[1px] text-[#B48947] text-xs">
                    PERSON OF INTEREST
                  </p>

                  <h3 className="font-serif text-3xl mt-3">
                    Creative Problem Solver
                  </h3>

                </div>

              </div>

              {/* Stamp */}

              <div className="absolute right-0 top-5 bg-[#2F4F46] text-white rounded-full px-5 py-2 shadow-lg tracking-[2px] uppercase text-xs">
                Verified
              </div>

              {/* Handwritten */}

              <p
                className="absolute -left-20 bottom-20 text-4xl text-[#2F4F46] rotate-[-4deg]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Interview Complete
              </p>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}