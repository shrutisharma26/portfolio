import useReveal from '../useReveal'

const achievements = [
  {
    category: 'HACK60 · IIT Mandi × HCLTech',
    title: '2nd Place',
    description:
      'Secured second place at HACK60, a hackathon organized by IIT Mandi in collaboration with HCLTech.',
  },
  {
    category: 'INTER IIT 8.0',
    title: '2nd Place · Dance',
    description:
      'Secured second place in the Dance competition at Inter IIT 8.0.',
  },
]

const Achievement = () => {
  const revealRef = useReveal()

  return (
    <section
      id="achievement"
      ref={revealRef}
      className="reveal border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/30">
            05 — Achievement
          </p>

          <h2 className="max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            A few things I'm proud of.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] sm:p-10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                {achievement.category}
              </p>

              <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
                {achievement.title}
              </h3>

              <p className="mt-6 max-w-xl leading-relaxed text-white/40">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Achievement