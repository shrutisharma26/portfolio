import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievement', href: '#achievement' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'projects',
      'education',
      'achievement',
      'contact',
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180

      let currentSection = 'home'

      sections.forEach((id) => {
        const section = document.getElementById(id)

        if (!section) return

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">

      {/* TOP BAR */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight"
        >
          SHRUTI<span className="text-white/40">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm lg:flex">
          {links.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-2 transition ${
                  isActive
                    ? 'text-white'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-px w-4 -translate-x-1/2 bg-white" />
                )}
              </a>
            )
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">

          <a
            href="/Shruti_Sharma_Resume.pdf"
            download
            className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
          >
            Resume ↓
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-white/50 hover:bg-white hover:text-black"
          >
            Let's Talk
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-xl">
            {isOpen ? '×' : '☰'}
          </span>
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 lg:hidden ${
          isOpen
            ? 'max-h-[600px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8">

          <div className="flex flex-col">

            {links.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`border-b border-white/10 py-4 text-lg transition ${
                    isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}

            {/* Resume */}
            <a
              href="/Shruti_Sharma_Resume.pdf"
              download
              onClick={closeMenu}
              className="mt-5 rounded-full border border-white/15 px-6 py-3 text-center text-sm text-white/70 transition hover:border-white/40 hover:text-white"
            >
              Download Resume ↓
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black"
            >
              Let's Talk →
            </a>

          </div>

        </div>
      </div>

    </nav>
  )
}

export default Navbar