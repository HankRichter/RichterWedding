"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  variant?: 'header' | 'hamburger';
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/nav/schedule', label: 'Schedule' },
  { href: '/nav/travel', label: 'Travel' },
  { href: '/nav/wedding-party', label: 'Wedding Party' },
  { href: '/nav/registry', label: 'Registry' },
  { href: '/nav/gallery', label: 'Gallery' },
  { href: '/nav/faq', label: 'FAQ' },
];

export default function Navigation({ variant = 'header' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.hamburger-menu') && !target.closest('.hamburger-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, variant]);

  useEffect(() => {
    if (variant !== 'hamburger') return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, variant]);


  const HamburgerButton = ({ fixed = false }: { fixed?: boolean }) => (
    <button
      className={`hamburger-button p-2 ${fixed ? 'fixed top-6 right-6 z-50' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle navigation menu"
    >
      <div className="w-6 h-5 relative">
        <span className={`absolute left-0 w-full h-0.5 rounded transition-all duration-300 bg-secondary ${isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
        <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 rounded transition-all duration-300 bg-secondary ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`absolute left-0 w-full h-0.5 rounded transition-all duration-300 bg-secondary ${isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`}></span>
      </div>
    </button>
  );

  const SlideOutMenu = () => (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <nav className={`hamburger-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-primary z-40 shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 px-8">
          <h2 className="text-2xl font-serif text-secondary mb-8 border-b border-secondary/20 pb-4">Menu</h2>
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-secondary text-lg py-3 px-4 rounded-lg hover:bg-secondary/10 transition-colors duration-200 ${pathname === link.href ? 'bg-secondary/10' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );

  if (variant === 'hamburger') {
    return (
      <>
        <HamburgerButton fixed />
        <SlideOutMenu />
      </>
    );
  }

  return (
    <>
      <SlideOutMenu />
      
      <nav className="flex flex-col items-center gap-4 w-full bg-primary text-secondary z-50 py-8 px-4 border-b border-gray-200">
        <div className="text-3xl font-bold text-inherit font-serif">
          Jaime & Hank
        </div>

        <div className="md:hidden">
          <HamburgerButton />
        </div>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className={`
                relative pb-2 text-inherit no-underline transition-colors duration-300 font-sans
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300
                hover:after:w-full
                ${pathname === link.href ? 'after:w-full' : 'after:w-0'}
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}