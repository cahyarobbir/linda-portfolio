import { useInView } from '../hooks/useInView'

const tools = [
  { name: 'Meta Suite', tint: 'bg-blue-50 text-blue-600' },
  { name: 'Canva', tint: 'bg-cyan-50 text-cyan-600' },
  { name: 'Hootsuite', tint: 'bg-orange-50 text-orange-600' },
  { name: 'Analytics', tint: 'bg-amber-50 text-amber-600' },
  { name: 'TikTok Ads', tint: 'bg-rose-50 text-rose-600' },
  { name: 'Later', tint: 'bg-violet-50 text-violet-600' },
  { name: 'Buffer', tint: 'bg-sky-50 text-sky-600' },
  { name: 'Adobe', tint: 'bg-red-50 text-red-600' },
]

const steps = [
  {
    number: '01',
    title: 'Research',
    description: 'Understand your audience, competitors, and goals.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Plan content pillars, calendar, and campaign roadmap.',
  },
  {
    number: '03',
    title: 'Create',
    description: 'Produce scroll-stopping content across platforms.',
  },
  {
    number: '04',
    title: 'Grow',
    description: 'Analyze performance, optimize, and scale what works.',
  },
]

function Process() {
  const [ref, inView] = useInView(0.2)

  return (
    <div id="Process" className="section-full">
      <div
        ref={ref}
        className={`reveal-card max-w-5xl p-6 text-left sm:p-10 md:p-16 ${
          inView ? 'reveal-card-visible' : 'reveal-card-hidden'
        }`}
      >
        <span className="card-eyebrow">How I Work</span>
        <h2 className="card-heading">Tools &amp; Process</h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-muted uppercase">
              Tools &amp; Technologies
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-2 rounded-xl border border-violet-100 bg-white px-2 py-4 text-center"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${tool.tint}`}
                  >
                    {tool.name.charAt(0)}
                  </span>
                  <span className="text-[11px] font-medium text-body">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted uppercase">
              My Process
            </p>
            <ol className="mt-4 space-y-6">
              {steps.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span className="text-2xl font-extrabold text-violet-200">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-heading">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-body">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
