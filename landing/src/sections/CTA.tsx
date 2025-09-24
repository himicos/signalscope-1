import { getConfig } from '../lib/config'

export const CTA = () => {
  const { appUrl } = getConfig()
  return (
    <section className="relative overflow-hidden">
      <div className="container py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Find signal faster</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Minutes, not hours, from discovery to decision.</p>
        <a href={appUrl} className="btn btn-primary mt-6">Open App</a>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.15),transparent_60%)]" />
    </section>
  )
}