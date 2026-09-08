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

        <div className="grid gap-16 lg:grid-cols-2 lg:items-end">

          {/* Heading */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/30">
              06 — Contact
            </p>

            <h2 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Let's build
              <br />
              <span className="text-white/40">
                something interesting.
              </span>
            </h2>
          </div>

          {/* Contact information */}
          <div className="lg:pb-2">

            <p className="max-w-md text-lg leading-relaxed text-white/40">
              Have an idea, opportunity, or just want to say hello?
              I'd love to hear from you.
            </p>

            <a
              href="mailto:shrutisharma260905@gmail.com"
              className="mt-8 inline-block border-b border-white/30 pb-2 text-lg transition hover:border-white hover:text-white"
            >
              shrutisharma260905@gmail.com
            </a>

            <div className="mt-10 flex flex-wrap gap-3">

              <a
                href="https://github.com/shrutisharma26"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/shruti-sharma-113301322"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:shrutisharma260905@gmail.com"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
              >
                Email ↗
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact