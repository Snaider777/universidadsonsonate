"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-20 flex flex-row bg-white text-black h-[3.5vh] fixed w-full items-center justify-end">
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