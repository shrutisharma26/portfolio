
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript", "Java", "HTML / CSS"],
  },
  {
    number: "02",
    title: "Machine Learning",
    skills: ["Scikit-learn", "NLP", "Recommender Systems", "OpenCV", "RL"],
  },
  {
    number: "03",
    title: "Generative AI",
    skills: ["LLMs", "RAG", "Groq / Llama 3", "SBERT", "Ollama", "FAISS"],
  },
  {
    number: "04",
    title: "Tools & Engineering",
    skills: ["Flask", "REST APIs", "Git / GitHub", "Streamlit", "CI/CD", "Vercel"],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [8, 0, -5]
  );

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      {/* Ambient neon glow */}
      <div className="pointer-events-none absolute right-[8%] top-[15%] h-72 w-72 rounded-full bg-[#C8FF00]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[5%] h-64 w-64 rounded-full bg-emerald-400/[0.04] blur-[110px]" />

      <motion.div
        style={{ rotateX, y, transformPerspective: 1200 }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[#C8FF00] sm:text-sm">
            02 / MY TOOLKIT
          </p>

          <h2 className="text-5xl font-bold tracking-tight text-[#F2F5F3] sm:text-6xl md:text-7xl">
            Things I{" "}
            <span className="text-[#C8FF00]">
              work with.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#A1AAA5] sm:text-lg">
            A growing collection of tools and technologies I use to
            experiment, build, and bring ideas to life.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 40, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{
                y: -10,
                rotateY: index % 2 === 0 ? 3 : -3,
                scale: 1.02,
              }}
              style={{ transformPerspective: 1000 }}
              className="group relative min-w-0 overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-gradient-to-br from-[#151B1C]/90 via-[#0D1213]/90 to-[#101719]/95 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-500 hover:border-[#C8FF00]/30 hover:shadow-[0_20px_60px_rgba(200,255,0,0.07)]"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#C8FF00]/[0.07] blur-3xl transition-all duration-500 group-hover:bg-[#C8FF00]/[0.14]" />

              {/* Decorative corner */}
              <div className="absolute right-5 top-5 h-3 w-3 border-r border-t border-[#C8FF00]/30 transition-all duration-300 group-hover:h-5 group-hover:w-5 group-hover:border-[#C8FF00]/70" />

              <div className="relative">
                <span className="font-mono text-xs tracking-[0.2em] text-[#C8FF00]/70">
                  / {group.number}
                </span>

                <h3 className="mt-4 break-words text-2xl font-semibold tracking-tight text-[#F2F5F3] transition-colors duration-300 group-hover:text-[#C8FF00]">
                  {group.title}
                </h3>

                <div className="mt-6 flex min-w-0 flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="max-w-full break-words rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-2 text-xs leading-relaxed text-[#A1AAA5] transition-all duration-300 hover:border-[#C8FF00]/40 hover:bg-[#C8FF00]/[0.06] hover:text-[#C8FF00]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-[#C8FF00]/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-right font-mono text-xs tracking-wide text-[#75817B]">
          // toolkit.exe — continuously evolving
        </p>
      </motion.div>
    </section>
  );
}
