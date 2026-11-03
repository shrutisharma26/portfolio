
const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">

      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        {/* BRAND */}
        <div>
          <a
            href="#home"
            className="text-sm font-semibold tracking-wide text-white/70 transition hover:text-white"
          >
            Shruti Sharma
            <span className="ml-1 text-purple-400">.</span>
          </a>

          <p className="mt-1 text-xs text-white/25">
            Built with curiosity & a little caffeine.
          </p>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Shruti Sharma. All rights reserved.
        </p>

        {/* BACK TO TOP */}
        <a
          href="#home"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/40 transition hover:text-purple-300"
        >
          Back to top

          <span className="transition-transform duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </a>

      </div>

    </footer>
  )
}

export default Footer
