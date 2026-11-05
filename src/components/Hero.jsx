
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 md:px-16"
    >
      {/* Dark green ambient projections */}
      <div className="pointer-events-none absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-[#C8FF00]/[0.06] blur-[130px]" />
      <div className="pointer-events-none absolute right-[5%] top-[25%] h-96 w-96 rounded-full bg-[#1B5E40]/[0.16] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-[35%] h-72 w-72 rounded-full bg-[#C8FF00]/[0.035] blur-[130px]" />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
      >
        {/* Text content */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 min-w-0"
        >
          <p className="mb-6 font-mono text-xs tracking-[0.25em] text-[#C8FF00]/80 sm:text-sm">
            DATA SCIENCE <span className="text-white/30">·</span> AI{" "}
            <span className="text-white/30">·</span> MACHINE LEARNING
          </p>

          <h1 className="break-words text-6xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl">
            Hi, I&apos;m
            <br />
            <span className="text-[#C8FF00] [text-shadow:0_0_35px_rgba(200,255,0,0.18)]">
              Shruti Sharma.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            A Data Science Engineering student at IIT Mandi, fascinated by
            intelligent systems, machine learning, and building ideas that
            make technology feel a little more human.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-[#C8FF00]/40 bg-[#C8FF00] px-7 py-3.5 text-sm font-semibold text-[#080B07] shadow-[0_0_30px_rgba(200,255,0,0.12)] transition-shadow hover:shadow-[0_0_40px_rgba(200,255,0,0.25)]"
            >
              Explore my work ↗
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm text-white/75 backdrop-blur-xl transition-colors hover:border-[#C8FF00]/30 hover:text-[#C8FF00]"
            >
              Get in touch
            </motion.a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4 text-xs text-white/50">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#C8FF00] shadow-[0_0_12px_rgba(200,255,0,0.6)]" />
              Currently learning & building
            </span>

            <span className="text-[#C8FF00]/50">✦</span>

            <span>IIT Mandi · India</span>
          </div>
        </motion.div>

        {/* Floating holographic profile */}
        <motion.div
          style={{
            y: imageY,
            rotate: imageRotate,
            transformPerspective: 1200,
          }}
          initial={{ opacity: 0, scale: 0.9, rotateY: 12 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          {/* Neon glow behind profile */}
          <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-[#C8FF00]/20 via-[#16452E]/30 to-transparent opacity-80 blur-3xl" />

          {/* Outer holographic frame */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-[2.5rem] border border-[#C8FF00]/20 bg-gradient-to-br from-white/[0.08] via-white/[0.025] to-[#C8FF00]/[0.04] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.5),0_0_35px_rgba(200,255,0,0.04)] backdrop-blur-2xl sm:p-4"
          >
            {/* Fine frame highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.08] via-transparent to-[#C8FF00]/[0.08]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101719]">
              <img
                src="/images/shruti.png"
                alt="Shruti Sharma"
                className="aspect-[4/5] w-full object-cover object-center"
              />

              {/* Holographic reflection */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#C8FF00]/[0.08] via-transparent to-white/[0.12] mix-blend-screen" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050708]/70 to-transparent" />

              {/* Technical corner markers */}
              <div className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-[#C8FF00]/70" />
              <div className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r border-t border-[#C8FF00]/70" />
              <div className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[#C8FF00]/70" />
              <div className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[#C8FF00]/70" />
            </div>

            {/* Floating focus label */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-5 top-[18%] rounded-2xl border border-[#C8FF00]/20 bg-[#090D0C]/85 px-4 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:-left-8"
            >
              <p className="font-mono text-[10px] tracking-widest text-[#C8FF00]/70">
                CURRENT FOCUS
              </p>
              <p className="mt-1 text-sm text-white/90">AI & Generative AI</p>
            </motion.div>

            {/* Floating achievement label */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -right-3 rounded-2xl border border-[#C8FF00]/20 bg-[#090D0C]/85 px-4 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:-right-7"
            >
              <p className="font-mono text-[10px] tracking-widest text-[#C8FF00]/70">
                RECENT HIGHLIGHT
              </p>
              <p className="mt-1 text-sm text-white/90">HACK60 · 2nd Place ✦</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#C8FF00]/60 md:flex"
      >
        <span className="font-mono text-[9px] tracking-[0.25em]">SCROLL</span>
        <span className="text-lg">↓</span>
      </motion.a>
    </section>
  );
}
