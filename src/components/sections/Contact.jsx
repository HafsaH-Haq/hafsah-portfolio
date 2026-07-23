import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { 
  FaPaperPlane, 
  FaCheck, 
  FaEnvelope, 
  FaLocationDot, 
  FaLaptopCode, 
  FaGithub, 
  FaLinkedinIn 
} from "react-icons/fa6";
import code from "../../assets/images/code.jpg";
import doodles from "../../assets/images/doodles.jpg";

export default function Contact() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error

  // Typewriter states
  const [headingText, setHeadingText] = useState("");
  const [caseClosedText, setCaseClosedText] = useState("");
  const fullHeading = "FINAL REPORT";
  const fullCaseClosed = "CASE CLOSED";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullHeading.length) {
        setHeadingText(fullHeading.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let j = 0;
    const timer2 = setInterval(() => {
      if (j <= fullCaseClosed.length) {
        setCaseClosedText(fullCaseClosed.slice(0, j));
        j++;
      } else {
        clearInterval(timer2);
      }
    }, 120);
    return () => clearInterval(timer2);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormStatus("success");
          form.current.reset();
        },
        () => {
          setFormStatus("error");
          setTimeout(() => setFormStatus("idle"), 4000);
        }
      );
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F8F4EC] dark:bg-[#121212] py-36 transition-colors duration-300">
      {/* Background Doodles & Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 dark:opacity-5"
        style={{
          backgroundImage: `url(${doodles})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1000px",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute bottom-28 right-16 text-[#2F4F46]/10 dark:text-[#4E8074]/10 text-8xl pointer-events-none">
        ↗
      </div>

      <div className="absolute top-1/2 right-0 text-[#B48947]/15 dark:text-[#D4AF37]/10 text-6xl rotate-12 pointer-events-none">
        ⌘
      </div>

      {/* Giant Faded Stamp Animation */}
      <div className="absolute top-20 right-10 md:right-32 pointer-events-none z-0 opacity-10 dark:opacity-5 animate-pulse select-none">
        <div className="border-8 border-red-800 dark:border-red-500 text-red-800 dark:text-red-400 px-8 py-4 font-serif text-4xl md:text-6xl tracking-[8px] uppercase rotate-[-12deg] rounded-lg">
          CASE CLOSED
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20">
        <div className="text-center md:text-left mb-16">
          <p className="uppercase tracking-[8px] text-[#B48947] dark:text-[#D4AF37] text-xs font-mono font-bold mb-3">
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </p>
          <p className="uppercase tracking-[8px] text-[#B48947] dark:text-[#D4AF37] text-sm font-bold">
            CASE FILE #007
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-[#1F1F1F] dark:text-white my-4 tracking-wide min-h-[1.1em]">
            {headingText}
            <span className="animate-pulse text-[#00bcd4]">_</span>
          </h2>
          <p className="uppercase tracking-[8px] text-[#B48947] dark:text-[#D4AF37] text-xs font-mono font-bold mb-6">
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-8">
            The investigation ends here. If you've made it this far, you've already explored my work, reviewed my technical evidence, and survived the final operation. Now it's your turn. Let's create the next successful case together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE: Dossier / Evidence */}
          <div className="space-y-12">
            <div className="relative bg-[#F7F2E9] dark:bg-[#1E1E1E] border-2 border-[#D8CDBA] dark:border-[#333] p-6 rounded-2xl shadow-xl overflow-hidden group hover:border-[#00bcd4] dark:hover:border-[#00bcd4] transition-colors duration-300">
              <div className="absolute top-3 right-3 bg-red-700/10 text-red-700 dark:text-red-400 px-3 py-1 font-mono text-[10px] tracking-[3px] uppercase font-bold border border-red-700/20 dark:border-red-500/20">
                CONFIDENTIAL
              </div>
              <p className="font-mono text-xs uppercase tracking-[4px] text-[#B48947] dark:text-[#D4AF37] mb-4">
                FINAL CASE REPORT
              </p>
              <img
                src={code}
                alt="Developer Workspace"
                className="w-full h-64 object-cover rounded-xl border border-[#D8CDBA] dark:border-[#333] shadow-md transition-all duration-300 group-hover:scale-[1.01]"
              />
              <div className="mt-6 grid grid-cols-2 gap-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                <div><span className="text-gray-400 block">Name:</span> <strong className="text-[#1F1F1F] dark:text-white">Hafsah Haq</strong></div>
                <div><span className="text-gray-400 block">Status:</span> <strong className="text-[#2F4F46] dark:text-[#4E8074]">Available for Hire</strong></div>
                <div><span className="text-gray-400 block">Location:</span> <strong className="text-[#1F1F1F] dark:text-white">Karachi, PK</strong></div>
                <div><span className="text-gray-400 block">Response Time:</span> <strong className="text-[#B48947] dark:text-[#D4AF37]">&lt; 24 Hours</strong></div>
              </div>
            </div>

            {/* Contact Dossier Evidence List */}
            <div className="space-y-4 font-mono">
              <p className="uppercase tracking-[5px] text-xs text-[#B48947] dark:text-[#D4AF37] font-bold">
                CONTACT DOSSIER
              </p>

              <div className="bg-[#F7F2E9] dark:bg-[#1E1E1E] border border-[#D8CDBA] dark:border-[#333] p-4 rounded-xl flex items-center justify-between shadow-sm hover:border-[#00bcd4] dark:hover:border-[#00bcd4] transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#00bcd4] text-lg" />
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Evidence #01 • Email</span>
                    <a href="mailto:hafsah.haq@gmail.com" className="text-sm text-[#1F1F1F] dark:text-gray-200 hover:text-[#B48947] dark:hover:text-[#D4AF37] font-sans font-medium transition">
                      hafsah.haq@gmail.com
                    </a>
                  </div>
                </div>
                <span className="text-xs text-[#B48947] dark:text-[#D4AF37] bg-[#EFE8DC] dark:bg-[#252525] px-2.5 py-1 rounded">VERIFIED</span>
              </div>

              <div className="bg-[#F7F2E9] dark:bg-[#1E1E1E] border border-[#D8CDBA] dark:border-[#333] p-4 rounded-xl flex items-center justify-between shadow-sm hover:border-[#00bcd4] dark:hover:border-[#00bcd4] transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <FaLocationDot className="text-[#00bcd4] text-lg" />
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Evidence #02 • Location</span>
                    <span className="text-sm text-[#1F1F1F] dark:text-gray-200 font-sans font-medium">Karachi, Pakistan</span>
                  </div>
                </div>
                <span className="text-xs text-[#B48947] dark:text-[#D4AF37] bg-[#EFE8DC] dark:bg-[#252525] px-2.5 py-1 rounded">PKT</span>
              </div>

              <div className="bg-[#F7F2E9] dark:bg-[#1E1E1E] border border-[#D8CDBA] dark:border-[#333] p-4 rounded-xl flex items-center justify-between shadow-sm hover:border-[#00bcd4] dark:hover:border-[#00bcd4] transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <FaLaptopCode className="text-[#00bcd4] text-xl" />
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Evidence #03 • Availability</span>
                    <span className="text-sm text-[#2F4F46] dark:text-[#4E8074] font-sans font-bold">Open for Full-Stack & Freelance Roles</span>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse" />
              </div>
            </div>

            {/* Classified Badges / Socials */}
            <div className="space-y-4">
              <p className="uppercase tracking-[5px] text-xs text-[#B48947] dark:text-[#D4AF37] font-mono font-bold">
                SECURE CHANNELS
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://github.com/HafsaH-Haq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F7F2E9] dark:bg-[#1E1E1E] border border-[#D8CDBA] dark:border-[#333] p-4 rounded-xl flex items-center justify-between shadow-sm hover:border-[#00bcd4] dark:hover:border-[#00bcd4] hover:shadow-md transition group font-mono"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub className="text-2xl text-[#1F1F1F] dark:text-white group-hover:text-[#00bcd4] transition-colors" />
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Repository</span>
                  </div>
                  <span className="text-[#00bcd4] group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/hafsah-haq-6a407237b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F7F2E9] dark:bg-[#1E1E1E] border border-[#D8CDBA] dark:border-[#333] p-4 rounded-xl flex items-center justify-between shadow-sm hover:border-[#00bcd4] dark:hover:border-[#00bcd4] hover:shadow-md transition group font-mono"
                >
                  <div className="flex items-center gap-3">
                    <FaLinkedinIn className="text-2xl text-[#1F1F1F] dark:text-white group-hover:text-[#00bcd4] transition-colors" />
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Network</span>
                  </div>
                  <span className="text-[#00bcd4] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Investigation Report Form */}
          <div
            className="
              bg-[#F7F2E9]
              dark:bg-[#1E1E1E]
              rounded-2xl
              border
              border-[#D8CDBA]
              dark:border-[#333]
              shadow-xl
              p-8
              md:p-10
              relative
              hover:border-[#00bcd4]
              dark:hover:border-[#00bcd4]
              transition-colors
              duration-300
            "
          >
            <div className="border-b border-[#D8CDBA] dark:border-[#333] pb-4 mb-8">
              <p className="uppercase tracking-[5px] text-[#B48947] dark:text-[#D4AF37] text-xs font-mono font-bold mb-1">
                ━━━━━━━━━━━━━━━━━━━━
              </p>
              <h3 className="font-serif text-2xl text-[#1F1F1F] dark:text-white">REPORT DETAILS</h3>
              <p className="uppercase tracking-[5px] text-[#B48947] dark:text-[#D4AF37] text-xs font-mono font-bold mt-1">
                ━━━━━━━━━━━━━━━━━━━━
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-[#2F4F46] dark:text-[#4E8074] mb-2 font-mono text-xs uppercase tracking-wider">
                  Reporting Officer
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  disabled={formStatus === "success"}
                  className="w-full rounded-xl border border-[#D8CDBA] dark:border-[#333] px-5 py-4 outline-none bg-white dark:bg-[#252525] text-gray-900 dark:text-white transition focus:border-[#00bcd4] hover:border-[#00bcd4] font-mono text-sm"
                />
              </div>

              <div>
                <label className="block text-[#2F4F46] dark:text-[#4E8074] mb-2 font-mono text-xs uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@email.com"
                  disabled={formStatus === "success"}
                  className="w-full rounded-xl border border-[#D8CDBA] dark:border-[#333] px-5 py-4 outline-none bg-white dark:bg-[#252525] text-gray-900 dark:text-white transition focus:border-[#00bcd4] hover:border-[#00bcd4] font-mono text-sm"
                />
              </div>

              <div>
                <label className="block text-[#2F4F46] dark:text-[#4E8074] mb-2 font-mono text-xs uppercase tracking-wider">
                  Case Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Website Development"
                  disabled={formStatus === "success"}
                  className="w-full rounded-xl border border-[#D8CDBA] dark:border-[#333] px-5 py-4 outline-none bg-white dark:bg-[#252525] text-gray-900 dark:text-white transition focus:border-[#00bcd4] hover:border-[#00bcd4] font-mono text-sm"
                />
              </div>

              <div>
                <label className="block text-[#2F4F46] dark:text-[#4E8074] mb-2 font-mono text-xs uppercase tracking-wider">
                  Mission Details
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell me everything about your project..."
                  disabled={formStatus === "success"}
                  className="w-full rounded-xl border border-[#D8CDBA] dark:border-[#333] px-5 py-4 outline-none bg-white dark:bg-[#252525] text-gray-900 dark:text-white resize-none transition focus:border-[#00bcd4] hover:border-[#00bcd4] font-mono text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending" || formStatus === "success"}
                className={`
                  w-full py-4 rounded-xl font-mono text-xs uppercase tracking-[3px] font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg
                  ${
                    formStatus === "success"
                      ? "bg-green-700 text-white cursor-default"
                      : formStatus === "sending"
                      ? "bg-[#234039] text-white/80 cursor-wait animate-pulse"
                      : "bg-[#2F4F46] dark:bg-[#3B6359] text-white hover:bg-[#234039] dark:hover:bg-[#2F4F46] hover:scale-[1.01]"
                  }
                `}
              >
                {formStatus === "idle" && (
                  <>
                    <span>Transmit Secure Report</span>
                    <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-1" />
                  </>
                )}
                {formStatus === "sending" && "Encrypting & Sending..."}
                {formStatus === "success" && (
                  <>
                    <FaCheck />
                    <span>✓ REPORT TRANSMITTED</span>
                  </>
                )}
                {formStatus === "error" && "Transmission Failed. Retry?"}
              </button>

              {formStatus === "success" && (
                <p className="text-center font-mono text-xs text-green-800 dark:text-green-300 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 py-2 rounded-lg mt-2">
                  I'll respond within 24 hours.
                </p>
              )}
            </form>

            <div className="mt-8 pt-6 border-t border-[#D8CDBA] dark:border-[#333] font-mono text-xs text-gray-600 dark:text-gray-400">
              <span className="text-[#00bcd4] uppercase tracking-widest block mb-1">Security Notice</span>
              All communications are encrypted and channeled directly to the developer terminal.
            </div>

          </div>

        </div>

        {/* Footer Section */}
        <div className="mt-32 border-t border-[#D8CDBA] dark:border-[#333] pt-14 text-center">
          <p className="font-mono text-xs tracking-[6px] text-[#00bcd4] font-bold mb-3">
            ━━━━━━━━━━━━━━━━━━━━
          </p>
          <p className="font-serif text-3xl text-[#1F1F1F] dark:text-white tracking-wide min-h-[1.2em]">
            {caseClosedText}
            <span className="animate-pulse text-[#00bcd4]">_</span>
          </p>
          <p className="font-mono text-xs tracking-[6px] text-[#00bcd4] font-bold mt-3 mb-6">
            ━━━━━━━━━━━━━━━━━━━━
          </p>

          <p className="text-gray-700 dark:text-gray-300 font-mono text-sm max-w-xl mx-auto leading-relaxed">
            Thank you for reviewing this investigation. If you'd like to begin another one, I'm only one message away.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center space-y-3">
            <span 
              className="font-['Caveat'] text-4xl text-[#00bcd4] transform rotate-[-4deg]"
            >
              — Hafsah Haq
            </span>
            <p className="font-mono text-[11px] tracking-[4px] uppercase text-[#00bcd4] pt-4 font-bold">
              © {new Date().getFullYear()} Hafsah Haq • Designed & Developed by Hafsah Haq
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}