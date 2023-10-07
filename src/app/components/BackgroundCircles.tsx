import { motion } from "framer-motion";
type Props = {};

const BAckgroundCircles = (props: Props) => {
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
      <div className="absolute border border-[rgb(76,76,76)] rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <div className="absolute border border-[rgb(76,76,76)] rounded-full h-[220px] w-[220px] mt-52 animate-ping" />
      <div className="absolute border border-[rgb(76,76,76)] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute rounded-full border border-[#F7AB0A] opacity-20 h-[600px] w-[600px] mt-52 animate-pulse" />
    </motion.div>
  );
};

export default BAckgroundCircles;
