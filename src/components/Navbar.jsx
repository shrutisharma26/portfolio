
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.12] bg-[#090D0C]/75 px-5 py-3 shadow-[0_8px_35px_rgba(0,0,0,0.4),0_0_25px_rgba(200,255,0,0.025)] backdrop-blur-2xl sm:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="whitespace-nowrap text-xl font-bold tracking-tight text-white sm:text-2xl"
        >
          Shruti<span className="text-[#C8FF00]">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-xs text-white/60 transition-colors duration-300 hover:text-[#C8FF00] xl:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop contact button */}
        <a
          href="#contact"
          className="hidden rounded-full border border-[#C8FF00]/30 bg-[#C8FF00]/[0.06] px-5 py-2 text-xs text-[#C8FF00] transition-all duration-300 hover:border-[#C8FF00]/70 hover:bg-[#C8FF00]/[0.12] hover:shadow-[0_0_20px_rgba(200,255,0,0.08)] lg:block"
        >
          Let&apos;s connect ↗
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-[#C8FF00] transition-colors hover:bg-[#C8FF00]/10 lg:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/[0.12] bg-[#090D0C]/90 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/65 transition-colors hover:bg-[#C8FF00]/[0.06] hover:text-[#C8FF00]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
