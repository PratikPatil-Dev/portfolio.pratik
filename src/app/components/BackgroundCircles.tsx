import { motion } from "framer-motion";
type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center mt-52"
    >
      <div className="absolute border border-[rgb(76,76,76)] rounded-full h-[100px] md:h-[150px] w-[100px] md:w-[150px] mt-52 animate-ping" />
      <div className="absolute border border-[rgb(76,76,76)] rounded-full h-[150px] md:h-[220px] w-[150px] md:w-[220px] mt-52 animate-ping" />
      <div className="absolute border border-[rgb(76,76,76)] rounded-full h-[200px] md:h-[300px] w-[200px] md:w-[300px] mt-52 animate-ping" />
      <div className="absolute rounded-full border border-[#F7AB0A] opacity-20 h-[400px] w-[400px] md:h-[600px] md:w-[600px] mt-52 animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
