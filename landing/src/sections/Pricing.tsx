const plans = [
  { name: 'Free', price: '$0', features: ['1 subreddit', 'Basic summaries', 'Email support'] },
  { name: 'Pro', price: '$19', features: ['10 subreddits', 'Smart summaries', 'Keyword/regex rules', 'Priority support'] },
]

export const Pricing = () => (
  <section id="pricing" className="bg-slate-50 dark:bg-slate-950/40">
    <div className="container py-20">
      <h2 className="text-3xl font-semibold tracking-tight">Pricing</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((p) => (
          <div key={p.name} className="card p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium">{p.name}</h3>
              <div className="text-2xl font-semibold">{p.price}<span className="text-sm font-normal text-slate-500">/mo</span></div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {p.features.map((f) => (<li key={f}>• {f}</li>))}
            </ul>
            <a href="#" className="btn btn-primary mt-6">Choose {p.name}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
)