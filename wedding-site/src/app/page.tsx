"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '../components/Loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
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

  const handleLoadingComplete = useCallback(() => {
    if (imageLoaded) {
      setIsLoading(false);
    }
  }, [imageLoaded]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  // Once both loading animation and image are ready, hide loader
  useEffect(() => {
    if (imageLoaded && !isLoading) return;
    if (imageLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [imageLoaded, isLoading]);

  const detailCards = [
    {
      title: 'Schedule',
      description: 'View the timeline for our special day, from ceremony to celebration.',
      href: '/nav/schedule',
      icon: (
        <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Travel',
      description: 'Find information about accommodations, directions, and getting around Detroit.',
      href: '/nav/travel',
      icon: (
        <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Registry',
      description: 'Browse our gift registry and help us start our new life together.',
      href: '/nav/registry',
      icon: (
        <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Hero Section - Full Screen */}
        <section className="relative h-screen w-full">
          <Image 
            src="/photos/Hank&Jamie-99.jpg" 
            alt="Jaime and Hank" 
            fill
            className="object-cover object-center md:object-bottom"
            priority
            sizes="100vw"
            onLoad={handleImageLoad}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-32 md:pb-140 text-white text-center px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-4 drop-shadow-lg">
              Jaime & Hank
            </h1>
            <p className="text-xl md:text-2xl mb-2 drop-shadow-md tracking-widest uppercase">
              July 25, 2026
            </p>
            <p className="text-lg md:text-xl drop-shadow-md">
              Detroit, Michigan
            </p>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-16 animate-bounce">
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Wave transition - Photo shows through the gaps */}
        <div className="relative h-[40px] md:h-[70px] -mt-[40px] md:-mt-[70px] z-10 overflow-hidden">
          <svg 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className="absolute top-0 w-full h-full rotate-180"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-secondary"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-secondary"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-secondary"></path>
          </svg>
        </div>


        {/* Countdown Section */}
        <section className="py-16 px-4 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-primary">Counting Down</h2>
            <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md min-w-[100px]">
                  <span className="text-4xl md:text-5xl font-bold text-primary">{value}</span>
                  <span className="text-sm uppercase tracking-wider text-primary/60">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Details Cards Section with Curved SVG */}
        <section className="relative">
          {/* Curved SVG Divider - Top */}
          <div className="w-full overflow-hidden leading-[0] bg-secondary">
            <svg 
              data-name="Layer 1" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
              className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[70px] rotate-180"
            >
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-primary"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-primary"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-primary"></path>
            </svg>
          </div>

          {/* Dark Background Section */}
          <div className="bg-primary py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center text-secondary">Wedding Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {detailCards.map((card) => (
                  <div 
                    key={card.title}
                    className="bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-xl p-8 text-center hover:bg-secondary/20 transition-all duration-300 group"
                  >
                    <div className="text-secondary group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-secondary mb-4">{card.title}</h3>
                    <p className="text-secondary/80 mb-6 leading-relaxed">{card.description}</p>
                    <Link 
                      href={card.href}
                      className="inline-block bg-secondary text-primary px-6 py-3 rounded-full font-medium hover:bg-white transition-colors duration-300 uppercase tracking-wider text-sm"
                    >
                      View {card.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Curved SVG Divider - Bottom (matching footer style, flipped) */}
          <div className="w-full overflow-hidden leading-[0] bg-primary">
            <svg 
              data-name="Layer 1" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
              className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[70px] rotate-180"
            >
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-secondary"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-secondary"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-secondary"></path>
            </svg>
          </div>
        </section>

        {/* Spacer for bottom curve */}
        <div className="h-20 md:h-28 bg-secondary"></div>

        {/* Photo Gallery Preview with Lazy Loading */}
        <section className="py-16 px-4 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center text-primary">Our Story</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="relative w-[350px] h-[450px] rounded-lg overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <Image 
                  src="/photos/Hank&Jamie-99.jpg" 
                  alt="Jaime and Hank" 
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="relative w-[350px] h-[450px] rounded-lg overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Image 
                  src="/photos/Hank&Jamie-43.jpg" 
                  alt="Jaime and Hank" 
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}