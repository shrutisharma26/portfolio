
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievement" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "education",
      "achievement",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#050508]/75 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* LOGO */}
        <motion.a
          href="#home"
          onClick={closeMenu}
          whileHover={{ scale: 1.05 }}
          className="group text-xl font-bold tracking-tight text-white"
        >
          SHRUTI
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            .
          </span>
        </motion.a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link, index) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.06 }}
                className={`group relative py-2 text-sm transition duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {link.name}

                <motion.span
                  className="absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                  initial={false}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />

                {!isActive && (
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 lg:flex">
          <motion.a
            whileHover={{ y: -2 }}
            href="/Shruti_Sharma_Resume.pdf"
            download
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/50 transition hover:border-purple-400/30 hover:text-white"
          >
            Resume ↓
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Let's Talk ↗
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-purple-400/30 hover:text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-xl">{isOpen ? "×" : "☰"}</span>
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.06] bg-[#08080d]/95 lg:hidden"
          >
            <div className="px-5 py-5 sm:px-8">
              <div className="flex flex-col">
                {links.map((link, index) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className={`border-b border-white/[0.06] py-4 text-base transition ${
                        isActive
                          ? "text-purple-300"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}

                <a
                  href="/Shruti_Sharma_Resume.pdf"
                  download
                  onClick={closeMenu}
                  className="mt-5 rounded-xl border border-white/10 py-3 text-center text-sm text-white/60 transition hover:border-purple-400/30 hover:text-white"
                >
                  Download Resume ↓
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 py-3 text-center text-sm font-medium text-white"
                >
                  Let's Talk ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
