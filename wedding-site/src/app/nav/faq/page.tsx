"use client";
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is there parking at the venue?",
      answer: "Yes! The Whiskey Factory has a private gated parking lot on site for guests to use. If this lot runs out of space, there will be a secondary lot across/down the street and will instruct guests how to access it if needed."
    },
    {
      question: "What is the dress code?",
      answer: "Our wedding is cocktail attire. A suit or a dress shirt with a tie is suggested. A midi- or knee-length dress, dressy separates, or a dressy jumpsuit are also welcome."
    },
    {
      question: "Can I bring a guest/plus-one?",
      answer: "If it is listed on your wedding invitation envelope, you may bring a guest! In an effort to keep our wedding intimate and as close to budget as possible, only guests formally invited may attend. Thank you for your understanding!"
    },
    {
      question: "What if I don't RSVP on time?",
      // WILL HAVE TO UPDATE THE TIME SPAN WHEN WE HAVE THE INFO
      answer: "We will reach out with a text or email reminder to anyone who has not RSVP'd by the date provided. One week prior to the wedding, anyone who still has not RSVP'd will be marked \"not attending\". We love everyone invited and will miss celebrating with you, but we must give our vendors accurate numbers and meal choices by their deadline to ensure that our wedding continues according to schedule."
    },
    {
      question: "Are children allowed?",
      answer: "We love your children, but due to space restrictions we cannot accommodate guests under the age of 21 on our wedding day unless they are in the wedding party."
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl md:text-5xl font-serif text-primary mb-12 text-center">FAQ</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-secondary rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-secondary/80 transition-colors"
            >
              <span className="text-lg font-medium text-primary pr-4">{faq.question}</span>
              <svg 
                className={`w-6 h-6 text-primary/60 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="px-6 pb-5 text-primary/80 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-primary/70">
          Have another question? Reach out to us at{' '}
          <a 
            href="mailto:hankjaimerichter@gmail.com" 
            className="text-primary underline hover:no-underline"
          >
            hankjaimerichter@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}