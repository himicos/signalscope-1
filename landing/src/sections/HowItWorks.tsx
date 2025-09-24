const steps = [
  { title: 'Add subreddits', text: 'Target the communities that matter.' },
  { title: 'Define rules', text: 'Keywords / regex to surface high‑signal posts.' },
  { title: 'Review & act', text: 'Summaries and filters to move faster.' },
]

export const HowItWorks = () => (
  <section id="how" className="bg-slate-50 dark:bg-slate-950/40">
    <div className="container py-20">
      <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="card p-6">
            <div className="text-sm text-slate-500">Step {i + 1}</div>
            <h3 className="mt-2 font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)