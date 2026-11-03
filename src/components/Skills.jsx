
import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming Languages",
    icon: "01",
    accent: "from-purple-500/20 to-transparent",
    items: ["Python", "C++", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Machine Learning",
    icon: "02",
    accent: "from-blue-500/20 to-transparent",
    items: [
      "Machine Learning",
      "Random Forest",
      "Classification",
      "Reinforcement Learning",
      "scikit-learn",
      "Recommendation Systems",
    ],
  },
  {
    title: "AI, NLP & LLMs",
    icon: "03",
    accent: "from-violet-500/20 to-transparent",
    items: [
      "NLP",
      "TF-IDF",
      "Transformers",
      "LLMs",
      "RAG",
      "FAISS",
      "Sentence Transformers",
    ],
  },
  {
    title: "Backend & APIs",
    icon: "04",
    accent: "from-cyan-500/20 to-transparent",
    items: ["FastAPI", "Flask", "REST APIs", "Streamlit", "SQLite"],
  },
  {
    title: "Data & Visualization",
    icon: "05",
    accent: "from-indigo-500/20 to-transparent",
    items: [
      "Pandas",
      "NumPy",
      "Plotly",
      "Recharts",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Tools & Core CS",
    icon: "06",
    accent: "from-fuchsia-500/20 to-transparent",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Streamlit Cloud",
      "DSA",
      "OOP",
      "Problem Solving",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-300/60">
              02 — Skills & Technologies
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              My technical <span className="text-white/35">toolkit.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-white/40">
            Technologies and concepts I use to build machine learning
            systems, AI applications, and software projects.
          </p>
        </motion.div>

        {/* STAGGERED SKILL CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c14] p-6 transition-colors duration-300 hover:border-purple-400/30 sm:p-8"
            >
              {/* CARD GLOW */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${skill.accent} opacity-40 transition duration-500 group-hover:opacity-100`}
              />

              <div className="relative">
                {/* CARD HEADER */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs text-purple-300">
                    {skill.icon}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                    Skills
                  </span>
                </div>

                <h3 className="text-xl font-medium tracking-tight text-white/90">
                  {skill.title}
                </h3>

                {/* SKILL TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.items.map((item, index) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.035,
                        duration: 0.3,
                      }}
                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/50 transition duration-300 group-hover:border-white/15 group-hover:text-white/75"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex items-center gap-3 text-xs text-white/30"
        >
          <span className="h-px w-8 bg-purple-400/50" />
          Always learning, always building.
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
