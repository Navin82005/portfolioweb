import { Book, FlaskConical, Hourglass, Rocket } from "lucide-react";
import { CanvasRevealEffectProp } from "./CanvasReveleCard";
import TerminalRevel from "./TerminalRevel";

const showcaseData = [
  {
    icon: <Rocket />,
    title: "Building",
    command: "build --active-projects",
    items: [
      {
        context:
          "A personalized 3D portfolio experience using Three.js and custom GLSL shaders",
        status: true,
      },
      {
        context:
          "A developer recommendation chatbot powered by Mistral 7B on a Flask backend",
        status: true,
      },
      {
        context:
          "A full-stack event management app with real-time messaging and role-based flows",
        status: false,
      },
    ],
  },
  {
    icon: <Book />,
    title: "Learning",
    command: "learn --topics",
    items: [
      {
        context: "Advanced animation techniques in Framer Motion v11",
        status: true,
      },
      {
        context: "Qdrant for vector search & semantic developer matching",
        status: false,
      },
      {
        context: "Designing better UX for command-line style web interfaces",
        status: false,
      },
    ],
  },
  {
    icon: <FlaskConical />,
    title: "Experiments",
    command: "exp --run-lab",
    items: [
      {
        context:
          "Integrating whisper-based speech-to-text for interactive apps",
        status: true,
      },
      {
        context: "Building CLI-like experiences with React + Tailwind",
        status: false,
      },
      {
        context:
          "Exploring Flutter's new animation API for smoother mobile transitions",
        status: false,
      },
    ],
  },
  {
    icon: <Hourglass />,
    title: "In the pipeline",
    command: "todo --next-up",
    items: [
      {
        context: "Launching a micro SaaS tool for freelance time tracking",
        status: true,
      },
      {
        context:
          "Writing a blog series on building scalable personal projects as a student",
        status: true,
      },
    ],
  },
];

const CurrentProgress = () => (
  <div className="current-progress-showcase font-sans px-6 md:px-12 lg:px-24 py-8">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-5">
      What I'm Exploring Right Now
    </h1>
    {/* <div className="showcase-sections grid grid-cols-1 md:grid-cols-2 gap-1">
      {showcaseData.map((sectionInfo) => (
        <div
          className="showcase-section text-white relative text-start z-20"
          key={sectionInfo.title}
        >
          <h3 className="text-2xl mb-3">
            <span className="icon text-white inline-block">
              {sectionInfo.icon}
            </span>{" "}
            {sectionInfo.title}
          </h3>
          <ul>
            {sectionInfo.items.map((item, idx) => (
              <li key={idx}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 translate-x-0 inline-block transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                >
                  <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div> */}
    <div className="showcase-sections grid grid-cols-1 md:grid-cols-2 gap-5">
      {showcaseData.map((sectionInfo, idx) => (
        <TerminalRevel section={sectionInfo} key={sectionInfo.title + idx} />
      ))}
    </div>
  </div>
);

export default CurrentProgress;
