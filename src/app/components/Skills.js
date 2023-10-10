import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className=" flex relative flex-col text-center  min-h-screen justify-center  mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-5">
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
