"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-20 flex flex-row bg-white text-black font-sans h-[4vh] w-full fixed items-center justify-center">
      <ul className="flex flex-row space-x-4">
        <li>
          <Link href="/">Sinapsis</Link>
        </li>
        <li>
          <Link href="/">Hermes</Link>
        </li>
        <li>
          <Link href="/">Microsoft 365</Link>
        </li>
        <li>
          <Link href="/">Biblioteca</Link>
        </li>
      </ul>
    </nav>
  );
}