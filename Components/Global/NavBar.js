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

      {/*Logo de la universidad blanco (Izquierda de la navbar)*/}
      <Link href="/" className="px-3">
        <img src= "/images/LogoWhite.png" alt="LogoWhite" className = "w-32"/>
      </Link>

      {/*Menu de hamburguesa (Oculta en vista de PC)*/}
      <button onClick = {() => navBar()} className = "px-4 flex flex-col gap-2 md:hidden">
        <div className = {`${navOpen ? 'transition-all duration-200 rotate-45 translate-y-[9.5px]' : 'transition-all duration-200'} h-[2px] w-[30px] bg-white`}></div>
        <div className = {`${navOpen ? 'transition-all duration-200 opacity-0' : 'transition-all duration-200'} h-[2px] w-[30px] bg-white`}></div>
        <div className = {`${navOpen ? 'transition-all duration-200 -rotate-45 -translate-y-[9.5px]' : 'transition-all duration-200'} h-[2px] w-[30px] bg-white`}></div>
      </button>

      {/*Inicio de la lista de opciones de la navbar*/}
      <ul className={`${navOpen ? 'transition-all duration-300' : 'transition-all duration-300 translate-x-[-100%]'} absolute flex flex-col h-[100vh] w-[70%] top-[0vh] bg-blue-600 md:translate-x-[0] md:static md:flex-row md:h-auto md:w-auto md:gap-4 md:bg-transparent`}>

        {/*Primera opcion*/}
        <li className="flex flex-col">

          {/*Boton que despliega el menu de opciones de admision (Oculto en vista de PC)*/}
          <button onClick={() => Menu(1)} className="py-10 px-8 flex flex-row justify-start items-center md:hidden">
            <img src= "/images/Admisiones.png" alt="WhiteShield" className = "w-7"/>
            <span className="px-4">Admisión</span>
            <img src= "/images/Arrow.png" alt="LogoWhite" className = "absolute w-[15px] right-5 Flecha"/>
          </button>

          {/*Contenedor que almacena el menu de opciones de admision, en vista de PC, se trabaja directamente con este contenedor*/}
          <div className={`${open == 1 ? 'transition-all duration-300' : 'transition-all duration-300 translate-x-[-100%]'} z-20 absolute flex-col h-[100vh] w-[100%] top-[0vh] bg-white text-black 
          md:translate-x-[0] md:static md:h-auto md:w-auto md:bg-transparent md:text-white`}>

            {/*Boton que cierra el menu desplegable (Oculto en vista de PC)*/}
            <div className="flex w-[100%] justify-end md:hidden">
              <button onClick={() => Menu(0)} className=" w-[70px] h-[50px] flex m-1 justify-center items-center">
                <div className="absolute w-[35px] h-[3px] bg-black rotate-45"></div>
                <div className="absolute w-[35px] h-[3px] bg-black -rotate-45"></div>
              </button>
            </div>

            {/*Link para la pagina de Admisiones*/}
            <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Admisión</Link>
            <ul className="md:hidden">
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Aranceles Institucionales</Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Calendario Academico</Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Instructivo de Matricula</Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Reglamentos</Link>
              </li>
            </ul>
          </div>
        </li>

        {/*Segunda opcion*/}
        <li className="flex flex-col">
          <button onClick={() => Menu(2)} className="py-10 px-8 flex flex-row justify-start items-center md:hidden">
            <img src= "/images/OfertaAcademica.png" alt="WhiteShield" className = "w-7"/>
            <span className="px-4">Oferta Academica</span>
            <img src= "/images/Arrow.png" alt="LogoWhite" className = "absolute w-[15px] right-5 Flecha"/>
          </button>
          <div className={`${open == 2 ? 'transition-all duration-300' : 'transition-all duration-300 translate-x-[-100%]'} z-20 absolute flex-col h-[100vh] w-[100%] top-[0vh] bg-white text-black
          md:translate-x-[0] md:static md:h-auto md:w-auto md:bg-transparent md:text-white`}>
            <div className="flex w-[100%] justify-end md:hidden">
              <button onClick={() => Menu(0)} className=" w-[70px] h-[50px] flex m-1 justify-center items-center">
                <div className="absolute w-[35px] h-[3px] bg-black rotate-45"></div>
                <div className="absolute w-[35px] h-[3px] bg-black -rotate-45"></div>
              </button>
            </div>
            <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Oferta academica</Link>
            <ul className="md:hidden">
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Facultad de Ingenieria y Ciencias Naturales</Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Facultad de Economia y Ciencias Sociales</Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Facultad de Ciencias Juridicas</Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Escuela de Educacion</Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Maestrias</Link>
              </li>
            </ul>
          </div>
        </li>

        {/*Tercera opcion*/}
        <li className="flex flex-col">
          <button onClick={() => Menu(3)} className="py-10 px-8 flex flex-row justify-start items-center md:hidden">
            <img src= "/images/Institucion.png" alt="WhiteShield" className = "w-7"/>
            <span className="px-4">Institución</span>
            <img src= "/images/Arrow.png" alt="LogoWhite" className = "absolute w-[15px] right-5 Flecha"/>
          </button>
          <div className={`${open == 3 ? 'transition-all duration-300' : 'transition-all duration-300 translate-x-[-100%]'} z-20 absolute flex-col h-[100vh] w-[100%] top-[0vh] bg-white text-black 
          md:translate-x-[0] md:static md:h-auto md:w-auto md:bg-transparent md:text-white`}>
            <div className="flex w-[100%] justify-end md:hidden">
              <button onClick={() => Menu(0)} className=" w-[70px] h-[50px] flex m-1 justify-center items-center md:hidden">
                <div className="absolute w-[35px] h-[3px] bg-black rotate-45"></div>
                <div className="absolute w-[35px] h-[3px] bg-black -rotate-45"></div>
              </button>
            </div>
            <Link href="/nuestraInstitucion" className="py-10 px-3 text-center flex flex-row justify-center items-center">Institución</Link>
            <ul className="md:hidden">
              <li>
                <Link href="/nuestraInstitucion/tourUSO" className="py-10 px-3 text-center flex flex-row justify-center items-center">Tour USO</Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Investigaciones USO</Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Espacio USO</Link>
              </li>
              <li>
                <Link href="/" className="py-10 px-3 text-center flex flex-row justify-center items-center">Unidades Academicas</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex flex-col">
          <Link href="/" className="py-10 px-8 flex justify-start items-center md:px-0">
          <img src= "/images/EducacionContinua.png" alt="WhiteShield" className = "w-7 h-7 md:hidden"/>
          <span className="px-4">Educación Continua</span>
          </Link>
        </li>
        <li className="flex flex-col">
          <Link href="/" className="py-10 px-8 flex justify-start items-center md:px-0">
          <img src= "/images/DireccionCPS.png" alt="DireccionIcon" className = "w-7 h-7 md:hidden"/>
          <span className="px-4">Dirección de Calidad, Investigación y Proyección Social</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
