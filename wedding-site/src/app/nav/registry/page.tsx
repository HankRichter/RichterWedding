"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Registry() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-serif text-primary mb-2 md:mb-4 text-center">Registry</h1>

      <p className="text-center text-primary/70 text-sm md:text-base max-w-2xl mx-auto">
        Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we really appreciate it!
      </p>

      <div 
        className={`bg-secondary p-4 md:p-10 rounded-lg shadow-md text-center mb-4 mt-4 transition-all duration-700 ease-out hover:shadow-xl hover:scale-[1.02] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-primary/70 flex justify-center">
          <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        </div>
        <h2 className="text-xl md:text-3xl font-serif text-primary mb-2 md:mb-4">Our Registry</h2>
        <p className="text-primary/70 text-sm md:text-base mb-4 md:mb-6 max-w-xl mx-auto">
          Browse our curated list of items we&apos;d love to receive as we start our new life together.
        </p>
        <a
          href="https://www.myregistry.com/wedding-registry/hank-richter-and-jaime-richter-livonia-mi/5254585"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-secondary px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm md:text-base"
        >
          View Registry
        </a>
      </div>

      <div className="text-center my-4 md:my-8">
        <p className="text-primary/60 text-sm mb-1 md:mb-2">Prefer to give a cash gift?</p>
        <svg className="w-6 h-6 mx-auto text-primary/40 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <div 
        className={`bg-secondary p-4 md:p-10 rounded-lg shadow-md text-center transition-all duration-700 ease-out delay-200 hover:shadow-xl hover:scale-[1.02] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-primary/70 mb-2 md:mb-4 flex justify-center">
          <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h2 className="text-xl md:text-3xl font-serif text-primary mb-2 md:mb-4">Honeymoon Fund</h2>
        <p className="text-primary/70 text-sm md:text-base mb-4 md:mb-8 max-w-xl mx-auto">
          If you&apos;d prefer to contribute to our honeymoon adventure, we would be incredibly grateful. Your generosity will help us create unforgettable memories together.
        </p>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto">          <div className="bg-white/50 p-2 md:p-4 rounded-lg transition-transform duration-300 hover:scale-105">
            <p className="text-xs md:text-sm font-medium text-primary mb-2 md:mb-3">Venmo</p>
            <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto bg-white rounded-lg overflow-hidden">
              <Image
                src="/photos/registry/VenmoQRCode.png"
                alt="Venmo QR Code"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-[10px] md:text-xs text-primary/60 mt-1 md:mt-2">@Jaime-Allcorn</p>
          </div>
          
          <div className="bg-white/50 p-2 md:p-4 rounded-lg transition-transform duration-300 hover:scale-105">
            <p className="text-xs md:text-sm font-medium text-primary mb-2 md:mb-3">PayPal</p>
            <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto bg-white rounded-lg overflow-hidden">
              <Image
                src="/photos/registry/PPQRCode.png"
                alt="PayPal QR Code"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-[10px] md:text-xs text-primary/60 mt-1 md:mt-2">@HankJaimeRichter</p>
          </div>
          
          {/* Create Zelle account */}
          <div className="bg-white/50 p-2 md:p-4 rounded-lg transition-transform duration-300 hover:scale-105">
            <p className="text-xs md:text-sm font-medium text-primary mb-2 md:mb-3">Zelle</p>
            <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto bg-white rounded-lg overflow-hidden">
              <Image
                src="/photos/qr/zelle-qr.png"
                alt="Zelle QR Code"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-[10px] md:text-xs text-primary/60 mt-1 md:mt-2">@HankJaimeRichter</p>
          </div>
        </div>
      </div>
    </div>
  );
}