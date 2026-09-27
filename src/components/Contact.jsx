import { useInView } from '../hooks/useInView'

const links = [
  { label: 'Email', href: 'mailto:hello@linda.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

function Contact() {
  const [ref, inView] = useInView(0.3)

  return (
    <div id="Contact" className="section-full min-h-[calc(100svh-77px)]">
      <div
        ref={ref}
        className={`reveal-transition w-full max-w-5xl rounded-3xl bg-primary-dark p-6 text-center text-white sm:p-10 md:p-20 ${
          inView ? 'reveal-card-visible' : 'reveal-card-hidden'
        }`}
      >
        <span className="text-xs font-semibold tracking-widest text-violet-300 uppercase">
          Let's Connect
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
          LET'S CREATE SOMETHING AMAZING TOGETHER
        </h2>
        <p className="mx-auto mt-5 max-w-md text-violet-200">
          Have a brand that needs a bigger voice online? Let's talk about how
          we can grow it together.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
