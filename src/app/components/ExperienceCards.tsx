import { motion } from "framer-motion";
import ProfilePic from "../assets/Profile Picture.png";
import { SocialIcon } from "react-social-icons";

type Props = {};

const ExperienceCards = (props: Props) => {
  const ProfilePicURL = ProfilePic.src;
  return (
    <article className="bg-[#292929] p-5 rounded-lg shadow-md hover:shadow-xl cursor-pointer transition-transform duration-200 transform hover:scale-105">
      <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-center"
          src={ProfilePicURL}
          alt="Profile Picture"
        />

        <div className="flex-grow">
          <h4 className="text-2xl font-light">SDE-II</h4>
          <p className="font-bold text-xl mt-1">Google</p>
          <div className="flex space-x-2 my-2">
            <SocialIcon
              url="https://twitter.com"
              fgColor="skyblue"
              bgColor="transparent"
              className="h-10 w-10 rounded-full"
            />
            <SocialIcon
              url="https://facebook.com"
              fgColor="green"
              bgColor="transparent"
              className="h-10 w-10 rounded-full"
            />
            <SocialIcon
              url="https://reddit.com"
              fgColor="orange"
              bgColor="transparent"
              className="h-10 w-10 rounded-full"
            />
          </div>
          <p className="uppercase py-2 text-gray-300">
            Started work... - Ended Work...
          </p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary Points Summary Points Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCards;
