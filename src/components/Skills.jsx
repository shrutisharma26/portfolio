import useReveal from '../useReveal'

const skills = [
  {
    title: 'Languages',
    items: ['Python', 'C++'],
  },
  {
    title: 'AI / ML',
    items: ['Machine Learning', 'Reinforcement Learning', 'NLP', 'TF-IDF'],
  },
  {
    title: 'Libraries & Frameworks',
    items: ['scikit-learn', 'OpenCV', 'Streamlit', 'Plotly'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'REST APIs'],
  },
]

const Skills = () => {
  const revealRef = useReveal()
  return (
    <section
        id="skills"
        ref={revealRef}
        className="reveal border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/30">
            02 — Skills
          </p>

          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Tools I work with.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-medium">
                {skill.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/50 transition group-hover:text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills