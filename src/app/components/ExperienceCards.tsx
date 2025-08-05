import { ArrowTrendingUpIcon, BuildingOffice2Icon, CalendarDaysIcon, CodeBracketIcon, LinkIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

interface Experience {
  location: any;
  techStack: any;
  keyFeatures: any;
  achievements: any;
  status?: string;
  logo: string;
  company: string;
  companyUrl?: string;
  companyType?: string;
  role: string;
  duration?: string;
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const isCurrentRole = experience?.status === 'current';
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#292929] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      {/* Current Role Indicator */}
      {isCurrentRole && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F7AB0A] to-gray"></div>
      )}

      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start space-x-4">
            <div className="relative">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-16 h-16 rounded-lg object-cover bg-gray-700"
              />
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                {isCurrentRole && (
                  <span className="bg-[#F7AB0A]/20 text-white px-2 py-1 rounded text-xs font-medium">
                    Current
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <BuildingOffice2Icon className="w-4 h-4 text-gray-400" />
                <p className="text-lg font-medium text-gray-300">{experience.company}</p>
                {experience.companyUrl && (
                  <Link href={experience?.companyUrl}>
                  <LinkIcon className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                )}
              </div>
              
              <p className="text-sm text-gray-400 mb-3">{experience.companyType}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon className="w-4 h-4" />
                  {experience.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPinIcon className="w-4 h-4" />
                  {experience.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-6">
          <h4 className="text-white font-medium mb-3 flex items-center gap-2">
            <CodeBracketIcon className="w-4 h-4" />
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech:string, index: number) => (
              <span
                key={index}
                className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-600/30 hover:bg-gray-600/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features/Projects */}
        <div className="mb-6">
          <h4 className="text-white font-medium mb-3">
            {experience.status === 'current' ? 'Key Features Built' : 'Key Projects'}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {experience.keyFeatures.map((feature: string, index: number) => (
              <div
                key={index}
                className="bg-gray-800/30 text-gray-300 px-3 py-2 rounded text-sm text-center border border-gray-700/30"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="text-white font-medium mb-3 flex items-center gap-2">
            <ArrowTrendingUpIcon className="w-4 h-4" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};

export default ExperienceCard