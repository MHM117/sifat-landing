import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import appStoreBadge from "@/assets/app-store-badge.svg";
import AndroidWaitlistButton from "@/components/landing/AndroidWaitlistButton";
import homeMockup from "@/assets/home_mockup.png";
import homeMockupDark from "@/assets/home_mockup_dark.png";
import flashcardMockup from "@/assets/flashcard_mockup.png";
import flashcardMockupDark from "@/assets/flashcard_mockup_dark.png";
import listMockup from "@/assets/list_mockup.png";
import listMockupDark from "@/assets/list_mockup_dark.png";
import journalMockup from "@/assets/journal_mockup.png";
import journalMockupDark from "@/assets/journal_mockup_dark.png";
import guideMockup from "@/assets/guide_mockup.png";
import guideMockupDark from "@/assets/guide_mockup_dark.png";

const slides = [
  { light: homeMockup, dark: homeMockupDark, alt: "Home screen" },
  { light: flashcardMockup, dark: flashcardMockupDark, alt: "Flashcard screen" },
  { light: listMockup, dark: listMockupDark, alt: "List screen" },
  { light: journalMockup, dark: journalMockupDark, alt: "Dua Journal screen" },
  { light: guideMockup, dark: guideMockupDark, alt: "Dua Guide screen" },
];

const SLIDE_COUNT = slides.length;
const INTERVAL = 3500;

const Hero = () => {
  const [active, setActive] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoFlipRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % SLIDE_COUNT), INTERVAL);
  };

  useEffect(() => {
    resetTimer();
    autoFlipRef.current = setTimeout(() => setIsDark(true), SLIDE_COUNT * INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (autoFlipRef.current) clearTimeout(autoFlipRef.current);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark((d) => !d);
    if (autoFlipRef.current) {
      clearTimeout(autoFlipRef.current);
      autoFlipRef.current = null;
    }
    resetTimer();
  };

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

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center lg:items-start sm:justify-center lg:justify-start gap-3">
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

          {/* Right content - Phone mockup carousel */}
          <div className="flex flex-col items-center lg:items-center">
            <div className="relative">
              <button
                onClick={toggleTheme}
                className="absolute top-8 -right-10 z-10 p-2 rounded-full bg-muted/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-500"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                <Moon className={`w-4 h-4 absolute inset-0 m-auto transition-all duration-500 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`} />
                <Sun className={`w-4 h-4 transition-all duration-500 ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`} />
              </button>
              <div
                className="animate-float-fade-in relative w-72 h-[580px] lg:w-80 lg:h-[650px] xl:w-[22rem] xl:h-[720px] cursor-pointer"
                onClick={() => { setActive((i) => (i + 1) % SLIDE_COUNT); resetTimer(); }}
              >
                {slides.map((slide, i) => (
                  <>
                    <img
                      key={`${i}-light`}
                      src={slide.light}
                      alt={slide.alt}
                      className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
                        i === active && !isDark
                          ? "opacity-100 translate-y-0 blur-0 scale-100"
                          : "opacity-0 translate-y-2 blur-[2px] scale-[0.98]"
                      }`}
                      style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
                    />
                    <img
                      key={`${i}-dark`}
                      src={slide.dark}
                      alt={`${slide.alt} (dark mode)`}
                      className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
                        i === active && isDark
                          ? "opacity-100 translate-y-0 blur-0 scale-100"
                          : "opacity-0 translate-y-2 blur-[2px] scale-[0.98]"
                      }`}
                      style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
                    />
                  </>
                ))}
              </div>
            </div>
            {/* Dot indicators */}
            <div className="flex gap-2 -mt-2">
              {slides.map((_, i) => (
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
