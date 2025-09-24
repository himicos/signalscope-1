export const Screenshots = () => (
  <section className="container py-20">
    <h2 className="text-3xl font-semibold tracking-tight">Screens & preview</h2>
    <p className="mt-3 text-slate-600 dark:text-slate-300">Swap these placeholders with real screenshots later.</p>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="aspect-video card overflow-hidden">
          <div className="h-full w-full bg-gradient-to-br from-indigo-200 to-cyan-200 dark:from-indigo-600/30 dark:to-cyan-600/30" />
        </div>
      ))}
    </div>
  </section>
)