
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#050708] px-5 pb-8 pt-12 sm:px-8 md:px-16">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-[#C8FF00]/[0.06] blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Glass footer */}
        <div className="group relative flex flex-col items-center justify-between gap-5 overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-r from-[#111718]/95 via-[#0D1213]/95 to-[#111718]/95 px-6 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#C8FF00]/20 sm:flex-row sm:px-8">
          {/* Subtle glow */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#C8FF00]/[0.05] blur-3xl transition-all duration-500 group-hover:bg-[#C8FF00]/[0.1]" />

          <a
            href="#home"
            className="relative font-sans text-xl font-bold tracking-tight text-[#F2F5F3] transition-colors hover:text-[#C8FF00]"
          >
            Shruti Sharma<span className="text-[#C8FF00]">.</span>
          </a>

          <p className="relative text-center text-xs text-[#A1AAA5] sm:text-sm">
            Designed with curiosity & built with code.
          </p>

          <a
            href="#home"
            className="relative font-mono text-xs tracking-widest text-[#C8FF00] transition-transform hover:-translate-y-1"
          >
            BACK TO TOP ↑
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-center font-mono text-[10px] tracking-wider text-[#75817B]">
          © {new Date().getFullYear()} SHRUTI SHARMA · ALL RIGHTS RESERVED
        </p>

        <div className="mt-4 flex justify-center">
          <span className="flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-[#75817B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] shadow-[0_0_8px_rgba(200,255,0,0.6)]" />
            ALWAYS CURIOUS. ALWAYS BUILDING.
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
