
import { motion } from "framer-motion";

const Contact = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-purple-600/[0.12] blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-purple-300/60">
              06 — Contact
            </p>

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[6.5rem]">
              Let's build
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                something
                <br className="hidden sm:block" />
                interesting.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-white/40 sm:text-lg">
              Always excited to connect with people working on interesting
              ideas. Have an opportunity, a project, or just want to say
              hello? My inbox is open.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-purple-400/20 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>

              <p className="text-sm text-white/50">
                Open to opportunities
              </p>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Get in touch
            </p>

            {/* EMAIL CTA */}
            <motion.a
              href="mailto:shrutisharma260905@gmail.com"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-5 flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 p-5 text-white shadow-lg shadow-purple-500/10 transition duration-300 hover:shadow-purple-500/25 sm:p-6"
            >
              <div>
                <p className="text-xs text-white/70">
                  Drop me an email
                </p>

                <p className="mt-2 break-all text-sm font-medium sm:text-base">
                  shrutisharma260905@gmail.com
                </p>
              </div>

              <span className="shrink-0 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </motion.a>

            {/* SOCIAL LINKS */}
            <div className="mt-6">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">
                Find me elsewhere
              </p>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/shrutisharma26"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/50 transition duration-300 hover:border-purple-400/30 hover:text-white"
                >
                  GitHub ↗
                </motion.a>

                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/shruti-sharma-113301322"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/50 transition duration-300 hover:border-blue-400/30 hover:text-white"
                >
                  LinkedIn ↗
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOOTER LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 border-t border-white/10 pt-6 sm:mt-28"
        >
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.15em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <span>Designed & built with curiosity.</span>
            <span>IIT Mandi · India</span>
            <span>© 2026 Shruti Sharma</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
