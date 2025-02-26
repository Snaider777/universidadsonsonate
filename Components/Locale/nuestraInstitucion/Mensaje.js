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
const divanimation = {
    hidden: { opacity: 0, x: -90 },
    visible: { opacity: 1, x: 0 },
};
const Mensaje = () =>{
    const {ref, inView} = useInView();
    return(
        <section ref={ref} className="overflow-hidden bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mb-20" >
                    <motion.div
                        className="felx flex-col justify-center items-start bg-blue-500 p-8 rounded-lg shadow.lg"
                        initial={{opacity: 0, x: -50}}
                        animate={inView ? {opacity: 1, x: 0 } : {}}
                        transition={{duration: 0.9}}
                        >
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
                    </motion.div>
                    <motion.img
                        src="/images/mision.png"
                        alt="Rectora"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={imgAnimation}
                        transition={{duration: 0.9}}
                    >
                    </motion.img>
                </div>
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={inView ? {opacity: 1, x: 0 } : {}}
                    transition={{duration: 0.9}}
                ><div className="relative w-full h-16">
                        <div className="absolute top-0 left-0 w-full h-20 bg-blue-700 transform -skew-y-2 origin-top-left"
                        variants={divanimation}></div>
                </div>
                </motion.div>
                {/*<iframe class="w-full rounded-xl" height="650" src="https://website.usonsonate.edu.sv/tour/index.html"></iframe>*/}
            </div>
        </section>
    );
};

export default Mensaje;