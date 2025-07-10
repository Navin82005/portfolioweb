import GitHubSnake from "../../components/GitHubSnake/GitHubSnake";
import { ArrowPointer } from "../../components/Pointers";
import AboutHero from "./AboutHero";
import AboutNavya from "./AboutNavya";
import CodingAspects from "./CodingAspects";
import SkillsAndEducation from "./SkillsAndEducation";
import VisionAndMission from "./VisionAndMission";

const AboutMe = () => {

    return <div>
        <AboutHero />
        <VisionAndMission />
        {/* <CodingAspects /> */}
        {/* <GitHubSnake /> */}
        <SkillsAndEducation />
        <AboutNavya />
        <ArrowPointer />
    </div>
}

export default AboutMe;