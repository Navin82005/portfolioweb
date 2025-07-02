import React, { useEffect, useState } from 'react'
import { BarLoader } from 'react-spinners';


import promo from "@/assets/video/project-showreel.mp4";
import { Pointer } from '@/components/Pointer.tsx';

const ProjectHero = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.querySelector("#project-promo");
        video.onloadeddata = () => {
            setIsVideoLoaded(true);
        };
    }, []);

    return (
        <section className="pt-[80px] h-screen relative overflow-hidden bg-black text-white flex items-center justify-center">
            {!isVideoLoaded && (
                <div className="loader-container">
                    <BarLoader color="#7808d0" className='md:w-500 md:h-10' />
                </div>
            )}
            <video
                className={`object-cover w-full h-screen ${isVideoLoaded ? 'opacity-50' : 'opacity-0'}`}
                autoPlay
                muted
                loop
                playsInline
                id='project-promo'
            >
                <source src={promo} type="video/mp4" />
            </video>
            <div className="absolute flex flex-col items-center justify-center text-white z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight">
                    I Don’t Just Build Projects — <span className='gradient-text'>I Solve Real Problems.</span>
                </h1>
                <p className="mt-4 px-2 text-lg text-center max-w-2xl mx-auto">
                    Every line of code here has purpose. Each project is a step toward better experiences, smarter tools, and ideas brought to life. Whether it's a simple app or a complex system, my focus remains the same: <span className='gradient-text'>solve meaningfully, ship intentionally.</span>
                </p>
            </div>
        </section>
    )
}

export default ProjectHero;