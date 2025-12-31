"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/travel', label: 'Travel' },
    { href: '/wedding-party', label: 'Wedding Party' },
    { href: '/registry', label: 'Registry' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <nav className="flex flex-col items-center gap-4 w-full bg-primary text-secondary z-50 py-8 px-4 border-b border-gray-200 relative">
      <div className="text-3xl font-bold text-inherit font-serif">
        Jaime & Hank
      </div>
      
      <button 
        className="md:hidden text-2xl bg-none border-none cursor-pointer text-inherit"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <div className={`flex gap-8 transition-all duration-300 ${isOpen ? 'flex flex-col absolute top-full left-0 w-full bg-primary p-4 shadow-md' : 'hidden md:flex'}`}>
        {links.map((link) => (
          <Link 
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
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
  );
}