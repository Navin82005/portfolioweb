import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const edumatricespro = {
    "name": "Edu Matrics Pro",
    "heroSrc": "https://github.com/Navin82005/edumetricspro/blob/main/LinkedIn%20Post%201.png?raw=true",
    "heroAlt": "Flagship Project EduMatrics",
    "tagline": "Institutional app for real-time student data tracking.",
    "shortDescription": "Edu Matrics Pro helps institutions manage student marks and attendance in real-time with tailored interfaces for students, staff, and admin.",
    "description": [
        "Edu Matrics Pro helps institutions manage student marks and attendance in real-time with tailored interfaces for students, staff, and admin."
    ],
    "features": [
        "Real-time Attendance Update",
        "Marks Display - internal and semester",
        "Timetable Management",
        "Staff Notifications"
    ],
    "roles": {
        "student": [
            "Login under their institution",
            "View marks and attendance",
            "Access timetables"
        ],
        "staff": [
            "Manage subject-wise attendance",
            "View timetable",
            "Receive class notifications"
        ],
        "admin": [
            "Institutional head access",
            "Manage and upload overall data",
            "Update all user information",
            "Grant staff access to student data"
        ]
    },
    "techStack": {
        "frontend": "Flutter",
        "backend": "Django"
    },
    "installation": [
        "Clone the frontend repo: git clone https://github.com/Navin82005/edumetricspro",
        "Clone the backend repo: git clone https://github.com/Navin82005/Edumatrics-backend",
        "Install Flutter dependencies: flutter pub get",
        "Run the Django backend server",
        "Run the Flutter app using flutter run"
    ],
    "resources": {
        "screenshots": [
            "https://github.com/Navin82005/edumetricspro/blob/main/LinkedIn%20Post%201.png"
        ],
        "frontendRepo": "https://github.com/Navin82005/edumetricspro",
        "backendRepo": "https://github.com/Navin82005/Edumatrics-backend"
    },
    "contact": {
        "email": "navin82005@gmail.com",
        "linkedin": "https://www.linkedin.com/in/naveenn82005"
    },
    "license": "MIT",
    "colorPalette": "https://coolors.co/?ref=6559c82241a7a6000bf5e09a",
};

export const spaceshooter = {
    "name": "Space Shooter Game",
    "tagline": "Arcade-style space shooter game",
    "heroSrc": "https://github.com/Navin82005/edumetricspro/blob/main/LinkedIn%20Post%201.png?raw=true",
    "heroAlt": "Flagship Project EduMatrics",
    "shortDescription": "A Python + Pygame arcade game where players control a spaceship, shoot enemies, and collect power-ups while chasing a high score.",
    "description": [
        "A Python + Pygame arcade game where players control a spaceship, shoot enemies, and collect power-ups while chasing a high score.",
        "Classic arcade action with modern polish and power-ups."
    ],
    "features": [
        "Spaceship Control using arrow keys",
        "Shooting with spacebar",
        "Enemies and collectible power-ups",
        "High score tracking across sessions"
    ],
    "techStack": {
        "language": "Python",
        "framework": "Pygame"
    },
    "requirements": [
        "Python 3.x",
        "Pygame"
    ],

    "gameplayInstructions": {
        "movement": "Use arrow keys (⬆️⬇️⬅️➡️)",
        "shooting": "Press spacebar",
        "powerUps": "Collect to boost abilities or gain lives"
    },
    "installation": [
        "Make sure Python 3.x is installed on your system",
        "Install Pygame: pip install pygame",
        "Clone the repository",
        "Navigate to the project folder",
        "Run the game: python main.py"
    ],
    "screenshots": [
        {
            title: "gameplay",
            src: "https://github.com/Navin82005/TempRepo/blob/main/SpaceShooter/fire-arm.jpg?raw=true",
        },
        {
            title: "powerups",
            src: "https://github.com/Navin82005/TempRepo/blob/main/SpaceShooter/buffer-life.jpg?raw=true",
        },
        {
            title: "gameEnd",
            src: "https://github.com/Navin82005/TempRepo/blob/main/SpaceShooter/game-end.jpg?raw=true"
        }
    ],
    "license": "MIT",
    "contact": {
        "email": "navin82005@gmail.com"
    }
};

export const notehub = {
    "name": "NoteHub",
    "tagline": "Collaborative note-sharing made simple.",
    "heroSrc": "https://github.com/Navin82005/edumetricspro/blob/main/LinkedIn%20Post%201.png?raw=true",
    "heroAlt": "Flagship Project EduMatrics",
    "shortDescription": "A Flutter-based mobile app enabling students to upload, browse, and interact with study notes, categorized by subjects and supported with offline access.",
    "description": [
        "NoteHub streamlines academic collaboration by allowing users to post, rate, and save quality study notes on the go."
    ],
    "features": [
        "User Authentication via email or social login",
        "Profile Customization with academic interests",
        "Upload notes in PDF, text, or image formats",
        "Advanced Search with filters by subject, date, or quality",
        "Upvote, downvote, and comment system",
        "Offline Access to downloaded notes",
        "Push Notifications for new uploads and engagement"
    ],
    "techStack": {
        "frontend": "Flutter",
        "backend": "Firebase (Authentication + Database)",
        "storage": "Cloud Storage"
    },
    "installation": {
        "steps": [
            "Clone the repo: git clone https://github.com/Navin82005/Notes-Sharing-Platform.git",
            "Navigate to the project: cd note_hub",
            "Install dependencies: flutter pub get",
            "Run the app: flutter run"
        ]
    },
    "screenshots": {
        "home": "outputs/home.jpg",
        "profile": "outputs/profile.jpg",
        "documentDetails": "outputs/document.jpg",
        "upload": "outputs/upload.jpg",
        "following": "outputs/following.jpg",
        "followers": "outputs/followers.jpg",
        "saved": "outputs/saved.jpg",
        "download": "outputs/download.jpg",
        "otherProfile": "outputs/other-profile.jpg"
    },
    "license": "MIT",
    "analytics": "https://repobeats.axiom.co/api/embed/2875c3c5aeb4338e0569f6d23203cb8794666edc.svg"
};

