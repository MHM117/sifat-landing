import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Sifat?",
      answer: "Sifat (صفات) is the Arabic word for 'attributes' or 'characteristics.' The app is named after this concept, as it focuses on the Qualities of Allah that help us understand and connect with our Creator.\n\nSifat helps Muslims master the meanings of Allah's Names using spaced repetition and reflective study, so they can meaningfully incorporate them into their daily prayers and dua.",
    },
    {
      question: "Is there a free version?",
      answer: "We offer a limited free tier so you can explore the app. Full access to all flashcards requires a one time purchase. Dua Guide and Journal features are available in both Free and Premium versions.",
    },
    {
      question: "Why learn 128 names instead of 99?",
      answer: "The authentic hadith (Sahih al-Bukhari 7392) tells us that Allah has 99 Names, and whoever learns them will enter Jannah - but it doesn't explicitly list which 99.\n\nThroughout Islamic history, scholars have compiled different lists based on the Qur'an and trusted resources.\n\nOur default list of 128 authenticated Names gives you the most comprehensive coverage, ensuring you're learning all the Names most scholars agree upon.\n\nIf you prefer a traditional 99-name compilation, you can choose from Tirmidhi or Ibn al-Uthaymeen's lists in the app settings.",
    },
    {
      question: "Don't some Names have multiple meanings?",
      answer: "Yes, many of Allah's Names have multiple valid meanings and interpretations derived from their Arabic root words. For example, AR-RAHMAAN can be translated as \"The Most Gracious,\" \"The Entirely Merciful,\" or \"The Compassionate One.\"\n\nTo make learning easier and support long-term retention, we've selected one primary meaning for each Name in the flashcard system. By doing this you can build a strong foundation without being overwhelmed by variations.\n\nWe'll be adding detailed guides that explore deeper meanings and compare similar Names for those wanting to study further.",
    },
    {
      question: "Is the content verified?",
      answer: "Yes, all content in Sifat has been reviewed by qualified Islamic teachers to ensure accuracy and authenticity.",
    },
    {
      question: "Can I use Sifat offline?",
      answer: "Yes, once downloaded, you can access your flashcards and study materials offline. Your progress syncs when you reconnect to the internet.",
    },
    {
      question: "Can I use Sifat on multiple devices?",
      answer: "Yes, Sifat supports multi-device sync. Your progress automatically syncs when you're connected to the internet.\n\nHowever, for the best experience, we recommend using one device at a time. If you use the app offline on multiple devices simultaneously, there is a chance your progress might not sync correctly when you reconnect.\n\nCloud sync is optimised to help you seamlessly switch between devices - for example, upgrading to a new phone - rather than actively using multiple devices at once.",
    },
    // {
    //   question: "How do I restore my purchase?",
    //   answer: "If you've reinstalled the app or switched to a new device, you can restore your purchase from the app's settings. Just make sure you're signed in with the same Apple ID you used for the original purchase.",
    // },
    // {
    //   question: "Will there be a family plan?",
    //   answer: "Yes! There is a plan to implement a family plan in the future which will enable access for multiple users via one subscription.",
    // },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Sifat.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
