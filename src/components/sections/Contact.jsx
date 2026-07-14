import { useRef } from "react";
import emailjs from "@emailjs/browser";


import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import code from "../../assets/images/code.jpg";
import doodles from "../../assets/images/doodles.jpg";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(
        () => {
          alert("✅ Your message has been sent successfully!");

          form.current.reset();
        },
        () => {
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
  id="contact"
  className="relative overflow-hidden bg-[#F8F4EC] py-36"
>
      {/* Doodles */}

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

      <div className="absolute bottom-28 right-16 text-[#2F4F46]/10 text-8xl pointer-events-none">
        ↗
      </div>

      <div className="absolute top-1/2 right-0 text-[#B48947]/15 text-6xl rotate-12 pointer-events-none">
        ⌘
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20">
      <p className="uppercase tracking-[8px] text-[#B48947] text-sm mb-5">
        Case File 007
      </p>

      <h2 className="font-serif text-6xl text-[#1F1F1F] mb-6">
        Ready to Open a New Case?
      </h2>

      <p className="text-lg text-gray-600 max-w-2xl leading-8 mb-20">
        Whether you're looking for a modern website, an interactive dashboard,
        or a creative digital experience, I'd love to hear about your project.
        Let's investigate your ideas and turn them into something exceptional.
      </p>

      <div className="grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}

        <div>

          <img
            src={code}
            alt="Coding"
            className="
              w-full
              rounded-xl
              border-2
              border-transparent
              shadow-lg
              transition-all
              duration-300
              hover:border-[#B48947]
              hover:shadow-2xl
              hover:scale-[1.02]
            "
          />

          <div className="mt-12 space-y-8">

            <div className="flex items-start gap-5">

              <div className="w-12 h-12 rounded-full bg-[#2F4F46] text-white flex items-center justify-center">
                <FaEnvelope />
              </div>

              <div>
                <p className="uppercase tracking-[4px] text-xs text-[#B48947]">
                  Email
                </p>

                <a
                  href="mailto:hafsah.haq@gmail.com"
                  className="text-lg text-[#1F1F1F] hover:text-[#B48947] transition"
                >
                  hafsah.haq@gmail.com
                </a>
              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="w-12 h-12 rounded-full bg-[#2F4F46] text-white flex items-center justify-center">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="uppercase tracking-[4px] text-xs text-[#B48947]">
                  Phone
                </p>

                <a
                  href="tel:+923353821029"
                  className="text-lg text-[#1F1F1F] hover:text-[#B48947] transition"
                >
                  +92 335 3821029
                </a>
              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="w-12 h-12 rounded-full bg-[#2F4F46] text-white flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="uppercase tracking-[4px] text-xs text-[#B48947]">
                  Location
                </p>

                <p className="text-lg text-[#1F1F1F]">
                  Karachi, Pakistan
                </p>
              </div>

            </div>
                        <div className="pt-8">

              <p className="uppercase tracking-[5px] text-xs text-[#B48947] mb-6">
                Connect With Me
              </p>

              <div className="flex gap-5">

                <a
                  href="https://github.com/HafsaH-Haq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-14
                    h-14
                    rounded-full
                    border-2
                    border-transparent
                    bg-[#F7F2E9]
                    shadow-lg
                    flex
                    items-center
                    justify-center
                    text-2xl
                    text-[#2F4F46]
                    transition-all
                    duration-300
                    hover:border-[#B48947]
                    hover:text-[#B48947]
                    hover:scale-110
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/hafsah-haq-6a407237b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-14
                    h-14
                    rounded-full
                    border-2
                    border-transparent
                    bg-[#F7F2E9]
                    shadow-lg
                    flex
                    items-center
                    justify-center
                    text-2xl
                    text-[#2F4F46]
                    transition-all
                    duration-300
                    hover:border-[#B48947]
                    hover:text-[#B48947]
                    hover:scale-110
                  "
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            bg-[#F7F2E9]
            rounded-2xl
            border
            border-[#D8CDBA]
            shadow-xl
            p-10
          "
        >

          <p className="uppercase tracking-[5px] text-[#B48947] text-sm mb-8">
            Open A New Case
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            <div>

              <label className="block text-[#2F4F46] mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="user_name"
                required
                placeholder="John Doe"
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#D8CDBA]
                  px-5
                  py-4
                  outline-none
                  bg-white
                  transition
                  focus:border-[#B48947]
                "
              />

            </div>

            <div>

              <label className="block text-[#2F4F46] mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="user_email"
                required
                placeholder="john@email.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#D8CDBA]
                  px-5
                  py-4
                  outline-none
                  bg-white
                  transition
                  focus:border-[#B48947]
                "
              />

            </div>

            <div>

              <label className="block text-[#2F4F46] mb-2 font-medium">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#D8CDBA]
                  px-5
                  py-4
                  outline-none
                  bg-white
                  transition
                  focus:border-[#B48947]
                "
              />

            </div>
            <div>

              <label className="block text-[#2F4F46] mb-2 font-medium">
                Message
              </label>

              <textarea
                name="message"
                required
                rows="7"
                placeholder="Tell me about your project..."
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#D8CDBA]
                  px-5
                  py-4
                  outline-none
                  bg-white
                  resize-none
                  transition
                  focus:border-[#B48947]
                "
              ></textarea>

            </div>

            <button
              type="submit"
              className="
                w-full
                bg-[#2F4F46]
                text-white
                py-4
                rounded-xl
                font-semibold
                tracking-wide
                transition-all
                duration-300
                hover:bg-[#234039]
                hover:scale-[1.02]
                hover:shadow-xl
              "
            >
              Submit Case →
            </button>

          </form>

          <div className="mt-10 pt-8 border-t border-[#D8CDBA]">

            <p className="uppercase tracking-[4px] text-xs text-[#B48947] mb-3">
              Response Time
            </p>

            <p className="text-gray-700 leading-7">
              I usually respond within <strong>24 hours</strong>.
              Whether it's a freelance opportunity, internship,
              collaboration, or simply a question, feel free to
              reach out. I'd love to discuss how we can build
              something exceptional together.
            </p>

          </div>

        </div>

      </div>
            {/* Footer */}

      <div className="mt-28 border-t border-[#D8CDBA] pt-10 text-center">

        <p className="font-serif text-2xl text-[#1F1F1F]">
          Every great project starts with a conversation.
        </p>

        <p className="mt-4 text-gray-600 leading-7 max-w-2xl mx-auto">
          Thanks for visiting my portfolio. Whether you're looking for a
          modern React website, an interactive dashboard, or a reliable
          developer to bring your ideas to life, I'm always excited to
          collaborate on meaningful projects.
        </p>

        <p className="mt-10 text-sm tracking-[3px] uppercase text-[#B48947]">
          © {new Date().getFullYear()} Hafsah Haq • All Rights Reserved
        </p>

      </div>
    </div>
    </section>
  );
}