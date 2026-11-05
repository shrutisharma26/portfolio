
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const interests = [
  {
    number: "01",
    title: "Machine Learning",
    description: "Building models that learn, adapt, and solve real problems.",
  },
  {
    number: "02",
    title: "Generative AI",
    description: "Exploring LLMs, RAG pipelines, and intelligent applications.",
  },
  {
    number: "03",
    title: "Information Retrieval",
    description: "Making search smarter through embeddings and semantic retrieval.",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -5]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      {/* Ambient green atmosphere */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-[#C8FF00]/[0.035] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#16452E]/20 blur-[120px]" />

      <motion.div
        style={{ rotateX, y, transformPerspective: 1200 }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[#C8FF00]/75 sm:text-sm">
            01 / A LITTLE ABOUT ME
          </p>

          <h2 className="break-words text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Curious by nature.
            <br />
            <span className="text-[#C8FF00]">
              Builder by choice.
            </span>
          </h2>
        </div>

        {/* Main holographic panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-[#C8FF00]/[0.025] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-8 md:p-12"
        >
          {/* Glass reflections */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.045] via-transparent to-[#C8FF00]/[0.035]" />

          <div className="relative grid min-w-0 gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            {/* About text */}
            <div className="min-w-0">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#C8FF00]/70">
                HELLO, WORLD ✦
              </span>

              <p className="mt-6 break-words text-base leading-8 text-white/70 sm:text-lg">
                I&apos;m Shruti, a Data Science Engineering student at IIT Mandi,
                interested in building intelligent systems that are useful,
                thoughtful, and technically interesting.
              </p>

              <p className="mt-5 break-words text-base leading-8 text-white/60 sm:text-lg">
                My work spans machine learning, NLP, information retrieval,
                and generative AI. I enjoy taking ideas from experimentation
                to working applications—and figuring things out along the way.
              </p>

              {/* Technology tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["AI / ML", "NLP", "RAG", "Data Science", "Building things"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#C8FF00]/15 bg-[#C8FF00]/[0.035] px-4 py-2 text-xs text-white/65 transition-all duration-300 hover:border-[#C8FF00]/40 hover:text-[#C8FF00]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Floating interest cards */}
            <div className="flex min-w-0 flex-col justify-center gap-4">
              {interests.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="min-w-0 rounded-2xl border border-white/[0.10] bg-white/[0.035] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors hover:border-[#C8FF00]/25 hover:bg-[#C8FF00]/[0.025]"
                >
                  <span className="font-mono text-xs text-[#C8FF00]/70">
                    {item.number}
                  </span>

                  <h3 className="mt-2 break-words text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 break-words text-sm leading-relaxed text-white/55">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <p className="mt-8 text-right text-sm italic text-white/40">
          Always learning. Always experimenting.
        </p>
      </motion.div>
    </section>
  );
}
