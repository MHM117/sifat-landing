import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import NamesList from "@/components/names/NamesList";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Names = () => {
  useDocumentMeta({
    title: "Names of Allah: Full List with Meanings | Sifat",
    description:
      "Browse the Names of Allah in Arabic with transliteration and meanings. Switch between the 99 Names narrated by Tirmidhi and the compilation of Ibn al-Uthaymeen, and search any Name.",
    canonical: "https://sifat.app/names",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionRef = useScrollReveal<HTMLElement>();
  const ctaRef = useScrollReveal<HTMLElement>();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <section ref={sectionRef} className="reveal-fade-up py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Names of Allah
              </h1>
              <blockquote className="inline-block max-w-2xl px-6 sm:px-8 py-4 bg-primary/10 text-primary-deep rounded-2xl text-sm sm:text-base font-medium">
                <p className="text-pretty">
                  Allah has the Most Beautiful Names. So call upon Him by them, and
                  keep away from those who abuse His Names. They will be punished
                  for what they used to do.
                </p>
                <cite className="block mt-2 text-xs not-italic tracking-wide text-primary-deep">
                  Quran 7:180
                </cite>
              </blockquote>
            </div>

            <NamesList />
          </div>
        </section>

        <section ref={ctaRef} className="reveal-fade-up py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Reading Them Is the First Step
              </h2>
              <p className="text-muted-foreground mb-8">
                Sifat turns this list into a daily practice, using flashcards to
                help you remember them long term.
              </p>
              <Button asChild size="lg">
                <Link to="/#download">Get the App</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Names;
