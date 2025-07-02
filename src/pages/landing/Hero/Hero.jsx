import Images from "../../../assets/images/Images";
import { TextAnimate } from "../../../components/TextAnimate";
import HoveringImageNaveen from "./HoveringImage";
import { MorphingTextSkills } from "./MorphingTextSkills";

const Hero = () => {
  return (
    <section className="hero font-sans grid grid-cols-1 md:grid-cols-2 items-center justify-between px-6 md:px-12 lg:px-24 py-8 gap-10 bg-background text-foreground transition-colors duration-300">
      <div className="hero-content-left w-full">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Hi, I'm Naveen N.{" "}
          <span className="gradient-text">
            A
          </span>
        </h1>

        <div className="my-5">
          <MorphingTextSkills className="h-16 text-start text-3xl md:text-5xl lg:text-6xl font-bold" />
        </div>

        <TextAnimate
          animation="fadeIn"
          by="line"
          as="p"
          className="text-left max-w-xl mt-4 text-lg leading-relaxed"
        >
          {
            "I craft scalable, high-performance applications that blend clean design\n\nwith seamless user experience. From mobile apps to full-stack web\n\nplatforms, I turn ideas into reality with code."
          }
        </TextAnimate>

        <div className="flex justify-start mt-6">
          <a
            href="#project-latest"
            className="cursor-none inline-block border-2 border-transparent hover:border-red-500 px-6 py-3 rounded-lg gradient-text font-medium transition-all duration-300"
          >
            🚀 Try a Mini Project Demo
          </a>
        </div>
      </div>

      <div className="hero-content-right w-full mt-10 md:mt-0">
        <HoveringImageNaveen />
      </div>
    </section>
  );
};

export default Hero;