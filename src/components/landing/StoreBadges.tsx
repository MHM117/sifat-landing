import appStoreBadge from "@/assets/app-store-badge.svg";
import googlePlayBadge from "@/assets/google-play-badge.png";
import { cn } from "@/lib/utils";

interface StoreBadgesProps {
  className?: string;
}

const StoreBadges = ({ className }: StoreBadgesProps) => {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-3 items-center", className)}>
      <a 
        href="#" 
        className="h-12 w-[160px] flex items-center justify-center hover:opacity-80 transition-opacity"
      >
        <img 
          src={appStoreBadge} 
          alt="Download on the App Store" 
          className="h-full w-full object-contain" 
        />
      </a>
      <a 
        href="#" 
        className="h-12 w-[160px] flex items-center justify-center hover:opacity-80 transition-opacity overflow-hidden"
      >
        <img 
          src={googlePlayBadge} 
          alt="Get it on Google Play" 
          className="h-full w-full object-contain transform-gpu scale-[1.4]" 
        />
      </a>
    </div>
  );
};

export default StoreBadges;
