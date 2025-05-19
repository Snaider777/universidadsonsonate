"use client";
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

const textAnimation = {
    hidden: { opacity: 0, x: -90 },
    visible: { opacity: 1, x: 0 },
};
const imgAnimation = {
    hidden: { opacity: 0, x: 90 },
    visible: { opacity: 1, x: 0 },
};
const divAnimation = {
    hidden: { opacity: 0, x: -90 },
    visible: { opacity: 1, x: 0 },
};

const Mensaje = () =>{
    const {ref, inView} = useInView();
    return(
        <section ref={ref} className="overflow-hidden bg-[#1f3d7a] py-12">
            <div className="container w-full mx-auto px-4 my-auto">
                <div>
                    <motion.div
                        className="flex flex-row lg:flex-row justify-between items-center bg-blue-600 p-8 rounded-lg shadow-lg w-full mb-20 gap-2 relative overflow-hidden"
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? {opacity: 1, x: 0 } : {}}
                        transition={{duration: 0.9}}
                        >
                            <div className="flex flex-col w-4/6 px-4 ">
                                <h2 
                                    className="text-4xl md:text-4xl font-bold text-white mb-4"
                                    variants={textAnimation}
                                >
                                    Mensaje de nuestra rectora
                                </h2>
                                <p className="text-white text-lg md:text-xl">
                                    Querida comunidad universitaria,
                                    En nuestra institución, creemos firmemente que la educación no solo forma profesionales, sino también seres humanos íntegros, comprometidos con el bien común. Nuestro pilar fundamental es el desarrollo de valores como la responsabilidad, la ética y la solidaridad, pues estamos convencidos de que el verdadero éxito no se mide solo en logros académicos, sino en la capacidad de transformar realidades con conocimiento y humanidad. Como rectora, me enorgullece ver cómo cada uno de ustedes contribuye a este legado de excelencia y compromiso. Sigamos construyendo juntos una universidad que inspire, que eleve y que marque la diferencia en la sociedad.
                                </p>
                            </div>
                        <motion.img
                            src="/images/mision.png"
                            alt="Rectora"
                            className=" w-[30%] h-auto object-cover rounded-lg drop-shadow-2xl absolute overflow-hidden
                            right-10 top-1/6"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={imgAnimation}
                            transition={{duration: 0.9}}
                        >
                        </motion.img>
                    </motion.div>
                </div>
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={inView ? {opacity: 1, x: 0 } : {}}
                    transition={{duration: 0.9}}
                >
                <div className="relative w-full h-16">
                        <div className="absolute top-0 left-0 w-full h-20 bg-blue-600 transform -skew-y-2 origin-top-left"
                        variants={divAnimation}></div>
                </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Mensaje;