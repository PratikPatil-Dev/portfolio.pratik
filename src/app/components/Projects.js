import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      project: "EZ-TransX",
      title: "A simple Banking system built using React, Node and MongoDB.",
      description:
        "Welcome to EZ-TransX, a simple yet powerful basic banking system. This project allows you to manage customer accounts, perform transactions, and more. It's perfect for simulating banking operations in a real-world scenario.",
      image: "https://i.postimg.cc/tCQBHpxB/bank-mockup.png",
      github: "https://github.com/PratikPatil-Dev/Bank-System-Frontend",
      deployed: "https://ez-transx-banking-system.vercel.app/",
    },
    {
      project: "PopCloud",
      title: "A Weather App built using React.",
      description:
        "Auto-detect location using browser Geolocation API or manually enter location. Get detailed weather insights of entered location, search for locations in a more lively manney with dynamic backgrounds depending on weather conditions.",
      image: "https://i.postimg.cc/1tsf6yv5/weather-mockup.png",
      github: "https://github.com/PratikPatil-Dev/weather-app",
      deployed: "https://popcloud-weather-app.vercel.app/",
    },
    {
      project: "METAL",
      title: "A responsive E-commerce website",
      description:
        "A responsive, modern E-commerce website for drones. An ideal website for small bunissses to showcase thier products and a platform to facilitate online orders.",
      image: "https://i.postimg.cc/yNCntr13/METAL-mockup.png",
      github: "https://github.com/PratikPatil-Dev/METAL-Drones",
      deployed: "https://metal-drones-shop.netlify.app/",
    },
    {
      project: "IPL",
      title: "Unofficial Indian premiere League Website.",
      description:
        "This projects uses local storage for storage handling. Users can view or create new IPL teams, add new players to the team and get all the stats abut players and teams.",
      image: "https://i.postimg.cc/k52gbf3G/ipl-mockup.png",
      github: "https://github.com/PratikPatil-Dev/IPL-Pratik",
      deployed: "https://ipl-teams2020.netlify.app/",
    },
  ];

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
      className="h-screen flex relative flex-col text-left overflow-hidden md:flex-row max-w-full xl:px-10 min-h-screen justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[2px] text-gray-500 text-sm ">
        Scroll left to see more projects
      </h3>
      <div className="relative w-full h-[900px] md:h-[700px] mt-10 flex overflow-x-scroll overflow-y-hidden snap-mandatory snap-x z-20 scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project) => (
          <div
            key={project.project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              src={project.image}
              alt="image"
              key={project.project}
              className="w-64 md:w-80"
            />

            <div className="space-y-5 md:space-y-8 px-0 md:px-10 max-w-6xl">
              <h4 className="font-semibold text-3xl md:text-4xl text-center">
                {project.project}
              </h4>
              <h3 className="text-sm text-center text-slate-400">
                {project.title}
              </h3>
              <p className="text-lg text-center md:text-left text-slate-300">
                {project.description}
              </p>
              <div className="flex justify-center items-center space-x-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-transparent border border-[#F7AB0A] text-white rounded-full hover:bg-[#F7AB0A] hover:text-white transition duration-300"
                >
                  GitHub Link
                </a>
                <a
                  href={project.deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-transparent border border-blue-600 text-white rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#ffbe31]/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
