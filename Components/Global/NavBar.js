"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  const [open, setOpen] = React.useState(null);

  const Menu = (menuId)=>{
      setOpen(open === menuId ? null : menuId);
  }
  const navBar = ()=>{
    setNavOpen(!navOpen);
}

/*
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
*/

  return (
    <nav className= "bg-gradient-to-b from-[#0307096b] to-[#9f9f9f00] text-white font-semibold font-sans h-[10vh] top-[4vh] flex items-center justify-between fixed w-full z-50">
      <Link href="/" className="px-3">
        <img src= "/images/LogoWhite.png" alt="LogoWhite" className = "w-32"/>
      </Link>
      <button onClick = {() => navBar()} className = "px-4 flex flex-col gap-2">
        <div className = {`${navOpen ? 'transition-all duration-200 rotate-45 translate-y-[9.5px]' : 'transition-all duration-200'} h-[2px] w-[30px] bg-white`}></div>
        <div className = {`${navOpen ? 'transition-all duration-200 opacity-0' : 'transition-all duration-200'} h-[2px] w-[30px] bg-white`}></div>
        <div className = {`${navOpen ? 'transition-all duration-200 -rotate-45 -translate-y-[9.5px]' : 'transition-all duration-200'} h-[2px] w-[30px] bg-white`}></div>
      </button>
      <ul className={`${navOpen ? 'transition-all duration-300' : 'transition-all duration-300 translate-x-[-100%]'} absolute flex flex-col h-[100vh] w-[70%] top-[0vh] bg-gradient-to-t from-blue-500 to-blue-800`}>

        <li className="flex flex-col">
          <button onClick={() => Menu(1)} className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Admisión
            <img src= "/images/Arrow.png" alt="LogoWhite" className = "absolute w-[15px] right-5 Flecha"/>
          </button>
          <div className={`${open == 1 ? 'transition-all duration-300' : 'transition-all duration-300 translate-x-[-100%]'} z-20 absolute flex-col h-[100vh] w-[100%] top-[0vh] bg-white text-black`}>
            <div className="flex w-[100%] justify-end">
              <button onClick={() => Menu(0)} className=" w-[70px] h-[50px] flex m-1 justify-center items-center">
                <div className="absolute w-[35px] h-[3px] bg-black rotate-45"></div>
                <div className="absolute w-[35px] h-[3px] bg-black -rotate-45"></div>
              </button>
            </div>
            <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Admisión</Link>
            <ul>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Aranceles Institucionales</Link>
              </li>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Calendario Academico</Link>
              </li>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Instructivo de Matricula</Link>
              </li>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Reglamentos</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex flex-col">
          <button onClick={() => Menu(2)} className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Oferta academica
            <img src= "/images/Arrow.png" alt="LogoWhite" className = "absolute w-[15px] right-5 Flecha"/>
          </button>
          <div className={`${open == 2 ? 'transition-all duration-300' : 'transition-all duration-300 translate-x-[-100%]'} z-20 absolute flex-col h-[100vh] w-[100%] top-[0vh] bg-white text-black`}>
            <div className="flex w-[100%] justify-end">
              <button onClick={() => Menu(0)} className=" w-[70px] h-[50px] flex m-1 justify-center items-center">
                <div className="absolute w-[35px] h-[3px] bg-black rotate-45"></div>
                <div className="absolute w-[35px] h-[3px] bg-black -rotate-45"></div>
              </button>
            </div>
            <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Oferta academica</Link>
            <ul>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Facultad de Ingenieria y Ciencias Naturales</Link>
              </li>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Facultad de Economia y Ciencias Sociales</Link>
              </li>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Facultad de Ciencias Juridicas</Link>
              </li>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Escuela de Educacion</Link>
              </li>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Maestrias</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex flex-col">
          <button onClick={() => Menu(3)} className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Institución
            <img src= "/images/Arrow.png" alt="LogoWhite" className = "absolute w-[15px] right-5 Flecha"/>
          </button>
          <div className={`${open == 3 ? 'transition-all duration-300' : 'transition-all duration-300 translate-x-[-100%]'} z-20 absolute flex-col h-[100vh] w-[100%] top-[0vh] bg-white text-black`}>
            <div className="flex w-[100%] justify-end">
              <button onClick={() => Menu(0)} className=" w-[70px] h-[50px] flex m-1 justify-center items-center">
                <div className="absolute w-[35px] h-[3px] bg-black rotate-45"></div>
                <div className="absolute w-[35px] h-[3px] bg-black -rotate-45"></div>
              </button>
            </div>
            <Link href="/nuestraInstitucion" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Institución</Link>
            <ul>
              <li>
                <Link href="/nuestraInstitucion/tourUSO" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Tour USO</Link>
              </li>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Investigaciones USO</Link>
              </li>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Espacio USO</Link>
              </li>
              <li>
                <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center flex flex-row justify-center items-center">Unidades Academicas</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex flex-col">
          <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center">Educación Continua</Link>
        </li>
        <li className="flex flex-col">
          <Link href="/" className="hover:bg-blue-600 py-9 px-3 text-center">Dirección de Calidad, Investigación y Proyección Social</Link>
        </li>
      </ul>
    </nav>
  );
}
