import useReveal from '../useReveal'

const Contact = () => {
  const revealRef = useReveal()

  return (
    <section
      id="contact"
      ref={revealRef}
      className="reveal border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          {/* LEFT */}
          <div>

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/30">
              06 — Contact
            </p>

            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[6.5rem]">
              Let's build
              <br />
              <span className="text-white/35">
                something interesting.
              </span>
            </h2>

          </div>

          {/* RIGHT */}
          <div className="lg:pb-2">

            <p className="max-w-md text-lg leading-relaxed text-white/40">
              Have an idea, opportunity, or just want to say hello?
              I'd love to hear from you.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:shrutisharma260905@gmail.com"
              className="group mt-8 inline-flex items-center gap-3 border-b border-white/20 pb-3 text-base text-white/70 transition hover:border-white hover:text-white sm:text-lg"
            >
              <span>
                shrutisharma260905@gmail.com
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            {/* SOCIAL LINKS */}
            <div className="mt-10 flex flex-wrap gap-3">

              <a
                href="https://github.com/shrutisharma26"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/50 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/shruti-sharma-113301322"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/50 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:shrutisharma260905@gmail.com"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/50 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
              >
                Email ↗
              </a>

            </div>

          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-24 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-white/20 sm:flex-row sm:items-center sm:justify-between">

            <span>
              Open to opportunities
            </span>

            <span>
              India · 2026
            </span>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact