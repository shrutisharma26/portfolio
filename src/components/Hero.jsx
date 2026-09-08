const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[280px] w-[280px] rounded-full bg-purple-500/[0.04] blur-[120px]" />

        <div className="absolute right-[5%] top-[30%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.04] blur-[140px]" />

        <div className="absolute bottom-[5%] left-[40%] h-[250px] w-[250px] rounded-full bg-white/[0.03] blur-[100px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="fade-up">

          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40 sm:text-sm">
            Software Developer · AI/ML Enthusiast
          </p>

          <h1 className="fade-up-delay-1 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Hi, I'm
            <br />
            <span className="text-white/40">
              Shruti Sharma.
            </span>
          </h1>

          <p className="fade-up-delay-2 mt-8 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            I love building intelligent tools, experimenting with new
            technologies, and turning ideas into useful experiences.
          </p>

          <div className="fade-up-delay-3 mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition duration-300 hover:scale-105"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/50 hover:bg-white/[0.04]"
            >
              Get In Touch
            </a>

          </div>
        </div>


        {/* RIGHT SIDE — AI VISUAL */}
        <div className="relative mx-auto h-[420px] w-full max-w-[500px] md:h-[500px]">

          {/* Large background frame */}
          <div className="absolute inset-4 rounded-[2rem] border border-white/10 bg-white/[0.015]" />

          {/* Grid */}
          <div
            className="absolute inset-4 rounded-[2rem] opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '45px 45px',
            }}
          />

          {/* Central AI core */}
          <div className="float absolute left-1/2 top-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 shadow-2xl backdrop-blur-xl sm:h-56 sm:w-56">

            {/* Inner rings */}
            <div className="absolute h-36 w-36 rounded-full border border-white/10" />

            <div className="absolute h-24 w-24 rounded-full border border-white/10" />

            <div className="absolute h-12 w-12 rounded-full bg-white/[0.08] blur-md" />

            <div className="relative text-center">
              <p className="text-4xl font-semibold tracking-tight">
                AI
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-white/30">
                Build · Learn · Create
              </p>
            </div>

          </div>


          {/* Top floating card */}
          <div className="fade-up-delay-2 absolute right-2 top-8 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl sm:right-6">

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Currently
            </p>

            <p className="mt-1 text-sm text-white/70">
              Building & Learning
            </p>

          </div>


          {/* Bottom floating card */}
          <div className="fade-up-delay-3 absolute bottom-10 left-2 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl sm:left-6">

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Focus
            </p>

            <p className="mt-1 text-sm text-white/70">
              AI · ML · Software
            </p>

          </div>


          {/* Small nodes */}
          <div className="absolute left-[18%] top-[25%] h-2 w-2 rounded-full bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

          <div className="absolute bottom-[25%] right-[18%] h-2 w-2 rounded-full bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

          <div className="absolute right-[25%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/30" />

        </div>

      </div>
    </section>
  )
}

export default Hero