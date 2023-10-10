import { motion } from "framer-motion";
import HTML from "../assets/html.png";
import CSS from "../assets/css-3.png";
import JS from "../assets/js.png";
import REACT from "../assets/react.png";
import NODE from "../assets/node-js.png";
import EXPRESS from "../assets/express-js.png";
import MONGO from "../assets/mongodb.png";
import SQL from "../assets/mysql.png";
import TAILWIND from "../assets/tailwind.png";
import GIT from "../assets/Git.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const Skill = () => {
  const [imgArr, setImgArr] = useState([]);
  useEffect(() => {
    setImgArr([HTML, CSS, JS, REACT, NODE, EXPRESS, MONGO, SQL, TAILWIND, GIT]);
  }, []);

  return (
    <>
      {imgArr?.map((skill, index) => (
        <div
          key={index}
          className="group relative flex cursor-pointer mx-0 md:mx-2 my-2 w-full"
        >
          <motion.div
            initial={{
              x: -150,
              opacity: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out overflow-hidden"
          >
            <Image src={skill} alt={skill} width={90} height={90} />
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default Skill;