export const getProjects = () => {
    const data = [
        {
            imgSrc: "https://github.com/Navin82005/edumetricspro/blob/main/LinkedIn%20Post%201.png?raw=true",
            alt: "Flagship Project EduMatrics",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "EduMatrics",
            projectLink: "/project/edumetricspro",
            projectShortDescription: "A classroom manager mobile application",
            tagline: "Manage classrooms effortlessly"
        },
        {
            imgSrc: "https://github.com/Navin82005/Space-Shoter/blob/main/space-shooter-thumbnail.jpeg?raw=true",
            alt: "Flagship Project SpaceShooter",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "SpaceShooter",
            projectLink: "/project/Space-Shoter",
            projectShortDescription: "A game in which the user destroys enemy ships",
            tagline: "Blast enemies in space"
        },
        {
            imgSrc: "https://github.com/Navin82005/Notes-Sharing-Platform/blob/main/outputs/NoteHubThumbnail.png?raw=true",
            alt: "Flagship Project Note Hub",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "Note Hub",
            projectLink: "/project/Notes-Sharing-Platform",
            projectShortDescription: "A Application where the users can share their subject notes to the platform and share to others",
            tagline: "Notes, shared and smart"
        },
        {
            imgSrc: "https://github.com/Navin82005/Webtoon-Explorer-App/blob/main/out/ToonGalaThumbnail.png?raw=true",
            alt: "Flagship Project Toon Gaala",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "Toon Gaala",
            projectLink: "/project/Webtoon-Explorer-App",
            projectShortDescription: "A Flutter-based app to explore, read, and save your favorite Korean mangas locally with offline access and a clean, user-friendly interface.",
            tagline: "Read, save, repeat manga"
        },
        {
            imgSrc: "https://raw.githubusercontent.com/Navin82005/MedicinalPlants/main/output/landing-page.png",
            alt: "Flagship Project Medicinal Plants",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "Medicinal Plants",
            projectLink: "/project/MedicinalPlants",
            projectShortDescription: "A PHP-powered website offering a searchable and detailed database of herbal medicinal plants with clean UI and single-page descriptions.",
            tagline: "Nature’s remedies, organized"
        },
        {
            imgSrc: "https://github.com/Navin82005/TempRepo/blob/main/Falling%20Dogs/fallingdogslogo.png?raw=true",
            alt: "Flagship Project Falling Dogs",
            vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
            project: "Falling Dogs",
            projectLink: "/project/Falling-Blocks",
            projectShortDescription: "A Unity-based arcade game where players control a cat to dodge falling dog faces and collect starfish coins in an infinite challenge.",
            tagline: "Dodge chaos, collect stars"
        }
    ];

    return data;
};

export const getProjectData = async (projectName) => {

    const endPoint = `${BACKEND_URL}/project/${projectName}`;
    // const response = await axios.post(endPoint);

    // console.log("response - getProjectData: ", response.data.documentData);

    // const documentData = response.data.documentData;

    const data = {
        // heroSrc: "https://github.com/Navin82005/edumetricspro/blob/main/LinkedIn%20Post%201.png?raw=true",
        // heroAlt: "Flagship Project EduMatrics",
        // vidSrc: "https://cdn-front.freepik.com/revamp/temp/hero/v2-home-video.webm",
        // name: "EduMatrics",
        // projectShortDescription: "A classroom manager mobile application",
        // tagline: "Manage classrooms effortlessly.",
        // liveLink: "http://localhost:5173/",
        // ...spaceshooter,
        ...edumatricespro,
        // ...documentData,
    };

    try {
        return { data: data, error: false };
    } catch (err) {
        return { error: true, message: err };
    }
}

export const getFileStructure = async (projectName) => {
    const endPoint = `${BACKEND_URL}/project/${projectName}/structure`;
    try {
        const response = await axios.post(endPoint);

        if (response.data.error) {
            return { error: true, message: response.errormessage }
        }

        return { data: response.data }

    } catch (err) {
        return { error: true, message: err.message };
    }

}

export const getFileData = async (projectName, filepath) => {
    const endPoint = `${BACKEND_URL}/project/${projectName}/code`;
    try {
        const response = await axios.post(endPoint, { filepath: filepath });

        console.log("response - getFileData: ", response.data);

        if (response.data.error) {
            return { error: true, message: response.errormessage }
        }

        return response.data

    } catch (err) {
        return { error: true, message: err.message };
    }
}