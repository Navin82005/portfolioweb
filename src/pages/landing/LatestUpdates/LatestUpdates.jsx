import { LatestProjects } from "../../../assets/documents/config";
import ProjectCard from "../../../components/JSX/ProjectCard";

const LatestUpdates = () => {
  return (
    <section className="latest-updates container px-[4vw] py-8 md:py-16 lg:py-24">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
          Latest Projects
        </h2>
        <a
          aria-label="See all projects"
          href="/projects"
          className="self-start md:self-auto"
        >
          <button className="inline-flex items-center cursor-none justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-0.5">
            All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-external-link size-4"
            >
              <path d="M15 3h6v6"></path>
              <path d="M10 14 21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </button>
        </a>
      </div>
      <div className="flex flex-col gap-16 md:gap-20 lg:gap-28">
        {LatestProjects.map((project) => (
          <ProjectCard
            videoSrc={project.videoSrc}
            prodName={project.projectName}
            imageSrc={project.imgUrl}
            altText={project.projectName}
            shortDescription={project.projectShortDescription}
            prodLink={project.projectLink}
            prodIcon={project.prodIcon}
            tools={project.tools}
            dataOfCompletion={project.dataOfCompletion}
            projectDomain={project.projectDomain}
            key={project.index}
            descriptions={project.descriptions}
            prodLiveLink={project.prodLiveLink}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestUpdates;
