export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Chetan Singh. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-8">
          <a
            href="https://github.com/Chetan210703"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-pink-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/chetansingh210703"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-pink-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/CHETAN_CV.pdf?v=3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-pink-400 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
