import axios from "axios";

import { edumatricespro, spaceshooter } from "../assets/project/projects.mjs";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const getProjects = () => {
    const data = [
        {
            imgSrc: "https://github.com/Navin82005/edumetricspro/blob/main/LinkedIn%20Post%201.png?raw=true",
            alt: "Flagship Project EduMatrics",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "EduMatrics",
            projectShortDescription: "A classroom manager mobile application",
            tagline: "Manage classrooms effortlessly"
        },
        {
            imgSrc: "https://github.com/Navin82005/Space-Shoter/blob/main/space-shooter-thumbnail.jpeg?raw=true",
            alt: "Flagship Project SpaceShooter",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "SpaceShooter",
            projectShortDescription: "A game in which the user destroys enemy ships",
            tagline: "Blast enemies in space"
        },
        {
            imgSrc: "https://github.com/Navin82005/Notes-Sharing-Platform/blob/main/outputs/NoteHubThumbnail.png?raw=true",
            alt: "Flagship Project Note Hub",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "Note Hub",
            projectShortDescription: "A Application where the users can share their subject notes to the platform and share to others",
            tagline: "Notes, shared and smart"
        },
        {
            imgSrc: "https://github.com/Navin82005/Webtoon-Explorer-App/blob/main/out/ToonGalaThumbnail.png?raw=true",
            alt: "Flagship Project Toon Gaala",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "Toon Gaala",
            projectShortDescription: "A Flutter-based app to explore, read, and save your favorite Korean mangas locally with offline access and a clean, user-friendly interface.",
            tagline: "Read, save, repeat manga"
        },
        {
            imgSrc: "https://raw.githubusercontent.com/Navin82005/MedicinalPlants/main/output/landing-page.png",
            alt: "Flagship Project Medicinal Plants",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "Medicinal Plants",
            projectShortDescription: "A PHP-powered website offering a searchable and detailed database of herbal medicinal plants with clean UI and single-page descriptions.",
            tagline: "Nature’s remedies, organized"
        },
        {
            imgSrc: "https://github.com/Navin82005/TempRepo/blob/main/Falling%20Dogs/fallingdogslogo.png?raw=true",
            alt: "Flagship Project Falling Dogs",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "Falling Dogs",
            projectShortDescription: "A Unity-based arcade game where players control a cat to dodge falling dog faces and collect starfish coins in an infinite challenge.",
            tagline: "Dodge chaos, collect stars"
        }
    ];

    return data;
};

export const getProjectData = async (projectName) => {

    const endPoint = `${BACKEND_URL}/project/${projectName}`;
    const response = await axios.post(endPoint);

    console.log("response - getProjectData: ", response.data.documentData);

    const documentData = response.data.documentData;

    const data = {
        // heroSrc: "https://github.com/Navin82005/edumetricspro/blob/main/LinkedIn%20Post%201.png?raw=true",
        // heroAlt: "Flagship Project EduMatrics",
        // vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
        // name: "EduMatrics",
        // projectShortDescription: "A classroom manager mobile application",
        // tagline: "Manage classrooms effortlessly.",
        // liveLink: "http://localhost:5173/",
        // ...spaceshooter,
        ...documentData,

        // ...edumatricespro,
    };

    try {
        return { data: data, error: false };
    } catch (err) {
        return { error: true, message: err };
    }
}