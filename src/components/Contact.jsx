
import { motion } from "framer-motion";

const contacts = [
  {
    label: "EMAIL",
    value: "shruti.sharma260905@gmail.com",
    href: "mailto:shruti.sharma260905@gmail.com",
    icon: "✉",
  },
  {
    label: "GITHUB",
    value: "github.com/shrutisharma26",
    href: "https://github.com/shrutisharma26",
    icon: "⌘",
  },
  {
    label: "LINKEDIN",
    value: "Connect with me",
    href: "https://www.linkedin.com/",
    icon: "↗",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#050708] px-5 py-24 sm:px-8 md:px-16 md:py-32"
    >
      {/* Ambient neon glow */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#C8FF00]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#4D7600]/10 blur-[120px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.5) 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#C8FF00] sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] shadow-[0_0_12px_rgba(200,255,0,0.7)]" />
            06 / LET'S CONNECT
          </p>

          <h2 className="break-words font-sans text-5xl font-bold leading-tight tracking-tight text-[#F2F5F3] sm:text-6xl md:text-7xl">
            Have something
            <br />
            <span className="text-[#C8FF00]">in mind?</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A1AAA5] sm:text-lg">
            Whether it's an interesting project, an opportunity, or just a
            conversation about AI and technology — I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact glass panel */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          whileHover={{ y: -5 }}
          style={{ transformPerspective: 1200 }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-[#12191A]/95 via-[#0D1213]/90 to-[#080B0C]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-500 hover:border-[#C8FF00]/20 sm:p-10 md:p-14"
        >
          {/* Panel glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C8FF00]/[0.06] blur-3xl transition-all duration-500 group-hover:bg-[#C8FF00]/[0.1]" />

          {/* Corner details */}
          <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 rounded-tl-[2rem] border-l border-t border-[#C8FF00]/30" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 rounded-br-[2rem] border-b border-r border-[#C8FF00]/20" />

          <div className="relative">
            <p className="mb-8 font-sans text-2xl font-medium text-[#C8FF00] sm:text-3xl">
              Find me here
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "EMAIL" ? undefined : "_blank"}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  whileHover={{ y: -7, scale: 1.02 }}
                  className="group/contact flex min-w-0 flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#C8FF00]/30 hover:bg-[#C8FF00]/[0.035] sm:p-6"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-2xl text-[#C8FF00] transition-transform duration-300 group-hover/contact:scale-110">
                      {contact.icon}
                    </span>

                    <span className="font-mono text-[10px] tracking-widest text-[#75817B]">
                      {contact.label}
                    </span>
                  </div>

                  <span className="break-words text-sm leading-relaxed text-[#F2F5F3] transition-colors group-hover/contact:text-[#C8FF00]">
                    {contact.value}
                  </span>

                  <span className="mt-4 font-mono text-xs text-[#75817B] transition-all group-hover/contact:translate-x-1 group-hover/contact:text-[#C8FF00]">
                    Connect ↗
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="mt-10 border-t border-white/[0.08] pt-8">
              <p className="font-sans text-xl font-medium text-[#A1AAA5] sm:text-2xl">
                "Always curious. Always building."
              </p>

              <div className="mt-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-[#75817B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] shadow-[0_0_8px_rgba(200,255,0,0.6)]" />
                OPEN TO INTERESTING OPPORTUNITIES
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
