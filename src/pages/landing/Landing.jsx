import { Pointer } from "../../components/Pointer";
import WorkWithMeCTA from "./CTASection/WorkWithMeCTA";
import CurrentProgress from "./CurrentProgress/CurrentProgress";
import DevLogs from "./DevLogs/DevLogs";
import Hero from "./Hero/Hero";
import Introduction from "./Introduction";
import LatestUpdates from "./LatestUpdates/LatestUpdates";
import Thoughts from "./OnMyMind/Thoughts";

const Landing = () => {
  return (
    <div className="landing-page">
      <Pointer className="fill-[#7808d0]" />
      <Introduction />
      <Hero />
      {/* <CurrentProgress /> */}
      <Thoughts />
      <LatestUpdates />
      <DevLogs />
      <WorkWithMeCTA />
    </div>
  );
};

export default Landing;
