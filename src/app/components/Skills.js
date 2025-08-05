import { motion } from "framer-motion";
import Skill from "./Skill";
import HTML from "../assets/html.png";
import CSS from "../assets/css-3.png";
import JS from "../assets/js.png";
import TS from "../assets/ts-logo-round-512.png";
import REACT from "../assets/react.png";
import NEXTJS from "../assets/nextjs.png";
import TAILWIND from "../assets/tailwind.png";
import BOOTSTRAP from "../assets/bootstrap.png";
import NODE from "../assets/node-js.png";
import EXPRESS from "../assets/express-js.png";
import MONGO from "../assets/mongodb.png";
import SQL from "../assets/mysql.png";
import GIT from "../assets/Git.png";
import AWS from "../assets/aws-logo.png";
import GCP from "../assets/gcp-logo.png";
import FIREBASE from "../assets/firebase-logo.png";
import JWT from "../assets/jwt-logo.png";
import NEXTAUTH from "../assets/nextauth-logo.png";
import LANGCHAIN from "../assets/langchain-logo.png";
import SHADCN from "../assets/shadcn-logo.png";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: HTML, label: "HTML" },
      { icon: CSS, label: "CSS" },
      { icon: JS, label: "JavaScript" },
      { icon: TS, label: "TypeScript" },
      { icon: REACT, label: "React" },
      { icon: NEXTJS, label: "Next.js" },
      { icon: TAILWIND, label: "Tailwind" },
      { icon: BOOTSTRAP, label: "Bootstrap" },
      { icon: SHADCN, label: "Shadcn/UI" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: NODE, label: "Node.js" },
      { icon: EXPRESS, label: "Express.js" },
      { icon: JWT, label: "JWT" },
      { icon: NEXTAUTH, label: "NextAuth" },
      { icon: LANGCHAIN, label: "LangChain" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: MONGO, label: "MongoDB" },
      { icon: SQL, label: "MySQL" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { icon: AWS, label: "AWS" },
      { icon: GCP, label: "GCP" },
      { icon: FIREBASE, label: "Firebase" },
      { icon: GIT, label: "Git" },
    ],
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center min-h-screen justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="w-full max-w-4xl mt-36 space-y-6">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h4 className="text-lg md:text-xl font-semibold text-left text-gray-600 mb-2 pl-2">{category.title}</h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-9 gap-2 bg-white/40 rounded-lg p-4 shadow place-items-center">
              {category.skills.map((skill) => (
                <Skill key={skill.label} icon={skill.icon} label={skill.label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
