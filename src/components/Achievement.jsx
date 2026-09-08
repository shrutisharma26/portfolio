import useReveal from '../useReveal'

const Achievement = () => {
  const revealRef = useReveal()

  return (
    <section
      id="achievement"
      ref={revealRef}
      className="reveal border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* LARGE BACKGROUND NUMBER */}
          <div className="relative">
            <p className="text-[9rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.05] sm:text-[13rem]">
              02
            </p>

            <div className="absolute bottom-2 left-2 text-[9px] uppercase tracking-[0.3em] text-white/20">
              Hackathon
            </div>
          </div>

          {/* ACHIEVEMENT CONTENT */}
          <div>

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/30">
              05 — Achievement
            </p>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10">

              {/* HEADER */}
              <div className="flex items-start justify-between gap-6">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl">
                    🥈
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                      HACK60 · IIT Mandi × HCLTech
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/20">
                      Hackathon · 2026
                    </p>
                  </div>

                </div>

                <span className="shrink-0 rounded-full border border-white/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  2nd Place
                </span>

              </div>

              {/* MAIN TITLE */}
              <div className="mt-10">

                <h2 className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl">
                  2nd Place
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg">
                  Secured second place at HACK60, a hackathon organized
                  by IIT Mandi in collaboration with HCLTech.
                </p>

              </div>

              {/* BOTTOM DETAIL */}
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Recognition
                </p>

                <p className="text-sm text-white/50">
                  IIT Mandi × HCLTech
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Achievement