export const SocialProof = () => (
  <section className="border-y border-slate-200/80 dark:border-slate-800">
    <div className="container py-10 flex flex-wrap items-center justify-center gap-8 opacity-80">
      {['Acme Capital','Vercel-like','HackerFund','ShipHard','OpsLab'].map((name) => (
        <div key={name} className="text-sm font-medium text-slate-500 dark:text-slate-400">{name}</div>
      ))}
    </div>
  </section>
)