import { useInView } from '../hooks/useInView'
import ProfileImage from './ProfileImage'
import Stats from './Stats'

function Home() {
    const [ref, inView] = useInView(0.3)

    return (
        <div id="Home" className="section-full min-h-[calc(100svh-77px)] py-10">
            <div
                ref={ref}
                className={`reveal-transition grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 ${inView ? 'reveal-card-visible' : 'reveal-card-hidden'
                    }`}
            >
                <div className="text-center lg:text-left">
                    <span className="card-eyebrow">Hello, I'm Linda</span>
                    <h1 className="mt-3 text-5xl leading-tight font-extrabold tracking-tight text-heading md:text-6xl">
                        SOCIAL MEDIA
                        <br />
                        <span className="text-primary">SPECIALIST</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-md text-lg text-body lg:mx-0">
                        I help brands grow their voice online through strategic content,
                        engaged communities, and campaigns that actually move the
                        needle.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                        <a href="#Work" className="btn-primary">
                            View Portfolio
                        </a>
                        <a href="#Contact" className="btn-outline">
                            Get In Touch
                        </a>
                    </div>
                </div>

                <ProfileImage />
            </div>
            <Stats />
        </div>
    )
}

export default Home
