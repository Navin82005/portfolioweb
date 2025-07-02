import { MorphingText } from "../../../components/MorphText.tsx";

const texts = [
  "Web Developer",
  "FullStack Engineer",
  "Software Engineer",
  "MobileApp Engineer",
  "Tech Enthusiast",
  "Problem Solver",
  "Creative Coder",
];

export const MorphingTextSkills = ({ className }) => {
  return <MorphingText className={"block " + className} texts={texts} />;
};
