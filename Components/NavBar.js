"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById('/images/Banner-2.png');
      if (window.scrollY > bannerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`z-20 flex flex-row ${scrolled ? 'bg-blue-500' : 'bg-gradient-to-b from-[#0307096b] to-[#9f9f9f00] shadow-md'} text-white font-semibold font-sans h-[10vh] top-[3.5vh] items-center fixed w-full justify-end`}>
      <ul className="hidden md:flex space-x-4">
        <li>
          <Link href="/">Admisión</Link>
        </li>
        <li>
          <Link href="/">Oferta academica</Link>
        </li>
        <li>
          <Link href="/">Institución</Link>
        </li>
        <li>
          <Link href="/">Educación Continua</Link>
        </li>
        <li>
          <Link href="/">Dirección de Calidad, Investigación y Proyección Social</Link>
        </li>
      </ul>
    </nav>
  );
}
