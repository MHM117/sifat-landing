import { Bell } from "lucide-react";
import appStoreBadge from "@/assets/app-store-badge.svg";

const Download = () => {
  return (
    <section id="download" className="py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10">
            Join thousands of Muslims on the path to knowing Allah through His Beautiful Names.
          </p>

          <div className="flex flex-col items-center gap-4">
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
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-5 py-2.5 rounded-full">
              <Bell className="w-4 h-4" />
              <span className="text-sm font-medium">Coming Soon to Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
