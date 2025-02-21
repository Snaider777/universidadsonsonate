"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row bg-gradient-to-r from-[#2e8ac3] to-[#0068d888] text-white p-7 fixed w-full justify-end">
      <ul className="hidden md:flex space-x-4">
        <li>
          <Link href="/">Admisión</Link>
        </li>
        <li>
          <Link href="/" className="flex flex-row items-center gap-2">
          Oferta academica
          <div className="bg-white w-2 h-2"></div>
          </Link>
        </li>
        <li>
          <Link href="/">Institución</Link>
        </li>
        <li>
          <Link href="/">Educación Continua</Link>
        </li>
        <li>
          <Link href="/">Diección de Calidad, Investigación y Proyección Social</Link>
        </li>
      </ul>
    </nav>
  );
}
