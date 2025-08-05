import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import ProfilePic from "../assets/Profile Picture.png";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi there !👋",
      "It's Pratik here !",
      "I am A Web Devloper 🕸️",
      "A Full Stack Developer",
      "A React Next.js Developer",
      "A MERN Stack Developer",
      "A Backend Developer"
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen relative flex flex-col space-y-4 items-center justify-center text-center overflow-hidden">
      <div className="flex flex-col justify-center items-center absolute top-20">
        <BackgroundCircles />
      </div>
      <div className="flex flex-col justify-center items-center absolute md:top-48 top-52">
        <div className="h-[250px] w-[250px] rounded-full overflow-hidden">
          <video
            src="/Hi.mp4"
            autoPlay
            loop
            muted // Add this
            className="w-full h-full object-cover"
          />
        </div>
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 py-4 tracking-[10px]">
            Web Developer
          </h2>
          <h1 className="text-4xl lg:text-5xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            {/* <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link> */}
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
