import Hero from "@/Components/Locale/index/Hero";
import CampusUSO from "@/Components/Locale/nuestraInstitucion/tourUSO/CampusUSO";
import InicioTour from "@/Components/Locale/nuestraInstitucion/tourUSO/InicioTour";
import MapaUSO from "@/Components/Locale/nuestraInstitucion/tourUSO/MapaUSO";
export default function NuestraIntitucion(){
    return(
        <>
            <Hero/>
            <InicioTour/>
            <CampusUSO />
            <MapaUSO/>
        </>
    )
}