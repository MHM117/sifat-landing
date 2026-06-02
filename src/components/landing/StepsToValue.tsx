import { Download, BookMarked, Layers, Trophy } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Download,
    title: "Download",
    description: "Get the app on iOS and Android",
  },
  {
    number: 2,
    icon: BookMarked,
    title: "Choose",
    description: "Select your preferred scholarly source",
  },
  {
    number: 3,
    icon: Layers,
    title: "Practice",
    description: "Complete your first flashcard session",
  },
  {
    number: 4,
    icon: Trophy,
    title: "Master",
    description: "Build your daily habit and track progress",
  },
];

const StepsToValue = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Getting Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Start Learning in Minutes
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line - horizontal on desktop */}
          <div className="absolute hidden lg:block top-6 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-primary/20" />
          
          {/* Connecting line - vertical on mobile */}
          <div className="absolute lg:hidden left-6 top-6 bottom-6 w-0.5 bg-primary/20" />

          {/* Steps */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-3 lg:flex-1"
              >
                {/* Circle with icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center shrink-0 hover:scale-110 transition-transform">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                
                {/* Text content */}
                <div className="lg:text-center">
                  <span className="text-xs uppercase tracking-wide text-primary/70 font-medium">
                    Step {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsToValue;
