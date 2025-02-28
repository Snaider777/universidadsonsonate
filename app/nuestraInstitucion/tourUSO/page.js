import CampusUSO from "@/Components/Locale/nuestraInstitucion/tourUSO/CampusUSO";
import LaboratoriosUSO from "@/Components/Locale/nuestraInstitucion/tourUSO/LaboratoriosUSO";
import MapaUSO from "@/Components/Locale/nuestraInstitucion/tourUSO/MapaUSO";
export default function NuestraIntitucion(){
    return(
        <>
            <LaboratoriosUSO/>
            <CampusUSO />
            <MapaUSO/>
        </>
    )
}