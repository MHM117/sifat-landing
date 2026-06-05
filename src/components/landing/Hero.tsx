import { useState, useEffect, useRef } from "react";
import { Bell } from "lucide-react";
import appStoreBadge from "@/assets/app-store-badge.svg";
import homeMockup from "@/assets/home_mockup.png";
import flashcardMockup from "@/assets/flashcard_mockup.png";
import listMockup from "@/assets/list_mockup.png";

const images = [homeMockup, flashcardMockup, listMockup];

const Hero = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % 3), 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up mt-8 mb-6" />

            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Learn the Names of Allah
              <br />
              <span className="text-primary">And Never Forget Them</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Build deep understanding through daily flashcards that adapt to you. Hear proper pronunciation, challenge yourself with quizzes, and use the Names confidently in your dua.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col items-center lg:items-start gap-4">
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
              {/* <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full">
                <Bell className="w-4 h-4" />
                <span className="text-sm font-medium">Coming Soon to Android</span>
              </div> */}
            </div>
          </div>

          {/* Right content - Phone mockup carousel */}
          <div className="flex flex-col items-center lg:items-center">
            <div
              className="animate-float-fade-in relative w-72 h-[580px] lg:w-80 lg:h-[650px] xl:w-[22rem] xl:h-[720px] cursor-pointer"
              onClick={() => { setActive((i) => (i + 1) % 3); resetTimer(); }}
            >
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={["Home screen", "Flashcard screen", "List screen"][i]}
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
                    i === active
                      ? "opacity-100 translate-y-0 blur-0 scale-100"
                      : "opacity-0 translate-y-2 blur-[2px] scale-[0.98]"
                  }`}
                  style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
                />
              ))}
            </div>
            {/* Dot indicators */}
            <div className="flex gap-2 -mt-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); resetTimer(); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Show screen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;