const Hadith = () => {
  const hadiths = [
    {
      text: "Allah has ninety-nine Names, one-hundred less one; and he who memorized them all by heart will enter Paradise.",
      narrator: "Abu Huraira",
      source: "Sahih al-Bukhari 7392",
    },
    {
      text: "The most loved deeds to Allah are the ones that are consistent, even if they are few.",
      narrator: "'Aisha",
      source: "Sahih al-Bukhari 6465",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Rooted in Tradition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The core principles of Sifat are built upon authentic Hadith, encouraging both memorisation and consistency in practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {hadiths.map((hadith, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <p className="text-lg text-foreground leading-relaxed italic flex-1">
                "{hadith.text}"
              </p>
              
              <div className="border-t border-border pt-4 mt-6">
                <p className="text-sm text-muted-foreground">
                  Narrated by <span className="text-foreground font-medium">{hadith.narrator}</span>
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  {hadith.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hadith;
