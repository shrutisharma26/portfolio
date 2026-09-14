import useReveal from '../useReveal'

const About = () => {
  const revealRef = useReveal()

  return (
    <section
      id="about"
      ref={revealRef}
      className="reveal border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/30">
            01 — About
          </p>

          <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Curious about technology,
            <span className="text-white/40">
              {' '}passionate about building.
            </span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="text-xl leading-relaxed text-white/60">
              I'm Shruti, a Data Science Engineering student at IIT Mandi
              who enjoys building intelligent tools and experimenting with
              new technologies.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/40">
              My interests lie at the intersection of AI/ML, software
              development, and backend engineering. I enjoy taking an idea,
              figuring out how it can be built, and turning it into something
              people can actually use.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/40">
              I've been exploring everything from NLP and recommendation
              systems to Flask APIs, databases, and CI/CD workflows.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/40">
              And when I'm not coding, you'll probably find me dancing. 
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-4xl font-semibold">
                2028
              </p>

              <p className="mt-3 text-sm text-white/40">
                Expected Graduation
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-4xl font-semibold">
                IIT
              </p>

              <p className="mt-3 text-sm text-white/40">
                Mandi
              </p>
            </div>

            <div className="col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

              <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                Currently exploring
              </p>

              <p className="mt-4 text-xl leading-relaxed text-white/70">
                AI · Machine Learning · NLP · Backend · APIs · Software Development
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About