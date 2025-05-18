import SocialButtons from './SocialButtons';
export default function Hero(){
    return(
    <section className = "bg-[url('/images/Banner.png')] bg-cover bg-center bg- h-[100vh] w-full flex items-center justify-center bg-fixed">
        <header className = "relative flex flex-col items-center gap-x-[30px]">
            <div className = "flex relative w-[150px] h-[165px] justify-center">
                <img src= "/images/Shield.png" alt="Shield" className = "absolute w-[142px] top-0 Pulso"/>
                <img src= "/images/BlueCircle.png" alt="BlueCircle" className = "absolute w-[88px] top-[28px] Rotar2s"/>
                <img src= "/images/GreenCircle.png" alt="GreenCircle" className = "absolute w-[102px] top-[21px] Rotar3s"/>
                <img src= "/images/Triangle.png" alt="Triangle" className = "absolute w-[77px] top-[49px]" />
                <img src= "/images/BlueWave2.png" alt="BlueWave2" className = "absolute w-[120px] top-[112px]"/>
                <img src= "/images/BlueWave1.png" alt="BlueWave1" className = "absolute w-[120px] top-[104px]"/>
            </div>
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-3xl font-sans font-semibold text-center">Transformamos tu futuro <br/>con educación de <span className="font-bold">calidad</span></h1>
                <p className="text-white font-sans max-w-[600px] text-center">Descubre el futuro de tu educación en nuestra universidad. Explora nuestra oferta academica. Encuentra tu camino y conviértete en el profesional que el mundo necesita.</p>
                <button className="text-white bg-blue-500 p-3 rounded-3xl w-[200px]">Explorar facultades</button>
            </div>
            </header>
            <SocialButtons />
    </section>  
    )
}