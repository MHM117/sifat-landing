// Custom Android waiting-list button, sized to pair with the App Store badge (h-12).
// Opens the waitlist modal (email capture → Mailchimp).
import AndroidIcon from "@/components/landing/AndroidIcon";
import WaitlistDialog from "@/components/landing/WaitlistDialog";

const AndroidWaitlistButton = () => (
  <WaitlistDialog>
    <button
      type="button"
      className="group h-12 w-[160px] inline-flex items-center gap-2 px-3 rounded-xl bg-black text-white hover:opacity-80 active:scale-[0.97] transition-all duration-200"
    >
      <AndroidIcon className="w-6 h-6 text-[#3DDC84] shrink-0 transition-transform duration-300 group-hover:rotate-[8deg]" />
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
          Android
        </span>
        <span className="text-sm font-semibold mt-0.5">Join Waitlist</span>
      </div>
    </button>
  </WaitlistDialog>
);

export default AndroidWaitlistButton;
