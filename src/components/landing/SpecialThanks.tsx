import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const SpecialThanks = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="reveal-fade-up py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Special Thanks
          </span>
          <div className="bg-card rounded-xl border border-border p-8 space-y-4 text-muted-foreground">
            <p>
              Extending our gratitude to{" "}
              <span className="text-foreground font-bold">Ustadh Kamran Hussain</span>{" "}
              for his invaluable assistance in verifying the accuracy of the meanings and authenticating the audio recitations.
            </p>
            <p>
              All audio recordings of the Names were graciously provided by a brother who wishes to remain anonymous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialThanks;
