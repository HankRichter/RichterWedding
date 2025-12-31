"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-07-25').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full flex justify-center gap-4 p-4 flex-wrap">
        <div className="relative w-[400px] h-[500px] rounded-lg overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 backface-hidden will-change-transform">
           <Image 
             src="/photos/Hank&Jamie-99.jpg" 
             alt="Ice cream shot" 
             fill
             className="object-cover"
             priority
             sizes="(max-width: 768px) 100vw, 400px"
           />
        </div>
        <div className="relative w-[400px] h-[500px] rounded-lg overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 backface-hidden will-change-transform">
           <Image 
             src="/photos/Hank&Jamie-43.jpg" 
             alt="Hanging Out" 
             fill
             className="object-cover"
             priority
             sizes="(max-width: 768px) 100vw, 400px"
           />
        </div>
      </div>
      
      <div className="text-center mt-8 px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 text-[#333]">
          <span className="block md:inline">Jaime Allcorn</span>
          <span className="text-primary mx-2">&</span>
          <span className="block md:inline">Hank Richter</span>
        </h1>
        <p className="text-xl md:text-2xl mb-2 text-muted">July 25, 2026</p>
        <p className="text-lg md:text-xl mb-8 text-muted">Detroit, MI</p>
        
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center bg-secondary p-4 rounded-lg shadow-md min-w-[80px]">
              <span className="text-3xl font-bold text-primary">{value}</span>
              <span className="text-sm uppercase tracking-wider text-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}