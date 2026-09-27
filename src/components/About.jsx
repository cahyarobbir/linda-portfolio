import { useInView } from '../hooks/useInView'

function About() {
  const [ref, inView] = useInView(0.3)

  return (
    <div id="About" className="section-full">
      <div
        ref={ref}
        className={`reveal-card max-w-2xl p-6 text-left sm:p-10 md:p-16 ${
          inView ? 'reveal-card-visible' : 'reveal-card-hidden'
        }`}
      >
        <span className="card-eyebrow">Get to know me</span>
        <h2 className="card-heading">About Me</h2>
        <p className="card-body text-lg">
          I'm a social media specialist who loves building engaging brand
          stories, growing communities, and turning content into measurable
          results. I blend creativity with data-driven strategy to help
          brands stand out and connect with their audience across every
          platform.
        </p>
      </div>
    </div>
  )
}

export default About
