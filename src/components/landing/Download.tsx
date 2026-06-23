import appStoreBadge from "@/assets/app-store-badge.svg";
import AndroidWaitlistButton from "@/components/landing/AndroidWaitlistButton";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Download = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} id="download" className="reveal-fade-up relative py-24 bg-primary overflow-hidden">
      {/* Floating background decoration */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10">
            Join thousands of Muslims on the path to knowing Allah through His Beautiful Names.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://apps.apple.com/us/app/sifat-learn-names-of-allah/id6758858851"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-[160px] flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="h-full w-full object-contain"
              />
            </a>
            <AndroidWaitlistButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
