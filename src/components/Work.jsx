import { useInView } from '../hooks/useInView'

const projects = [
  {
    title: 'Brand Launch Campaign',
    description:
      'Multi-platform launch strategy that grew a new brand from 0 to 25K followers in 3 months.',
    tag: 'Instagram + TikTok',
    gradient: 'from-violet-400 to-purple-400',
  },
  {
    title: 'E-commerce Growth Sprint',
    description:
      'Content calendar and paid ad strategy that tripled engagement and lifted sales by 40%.',
    tag: 'Content + Ads',
    gradient: 'from-rose-400 to-pink-400',
  },
  {
    title: 'Community Revamp',
    description:
      'Rebuilt the community engagement strategy, doubling comments and DMs within 6 weeks.',
    tag: 'Community Management',
    gradient: 'from-sky-400 to-violet-400',
  },
]

function Work() {
  const [ref, inView] = useInView(0.2)

  return (
    <div id="Work" className="section-full">
      <div
        ref={ref}
        className={`reveal-card max-w-5xl p-6 text-left sm:p-10 md:p-16 ${
          inView ? 'reveal-card-visible' : 'reveal-card-hidden'
        }`}
      >
        <span className="card-eyebrow">Selected Work</span>
        <h2 className="card-heading">Recent Projects</h2>
        <p className="card-body text-lg">A few campaigns I'm proud of.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-violet-100 bg-white p-5"
            >
              <div
                className={`mb-4 h-28 w-full rounded-lg bg-gradient-to-br ${project.gradient}`}
              />
              <h3 className="font-semibold text-heading">{project.title}</h3>
              <p className="mt-1 text-sm text-body">{project.description}</p>
              <span className="mt-3 inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-primary">
                {project.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
