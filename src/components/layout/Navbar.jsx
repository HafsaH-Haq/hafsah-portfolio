import { motion } from "framer-motion";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}

          <div>
            <h1 className="font-heading text-3xl text-forest">
              HH
            </h1>

            <p className="font-doodle text-sm -mt-2 text-stamp">
              Case File
            </p>
          </div>

          {/* Navigation */}

          <nav className="hidden md:flex items-center gap-10">
            <a href="#about" className="hover:text-forest transition">
              About
            </a>

            <a href="#skills" className="hover:text-forest transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-forest transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-forest transition">
              Contact
            </a>
          </nav>

          {/* Right side actions */}

          <div className="flex items-center gap-4">
            <a
              href="#game"
              className="flex items-center gap-2 border border-brass text-brass px-5 py-2 rounded-full hover:bg-brass hover:text-paper transition"
            >
              <FaMagnifyingGlass className="text-sm" />
              Play
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-forest px-5 py-2 rounded-full hover:bg-forest hover:text-paper transition"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;