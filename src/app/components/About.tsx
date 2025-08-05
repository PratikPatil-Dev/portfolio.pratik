/* eslint-disable react/no-unescaped-entities */
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
      className="flex flex-col  relative text-center md:text-left min-h-screen max-w-7xl px-10 justify-evenly mx-auto items-center space-y-4"
    >
      <h3 className="mt-24 md:mt-0 mx-auto uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center">
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
          className="img md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover object-top md:object-center md:rounded-lg md:w-56 md:h-64 xl:w-[300px] xl:h-[400px]"
          src={aboutPicUrl}
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-2xl md:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]">little</span>{" "}
            background
          </h4>
          <div className="text-base">
            <p>
              Hey there! I'm Pratik and my journey has taken a fascinating turn.
              Originally trained in aviation as an Aircraft Maintenance
              Engineer✈️, I thrived on precision and problem-solving. But then
              2020 happened, and the aviation industry faced unprecedented
              challenges due to the COVID-19 pandemic and other global events.
            </p>
            <br />
            <p>
              In January 2023, I decided to switch gears and dove headfirst into
              the world of web development👨‍💻, specializing in the MERN stack.
              The learning experience has been a whirlwind of excitement, with
              the chance to be mentored by some of the best in the field.
            </p>
            <br />
            <p>
              With nearly 2 years of work experience, 
              I've honed my skills in building robust web applications using React, Node.js, and Express. 
              My journey has also led me into the world of AI, where I've worked with technologies like LangChain, LangGraph, MCP servers, and developed AI agent chatbots. 
              Additionally, I have practical experience deploying scalable solutions on cloud platforms such as Google Cloud Platform (GCP) and AWS EC2. 
              I'm excited to leverage this diverse expertise to drive innovation and deliver impactful results on new projects.
            </p>
            <br />
            <p>
              Thanks for visiting my portfolio! Let's chat about how we can
              create something amazing together.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
