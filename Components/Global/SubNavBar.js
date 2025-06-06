"use client";
import { FaProjectDiagram, FaUserShield, FaEnvelope, FaBook } from "react-icons/fa";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-20 flex flex-row bg-blue-900 text-white font-sans h-[4vh] w-full fixed items-center justify-end">
      <ul className="flex flex-row space-x-4">
        <li>
          <Link href="https://sinapsis.usonsonate.edu.sv/login/index.php" className="flex items-center gap-1">
          <FaProjectDiagram className="inline-block" /> Sinapsis
          </Link>
        </li>
        <li>
          <Link href="https://hermes.usonsonate.edu.sv/login/index.php" className="flex items-center gap-1">
          <FaUserShield className="inline-block" /> Hermes
          </Link>
        </li>
        <li>
          <Link href="https://login.microsoftonline.com/" className="flex items-center gap-1">
          <FaEnvelope className="inline-block" /> Correo Institucional
          </Link>
        </li>   
        <li>
          <Link href="https://biblioteca.usonsonate.edu.sv/opac/loginform.php" className="flex items-center gap-1">
          <FaBook className="inline-block" /> Biblioteca
          </Link>
        </li>
      </ul>
    </nav>
  );
}