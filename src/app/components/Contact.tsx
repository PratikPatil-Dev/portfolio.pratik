import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:pratikpatil0884@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-4 md:space-y-10 md:mt-28">
        <h4 className="text-3xl md:text-4xl font-semibold text-center">
          I have got what you need.{" "}
          <span className="decoration-[#F7AB0A] underline">Lets Talk</span>
        </h4>

        <div className="space-y-4 md:space-y-8">
          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">+91 9049910616</p>
          </div>

          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">Mumbai, India</p>
          </div>

          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">pratikpatil0884@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
