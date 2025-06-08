"use client";

import React from "react";
import Link from "next/link";
import { FaBalanceScale, FaCogs, FaUniversity, FaChalkboardTeacher, FaGraduationCap, FaChevronDown } from "react-icons/fa";
import { FaMoneyBillWave, FaCalendarAlt, FaBookOpen, FaGavel, FaMapMarkedAlt, FaSearch, FaBuilding, FaUsers } from "react-icons/fa";
import Image from 'next/image'; // importar el componente Image de Next.js
export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  const [open, setOpen] = React.useState(null);

  const Menu = (menuId) => {
    setOpen(open === menuId ? null : menuId);
  };
  const navBar = () => {
    setNavOpen(!navOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    <nav
      className={`fixed w-full z-50 h-[10vh] top-[4vh] flex items-center justify-between font-semibold font-sans text-white transition-colors duration-300 ${
        scrolled
          ? "bg-white text-white shadow-md" // Fondo azul y texto blanco al hacer scroll
          : "bg-gradient-to-b from-[#0307096b] to-[#9f9f9f00]" // Clases para cuando está en la parte superior
      }`}
    >
      {/*Logo de la universidad (Izquierda de la navbar)*/}
      <Link href="/" className="px-3">
  <Image
    src="/images/UsoLOGO.png" // Direccion a la imagen del logo
    alt="Uso LOGO"
    width={128} // ajustar según sea necesario
    height={40}  // ajustar según sea necesario
  />
</Link>

      {/*Menu de hamburguesa (Oculta en vista de PC)*/}
      <button onClick={() => navBar()} className="px-4 flex flex-col gap-2 md:hidden">
        <div
          className={`${
            navOpen
              ? "transition-all duration-200 rotate-45 translate-y-[9.5px]"
              : "transition-all duration-200"
          } h-[2px] w-[30px] ${scrolled ? 'bg-black' : 'bg-white'}`} // Mantengo el icono blanco
        ></div>
        <div
          className={`${
            navOpen ? "transition-all duration-200 opacity-0" : "transition-all duration-200"
          } h-[2px] w-[30px] ${scrolled ? 'bg-black' : 'bg-white'}`} // Mantengo el icono blanco
        ></div>
        <div
          className={`${
            navOpen
              ? "transition-all duration-200 -rotate-45 -translate-y-[9.5px]"
              : "transition-all duration-200"
          } h-[2px] w-[30px] ${scrolled ? 'bg-black' : 'bg-white'}`} // Mantengo el icono blanco
        ></div>
      </button>

      {/*Inicio de la lista de opciones de la navbar*/}
      <ul
        className={`${
          navOpen
            ? "transition-all duration-300"
            : "transition-all duration-300 translate-x-[-100%]"
        } absolute flex flex-col h-[100vh] w-[70%] top-[0vh] ${
          scrolled ? "bg-blue-700 text-white" : "bg-blue-700 text-white"
        }
        md:translate-x-[0] md:static md:flex-row md:h-auto md:w-auto md:gap-4 md:bg-transparent md:items-center`}
      >
       {/* Primera opción: Admisión */}
<li className="flex flex-col relative">
  <div className="flex items-center w-full py-10 px-8 md:py-2 md:px-4">
    <img src="/images/Admisiones.png" alt="Admisiones" className="w-7" />
    <Link
      href="/admisiones"
      className="px-4 font-semibold"
      style={{ flex: 1 }}
    >
      Admisión
    </Link>
    <button
      onClick={() => Menu(1)}
      aria-expanded={open === 1}
      aria-controls="admisiones-menu"
      className="ml-2 flex items-center justify-center"
      style={{ width: 32, height: 32 }}
    >
      <FaChevronDown
        className={`transition-transform duration-200 ${open === 1 ? "rotate-180" : ""}`}
        size={24}
        color="white"
      />
    </button>
  </div>
  {open === 1 && (
    <ul
  id="admisiones-menu"
  className="md:bg-white md:absolute md:text-black md:w-[400px] md:top-[100%] md:left-1/2 md:-translate-x-1/2 shadow-lg flex flex-col gap-2 p-6 z-50 bg-white"
>
  <li>
    <Link href="/" className="py-2 px-3 flex flex-row items-center gap-2 hover:bg-gray-300 rounded">
      <FaMoneyBillWave className="text-blue-700" /> Aranceles Institucionales
    </Link>
  </li>
  <li>
    <Link href="/" className="py-2 px-3 flex flex-row items-center gap-2 hover:bg-gray-300 rounded">
      <FaCalendarAlt className="text-blue-700" /> Calendario Académico
    </Link>
  </li>
  <li>
    <Link href="/" className="py-2 px-3 flex flex-row items-center gap-2 hover:bg-gray-300 rounded">
      <FaBookOpen className="text-blue-700" /> Instructivo de Matrícula
    </Link>
  </li>
  <li>
    <Link href="/" className="py-2 px-3 flex flex-row items-center gap-2 hover:bg-gray-300 rounded">
      <FaGavel className="text-blue-700" /> Reglamentos
    </Link>
  </li>
</ul>
  )}
</li>
{/*Segunda opcion*/}
     <li className="flex flex-col relative">
  <div className="flex items-center w-full py-10 px-8 md:py-2 md:px-4">
    <img src="/images/OfertaAcademica.png" alt="OfertaAcademica" className="w-7" />
    <Link
      href="/ofertaAcademica"
      className="px-4 font-semibold"
      style={{ flex: 1 }}
    >
      Oferta Académica
    </Link>
    <button
      onClick={() => Menu(2)}
      aria-expanded={open === 2}
      aria-controls="oferta-academica-menu"
      className="ml-2 flex items-center justify-center"
      style={{ width: 32, height: 32 }}
    >
      <FaChevronDown
        className={`transition-transform duration-200 ${open === 2 ? "rotate-180" : ""}`}
        size={24}
        color="white"
      />
    </button>
  </div>
  {open === 2 && (
    <ul
      id="oferta-academica-menu"
      className="md:bg-white md:absolute md:text-black md:w-[1000px] md:top-[100%] md:left-1/2 md:-translate-x-1/2 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8 p-8 z-50 bg-white"
    >
      <li className="flex flex-col items-start bg-white rounded-lg shadow p-6">
        <FaBalanceScale size={40} className="text-blue-700" />
        <h3 className="font-bold mt-4">Facultad de Ciencias Jurídicas</h3>
        <p className="text-gray-600 text-sm mt-2">Formar profesionales del derecho con dominio de los...</p>
        <Link href="/ofertaAcademica/fcj" className="mt-4 text-green-600 font-semibold flex items-center gap-1 hover:underline">
          Conocer más <span>→</span>
        </Link>
      </li>
      <li className="flex flex-col items-start bg-white rounded-lg shadow p-6">
        <FaCogs size={40} className="text-blue-700" />
        <h3 className="font-bold mt-4">Facultad de Ingeniería y Ciencias Naturales</h3>
        <p className="text-gray-600 text-sm mt-2">Bienvenidos a la Facultad de Ciencias Naturales e Ingeniería...</p>
        <Link href="/ofertaAcademica/fics" className="mt-4 text-green-600 font-semibold flex items-center gap-1 hover:underline">
          Conocer más <span>→</span>
        </Link>
      </li>
      <li className="flex flex-col items-start bg-white rounded-lg shadow p-6">
        <FaUniversity size={40} className="text-blue-700" />
        <h3 className="font-bold mt-4">Facultad de Economía y Ciencias Sociales</h3>
        <p className="text-gray-600 text-sm mt-2">La Facultad de Ciencias Sociales y Económicas...</p>
        <Link href="/ofertaAcademica/fecs" className="mt-4 text-green-600 font-semibold flex items-center gap-1 hover:underline">
          Conocer más <span>→</span>
        </Link>
      </li>
      <li className="flex flex-col items-start bg-white rounded-lg shadow p-6">
        <FaChalkboardTeacher size={40} className="text-blue-700" />
        <h3 className="font-bold mt-4">Escuela de Educación</h3>
        <p className="text-gray-600 text-sm mt-2"></p>
        <Link href="/ofertaAcademica/escuelaEducacion" className="mt-4 text-green-600 font-semibold flex items-center gap-1 hover:underline">
          Conocer más <span>→</span>
        </Link>
      </li>
      <li className="flex flex-col items-start bg-white rounded-lg shadow p-6">
        <FaGraduationCap size={40} className="text-blue-700" />
        <h3 className="font-bold mt-4">Maestrías</h3>
        <p className="text-gray-600 text-sm mt-2"></p>
        <Link href="/ofertaAcademica/maestrias" className="mt-4 text-green-600 font-semibold flex items-center gap-1 hover:underline">
          Conocer más <span>→</span>
        </Link>
      </li>
    </ul>
  )}
</li>
        {/* Tercera opción: Institución */}
<li className="flex flex-col relative">
  <div className="flex items-center w-full py-10 px-8 md:py-2 md:px-4">
    <img src="/images/Institucion.png" alt="Institucion" className="w-7" />
    <Link
      href="/nuestraInstitucion"
      className="px-4 font-semibold"
      style={{ flex: 1 }}
    >
      Institución
    </Link>
    <button
      onClick={() => Menu(3)}
      aria-expanded={open === 3}
      aria-controls="institucion-menu"
      className="ml-2 flex items-center justify-center"
      style={{ width: 32, height: 32 }}
    >
      <FaChevronDown
        className={`transition-transform duration-200 ${open === 3 ? "rotate-180" : ""}`}
        size={24}
        color="white"
      />
    </button>
  </div>
  {open === 3 && (
    <ul
  id="institucion-menu"
  className="md:bg-white md:absolute md:text-black md:w-[400px] md:top-[100%] md:left-1/2 md:-translate-x-1/2 shadow-lg flex flex-col gap-2 p-6 z-50 bg-white"
>
  <li>
    <Link href="/nuestraInstitucion/tourUSO" className="py-2 px-3 flex flex-row items-center gap-2 hover:bg-gray-300 rounded">
      <FaMapMarkedAlt className="text-blue-700" /> Tour USO
    </Link>
  </li>
  <li>
    <Link href="/" className="py-2 px-3 flex flex-row items-center gap-2 hover:bg-gray-300 rounded">
      <FaSearch className="text-blue-700" /> Investigaciones USO
    </Link>
  </li>
  <li>
    <Link href="/" className="py-2 px-3 flex flex-row items-center gap-2 hover:bg-gray-300 rounded">
      <FaBuilding className="text-blue-700" /> Espacio USO
    </Link>
  </li>
  <li>
    <Link href="/" className="py-2 px-3 flex flex-row items-center gap-2 hover:bg-gray-300 rounded">
      <FaUsers className="text-blue-700" /> Unidades Académicas
    </Link>
  </li>
</ul>
  )}
</li>
        <li className="flex flex-col">
          <Link
            href="/"
            className={`py-10 px-8 flex justify-start items-center md:px-0 ${
              scrolled ? "md:text-black" : "md:hover:bg-blue-700 md:hover:bg-transparent"
            }`}
          >
            <img
              src="/images/EducacionContinua.png"
              alt="WhiteShield"
              className="w-7 h-7 md:hidden"
            />
            <span className="px-4">Educación Continua</span>
          </Link>
        </li>
        <li className="flex flex-col">
          <Link
            href="/"
            className={`py-10 px-8 flex justify-start items-center md:px-0 ${
              scrolled ? "md:text-black" : "md:hover:bg-blue-600 md:hover:bg-transparent"
            }`}
          ><img
              src="/images/DireccionCPS.png"
              alt="DireccionIcon"
              className="w-7 h-7 md:hidden"
            /><span className="px-4">Dirección de Calidad, Investigación y Proyección Social</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}