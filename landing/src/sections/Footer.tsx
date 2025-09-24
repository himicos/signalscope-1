import { Link } from 'react-router-dom'

export const Footer = () => (
  <footer className="mt-20 border-t border-slate-200/80 dark:border-slate-800">
    <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
      <div>© {new Date().getFullYear()} SignalScope. All rights reserved.</div>
      <nav className="flex items-center gap-4">
        <Link to="/privacy" className="hover:underline">Privacy</Link>
        <Link to="/terms" className="hover:underline">Terms</Link>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
      </nav>
      <div className="text-xs opacity-70">psst… easter egg: stay curious.</div>
    </div>
  </footer>
)