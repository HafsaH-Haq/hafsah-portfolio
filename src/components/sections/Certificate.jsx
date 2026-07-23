import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certificateImg from "../../assets/images/web-development.jpg";
import doodles from "../../assets/images/doodles.jpg";
import TypewriterHeading from "../ui/TypewriterHeading";
import Reveal from "../ui/Reveal";

const certificates = [
  {
    id: "cert-01",
    title: "Web Development",
    issuer: "Ashrei Tech & NASTP Silicon",
    date: "30th September, 2025",
    image: certificateImg,
    category: "Professional Training",
    description: "Awarded for successfully completing the comprehensive Web Development course, covering modern foundational practices, technical stacks, and implementation standards.",
    story: "During this intensive training program at Ashrei Tech and NASTP Silicon, I dove deep into both ends of the modern web stack. I mastered Python and FastAPI for architecting robust, high-performance backends, while simultaneously sharpening my frontend capabilities with responsive design systems. Working closely with industry mentors on real-world application workflows transformed how I build software today—instilling a rigorous discipline for writing clean, scalable code that seamlessly bridges backend business logic with polished, intuitive user interfaces.",
    signatories: {
      left: "Head of Academics, AshreiTech",
      right: "Director Technology, NASTP Silicon"
    }
  }
];

export default function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);
  const constraintsRef = useRef(null);

  return (
    <>
      <section
        id="certificates"
        className="relative overflow-hidden bg-bg-main py-36 isolate transition-colors duration-300"
      >
        {/* Background Decors, Doodles & Grid */}
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
        
        {/* Faded investigation lines & watermarks */}
        <div className="absolute top-20 left-12 w-72 h-72 rounded-full border border-brass/10 pointer-events-none" />
        <div className="absolute bottom-40 right-16 w-96 h-96 rounded-full border border-brass/10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-custom-border pb-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brass" />
              <p className="uppercase tracking-[8px] text-brass text-xs sm:text-sm font-semibold">
                Verified Credentials — Certificates
              </p>
            </div>
            <span className="px-3 py-1 rounded bg-red-700 text-white text-[10px] uppercase tracking-[2px] font-bold shadow-sm">
              AUTHENTICATED
            </span>
          </div>

          <TypewriterHeading
            text="Credentials & Training"
            className="font-serif text-5xl sm:text-6xl text-text-main mb-16"
          />

          {/* Certificate Grid - Matching the wide Project Cards Style */}
          <div className="space-y-12">
            {certificates.map((cert) => (
              <Reveal key={cert.id} delay={0.1}>
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="group cursor-pointer grid lg:grid-cols-12 gap-8 items-center bg-card border-2 border-custom-border p-6 sm:p-10 rounded-2xl shadow-xl hover:border-primary hover:shadow-[0_0_30px_var(--primary)] transition-all duration-500 relative overflow-hidden"
                >
                  {/* Stamp */}
                  <div className="absolute right-6 top-6 rotate-[-10deg] border-2 border-primary text-primary px-3 py-1 text-[10px] tracking-[3px] font-bold opacity-80 uppercase z-20 pointer-events-none bg-card/90">
                    VERIFIED
                  </div>

                  {/* Pinned Tape Element */}
                  <div className="absolute -top-4 left-12 w-28 h-7 bg-yellow-200/80 dark:bg-yellow-600/30 rotate-[-4deg] border border-yellow-300/50 shadow-sm z-20" />

                  {/* Image Container with Stack Effect */}
                  <div className="lg:col-span-7 relative">
                    <div className="absolute inset-0 bg-custom-border translate-x-3 translate-y-3 rounded-xl pointer-events-none" />
                    <div className="relative border-2 border-custom-border bg-surface p-2 rounded-xl shadow-inner overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-72 sm:h-96 object-cover rounded-lg group-hover:scale-[1.02] transition-all duration-700"
                      />
                      <div className="absolute bottom-4 left-4 bg-card/90 border border-custom-border px-3 py-1 text-xs font-mono text-text-main shadow-sm">
                        CREDENTIAL #{cert.id}
                      </div>
                    </div>
                  </div>

                  {/* Content Container with Story */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase tracking-[3px] text-brass font-semibold">
                        {cert.issuer}
                      </span>
                    </div>

                    <h3 className="font-serif text-4xl sm:text-5xl text-text-main group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                      {cert.story}
                    </p>

                    {/* Timeline / Statistics Strip */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-custom-border text-xs font-mono text-ink-soft">
                      <div>
                        <span className="block text-brass font-semibold uppercase tracking-wider">Category</span>
                        <span className="text-sm font-bold text-text-main">{cert.category}</span>
                      </div>
                      <div>
                        <span className="block text-brass font-semibold uppercase tracking-wider">Issued Date</span>
                        <span className="text-sm font-bold text-text-main">{cert.date}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-4">
                      <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Inspect Certificate →
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* FULL SCREEN CERTIFICATE POPUP MODAL WITH DRAGGABLE IMAGE & SMOOTH ANIMATIONS */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-3xl border-2 border-custom-border overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl relative text-text-main my-auto"
            >
              {/* Modal Header */}
              <div className="bg-surface text-text-main px-6 sm:px-10 py-5 flex items-center justify-between border-b border-custom-border shrink-0">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                  <span className="ml-4 font-mono text-xs uppercase tracking-widest text-brass">
                    CREDENTIAL RECORD // {selectedCert.id}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-xs uppercase font-bold tracking-widest bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded transition-colors cursor-pointer"
                >
                  Close File [X]
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-12 overflow-y-auto space-y-10">
                {/* Draggable Certificate Container */}
                <div 
                  ref={constraintsRef}
                  className="relative border-2 border-custom-border bg-surface p-3 rounded-2xl shadow-inner overflow-hidden flex items-center justify-center min-h-[350px] sm:min-h-[450px]"
                >
                  <motion.img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    whileTap={{ cursor: "grabbing" }}
                    className="w-full h-auto max-h-[60vh] object-contain rounded-xl cursor-grab select-none shadow-lg"
                  />
                  <div className="absolute bottom-4 right-4 bg-card/90 border border-custom-border px-3 py-1 rounded text-[10px] font-mono text-brass pointer-events-none">
                    💡 Drag image to inspect details
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pb-8 border-b border-custom-border">
                  <div className="md:col-span-2">
                    <p className="uppercase tracking-[6px] text-brass text-xs font-bold mb-2">
                      Verified Training Record
                    </p>
                    <h2 className="font-serif text-4xl sm:text-5xl text-text-main">
                      {selectedCert.title}
                    </h2>
                  </div>
                  <div className="bg-surface p-4 rounded-xl border border-custom-border space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-ink-soft">Issuer:</span>
                      <span className="font-bold text-text-main">{selectedCert.issuer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-soft">Issued:</span>
                      <span className="font-bold text-text-main">{selectedCert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="uppercase tracking-[4px] text-brass text-sm font-bold">
                    The Journey & Story
                  </h3>
                  <p className="text-ink-soft leading-8 text-base sm:text-lg">
                    {selectedCert.story}
                  </p>
                  <p className="text-ink-soft leading-8 text-base sm:text-lg">
                    Beyond the core curriculum, this credential marks a pivotal turning point where I transitioned from writing isolated scripts to engineering production-ready applications. It solidified my understanding of system security, API routing paradigms, and modular component architecture—milestones that continue to fuel my professional growth today.
                  </p>
                </div>

                <div className="pt-6 border-t border-custom-border grid sm:grid-cols-2 gap-4 text-xs font-mono text-ink-soft">
                  <div className="bg-surface p-4 rounded-xl border border-custom-border">
                    <span className="block text-brass font-semibold mb-1 uppercase tracking-wider">Left Signatory</span>
                    <span className="text-text-main font-bold">{selectedCert.signatories.left}</span>
                  </div>
                  <div className="bg-surface p-4 rounded-xl border border-custom-border">
                    <span className="block text-brass font-semibold mb-1 uppercase tracking-wider">Right Signatory</span>
                    <span className="text-text-main font-bold">{selectedCert.signatories.right}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}