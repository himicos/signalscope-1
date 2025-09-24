const qas = [
  { q: 'Do I need my own Reddit API keys?', a: 'Yes. Bring your own for compliant, reliable access.' },
  { q: 'Can I use regex rules?', a: 'Yes. Use keywords or regex to flag content.' },
  { q: 'Is there a free plan?', a: 'Yes, with basic limits to try things out.' },
  { q: 'Do you store my credentials?', a: 'Securely, per‑user, with best practices.' },
  { q: 'Is this multi‑tenant?', a: 'Yes. Built for teams and SaaS distribution.' },
  { q: 'How do I export data?', a: 'CSV export is on the roadmap; contact us for early access.' },
]

export const FAQ = () => (
  <section className="container py-20">
    <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {qas.map((qa) => (
        <div key={qa.q} className="card p-6">
          <h3 className="font-medium">{qa.q}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{qa.a}</p>
        </div>
      ))}
    </div>
  </section>
)