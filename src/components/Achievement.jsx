
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const achievements = [
  {
    number: "01",
    title: "2nd Place — HACK60",
    subtitle: "IIT Mandi × HCLTech",
    description:
      "Secured second place at HACK60 with NewsLens, a hybrid news recommendation engine combining machine learning, personalization, and AI-powered reranking.",
    tags: ["Hackathon", "AI/ML", "News Recommendation"],
    icon: "✦",
  },
];

export default function Achievement() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -3]);
  const y = useTransform(scrollYProgress, [0, 1], [35, -35]);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#050708] px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      {/* Ambient neon lighting */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#C8FF00]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#4D7600]/10 blur-[110px]" />

      {/* Subtle technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.5) 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      <motion.div
        style={{ rotateX, y, transformPerspective: 1200 }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#C8FF00] sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] shadow-[0_0_12px_rgba(200,255,0,0.7)]" />
            05 / RECOGNITION
          </p>

          <h2 className="break-words font-sans text-5xl font-bold tracking-tight text-[#F2F5F3] sm:text-6xl md:text-7xl">
            A little <span className="text-[#C8FF00]">recognition.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#A1AAA5] sm:text-lg">
            A milestone that made the late nights worth it.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.number}
              initial={{ opacity: 0, y: 40, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10, rotateY: 2, scale: 1.015 }}
              style={{
                transformPerspective: 1000,
                transformStyle: "preserve-3d",
              }}
              className="group relative min-w-0 overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-[#12191A]/95 via-[#0D1213]/90 to-[#080B0C]/95 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-500 hover:border-[#C8FF00]/30 hover:shadow-[0_25px_70px_rgba(0,0,0,0.4),0_0_30px_rgba(200,255,0,0.05)] sm:p-10"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#C8FF00]/[0.06] blur-3xl transition-all duration-500 group-hover:bg-[#C8FF00]/[0.12]" />

              {/* Neon corners */}
              <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 rounded-tl-[2rem] border-l border-t border-[#C8FF00]/30" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 rounded-br-[2rem] border-b border-r border-[#C8FF00]/20" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-[#75817B]">
                    ACHIEVEMENT {achievement.number}
                  </span>

                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-4xl text-[#C8FF00] drop-shadow-[0_0_12px_rgba(200,255,0,0.25)]"
                  >
                    {achievement.icon}
                  </motion.span>
                </div>

                <p className="mb-3 font-mono text-xs tracking-widest text-[#C8FF00]">
                  {achievement.subtitle}
                </p>

                <h3 className="break-words font-sans text-3xl font-bold leading-tight tracking-tight text-[#F2F5F3] sm:text-4xl">
                  {achievement.title}
                </h3>

                <p className="mt-6 break-words text-sm leading-7 text-[#A1AAA5] sm:text-base">
                  {achievement.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {achievement.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#C8FF00]/15 bg-[#C8FF00]/[0.035] px-3 py-2 font-mono text-xs text-[#A1AAA5] transition-all duration-300 hover:border-[#C8FF00]/40 hover:bg-[#C8FF00]/[0.08] hover:text-[#C8FF00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/[0.07] pt-5">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#75817B]">
                    BUILD · EXPERIMENT · INNOVATE
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
