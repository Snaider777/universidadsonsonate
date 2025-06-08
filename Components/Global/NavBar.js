"use client";

import React from "react";
import Link from "next/link";
import { FaBalanceScale, FaCogs, FaUniversity, FaChalkboardTeacher, FaGraduationCap, FaChevronDown } from "react-icons/fa";

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
        {/*Primera opcion*/}
        <li className="flex flex-col">
          {/*Boton que despliega el menu de opciones de admision (Oculto en vista de PC)*/}
          <button
            onClick={() => Menu(1)}
            className={`py-10 px-8 flex flex-row justify-start items-center md:hidden ${
              scrolled ? "hover:bg-blue-700" : "hover:bg-blue-700"
            }`}
          >
            <img src="/images/Admisiones.png" alt="WhiteShield" className="w-7" />
            <span className="px-4">Admisión</span>
            <img src="/images/Arrow.png" alt="LogoWhite" className="absolute w-[15px] right-5 Flecha" />
          </button>

          {/*Contenedor que almacena el menu de opciones de admision, en vista de PC, se trabaja directamente con este contenedor*/}
          <div
            className={`${
              open == 1
                ? "transition-all duration-300"
                : "transition-all duration-300 translate-x-[-100%]"
            } z-20 absolute flex-col h-[100vh] w-[100%] top-[0vh] bg-white text-black
            md:translate-x-[0] md:static  md:flex md:flex-col md:h-auto md:w-auto md:bg-transparent md:items-center group`}
          >
            {/*Boton que cierra el menu desplegable (Oculto en vista de PC)*/}
            <div className="flex w-[100%] justify-end md:hidden">
              <button onClick={() => Menu(0)} className=" w-[70px] h-[50px] flex m-1 justify-center items-center">
                <div className="absolute w-[35px] h-[3px] bg-black rotate-45"></div>
                <div className="absolute w-[35px] h-[3px] bg-black -rotate-45"></div>
              </button>
            </div>

            {/*Link para la pagina de Admisiones*/}
            <Link
              href="/"
              className={`py-10 px-3 text-center flex flex-row justify-center items-center md:py-2 ${
                scrolled ? "md:text-black" : "md:text-white md:hover:bg-transparent"
              }`}
            >
              Admisión
            </Link>
            <ul className="md:bg-white md:absolute md:text-black md:w-[300%] md:top-[130%] md:opacity-0 md:invisible md:group-hover:visible md:group-hover:opacity-100 transition-all duration-300 md:group-hover:-translate-y-3">
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center hover:bg-gray-300">
                  Aranceles Institucionales
                </Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center hover:bg-gray-300">
                  Calendario Academico
                </Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center hover:bg-gray-300">
                  Instructivo de Matricula
                </Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center hover:bg-gray-300">
                  Reglamentos
                </Link>
              </li>
            </ul>
          </div>
        </li>

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
        {/*Tercera opcion*/}
        <li className="flex flex-col">
          {/*Boton que despliega el menu de opciones de Institución (Oculto en vista de PC)*/}
          <button
            onClick={() => Menu(3)}
            className={`py-10 px-8 flex flex-row justify-start items-center md:hidden ${
              scrolled ? "hover:bg-blue-700" : "hover:bg-blue-700"
            }`}
          >
            <img src="/images/Institucion.png" alt="WhiteShield" className="w-7" />
            <span className="px-4">Institución</span>
            <img src="/images/Arrow.png" alt="LogoWhite" className="absolute w-[15px] right-5 Flecha" />
          </button>

          {/*Contenedor que almacena el menu de opciones de Institución, en vista de PC, se trabaja directamente con este contenedor*/}
          <div
            className={`${
              open == 3
                ? "transition-all duration-300"
                : "transition-all duration-300 translate-x-[-100%]"
            } z-20 absolute flex-col h-[100vh] w-[100%] top-[0vh] bg-white text-black
            md:translate-x-[0] md:static  md:flex md:flex-col md:h-auto md:w-auto md:bg-transparent md:items-center group`}
          >
            {/*Boton que cierra el menu desplegable (Oculto en vista de PC)*/}
            <div className="flex w-[100%] justify-end md:hidden">
              <button onClick={() => Menu(0)} className=" w-[70px] h-[50px] flex m-1 justify-center items-center md:hidden">
                <div className="absolute w-[35px] h-[3px] bg-black rotate-45"></div>
                <div className="absolute w-[35px] h-[3px] bg-black -rotate-45"></div>
              </button>
            </div>

            {/*Link para la pagina de Institución*/}
            <Link
              href="/nuestraInstitucion"
              className={`py-10 px-3 text-center flex flex-row justify-center items-center md:py-2 ${
                scrolled ? "md:text-black1" : "md:text-white md:hover:bg-transparent"
              }`}
            >
              Institución
            </Link>
            <ul className="md:bg-white md:absolute md:text-black md:w-[300%] md:top-[130%] md:opacity-0 md:invisible md:group-hover:visible md:group-hover:opacity-100 transition-all duration-300 md:group-hover:-translate-y-3">
              <li>
                <Link href="/nuestraInstitucion/tourUSO" className="py-10 px-3 text-center flex flex-row justify-center items-center hover:bg-gray-300">
                  Tour USO
                </Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center hover:bg-gray-300">
                  Investigaciones USO
                </Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center hover:bg-gray-300">
                  Espacio USO
                </Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center hover:bg-gray-300">
                  Unidades Academicas
                </Link>
              </li>
            </ul>
          </div>
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