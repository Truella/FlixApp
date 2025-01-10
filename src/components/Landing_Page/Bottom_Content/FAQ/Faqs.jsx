import React, { useState } from "react";
import FaqItem from "./FaqItem";
import styles from "./faqs.module.css";
const netflixFAQs = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    category: "General",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,200 to ₦7,000 a month. No extra costs, no contracts.",
    category: "Pricing",
  },
  {
    question: "Where can I watch Netflix?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    category: "Streaming",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    category: "Account Management",
  },
  {
    question: "Can I download shows to watch offline?",
    answer:
      "Yes, you can download select titles to watch offline on supported devices. Just look for the download icon next to the title.",
    category: "Features",
  },
  {
    question: "How do I set parental controls?",
    answer:
      "You can set parental controls by creating a profile with specific content restrictions or a PIN. Go to 'Account Settings' to manage profiles.",
    category: "Parental Controls",
  },
];
export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className={styles.Faqs_Container}>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {netflixFAQs.map((netflixFAQ, index) => (
          <FaqItem
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            key={index}
            question={netflixFAQ.question}
            answer={netflixFAQ.answer}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}
