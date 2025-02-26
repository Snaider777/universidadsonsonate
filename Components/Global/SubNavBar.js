"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-20 flex flex-row bg-white text-black font-sans h-[4vh] w-full fixed items-center justify-center">
      <ul className="flex flex-row space-x-4">
        <li>
          <Link href="https://sinapsis.usonsonate.edu.sv/login/index.php">Sinapsis</Link>
        </li>
        <li>
          <Link href="https://hermes.usonsonate.edu.sv/login/index.php">Hermes</Link>
        </li>
        <li>
          <Link href="https://login.microsoftonline.com/">Correo Institucional</Link>
        </li>
        <li>
          <Link href="https://biblioteca.usonsonate.edu.sv/opac/loginform.php">Biblioteca</Link>
        </li>
      </ul>
    </nav>
  );
}