export default function Home() {
  return (
    <>
      <div className = "bg-[url('/Banner.png')] bg-cover bg-center h-[85vh] w-screen flex items-center justify-center bg-fixed">
        <header className = "flex flex-row items-center justify-center flex-wrap">
        <div className = "flex relative w-[250px] h-[200px] justify-center">
            <img src= "/Shield.png" alt="Shield" className = "absolute w-[142px] top-[36px]"/>
            <img src= "/BlueCircle.png" alt="BlueCircle" className = "absolute w-[88px] top-[58px] animate-spin"/>
            <img src= "/GreenCircle.png" alt="GreenCircle" className = "absolute w-[102px] top-[51px] animate-spin"/>
            <img src= "/Triangle.png" alt="Triangle" className = "absolute w-[77px] top-[79px]" />
            <img src= "/BlueWave2.png" alt="BlueWave2" className = "absolute w-[120px] top-[142px]"/>
            <img src= "/BlueWave1.png" alt="BlueWave1" className = "absolute w-[120px] top-[134px]"/>
          </div>
          <h1 className="text-4xl font-sans font-semibold text-center">Transformamos tu futuro <br/>con educación de calidad</h1>
        </header>
      </div>
      <div className="flex flex-row justify-center h-[15vh] bg-white w-screen">
      </div>
      <div className="flex flex-row justify-center h-[70vh] bg-gray-300 w-screen">
      </div>
      <div className="flex flex-row justify-center h-[70vh] bg-white w-screen">
      </div>
      </>
  )
}