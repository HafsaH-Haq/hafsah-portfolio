import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaXmark,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificate", label: "Certificate" },
  { id: "game", label: "Game" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);

  // ----------------------------
  // Shrink on scroll
  // ----------------------------
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ----------------------------
  // Active section observer
  // ----------------------------
  useEffect(() => {
    const sections = navLinks
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // ----------------------------
  // Body scroll lock
  // ----------------------------
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // ----------------------------
  // ESC to close
  // ----------------------------
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // ----------------------------
  // Click outside
  // ----------------------------
  useEffect(() => {
    const handleClick = (e) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 z-50 w-full flex justify-center px-4 pt-4"
      >
        <motion.nav
          animate={{
            width: isScrolled ? "92%" : "96%",
            paddingTop: isScrolled ? 10 : 16,
            paddingBottom: isScrolled ? 10 : 16,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="max-w-7xl rounded-2xl border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
        >
          <div className="flex items-center justify-between px-6">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={() => setActiveSection("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold tracking-wide text-gray-900 dark:text-white"
            >
              Hafsah<span className="text-cyan-500">.</span>
            </motion.a>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className="relative px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <span
                      className={`relative z-10 ${
                        activeSection === item.id
                          ? "text-cyan-500 font-semibold"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {item.label}
                    </span>

                    {activeSection === item.id && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-full bg-cyan-500/10 border border-cyan-400/30"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                onClick={() => setActiveSection("projects")}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-500 transition"
              >
                Open Case
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
              >
                Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/HafsaH-Haq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-xl text-gray-700 dark:text-gray-300"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/hafsah-haq-6a407237b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-xl text-gray-700 dark:text-gray-300"
              >
                <FaLinkedin />
              </motion.a>
            </div>

            {/* Mobile Button */}
            <button
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-2xl text-gray-900 dark:text-white"
            >
              <FaBars />
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-lg"
            />

            {/* Panel */}
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] flex items-center justify-center"
            >
              <div className="relative w-[90%] max-w-md rounded-3xl border border-white/10 bg-zinc-900/90 backdrop-blur-3xl p-8 max-h-[90vh] overflow-y-auto">
                <button
                  onClick={closeMenu}
                  aria-label="Close Menu"
                  className="absolute top-5 right-5 text-2xl text-white"
                >
                  <FaXmark />
                </button>

                <ul className="flex flex-col items-center gap-4 mt-6">
                  {navLinks.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.05,
                        },
                      }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={() => {
                          setActiveSection(item.id);
                          closeMenu();
                        }}
                        className={`text-xl font-semibold transition ${
                          activeSection === item.id
                            ? "text-cyan-400"
                            : "text-white"
                        }`}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex justify-center gap-5">
                  <ThemeToggle />

                  <a
                    href="https://github.com/HafsaH-Haq"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-2xl text-white"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/hafsah-haq-6a407237b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-2xl text-white"
                  >
                    <FaLinkedin />
                  </a>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="#projects"
                    onClick={() => {
                      setActiveSection("projects");
                      closeMenu();
                    }}
                    className="rounded-full bg-cyan-500 py-3 text-center font-semibold text-white shadow-md"
                  >
                    Open Case
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="rounded-full border border-cyan-500 py-3 text-center font-semibold text-cyan-400"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}