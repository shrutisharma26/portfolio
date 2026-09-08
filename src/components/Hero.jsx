const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[5%] top-[15%] h-[300px] w-[300px] rounded-full bg-purple-500/[0.05] blur-[130px]" />
        <div className="absolute right-[0%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.045] blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[35%] h-[350px] w-[350px] rounded-full bg-white/[0.025] blur-[130px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

        {/* LEFT */}
        <div className="fade-up">

          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-white/30" />

            <p className="text-xs uppercase tracking-[0.3em] text-white/40 sm:text-sm">
              Software Developer · AI/ML Enthusiast
            </p>
          </div>

          <h1 className="fade-up-delay-1 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[6.8rem]">
            Building
            <br />
            <span className="text-white/35">
              intelligent
            </span>
            <br />
            things.
          </h1>

          <p className="fade-up-delay-2 mt-9 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            I'm Shruti Sharma, a Data Science Engineering student at IIT
            Mandi who enjoys turning ideas into intelligent, useful
            software.
          </p>

          <div className="fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition duration-300 hover:scale-105"
            >
              View My Work
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/60 transition duration-300 hover:border-white/50 hover:bg-white/[0.04] hover:text-white"
            >
              Get In Touch
            </a>
          </div>

          {/* QUICK INFO */}
          <div className="fade-up-delay-3 mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/25">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>NLP</span>
            <span>C++</span>
          </div>
        </div>

        {/* RIGHT — AI VISUAL */}
        <div className="relative mx-auto h-[400px] w-full max-w-[520px] sm:h-[500px]">

          {/* GRID FRAME */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/[0.012]" />

          <div
            className="absolute inset-0 rounded-[2.5rem] opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />

          {/* ORBIT */}
          <div className="float absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 sm:h-72 sm:w-72">

            <div className="absolute inset-0 rounded-full border border-white/[0.15]" />

            <div className="absolute inset-7 rounded-full border border-white/[0.1]" />

            <div className="absolute inset-16 rounded-full border border-white/[0.1]" />

            {/* CORE */}
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/80 shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-xl sm:h-32 sm:w-32">

              <div className="text-center">
                <p className="text-4xl font-semibold tracking-[-0.05em]">
                  S.
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/30">
                  AI / ML
                </p>
              </div>

            </div>

            {/* ORBIT NODES */}
            <div className="absolute left-[4%] top-[47%] h-2.5 w-2.5 rounded-full bg-white/60 shadow-[0_0_20px_rgba(255,255,255,0.6)]" />

            <div className="absolute right-[6%] top-[20%] h-2 w-2 rounded-full bg-white/40 shadow-[0_0_16px_rgba(255,255,255,0.5)]" />

            <div className="absolute bottom-[8%] right-[27%] h-1.5 w-1.5 rounded-full bg-white/30" />

          </div>

          {/* TOP CARD */}
          <div className="fade-up-delay-2 absolute right-3 top-6 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-xl sm:right-7 sm:top-8">

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.7)]" />

              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Currently
              </p>
            </div>

            <p className="mt-2 text-sm text-white/70">
              Building & Learning
            </p>

          </div>

          {/* BOTTOM CARD */}
          <div className="fade-up-delay-3 absolute bottom-7 left-3 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-xl sm:bottom-9 sm:left-7">

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Focus
            </p>

            <p className="mt-2 text-sm text-white/70">
              AI · ML · Software
            </p>

          </div>

          {/* CORNER LABEL */}
          <div className="absolute bottom-4 right-5 text-[9px] uppercase tracking-[0.25em] text-white/20">
            2026 · Portfolio
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero