const items = [
  {
    title: 'Keyword / Regex Rules',
    desc: 'Flag, group, and prioritize content that matters to you.'
  },
  {
    title: 'BYO Credentials',
    desc: 'Use your own Reddit API keys for compliant, reliable access.'
  },
  {
    title: 'Clean Review Flow',
    desc: 'Opinionated UI for scanning and decision‑making without the tabs.'
  },
  {
    title: 'Smart Summaries',
    desc: 'Digest long threads instantly with TL;DR summaries.'
  },
  {
    title: 'Multi‑tenant Ready',
    desc: 'Per‑user settings and preferences; SaaS‑ready.'
  },
  {
    title: 'Lightweight + Fast',
    desc: 'Minimal friction, instant onboarding, focused on outcomes.'
  }
]

export const Features = () => (
  <section id="features" className="container py-20">
    <h2 className="text-3xl font-semibold tracking-tight">Core Features</h2>
    <p className="mt-3 text-slate-600 dark:text-slate-300">Precision over volume: you define the signal; we filter the rest.</p>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <div key={it.title} className="card p-6 hover:shadow-lg transition-shadow">
          <h3 className="font-medium">{it.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.desc}</p>
        </div>
      ))}
    </div>
  </section>
)