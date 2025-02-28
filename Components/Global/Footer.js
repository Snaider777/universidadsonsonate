import Link from "next/link";
export default function Footer(){
    return(
        <footer className=" bg-[#1f3d7aaf] w-[100wh]">
            <div className="flex flex-col items-center justify-center w-[100%]">
                <div className="flex flex-col w-[100%] md:flex-row">
                    <div className="flex flex-col justify-center items-center py-5 gap-5 md:w-[35%]">
                        <img src= "/images/UsoLOGO.png" alt="UsoLOGO" className = "w-[200px]"/>
                        <div className="flex flex-row gap-5 flex-wrap justify-center">
                            <div>
                                <p>TELEFONOS</p>
                                <p>(+503) 2429 9500</p>
                                <p>(+503) 2429 9525</p>
                            </div>
                            <div>
                                <p>TELE FAX</p>
                                <p>(+503) 2429 9503</p>
                                <p>(+503) 2429 9526</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center py-5 gap-5 md:flex-row md:w-[65%] md:gap-x-28">
                        <div className="flex flex-col w-[200px] gap-5">
                            <Link href="" className="font-bold">Oferta Academica</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Facultad de Ciencias Juridicas</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Facultad de Ingenieria y Ciencias Naturales</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Escuela de Educación</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Maestrias</Link>
                        </div>
                        <div className="flex flex-col w-[200px] gap-5">
                            <Link href="" className="font-bold">Recursos Academicos</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Calendario Academico</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Instructivo de matricula</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Reglamentos</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Aranceles Institucionales</Link>
                        </div>
                        <div className="flex flex-col w-[200px] gap-5">
                            <Link href="" className="font-bold">Nuestra Universidad DDCIPS</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Misión y visisión</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Autoridades Académicas</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Historia</Link>
                            <Link href="" className="hidden md:inline text-blue-300">Ubicación</Link>
                        </div>
                    </div>
                </div>
            <div className="w-[90%] h-[1px] bg-blue-300 m-3"></div>
            <div className="flex flex-row justify-around w-[100%] items-center mb-3">
                <p className="px-5 text-sm">© 2025 Universidad de Sonsonate. Todos los derechos reservados</p>
                <div className="flex flex-row gap-2 px-5">
                    <a href = "">
                        <img src = "/images/TwitterLink.png" className="w-10"></img>
                    </a>
                    <a>
                        <img src = "/images/Facebook.png" className="w-10"></img>
                    </a>
                    <a>
                        <img src = "/images/Instagram.png" className="w-10"></img>
                    </a>
                </div>
            </div>
            </div>
        </footer>
    )
}