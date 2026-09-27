import profileImg from '../assets/Profile/IMG-20231104-WA0019-removebg-preview.png'
import { PinIcon } from './Icons'

function ProfileImage() {
  return (
    <div className="relative isolate -mb-20 w-full max-w-xl justify-self-center pt-[11%] lg:-mb-32 lg:max-w-none lg:self-end">
      <div className="absolute inset-x-[10%] bottom-0 -z-20 aspect-square translate-y-6 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -z-10 aspect-square w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-200 via-violet-100 to-white/60" />

      <img
        src={profileImg}
        alt="Linda"
        className="aspect-[433/340] w-full object-cover object-bottom drop-shadow-[0_30px_30px_rgba(36,26,61,0.18)]"
      />

      <div className="absolute top-[42%] right-0 flex items-center gap-2 rounded-full border border-violet-100 bg-white/90 px-4 py-2 text-xs font-semibold text-heading shadow-lg backdrop-blur-sm">
        <PinIcon className="h-4 w-4 text-primary" />
        Based in Jakarta
      </div>
    </div>
  )
}

export default ProfileImage
