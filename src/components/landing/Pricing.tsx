import { Coffee, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, Affordable Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Invest in your spiritual growth. Knowledge that benefits you in this life and the next.
          </p>
          {/* <div className="mt-3">
            <span className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive rounded-full text-sm font-bold">
              🚀 Launch Discount
            </span>
          </div> */}
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Monthly */}
              <div className="text-center flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Monthly
                </h3>
                <div className="flex flex-col items-center justify-center mb-auto">
                  <span className="text-lg text-muted-foreground line-through">£3.99</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">£1.99</span>
                    <span className="text-muted-foreground text-sm">/month</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-4">
                  <Coffee className="w-3.5 h-3.5" />
                  <span>Less than a coffee</span>
                </div>
              </div>

              {/* Yearly */}
              <div className="text-center relative flex flex-col">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                    Best Value - Save 50%
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Yearly
                </h3>
                <div className="flex flex-col items-center justify-center mb-auto">
                  <span className="text-lg text-muted-foreground line-through">£22.99</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">£11.99</span>
                    <span className="text-muted-foreground text-sm">/year</span>
                  </div>
                  {/* <span className="text-muted-foreground text-sm">(£1.92/month)</span> */}
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-4">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Cheaper than a takeaway</span>
                </div>
              </div>
            </div>

            <Button className="w-full" asChild>
              <a href="#download">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
