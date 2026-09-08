import useReveal from '../useReveal'

const Education = () => {
  const revealRef = useReveal()
  return (
    <section
        id="education"
        ref={revealRef}
        className="reveal border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/30">
            04 — Education
          </p>

          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Where I've been learning.
          </h2>
        </div>

        <div className="space-y-4">

          {/* IIT Mandi */}
          <div className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition duration-500 hover:border-white/20 hover:bg-white/[0.04] sm:p-10">

            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                  2024 — Present
                </p>

                <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
                  Indian Institute of Technology, Mandi
                </h3>

                <p className="mt-3 text-lg text-white/50">
                  B.Tech in Data Science Engineering
                </p>
              </div>

              <div className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/40">
                IIT Mandi
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {[
                'Data Structures & Algorithms',
                'Machine Learning',
                'Computer Organisation',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/40"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

          {/* Class XII */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                  2022 — 2023
                </p>

                <h3 className="mt-3 text-2xl font-medium">
                  Wisdom Public School
                </h3>

                <p className="mt-2 text-white/40">
                  Class XII · CBSE
                </p>
              </div>

              <div>
                <p className="text-4xl font-semibold">
                  94.2%
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/30">
                  Percentage
                </p>
              </div>

            </div>

          </div>

          {/* Class X */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                  2020 — 2021
                </p>

                <h3 className="mt-3 text-2xl font-medium">
                  Wisdom Public School
                </h3>

                <p className="mt-2 text-white/40">
                  Class X · CBSE
                </p>
              </div>

              <div>
                <p className="text-4xl font-semibold">
                  90.2%
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/30">
                  Percentage
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Education