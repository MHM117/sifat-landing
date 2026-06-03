import { BookOpen, CircleCheck, XCircle, Plus, Check } from "lucide-react";

const FairPricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Fair Pricing & No Tricks
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 sm:p-10 border border-border shadow-lg mb-6 text-center bg-gradient-to-br from-card to-muted/30">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-5">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <p className="text-foreground text-lg mb-2">
              Physical flashcards and books on the 99 Names can cost
            </p>
            <p className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-3">
              up to <span className="text-primary">£30</span>
            </p>
            <p className="text-muted-foreground max-w-md mx-auto mb-5">
              And even then, there is no guarantee you will actually memorise them.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-5 py-2.5">
              <Check className="w-4 h-4 text-green-500 shrink-0" />
              <span className="text-green-500 font-semibold text-sm">
                Sifat uses spaced repetition to make sure you do, for just £7.99
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary/50 transition-colors">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl mb-4">
                <CircleCheck className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Built to be Completed
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sifat has a finish line. Once you have memorised the Names, you are done. Come back whenever you want for a refresher, whether that is before Ramadan or just to keep sharp.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary/50 transition-colors">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl mb-4">
                <XCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No subscriptions
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We used to offer a subscription model but switched to a one-time purchase because it felt like the right thing to do.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 py-3 px-4 bg-primary/5 rounded-xl">
            <Plus className="w-3.5 h-3.5 text-primary shrink-0" />
            <p className="text-muted-foreground text-xs">
              More decks are on the way, including Quran Surah Names. Your purchase keeps growing in value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FairPricing;
