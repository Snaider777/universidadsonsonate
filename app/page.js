import Hero from '../Components/Locale/Home/Hero'
import Section1 from '../Components/Locale/Home/Section1'
import FacultadesCarousel from '@/Components/Carousel'
import NoticiasUso from '@/Components/Noticias'
import ConveniosSection from '@/Components/Convenios'
import "../styles/animations.css"

export default function Home() {
  return (
    <>
      <Hero />
      <Section1 />
      <FacultadesCarousel />
      <NoticiasUso />
      <ConveniosSection />
    </>
  )
}