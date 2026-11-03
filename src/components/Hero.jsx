
import { motion } from "framer-motion";

const Hero = () => {
  const textReveal = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] top-[5%] h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[140px]"
        />

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[10%] h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[160px]"
        />

        <div className="absolute bottom-[-10%] left-[30%] h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          {/* STATUS */}
          <motion.div
            variants={textReveal}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

            <span className="text-xs text-white/60">
              Data Science Engineering · IIT Mandi
            </span>
          </motion.div>

          {/* INTRO */}
          <motion.p
            variants={textReveal}
            className="mb-4 text-sm tracking-wide text-white/40"
          >
            Hey there! I'm
          </motion.p>

          <motion.h1
            variants={textReveal}
            className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]"
          >
            Shruti
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Sharma.
            </span>
          </motion.h1>

          {/* ROLE */}
          <motion.div
            variants={textReveal}
            className="mt-7 flex flex-wrap items-center gap-2 text-lg font-medium sm:text-2xl"
          >
            <span className="text-white/50">I build</span>

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              intelligent systems.
            </span>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            variants={textReveal}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg"
          >
            I'm a Data Science Engineering student at IIT Mandi passionate
            about machine learning, NLP, and AI-powered applications.
            I enjoy turning complex ideas into practical software.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={textReveal}
            className="mt-9 flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="group rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_rgba(99,102,241,0.2)] transition duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]"
            >
              Explore My Projects
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/70 backdrop-blur-xl transition hover:border-purple-400/40 hover:bg-white/[0.06] hover:text-white"
            >
              Let's Connect ↗
            </motion.a>
          </motion.div>

          {/* TECH STACK */}
          <motion.div variants={textReveal} className="mt-12">
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/30">
              Technologies I work with
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Machine Learning",
                "NLP",
                "LLMs",
                "FastAPI",
                "C++",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/50 transition hover:border-purple-400/30 hover:text-purple-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          {/* MAIN FRAME */}
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="relative min-h-[400px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#111426] via-[#0b0b15] to-[#10152b] p-5 shadow-2xl sm:min-h-[480px] sm:p-8"
          >
            {/* GRID BACKGROUND */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "35px 35px",
              }}
            />

            {/* GLOW */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />

            {/* TOP BAR */}
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Developer Profile
              </span>
            </div>

            {/* CENTER PROFILE */}
            <div className="relative flex flex-col items-center py-10 sm:py-14">
              {/* ORBIT */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute top-12 h-52 w-52 rounded-full border border-purple-400/20 sm:h-60 sm:w-60"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute top-16 h-44 w-44 rounded-full border border-blue-400/20 sm:h-52 sm:w-52"
              />

              {/* PROFILE PHOTO */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="relative z-10 h-36 w-36 overflow-hidden rounded-full border-2 border-purple-400/50 bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-1 shadow-[0_0_70px_rgba(139,92,246,0.35)] sm:h-44 sm:w-44"
              >
                <img
                  src="/images/shruti.jpg"
                  alt="Shruti Sharma"
                  className="h-full w-full rounded-full object-cover object-center"
                />
              </motion.div>

              {/* FLOATING BADGES */}
              {[
                { label: "Python", position: "left-2 top-20", color: "text-blue-300", delay: 0 },
                { label: "AI / ML", position: "right-2 top-24", color: "text-purple-300", delay: 0.5 },
                { label: "NLP", position: "bottom-8 left-5", color: "text-cyan-300", delay: 1 },
                { label: "FastAPI", position: "bottom-5 right-5", color: "text-blue-300", delay: 1.5 },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 3,
                    delay: badge.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${badge.position} rounded-xl border border-white/10 bg-black/70 px-3 py-2 shadow-xl backdrop-blur-xl`}
                >
                  <span className={`text-xs font-medium ${badge.color}`}>
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CODE CARD */}
            <motion.div
              whileHover={{ borderColor: "rgba(139,92,246,0.35)" }}
              className="relative rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl sm:p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs text-white/40">
                  developer.py
                </span>

                <span className="text-[10px] text-emerald-400">
                  ● Python
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs sm:text-sm">
                <p>
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-blue-300">Developer</span>
                  <span className="text-white/50">:</span>
                </p>

                <p className="pl-4 text-white/50">
                  name = <span className="text-emerald-300">"Shruti Sharma"</span>
                </p>

                <p className="pl-4 text-white/50">
                  focus = <span className="text-emerald-300">"AI + ML"</span>
                </p>

                <p className="pl-4 text-white/50">
                  building = <span className="text-emerald-300">"Something useful"</span>
                </p>
              </div>
            </motion.div>

            {/* BOTTOM LABEL */}
            <div className="relative mt-5 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Curious mind. Constant builder.
              </span>

              <span className="text-xs text-purple-300">
                ✦ 2026
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
