export const Logo = ({ className = 'h-6 w-auto' }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366F1"/>
          <stop offset="100%" stopColor="#22D3EE"/>
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="url(#g)"/>
      <path d="M7 12h10M7 8h6M7 16h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="font-semibold tracking-tight">SignalScope</span>
  </div>
)