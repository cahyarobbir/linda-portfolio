import { useInView } from '../hooks/useInView'
import { ClockIcon, BriefcaseIcon, UsersIcon, TrophyIcon } from './Icons'

const stats = [
  { icon: ClockIcon, value: '3+', label: 'Years Experience' },
  { icon: BriefcaseIcon, value: '50+', label: 'Campaigns Launched' },
  { icon: UsersIcon, value: '20+', label: 'Happy Clients' },
  { icon: TrophyIcon, value: '1M+', label: 'Audience Reached' },
]

function Stats() {
  const [ref, inView] = useInView(0.3)

  return (
    <div className="relative z-10 mt-8 w-full max-w-6xl">
      <div
        ref={ref}
        className={`reveal-transition card-surface grid w-full grid-cols-2 divide-x divide-y divide-violet-100 md:grid-cols-4 md:divide-y-0 ${
          inView ? 'reveal-card-visible' : 'reveal-card-hidden'
        }`}
      >
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 px-6 py-6 text-center"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-50 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <p className="mt-1 text-2xl font-extrabold text-heading">
              {value}
            </p>
            <p className="text-xs font-medium text-muted">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
