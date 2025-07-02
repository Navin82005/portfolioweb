import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { BarLoader } from 'react-spinners';

import './Introduction.css';
import promo from "../../assets/video/introduction-promo.mp4";
import resume from "../../assets/documents/Naveen Reaume.pdf";
import introFilter from "../../assets/images/intro-filter.png";

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
                    className={`intro-video ${isVideoLoaded ? 'loaded' : ''}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={promo} type="video/mp4" />
                </video>
                <img src={introFilter} alt="" className="over-video-left-corner" />
                <div className="over-video">
                    <h1>Naveen</h1>
                    <p>Crafting my story with each step, embracing the extraordinary in the ordinary.</p>

                    <a href={resume} download={resume} className="button cursor-none">
                        <span className="button_lg">
                            <span className="button_sl"></span>
                            <span className="button_text">Download Resume &nbsp;&nbsp;<FontAwesomeIcon icon={faFileArrowDown} /></span>
                        </span>
                    </a>
                </div>
            </section>
        </Fragment>
    );
};

export default Introduction;
