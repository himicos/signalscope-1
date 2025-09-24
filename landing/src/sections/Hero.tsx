import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { getConfig } from '../lib/config'

export const Hero = () => {
  const { appUrl } = getConfig()
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container py-24 sm:py-28">
        <div className="max-w-3xl">
          <Badge>Reddit intelligence for people who ship</Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight">See the signal. Skip the noise.</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Turn Reddit’s noise into actionable signal with keyword targeting, fast summaries, and a clean workflow.</p>
          <div className="mt-8 flex gap-3">
            <a href={appUrl} className="btn btn-primary" aria-label="Open App">Open App</a>
            <a href="#changelog" className="btn btn-ghost" aria-label="View Changelog">View Changelog</a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-95">
          <div className="card p-6">
            <h3 className="font-medium">Targeted Tracking</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Add subreddits; scan continuously with your credentials.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-medium">Smart Summaries</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">TL;DR for long posts to speed triage.</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]"/>
    </section>
  )
}