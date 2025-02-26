import Mensaje from "@/Components/Mensaje"
import MisionVisionHistoriaSection from "@/Components/MisionVisionHistoriaSection"
export default function NuestraIntitucion(){
    return(
        <>
            <Mensaje />
            <div className="flex flex-row justify-center items-center h-[0.01vh] bg-white w-full"></div>
            <MisionVisionHistoriaSection/>
        </>
    )
}