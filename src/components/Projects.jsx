import useReveal from '../useReveal'

const projects = [
  {
    number: '01',
    title: 'NewsLens',
    subtitle: 'Hyper-Personalization Engine',
    description:
      'A hybrid recommendation engine that combines Reinforcement Learning, TF-IDF, collaborative filtering, and LLM-based re-ranking to personalize news feeds.',
    tech: [
      'Python',
      'Reinforcement Learning',
      'TF-IDF',
      'LLMs',
      'OpenCV',
    ],
    stats: [
      ['156K', 'Interactions'],
      ['<500ms', 'Latency'],
      ['4×', 'Faster'],
    ],
  },
  {
    number: '02',
    title: 'AI Mock Interview',
    subtitle: 'Resume-Aware Interview System',
    description:
      'A resume-aware interview platform that generates role-relevant questions, evaluates answers, and creates automated reports.',
    tech: ['Python', 'Streamlit', 'NLP', 'TF-IDF'],
    github:
      'https://github.com/shrutisharma26/AI-Mock-Interview-System',
  },
  {
    number: '03',
    title: 'Resume ATS Analyzer',
    subtitle: 'NLP-Based Resume Scoring',
    description:
      'An NLP-based tool that compares resumes against job descriptions, identifies missing skills, and visualizes match scores.',
    tech: ['Python', 'Streamlit', 'scikit-learn', 'Plotly'],
    github:
      'https://github.com/shrutisharma26/Resume-ATS-Analyzer',
  },
]

