import React, { useEffect, useState } from 'react';
import Like from './Like';
import { Pointer } from '../../components/Pointer';
import { FlagshipProjectsIntro } from '../../controllers/flagshipProjects.controller.mjs';

import Folders from "@/components/icons/folders.tsx";
import { Paperclip } from "@/components/icons/paperclip.tsx";
import { Bolt } from "@/components/icons/bolt.tsx";
import { Compass } from "@/components/icons/compass.tsx";
import { Code } from "@/components/icons/code.tsx";
import { BlurFade } from '../../components/ui/blur-fade';
import { useNavigate } from 'react-router-dom';


const FlagshipProject = () => {
    const [currentFlagProjectIndex, setCurrentFlagProject] = useState(1);

    const navigator = useNavigate();

    const randomDraw = () => {
        const rand = Math.floor(Math.random() * 3);
        setCurrentFlagProject(rand);
    };

    const handleClick = (index) => {
        setCurrentFlagProject(index);
    }

    useEffect(() => {
        randomDraw()
    }, []);

    return (
        <section className="relative flagship-project md:py-20 py-10 px-4 md:px-8 lg:px-16 xl:px-24">
            <h1 className="text-4xl font-bold text-center">
                <span className="gradient-text">Flagship</span> Projects
            </h1>

            <div className="relative flex flex-col items-center justify-between mt-8 overflow-hidden min-h-[400px]">
                {FlagshipProjectsIntro.map((project, idx) => {
                    return (
                        <div key={idx} className="my-4">
                            {currentFlagProjectIndex === idx ? (
                                <div>
                                    <BlurFade className='z-10 md:w-[600px] h-auto rounded-lg shadow-lg md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
                                        <video
                                            src={project.vidSrc}
                                            autoPlay
                                            muted
                                            loop
                                            onClick={() => navigator(project.projectLink)}
                                            className="z-10 w-[600px] h-auto rounded-lg shadow-lg md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 hover:scale-101 md:hover:scale-110 transition-all duration-300"
                                        />
                                    </BlurFade>
                                    <BlurFade className='md:hidden'>
                                        <div className='flex flex-row items-center justify-start mt-3' onClick={() => navigator(project.projectLink)}>
                                            <h1 className='text-3xl block font-bold gradient-text'>{project.project}</h1>
                                            <Code className="mt-auto" />
                                        </div>
                                        <p>{project.projectShortDescription}</p>
                                    </BlurFade>
                                </div>

                            ) : (
                                <BlurFade>
                                    <img
                                        src={project.imgSrc}
                                        alt={project.title || `Project ${idx + 1}`}
                                        style={{ ...project.style }}
                                        onClick={() => handleClick(idx)}
                                        width={project.subWidth}
                                        className="md:block hidden relative z-0 h-auto rounded-lg shadow-lg hover:scale-110 transition-all duration-300"
                                    />
                                </BlurFade>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Icons (hidden on smaller screens) */}
            <div className="absolute md:top-30 md:right-60 hidden lg:block md:hidden">
                <Folders />
            </div>
            <div className="absolute md:top-60 md:right-40 hidden lg:block md:hidden">
                <Compass />
            </div>
            <div className="absolute md:bottom-20 md:left-60 hidden lg:block md:hidden">
                <Paperclip />
            </div>
            <div className="absolute md:bottom-50 md:left-30 hidden lg:block md:hidden">
                <Bolt />
            </div>
        </section >
    );
};

export default FlagshipProject;
