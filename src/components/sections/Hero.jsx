import { useState } from "react";
import profile from "../../assets/images/profile.jpg";
import TypewriterHeading from "../ui/TypewriterHeading";

function Hero() {
  const [nameDone, setNameDone] = useState(false);

  return (
    <section className="doodle-bg min-h-screen flex items-center pt-20 bg-[#F8F4EC]">
      <div className="doodle-content max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-32 items-center">

        {/* LEFT */}

        <div>
          <p className="uppercase tracking-[8px] text-[#B58B42] text-sm mb-8">
            CASE FILE 001
          </p>

          <TypewriterHeading
            as="h1"
            text={"Hafsah\nHaq"}
            className="font-serif text-[#1F1F1F] leading-[0.9] text-6xl lg:text-7xl"
            onDone={() => setNameDone(true)}
          />

          <TypewriterHeading
            as="h2"
            text={"Web Developer\n& Data Analyst"}
            className="font-serif text-[#2F4F46] text-4xl lg:text-5xl mt-8 leading-tight"
            startWhen={nameDone}
          />

          <p className="mt-12 text-xl leading-9 text-gray-700 max-w-xl">
            Building thoughtful digital experiences through modern web
            development, beautiful interfaces and meaningful data analysis.
          </p>

          <p
            className="mt-16 text-4xl text-[#2F4F46]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            ← Currently open for freelance work
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-12">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#2F4F46] text-white rounded-lg shadow-lg hover:bg-[#24423A] transition duration-300"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-[#2F4F46] text-[#2F4F46] rounded-lg hover:bg-[#2F4F46] hover:text-white transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center -mt-8">

          {/* Back Sheet */}

          <div className="absolute w-[390px] h-[520px] bg-[#ECE5D8] border border-[#ddd2bf] rotate-[4deg] translate-x-6 translate-y-8 shadow-md" />

          {/* Middle Sheet */}

          <div className="absolute w-[390px] h-[520px] bg-[#F4EEE2] border border-[#ddd2bf] -rotate-2 translate-y-2 shadow-lg" />

          {/* Main Card */}

          <div className="relative w-[390px] bg-[#FBF8F1] border border-[#ddd2bf] shadow-2xl">

            {/* Tape */}

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-yellow-200/70 rotate-[-4deg]" />

            {/* Verified Stamp */}

            <div className="absolute right-5 top-5 bg-[#2F4F46] text-white rounded-full px-4 py-2 text-xs tracking-[2px] uppercase shadow-lg">
              CASE VERIFIED
            </div>

            {/* Photo */}

            <div className="m-6 border border-[#ddd] overflow-hidden h-[350px] bg-[#eee]">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom */}

            <div className="px-6 pb-7">
              <p className="uppercase tracking-[4px] text-[#B58B42] text-sm">
                Evidence
              </p>

              <h3 className="font-serif text-3xl mt-2">
                Full Stack Developer
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                React • FastAPI • Python • Tailwind CSS • UI/UX
              </p>
            </div>
          </div>

          {/* Verified */}

          <div className="absolute -right-10 top-24 bg-white rounded-full border shadow-lg px-5 py-3">
            <span className="font-medium">✓ Verified</span>
          </div>

          {/* Figure */}

          <div
            className="absolute -bottom-12 right-0 text-4xl text-[#2F4F46]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Fig. 01
          </div>

          {/* Note */}

          <div
            className="absolute -left-20 bottom-14 rotate-[-5deg] text-3xl text-[#2F4F46]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Primary Subject
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;