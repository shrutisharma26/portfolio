
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const education = [
  {
    period: "2023 — 2027",
    degree: "B.Tech",
    field: "Data Science Engineering",
    institution: "Indian Institute of Technology, Mandi",
    location: "Himachal Pradesh, India",
    note: "Exploring the intersection of data, intelligent systems, and technology.",
    current: true,
  },
];

const tags = ["Data Science", "Machine Learning", "AI", "Engineering"];

export default function Education() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -4]);
  const y = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#050708] px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      {/* Ambient neon lighting */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#C8FF00]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#4D7600]/10 blur-[130px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.5) 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      <motion.div
        style={{ rotateX, y, transformPerspective: 1400 }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#C8FF00] sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] shadow-[0_0_12px_rgba(200,255,0,0.7)]" />
            04 / EDUCATION
          </p>

          <h2 className="break-words font-sans text-5xl font-bold tracking-tight text-[#F2F5F3] sm:text-6xl md:text-7xl">
            The <span className="text-[#C8FF00]">foundation.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#A1AAA5] sm:text-lg">
            Where curiosity meets computation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute bottom-0 left-[13px] top-0 w-px bg-gradient-to-b from-[#C8FF00]/70 via-[#C8FF00]/20 to-transparent sm:left-[19px]" />

          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative pb-8 pl-10 sm:pl-14"
            >
              {/* Timeline node */}
              <div className="absolute left-[7px] top-8 h-3.5 w-3.5 rounded-full border-2 border-[#050708] bg-[#C8FF00] shadow-[0_0_20px_rgba(200,255,0,0.6)] sm:left-[13px] sm:h-4 sm:w-4" />

              <motion.div
                whileHover={{ y: -7, rotateX: 2, rotateY: -1 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                style={{ transformPerspective: 1200 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-[#12191A]/95 via-[#0D1213]/90 to-[#080B0C]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-500 hover:border-[#C8FF00]/30 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4),0_0_30px_rgba(200,255,0,0.05)] sm:p-10"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#C8FF00]/[0.06] blur-[80px] transition-all duration-700 group-hover:bg-[#C8FF00]/[0.12]" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#4D7600]/[0.06] blur-[70px]" />

                {/* Neon corner details */}
                <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l border-t border-[#C8FF00]/30 rounded-tl-[2rem]" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-[#C8FF00]/20 rounded-br-[2rem]" />

                <div className="relative min-w-0">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs tracking-widest text-[#C8FF00]">
                      {item.period}
                    </span>

                    {item.current && (
                      <span className="flex items-center gap-2 rounded-full border border-[#C8FF00]/25 bg-[#C8FF00]/[0.06] px-4 py-1.5 font-mono text-[10px] tracking-wider text-[#C8FF00]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] shadow-[0_0_8px_rgba(200,255,0,0.8)]" />
                        CURRENTLY PURSUING
                      </span>
                    )}
                  </div>

                  <h3 className="break-words font-sans text-4xl font-bold tracking-tight text-[#F2F5F3] sm:text-5xl">
                    {item.degree}
                  </h3>

                  <p className="mt-2 break-words text-xl font-medium text-[#C8FF00] sm:text-2xl">
                    {item.field}
                  </p>

                  <div className="mt-7">
                    <p className="break-words text-lg font-medium text-[#F2F5F3] sm:text-xl">
                      {item.institution}
                    </p>

                    <p className="mt-2 break-words font-mono text-xs text-[#75817B]">
                      {item.location}
                    </p>
                  </div>

                  {/* Inner glass panel */}
                  <div className="mt-8 max-w-2xl rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl sm:p-5">
                    <p className="text-sm leading-7 text-[#A1AAA5] sm:text-base">
                      {item.note}
                    </p>
                  </div>

                  {/* Focus tags */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#C8FF00]/15 bg-[#C8FF00]/[0.035] px-3 py-2 font-mono text-xs text-[#A1AAA5] transition-all duration-300 hover:border-[#C8FF00]/40 hover:bg-[#C8FF00]/[0.08] hover:text-[#C8FF00]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
