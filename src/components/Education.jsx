
import { motion } from "framer-motion";

const Education = () => {
  const coursework = [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Computer Organisation",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-300/60">
            04 — Education
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Where I've been
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}learning.
            </span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {/* IIT MANDI */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-500/[0.08] via-[#0c0c14] to-blue-500/[0.04] p-6 transition duration-300 hover:border-purple-400/40 sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/[0.08] blur-[100px] transition group-hover:bg-purple-500/[0.15]" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs text-purple-300">
                    Currently pursuing
                  </span>

                  <p className="text-sm text-white/30">
                    2024 — Present
                  </p>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
                  Indian Institute of Technology, Mandi
                </h3>

                <p className="mt-3 text-lg text-white/50">
                  B.Tech · Data Science Engineering
                </p>

                <p className="mt-2 text-sm text-white/30">
                  Himachal Pradesh, India
                </p>
              </div>

              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl font-bold text-white/70 transition group-hover:border-purple-400/30 group-hover:text-purple-300"
              >
                IIT
              </motion.div>
            </div>

            <div className="relative mt-10 border-t border-white/10 pt-6">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">
                Relevant coursework
              </p>

              <div className="flex flex-wrap gap-2">
                {coursework.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * index, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/50 transition hover:border-purple-400/30 hover:text-purple-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CLASS XII */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -3 }}
            className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-blue-400/20 hover:bg-white/[0.04] sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-white/30">
                  2022 — 2023
                </p>

                <h3 className="mt-3 text-xl font-medium sm:text-2xl">
                  Wisdom Public School
                </h3>

                <p className="mt-2 text-white/40">
                  Class XII · CBSE
                </p>
              </div>

              <div className="sm:text-right">
                <p className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-semibold text-transparent">
                  94.2%
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                  Academic achievement
                </p>
              </div>
            </div>
          </motion.div>

          {/* CLASS X */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -3 }}
            className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-purple-400/20 hover:bg-white/[0.04] sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-white/30">
                  2020 — 2021
                </p>

                <h3 className="mt-3 text-xl font-medium sm:text-2xl">
                  Wisdom Public School
                </h3>

                <p className="mt-2 text-white/40">
                  Class X · CBSE
                </p>
              </div>

              <div className="sm:text-right">
                <p className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-4xl font-semibold text-transparent">
                  90.5%
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                  Academic achievement
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
