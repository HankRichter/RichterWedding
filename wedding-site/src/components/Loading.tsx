"use client";
import { useState, useEffect } from 'react';

interface LoadingProps {
  onLoadingComplete?: () => void;
}

export default function Loading({ onLoadingComplete }: LoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Need to make sure this works on logic being loaded and not just a timer.
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary transition-opacity duration-500">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>
        <h2 className="font-serif text-3xl text-primary animate-pulse">J & H</h2>
        <p className="text-sm text-primary/60 mt-2 tracking-widest uppercase">Loading...</p>
      </div>
    </div>
  );
}