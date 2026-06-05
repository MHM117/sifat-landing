import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  { name: "Flashcards", free: "18", premium: "All" },
  { name: "Quizzes", free: "3 per day", premium: "No limit" },
  { name: "Custom Study", free: false, premium: true },
  { name: "Challenges", free: false, premium: true },
  { name: "Names Explorer", free: true, premium: true },
  { name: "Dua Journal", free: true, premium: true },
  { name: "Audio", free: true, premium: true },
];

const Pricing = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} id="pricing" className="reveal-fade-up py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, Fair Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Invest in your spiritual growth. Knowledge that benefits you in this life and the next.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="bg-card rounded-2xl p-8 border-2 border-primary shadow-lg text-center">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-bold text-foreground">£7.99</span>
              <span className="text-muted-foreground text-sm">one-time</span>
            </div>
            <p className="text-primary font-medium mt-2">Pay once, own forever</p>
            <p className="text-muted-foreground text-sm mt-1">
              Free version available with limited features
            </p>
          </div>
        </div>

        <div className="max-w-lg mx-auto mb-8">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_100px_100px] text-sm font-semibold text-primary border-b border-border px-4 py-3">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center">Premium</span>
            </div>
            {features.map((feature, i) => (
              <div
                key={feature.name}
                className={`grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_100px_100px] text-sm px-4 py-3 ${
                  i < features.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <span className="text-foreground">{feature.name}</span>
                <span className="text-center">
                  {typeof feature.free === "boolean" ? (
                    feature.free ? (
                      <Check className="w-4 h-4 text-green-500 inline-block" />
                    ) : (
                      <X className="w-4 h-4 text-red-400 inline-block" />
                    )
                  ) : (
                    <span className="text-muted-foreground">{feature.free}</span>
                  )}
                </span>
                <span className="text-center">
                  {typeof feature.premium === "boolean" ? (
                    feature.premium ? (
                      <Check className="w-4 h-4 text-green-500 inline-block" />
                    ) : (
                      <X className="w-4 h-4 text-red-400 inline-block" />
                    )
                  ) : (
                    <span className="text-green-500 font-medium">{feature.premium}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Button className="w-full" asChild>
            <a href="#download">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
