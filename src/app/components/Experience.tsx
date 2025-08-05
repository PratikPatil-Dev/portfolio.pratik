import { motion } from "framer-motion";
import ExperienceCards from "./ExperienceCards";
type Props = {};

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Kritrima Prajna Innovations Pvt Ltd",
    companyType: "WhatsApp Business Solution Provider",
    location: "Remote",
    duration: "Nov 2023 - Present | 1 yr 10 mos",
    status: "current",
    logo: "/educobot-logo.png",
    companyUrl: "https://educobot.com/",
    productUrls: ["https://chatterswift.com", "https://educobot.com"],
    techStack: [
      "Next.js 14", "Node.js", "Express.js", "MongoDB", "Redux", "TypeScript", "LangChain", "LangGraph",
      "Tailwind CSS", "shadcn/ui", "WhatsApp Business API", "Instagram API"
    ],
    achievements: [
      "Developed and maintained an e-learning platfrom",
      "Built an Agentic AI chatbot automating 80% of WhatsApp Business tasks, reducing manual intervention by 70%",
      "Built comprehensive WhatsApp Business solution from scratch",
      "Developed message scheduler handling 10k+ automated messages daily",
      "Implemented bulk campaign system with 95% delivery success rate",
      "Created analytics dashboard tracking message performance and ROI",
      "Integrated Instagram API expanding platform capabilities by 40%"
    ],
    keyFeatures: [
      "AI Chatbots",
      "Automation Workflows",
      "Message Scheduler",
      "Bulk Message Campaigns", 
      "React Based Games",
      "Analytics Dashboard",
      "Realtime Chat Interface"
    ],
  },
  // {
  //   id: 2,
  //   role: "Junior Full Stack Developer",
  //   company: "Previous Company",
  //   companyType: "Tech Startup",
  //   location: "Bangalore, India",
  //   duration: "Jun 2023 - Dec 2023",
  //   status: "previous",
  //   logo: "https://via.placeholder.com/80x80/6B7280/ffffff?text=PC",
  //   techStack: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
  //   achievements: [
  //     "Developed 3 full-stack web applications from scratch",
  //     "Improved application performance by 40% through code optimization",
  //     "Collaborated with cross-functional teams of 5+ members",
  //     "Implemented responsive designs for mobile and desktop platforms"
  //   ],
  //   keyFeatures: [
  //     "E-commerce Platform",
  //     "User Authentication",
  //     "Payment Integration",
  //     "Admin Dashboard"
  //   ],
  //   metrics: {
  //     projects: "3",
  //     performance: "+40%",
  //     team: "5+ members"
  //   }
  // }
];

const Experience = (props: Props) => {
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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-end"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full h-[600px] flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        { experiences.map((experience) => {
          return <ExperienceCards key={experience.id} experience={experience} index={experience.id} />
          })
          }
      </div>
    </motion.div>
  );
};

export default Experience;
