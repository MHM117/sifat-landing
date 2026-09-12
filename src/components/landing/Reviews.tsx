import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  {
    title: "Absolutely love this app!",
    text: "Learning the 99 Names of Allah has become so much easier and more meaningful. The explanations are clear, the design is simple and beautiful, and it really helps me reflect on the meanings behind each name. It’s a great way to strengthen my connection and understanding every day.",
    author: "Noor A.",
    rating: 5,
  },
  {
    title: "What we needed",
    text: "Very thankful this got released. As a community we’ve neglected the Names and don’t place enough emphasis on them. The flashcards are great and don’t demand too much from your daily routine.",
    author: "Anonymous",
    rating: 5,
  },
  {
    title: "Please make more",
    text: "As someone who struggles to stay focused and learn things long term, this app really helped me learn the Names and taught me how to actually use them in dua. The spaced repetition is well thought out, reminds me of Anki. I think more decks should be released on different topics.",
    author: "Mohammad B.",
    rating: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-2">
    {Array.from({ length: count }, (_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-amber-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Reviews = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="reveal-fade-up py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`reveal-fade-up reveal-stagger-${index + 1} bg-card rounded-xl p-5 card-shadow`}
            >
              <Stars count={review.rating} />
              {review.title && (
                <p className="text-sm font-bold text-foreground mb-1">
                  {review.title}
                </p>
              )}
              <p className="text-sm text-foreground leading-relaxed mb-3">
                "{review.text}"
              </p>
              <p className="text-xs text-muted-foreground font-medium">
                {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
