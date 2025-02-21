"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row bg-white text-black p-1 fixed w-full justify-end">
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