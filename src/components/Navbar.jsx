import { useEffect, useRef, useState } from 'react'

const sections = [
  { id: 'Home', label: 'Home' },
  { id: 'About', label: 'About' },
  { id: 'Services', label: 'Services' },
  { id: 'Work', label: 'Projects' },
  { id: 'Process', label: 'Process' },
  { id: 'Contact', label: 'Contact' },
]

function Navbar() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  const scrollToSection = (event, id) => {
    event.preventDefault()
    setMenuOpen(false)

    let top = 0
    if (id !== 'Home') {
      const card = document.getElementById(id).firstElementChild
      const navHeight = navRef.current.offsetHeight
      const available = window.innerHeight - navHeight
      const gap = Math.max((available - card.offsetHeight) / 2, 16)
      // offsetTop ignores the reveal animation's translate, so this is the card's resting position
      top = card.offsetTop - navHeight - gap
    }

    window.scrollTo({ top, behavior: 'smooth' })
    history.replaceState(null, '', `#${id}`)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav ref={navRef} className="navbar-bar">
      <a
        href="#Home"
        onClick={(event) => scrollToSection(event, 'Home')}
        className="text-xl font-extrabold tracking-tight text-heading"
      >
        L<span className="text-primary">.</span>
      </a>

      <ul className="hidden gap-8 md:flex">
        {sections.map(({ id, label }) => (
          <li key={id} className="relative pb-1">
            <a
              href={`#${id}`}
              onClick={(event) => scrollToSection(event, id)}
              className={active === id ? 'nav-link-active' : 'nav-link'}
            >
              {label}
            </a>
            {active === id && (
              <span className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-primary" />
            )}
          </li>
        ))}
      </ul>

      <a
        href="#Contact"
        onClick={(event) => scrollToSection(event, 'Contact')}
        className="hidden btn-primary md:inline-flex"
      >
        Let's Talk
      </a>

      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-100 text-heading md:hidden"
      >
        <span className="relative block h-3.5 w-4">
          <span
            className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-heading transition-transform duration-200 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-heading transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-heading transition-transform duration-200 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full border-b border-violet-100 bg-white/95 px-6 py-6 shadow-lg backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(event) => scrollToSection(event, id)}
                  className={
                    active === id ? 'nav-link-active block' : 'nav-link block'
                  }
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#Contact"
                onClick={(event) => scrollToSection(event, 'Contact')}
                className="btn-primary mt-2 w-full justify-center"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
