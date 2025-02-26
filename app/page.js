import Section1 from '/components/Section1'
import FacultadesCarousel from '@/Components/Carousel'
import BannerSection from '@/Components/Banner'
import ConveniosSection from '@/Components/Convenios'
import NoticiasUso from '@/Components/Noticias'

export default function Home() {
  return (
    <>
      <div className = "bg-[url('/images/Banner-2.png')] bg-cover bg-center h-[100vh] w-full flex items-center justify-center bg-fixed">
        <header className = "flex flex-row items-center justify-center flex-wrap">
        <div className = "flex relative w-[250px] h-[200px] justify-center">
            <img src= "/images/Shield.png" alt="Shield" className = "absolute w-[142px] top-[36px]"/>
            <img src= "/images/BlueCircle.png" alt="BlueCircle" className = "absolute w-[88px] top-[58px] "/>
            <img src= "/images/GreenCircle.png" alt="GreenCircle" className = "absolute w-[102px] top-[51px] "/>
            <img src= "/images/Triangle.png" alt="Triangle" className = "absolute w-[77px] top-[79px]" />
            <img src= "/images/BlueWave2.png" alt="BlueWave2" className = "absolute w-[120px] top-[142px]"/>
            <img src= "/images/BlueWave1.png" alt="BlueWave1" className = "absolute w-[120px] top-[134px]"/>
          </div>
          <h1 className="text-4xl font-sans font-semibold text-center ">Transformamos tu futuro <br/>con educación de calidad</h1>
          <div className="flex flex-row justify-center m-4">
            <div className="bg-[#1A73E8] text-white font-sans font-semibold text-lg px-4 py-2 rounded-lg mt-4 mr-4">CICLO 02/2025</div>
            <button className="bg-[#1A73E8] text-white font-sans font-semibold text-lg px-4 py-2 rounded-lg mt-4">Conoce más</button>
          </div>
        </header>
      </div>
      <div className="flex flex-row justify-center items-center h-[0.01vh] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 w-full"></div>
      <Section1 />
      <div className="flex flex-row justify-center items-center h-[0.01vh] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 w-full"></div>
      <FacultadesCarousel />
      {/*<div className="flex flex-row justify-center items-center h-[0.01vh] bg-blue-500 w-full"></div>*/}
      {/*<BannerSection />*/}
      <div className="flex flex-row justify-center items-center h-[0.01vh] bg-blue-500 w-full"></div>
      <NoticiasUso />
      <div className="flex flex-row justify-center items-center h-[0.01vh] bg-blue-500 w-full"></div>
      <ConveniosSection />
    </>
  )
}