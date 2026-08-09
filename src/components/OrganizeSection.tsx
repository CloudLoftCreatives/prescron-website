import PhoneFrame from './PhoneFrame'

const categories = [
  { label: 'Government ID', color: 'bg-blue-50 border-blue-200 text-blue-600' },
  { label: 'Medical', color: 'bg-rose-50 border-rose-200 text-rose-600' },
  { label: 'Legal', color: 'bg-purple-50 border-purple-200 text-purple-600' },
  { label: 'Finance', color: 'bg-emerald-50 border-emerald-200 text-emerald-600' },
  { label: 'Education', color: 'bg-amber-50 border-amber-200 text-amber-600' },
  { label: 'Personal', color: 'bg-sky-50 border-sky-200 text-sky-600' },
  { label: 'Insurance', color: 'bg-teal-50 border-teal-200 text-teal-600' },
  { label: 'Other', color: 'bg-slate-50 border-slate-200 text-slate-600' },
]

export default function OrganizeSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F9FC]" aria-label="Organize your vault feature">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="space-y-7 reveal">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#20C997] mb-4">Your Vault</p>
              <h2 className="font-display font-bold tracking-tight text-[#111827] mb-5"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1' }}>
                Everything important,<br />organized.
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed">
                Keep all your important documents in one private, organized vault.
                Browse by category, find anything instantly, and know exactly what you have.
              </p>
            </div>

            {/* Category grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {categories.map((cat) => (
                <div key={cat.label}
                     className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border text-center transition-all hover:scale-105 cursor-default ${cat.color}`}>
                  <span className="text-[11px] font-bold tracking-wide uppercase leading-tight">{cat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Real screenshot */}
          <div className="reveal reveal-delay-2">
            <div className="relative">
              <div className="absolute -inset-12 rounded-3xl opacity-20 blur-3xl pointer-events-none"
                   style={{ background: 'radial-gradient(ellipse, #20C997 0%, transparent 70%)' }}
                   aria-hidden="true" />
              <PhoneFrame>
                <img
                  src="/assets/sel2.png"
                  alt="Prescron main dashboard showing categories"
                  className="w-full block"
                  loading="lazy"
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
