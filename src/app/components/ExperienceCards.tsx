import { motion } from "framer-motion";
import ProfilePic from "../assets/Profile Picture.png";
import { SocialIcon } from "react-social-icons";

type Props = {};

const ExperienceCards = (props: Props) => {
  const ProfolePicURL = ProfilePic.src;
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[500px] md:w-[700px] h-full snap-center bg-[#292929] p-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={ProfolePicURL}
      />

      <div className="px-0 md:px-4">
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
    </article>
  );
};

export default ExperienceCards;
