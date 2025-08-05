import { motion } from "framer-motion";
import Image from "next/image";

const Skill = ({ icon, label }) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer mx-0 md:mx-2 my-2 w-full">
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="rounded-full border border-gray-300 bg-white object-cover filter group-hover:grayscale transition duration-300 ease-in-out overflow-hidden shadow-md"
      >
        <Image src={icon} alt={label} width={34} height={34} />
      </motion.div>
      <span className="mt-2 text-xs text-gray-700 font-medium text-center w-16 truncate" title={label}>{label}</span>
    </div>
  );
};

export default Skill;
