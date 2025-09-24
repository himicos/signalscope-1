import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { Button } from '../ui/Button'
import { getConfig } from '../../lib/config'

export const Header = () => {
  const { appUrl } = getConfig()
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur-md dark:bg-slate-950/50 dark:border-slate-800">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" aria-label="SignalScope home"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
          <a className="hover:underline" href="#features">Features</a>
          <a className="hover:underline" href="#how">How it works</a>
          <a className="hover:underline" href="#pricing">Pricing</a>
          <Link className="hover:underline" to="/privacy">Privacy</Link>
          <Link className="hover:underline" to="/terms">Terms</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href={appUrl} className="btn btn-primary">Open App</a>
        </div>
      </div>
    </header>
  )
}