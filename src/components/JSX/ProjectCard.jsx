import { Github } from "lucide-react";
import { TextAnimate } from "../TextAnimate";
import { BlurFade } from "../../components/ui/blur-fade.tsx";

const ProjectCard = ({
  prodName,
  imageSrc,
  videoSrc,
  altText,
  shortDescription,
  prodIcon,
  prodLink,
  prodLiveLink,
  tools,
  dataOfCompletion,
  projectDomain,
  descriptions = [],
}) => (
  <div className="flex flex-col lg:flex-row justify-center gap-10">
    <section className="lg:w-1/2">
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline=""
          className="rounded-3xl"
        ></video>
      )}
      {!videoSrc && (
        <img
          src={imageSrc}
          alt={altText}
          width="500"
          height="300"
          className="size-full min-h-[260px] max-h-[300px] rounded-3xl object-cover"
        />
      )}
    </section>
    <section className="flex gap-4 pt-3 lg:w-1/2">
      <div className="hidden md:block">
        <h2 className="text-3xl lg:text-4xl">{prodIcon || "🎉"}</h2>
      </div>
      <div className="space-y-4 lg:space-y-8">
        <div className="space-y-4">
          <h3 className="text-3xl lg:text-4xl font-bold">
            {prodName}{" "}
            {projectDomain ? (
              <span className="lg:text-3xl text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">{` - ${projectDomain}`}</span>
            ) : (
              ""
            )}
          </h3>
          <p className="font-bold">{shortDescription}</p>
          <ul className="space-y-4">
            {descriptions.map((desc, index) => (
              <li
                className="text-sm text-muted-foreground flex flex-row items-center m-0"
                key={desc + index}
              >
                <BlurFade inView direction="left">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 size-4 translate-x-0 opacity-100 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    <path
                      d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </BlurFade>
                <BlurFade
                  inView
                  animation="fadeIn"
                  by="line"
                  as="p"
                  delay={index / 10}
                  className="text-left max-w-xl text-lg leading-relaxed"
                >
                  {/* <span>✨</span> */}
                  {`${desc}`}
                </BlurFade>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <div
                key={tool + index}
                className="inline-flex items-center rounded-md border font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground hover:opacity-90 transition-opacity px-4 py-2 text-xs"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 pt-4">
          {prodLiveLink && (
            <a target="_blank" href={prodLiveLink}>
              <button className="hover:border-red-500 border-1 border-transparent cursor-none inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full lg:w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  Live Demo
                </span>
              </button>
            </a>
          )}
          <a href={prodLink}>
            <button className="hover:border-red-500 inline-flex cursor-none items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full lg:w-fit">
              <Github size={14} />
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                View Code
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default ProjectCard;
