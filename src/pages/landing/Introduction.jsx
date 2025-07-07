import { Fragment, useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { AuroraText } from "@/components/ui/aurora-text.tsx";

import promo from "../../assets/video/introduction-promo.mp4";
import resume from "../../assets/documents/714022104095_NAVEEN N.pdf";
import introFilter from "../../assets/images/intro-filter.png";

import "./Introduction.css";

const Introduction = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.querySelector(".intro-video");
        video.onloadeddata = () => {
            setIsVideoLoaded(true);
        };
    }, []);

    return (
        <Fragment>
            <section className="intro-section" id="home">
                {!isVideoLoaded && (
                    <div className="loader-container">
                        <BarLoader color="#ff4655" />
                    </div>
                )}

                <video
                    className={`intro-video ${isVideoLoaded ? "loaded" : ""}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={promo} type="video/mp4" />
                </video>

                <img src={introFilter} alt="" className="over-video-left-corner" />

                <div className="over-video">
                    <h1 className="text-4xl font-bold tracking-tighter font-naveen md:text-5xl lg:text-7xl">
                        Naveen N
                        <AuroraText>

                        </AuroraText>
                    </h1>
                    <p>
                        Crafting my story with each step, embracing the extraordinary in the
                        ordinary.
                    </p>

                    <a href={resume} download className="mt-8 cursor-none">
                        <button
                            className="cursor-none relative px-8 py-3 ml-4 overflow-hidden font-semibold rounded-lg bg-gray-800 text-gray-50 hover:bg-gray-800 group"
                        >
                            <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-nowrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-600">
                                New
                            </span>
                            <span className="relative flex items-center gap-2">
                                <span>Download</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-y-0.5"
                                >
                                    <path
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </button>
                    </a>
                </div>
            </section>
        </Fragment>
    );
};

export default Introduction;
