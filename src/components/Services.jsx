import { useInView } from '../hooks/useInView'
import { ArrowRightIcon } from './Icons'

const services = [
  {
    title: 'Content Strategy',
    description:
      'Content pillars and calendars built around your brand voice and goals.',
    tint: 'bg-violet-50 text-primary',
  },
  {
    title: 'Community Management',
    description:
      'Real-time engagement that turns followers into loyal customers.',
    tint: 'bg-rose-50 text-rose-500',
  },
  {
    title: 'Paid Advertising',
    description:
      'Targeted Instagram and TikTok campaigns that convert, not just reach.',
    tint: 'bg-sky-50 text-sky-500',
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Clear monthly reporting so you always know what is working.',
    tint: 'bg-amber-50 text-amber-500',
  },
]

function Services() {
  const [ref, inView] = useInView(0.2)

  return (
    <div id="Services" className="section-full">
      <div
        ref={ref}
        className={`reveal-card max-w-5xl p-6 text-left sm:p-10 md:p-16 ${
          inView ? 'reveal-card-visible' : 'reveal-card-hidden'
        }`}
      >
        <span className="card-eyebrow">My Expertise</span>
        <h2 className="card-heading">What I Can Do For You</h2>
        <p className="card-body text-lg">
          A full toolkit for growing your brand's presence online.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-violet-100 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-15px_rgba(124,111,224,0.3)]"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold ${service.tint}`}
              >
                {service.title.charAt(0)}
              </span>
              <h3 className="mt-4 font-semibold text-heading">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-body">{service.description}</p>
              <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-primary transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
