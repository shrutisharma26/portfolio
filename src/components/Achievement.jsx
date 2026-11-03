
import { motion } from "framer-motion";

const achievements = [
  {
    category: "HACK60 · IIT Mandi × HCLTech",
    title: "2nd Place",
    description:
      "Secured second place at HACK60, a hackathon organized by IIT Mandi in collaboration with HCLTech.",
    icon: "✦",
    accent: "from-purple-400 to-blue-400",
    glow: "bg-purple-500/[0.12]",
    border: "hover:border-purple-400/30",
    badge: "Hackathon",
  },
  {
    category: "INTER IIT 8.0",
    title: "2nd Place · Dance",
    description:
      "Secured second place in the Dance competition at Inter IIT 8.0.",
    icon: "♫",
    accent: "from-pink-400 to-purple-400",
    glow: "bg-pink-500/[0.12]",
    border: "hover:border-pink-400/30",
    badge: "Performance",
  },
];

const Achievement = () => {
  return (
    <section
      id="achievement"
      className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/[0.08] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-300/60">
            05 — Achievements
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            A few things
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}I'm proud of.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/40">
            A little recognition for the things I love doing — both in tech
            and beyond.
          </p>
        </motion.div>

        {/* ACHIEVEMENT CARDS */}
        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c14] p-7 transition duration-300 ${achievement.border} sm:p-10`}
            >
              {/* CARD GLOW */}
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full ${achievement.glow} blur-[100px] transition duration-500 group-hover:scale-150`}
              />

              <div className="relative">
                {/* ICON + CATEGORY */}
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl text-white/70"
                  >
                    {achievement.icon}
                  </motion.div>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/40">
                    {achievement.badge}
                  </span>
                </div>

                <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/30">
                  {achievement.category}
                </p>

                <h3
                  className={`mt-3 bg-gradient-to-r ${achievement.accent} bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl`}
                >
                  {achievement.title}
                </h3>

                <p className="mt-5 max-w-xl leading-relaxed text-white/45">
                  {achievement.description}
                </p>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

                <p className="mt-4 text-xs text-white/25">
                  Achievement · {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
