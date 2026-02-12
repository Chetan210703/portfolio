export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-700/50">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Chetan Singh. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/Chetan210703"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/chetansingh210703"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/CHETAN_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
