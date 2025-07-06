import { useState } from "react";
import { cn } from "@/utils/aceternity.jsx";

import { BounceLoader } from 'react-spinners';
import { useNavigate } from "react-router-dom";

import { toast } from 'react-hot-toast';

const ProjectShowCard = ({ className, project }) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigator = useNavigate();

    const handleImageOnDoubleClick = (imageUrl) => {
        window.open(imageUrl, "_black");
    }

    const handleImageOnClick = (projectUri) => {
        navigator(projectUri);
    }

    const handleProjectCopyLink = (projectUri) => {
        const fullUrl = `${window.location.origin}/project/${projectUri}`;

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(fullUrl)
                .then(() => {
                    toast.success('Link copied to clipboard!');
                })
                .catch((err) => {
                    console.error("Copy failed:", err);
                    toast.error('Failed to copy link');
                });
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = fullUrl;
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                toast.success('Link copied (fallback)');
            } catch (err) {
                console.error("Fallback copy failed:", err);
                toast.error('Fallback copy failed');
            }
            document.body.removeChild(textArea);
        }
    };

    const handleOpenProject = (project) => {
        navigator(project);
    }

    return (
        <div className={cn("group w-90", className)}>
            <div className="h-70 w-90 overflow-hidden px-6 py-5 bg-accent rounded-lg hover:bg-transparent hover:gradient-bg duration-200 transition-all relative">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                        {/* <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div> */}
                        <BounceLoader color="#7808d0" />
                    </div>
                )}
                <img
                    onDoubleClick={() => handleImageOnDoubleClick(project.imgSrc)}
                    onClick={() => handleImageOnClick(project.project)}
                    src={project.imgSrc}
                    alt={project.alt || project.project}
                    onLoad={() => setIsLoading(false)}
                    className={cn(
                        "h-full w-full object-cover rounded-lg transition-all duration-200",
                        "hover:scale-102",
                        isLoading ? "opacity-0" : "opacity-100"
                    )}
                />
            </div>
            <div className="mt-2 text-xl font-bold flex flex-row items-center">
                <span onClick={() => handleOpenProject(project.project)}>
                    {project.project}
                </span>
                <svg
                    onClick={() => handleProjectCopyLink(project.project)}
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                >
                    <path
                        d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div onClick={() => handleOpenProject(project.project)} className="text-muted-foreground">{project.tagline}</div>
        </div>
    );
};

export default ProjectShowCard;
