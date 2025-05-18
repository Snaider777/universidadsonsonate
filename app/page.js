import Hero from '../Components/Locale/index/Hero'
import BienvenidaUSO from '../Components/Locale/index/BienvenidaUSO'
import SlideOfertaAcademica from '@/Components/Locale/index/SlideOfertaAcademica'
import NoticiasUSO from '@/Components/Locale/index/NoticiasUSO'
import ConveniosUSO from '@/Components/Locale/index/ConveniosUSO'
import "../styles/animations.css"

export default function Home() {
  return (
    <>
      <Hero />
      <BienvenidaUSO />
      <NoticiasUSO />
      <SlideOfertaAcademica />
      <ConveniosUSO />
    </>
  )
}