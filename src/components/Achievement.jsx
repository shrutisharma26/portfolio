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

          <div>
            <p className="text-[10rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.06] sm:text-[14rem]">
              02
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/30">
              05 — Achievement
            </p>

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-2xl">
                🥈
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                  HACK60 · IIT Mandi × HCLTech
                </p>

                <h2 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
                  2nd Place
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/40">
                  Secured second place at HACK60, a hackathon organized
                  by IIT Mandi in collaboration with HCLTech.
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