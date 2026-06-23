// Custom Android waiting-list button, sized to pair with the App Store badge (h-12).
// TODO: replace href="#" with the real waitlist destination (Google Form / Notion / etc.).

const AndroidIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.62.62 0 0 0-.83.22l-1.88 3.24a11.46 11.46 0 0 0-8.94 0L5.65 5.67a.62.62 0 0 0-.83-.22c-.3.16-.42.54-.26.85L6.4 9.48A10.78 10.78 0 0 0 1 18h22a10.78 10.78 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
  </svg>
);

const AndroidWaitlistButton = () => (
  <a
    href="#"
    className="group h-12 w-[160px] inline-flex items-center gap-2 px-3 rounded-xl bg-black text-white hover:opacity-80 active:scale-[0.97] transition-all duration-200"
  >
    <AndroidIcon className="w-6 h-6 text-[#3DDC84] shrink-0 transition-transform duration-300 group-hover:rotate-[8deg]" />
    <div className="flex flex-col items-start leading-none">
      <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
        Android
      </span>
      <span className="text-sm font-semibold mt-0.5">Join Waitlist</span>
    </div>
  </a>
);

export default AndroidWaitlistButton;
