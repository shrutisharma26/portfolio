
import Reveal from "./Reveal";

const About = () => {
  const interests = [
    "AI / ML",
    "NLP & LLMs",
    "RAG Systems",
    "Backend Engineering",
    "Data Science",
    "Software Development",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/[0.10] blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/[0.10] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <Reveal>
          <div className="mb-14">
            <p className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-purple-300/70">
              <span className="h-px w-8 bg-purple-400/50" />
              01 — About Me
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Curious by nature.
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Builder by choice.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/40 sm:text-base">
              A little about the person behind the projects, experiments,
              and countless lines of code.
            </p>
          </div>
        </Reveal>

        {/* MAIN CONTENT */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* BIO CARD */}
          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6 backdrop-blur-xl transition duration-500 hover:border-purple-400/25 sm:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-500/[0.08] blur-[100px] transition duration-500 group-hover:bg-purple-500/[0.15]" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-xl text-purple-300">
                      ✦
                    </div>

                    <div>
                      <p className="font-medium text-white/80">
                        A little about me
                      </p>
                      <p className="text-xs text-white/35">
                        The human behind the code
                      </p>
                    </div>
                  </div>

                  <span className="hidden rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white/30 sm:block">
                    Get to know me
                  </span>
                </div>

                <p className="text-xl leading-relaxed text-white/80 sm:text-2xl">
                  Hey, I'm{" "}
                  <span className="font-semibold text-white">Shruti</span>, a
                  Data Science Engineering student at IIT Mandi interested in
                  building{" "}
                  <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text font-medium text-transparent">
                    intelligent systems
                  </span>{" "}
                  and meaningful software.
                </p>

                <p className="mt-6 text-sm leading-8 text-white/45 sm:text-base">
                  I enjoy exploring the intersection of machine learning,
                  artificial intelligence, and software development. From
                  recommendation engines and NLP applications to fraud detection
                  systems and research assistants, I like turning ideas into
                  practical projects.
                </p>

                <p className="mt-5 text-sm leading-8 text-white/45 sm:text-base">
                  I'm constantly learning, experimenting with new technologies,
                  and improving my ability to build reliable applications —
                  whether that's developing an ML model, designing an API,
                  or bringing an idea to life through code.
                </p>

                <p className="mt-5 text-sm leading-8 text-white/45 sm:text-base">
                  Outside of tech, you'll probably find me dancing, discovering
                  new things, or finding my next project idea.
                </p>

                <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-6">
                  <span className="text-lg text-purple-300">✧</span>
                  <p className="text-xs tracking-wide text-white/40">
                    Always curious. Always building. Always learning.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {/* EDUCATION */}
            <Reveal delay={0.1}>
              <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c0c14]/80 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 sm:p-7">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-[60px] transition group-hover:bg-purple-500/20" />

                <div className="relative">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                    🎓
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 sm:text-xs">
                    Education
                  </p>

                  <p className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    IIT
                  </p>

                  <p className="mt-1 text-sm text-purple-300">Mandi</p>

                  <p className="mt-4 text-xs leading-relaxed text-white/40">
                    B.Tech · Data Science Engineering
                  </p>
                </div>
              </div>
            </Reveal>

            {/* GRADUATION */}
            <Reveal delay={0.2}>
              <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c0c14]/80 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 sm:p-7">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-[60px] transition group-hover:bg-blue-500/20" />

                <div className="relative">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                    ✧
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 sm:text-xs">
                    Graduation
                  </p>

                  <p className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    2028
                  </p>

                  <p className="mt-1 text-sm text-blue-300">Expected</p>

                  <p className="mt-4 text-xs leading-relaxed text-white/40">
                    Undergraduate student
                  </p>
                </div>
              </div>
            </Reveal>

            {/* INTERESTS */}
            <Reveal delay={0.3}>
              <div className="group relative col-span-2 h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-purple-500/[0.08] via-[#0c0c14]/90 to-blue-500/[0.08] p-6 backdrop-blur-xl transition duration-300 hover:border-purple-400/30 sm:p-8">
                <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-blue-500/[0.08] blur-[80px]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                        Currently exploring
                      </p>
                      <p className="mt-2 text-lg font-medium text-white/80">
                        Things that keep me curious
                      </p>
                    </div>

                    <span className="text-2xl text-purple-300">✧</span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {interests.map((item, index) => (
                      <span
                        key={item}
                        style={{ transitionDelay: `${index * 40}ms` }}
                        className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/60 transition duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
