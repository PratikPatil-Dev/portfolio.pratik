import { motion } from "framer-motion";
import aboutPic from "../assets/aboutPic.jpg";

type Props = {};

const About = (props: Props) => {
  const aboutPicUrl = aboutPic.src;

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
      className="flex flex-col md:flex-row relative text-center md:text-left h-screen max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="img -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover object-top md:object-center md:rounded-lg md:w-56 md:h-64 xl:w-[300px] xl:h-[400px]"
        src={aboutPicUrl}
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          soluta est dolorem aut debitis, repudiandae nemo neque numquam qui
          consequuntur distinctio beatae alias vel! Unde reiciendis, illo quo
          qui a quaerat aspernatur cum delectus quia necessitatibus est maiores
          tempora eaque velit quos? Quia nobis molestias consequuntur maxime
          aperiam. Facilis, quibusdam?
        </p>
      </div>
    </motion.div>
  );
};

export default About;