const Projects = () => {
  const revealRef = useReveal()

  return (
    <section
      id="projects"
      ref={revealRef}
      className="reveal border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/30">
              03 — Selected Work
            </p>

            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
              Things I've built.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-white/40">
            Projects where I experiment with AI, machine learning,
            NLP, and software development.
          </p>
        </div>

        {/* FEATURED PROJECT — NEWSLENS */}
        <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

          {/* Background glow */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-500/[0.05] blur-[140px] transition duration-700 group-hover:bg-purple-500/[0.08]" />

          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT SIDE */}
            <div className="p-8 sm:p-12 lg:p-16">

              <div className="flex items-center justify-between">
                <span className="text-sm text-white/30">
                  {projects[0].number}
                </span>

                <span className="rounded-full border border-white/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Featured Project
                </span>
              </div>

              <div className="mt-16">

                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  {projects[0].subtitle}
                </p>

                <h3 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  {projects[0].title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/45 sm:text-lg">
                  {projects[0].description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {projects[0].tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>

            {/* RIGHT SIDE — AI DASHBOARD */}
            <div className="relative border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">

              <div className="mb-8 flex items-center justify-between">

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                    NewsLens · AI Engine
                  </p>

                  <p className="mt-2 text-sm text-white/40">
                    Personalized feed generation
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />

                  <span className="text-[10px] uppercase tracking-wider text-white/40">
                    Live
                  </span>
                </div>

              </div>

              {/* DASHBOARD */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs text-white/30">
                    USER PROFILE
                  </span>

                  <span className="text-xs text-white/20">
                    #A7F2
                  </span>
                </div>

                {/* PROFILE */}
                <div className="mt-5 grid grid-cols-3 gap-2">

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[9px] uppercase tracking-wider text-white/25">
                      Interest
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      AI / Tech
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[9px] uppercase tracking-wider text-white/25">
                      Signal
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      +82%
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[9px] uppercase tracking-wider text-white/25">
                      Mood
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      Focused
                    </p>
                  </div>

                </div>

                {/* RECOMMENDATION SCORES */}
                <div className="mt-6">

                  <div className="mb-3 flex items-center justify-between">

                    <span className="text-xs uppercase tracking-wider text-white/25">
                      Recommendation Score
                    </span>

                    <span className="text-xs text-white/40">
                      Real-time
                    </span>

                  </div>

                  <div className="space-y-3">

                    {[
                      ['AI models reshape search', '94%'],
                      ['The future of intelligent apps', '88%'],
                      ['New advances in computer vision', '81%'],
                    ].map(([title, score]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                      >

                        <div className="flex items-center justify-between gap-4">

                          <p className="text-xs text-white/60">
                            {title}
                          </p>

                          <span className="shrink-0 text-xs text-white/40">
                            {score}
                          </span>

                        </div>

                        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-white/30"
                            style={{ width: score }}
                          />
                        </div>

                      </div>
                    ))}

                  </div>
                </div>

                {/* PROCESSING PIPELINE */}
                <div className="mt-6 grid grid-cols-4 gap-2">

                  {['TF-IDF', 'RL', 'LLM', 'Feed'].map(
                    (step, index) => (
                      <div
                        key={step}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center"
                      >

                        <p className="text-[9px] text-white/25">
                          0{index + 1}
                        </p>

                        <p className="mt-1 text-[10px] text-white/50">
                          {step}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </div>
            </div>
          </div>

          {/* NEWSLENS STATS */}
          <div className="grid border-t border-white/10 sm:grid-cols-3">

            {projects[0].stats.map(([value, label]) => (
              <div
                key={label}
                className="border-b border-white/10 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-8"
              >

                <p className="text-3xl font-semibold tracking-tight">
                  {value}
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
                  {label}
                </p>

              </div>
            ))}

          </div>
        </article>

        {/* OTHER PROJECTS */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">

          {projects.slice(1).map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] sm:p-10"
            >

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.04] blur-[80px] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">

                {/* HEADER */}
                <div className="flex items-center justify-between">

                  <span className="text-sm text-white/30">
                    {project.number}
                  </span>

                  <span className="text-xl text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/70">
                    ↗
                  </span>

                </div>

                {/* PROJECT INFO */}
                <div className="mt-12">

                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-3 text-3xl font-medium tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-white/40">
                    {project.description}
                  </p>

                  {/* PROJECT VISUAL */}
                  {project.number === '02' ? (

                    <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-5">

                      <div className="flex items-center justify-between">

                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                          Interview Pipeline
                        </span>

                        <span className="text-[10px] text-white/30">
                          04 stages
                        </span>

                      </div>

                      <div className="mt-5 grid grid-cols-4 gap-2">

                        {['Resume', 'Questions', 'Evaluate', 'Report'].map(
                          (step, index) => (
                            <div
                              key={step}
                              className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center transition hover:bg-white/[0.06]"
                            >

                              <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[9px] text-white/40">
                                0{index + 1}
                              </div>

                              <p className="mt-2 text-[9px] text-white/40">
                                {step}
                              </p>

                            </div>
                          )
                        )}

                      </div>
                    </div>

                  ) : (

                    <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-5">

                      <div className="flex items-center justify-between">

                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                          Resume Analysis
                        </span>

                        <span className="text-xs text-white/50">
                          87%
                        </span>

                      </div>

                      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
                        <div className="h-full w-[87%] rounded-full bg-white/30" />
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-2">

                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                          <p className="text-[9px] text-white/25">
                            Match
                          </p>

                          <p className="mt-1 text-sm text-white/60">
                            87%
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                          <p className="text-[9px] text-white/25">
                            Skills
                          </p>

                          <p className="mt-1 text-sm text-white/60">
                            14
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                          <p className="text-[9px] text-white/25">
                            Gaps
                          </p>

                          <p className="mt-1 text-sm text-white/60">
                            3
                          </p>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* TECH + GITHUB */}
                  <div className="mt-7 flex flex-wrap items-center gap-2">

                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                      >
                        {item}
                      </span>
                    ))}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-auto rounded-full border border-white/15 px-4 py-1.5 text-xs text-white/60 transition hover:border-white/40 hover:bg-white hover:text-black"
                      >
                        GitHub ↗
                      </a>
                    )}

                  </div>

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects