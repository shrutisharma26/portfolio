const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">

        <p>
          © {new Date().getFullYear()} Shruti Sharma
        </p>

        <a
          href="#home"
          className="transition hover:text-white"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  )
}

export default Footer