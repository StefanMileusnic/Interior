import HeroPng from "../../assets/Hero.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
          {/*Text section*/}
          <div
            className="flex flex-col justify-center gap-7 md:pr-8 lg:pr-52
           text-center md:text-left pt-20 md:pt-0 px-10"
          >
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-2xl lg:text-4xl font-bold font-serif"
            >
              SKETCH LUXURY INTERIOR DESIGN
            </motion.h1>
            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base text-gray-500 leading-7"
            >
              Bring your dream to life with one-on-one design help & hand picked
              products tailored to your style, space and budget
            </motion.p>
            <div className=" space-x-4">
              <motion.button
                variants={SlideUp(0.8)}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.1 }}
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c] uppercase"
              >
                Get started
              </motion.button>
              <motion.button
                variants={SlideUp(0.8)}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.1 }}
                className="primary-btn uppercase"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
          {/*Images section*/}
          <div className=" flex flex-col  justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              src={HeroPng}
              alt="Hero"
              className="w-[80%] md:w-[700px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
