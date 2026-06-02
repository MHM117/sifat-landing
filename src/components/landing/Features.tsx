import { 
  // BookOpen, 
  Volume2, 
  HandHeart, 
  Library,
  BadgeCheck,
  Lightbulb,
  Ban
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BadgeCheck,
      title: "Expert Verified Content",
      description: "Scholarly verified content reviewed by Islamic experts for accuracy and authenticity.",
    },
    {
      icon: Library,
      title: "Multiple Sources",
      description: "The default is a comprehensive list of 128 authenticated names. You can also choose traditional compilations by Tirmidhi or Ibn al-Uthaymeen.",
    },
    {
      icon: Volume2,
      title: "Audio Pronunciation",
      description: "Listen to correct Arabic pronunciation to perfect your recitation.",
    },
    {
      icon: Lightbulb,
      title: "Dark Mode",
      description: "Comfortable learning any time of day. Switch to dark mode for easier reading.",
    },
    {
      icon: HandHeart,
      title: "Dua Helper",
      description: "Learn how to call upon Allah using His Names in your daily supplications. Detailed reflection guides for each Name are also planned.",
    },
    {
      icon: Ban,
      title: "No Ads, Ever",
      description: "Your learning experience is completely ad-free. No distractions, just focused worship.",
    },
    // {
    //   icon: BookOpen,
    //   title: "Deep Dive Guides",
    //   description: "Go beyond memorisation with detailed explanations and reflections on each Name.",
    // },
  ];

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Learn
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit designed to help you memorise, understand, and apply 
            the Names in your daily life.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
