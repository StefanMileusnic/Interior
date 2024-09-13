import Banner1 from "../../assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image section */}
          <div className="flex flex-col justify-center ">
            <motion.img
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              src={Banner1}
              alt="banner"
              className="w-[95%]  md:w-full mx-auto"
            />
          </div>
          {/* Text section */}
          <div className="space-y-5 flex justify-center flex-col">
            <motion.h1
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              We believe that a team makes any project better
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm leading-7"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              distinctio sequi quod nemo, obcaecati mollitia corporis veritatis
              minus ipsum ad?
            </motion.p>
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Discover Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
