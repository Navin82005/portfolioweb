import React, { useEffect, useState } from 'react'
import ProjectShowCard from './ProjectShowCard';
import { getProjects } from '../../controllers/project.controller.mjs';
import { Toaster } from 'react-hot-toast';

const RandomName = [
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Dock</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Vault</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Archive</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>CodeBase</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Atlas</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Shipyard</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Workshop</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Lab</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Projectarium</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Codefolio</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Logs</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Launchpad</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Grid</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Catalog</span></h1>,
    <h1 className='text-4xl font-bold text-center'>Project <span className='gradient-text'>Quest</span></h1>
];


const ProjectShowcase = () => {
    const [randomTitle, setRandomTitle] = useState("All Projects");

    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * RandomName.length);
        setRandomTitle(RandomName[randomIndex]);

        setProjectData(getProjects());
    }, []);


    return (
        <section className="relative flagship-project md:py-20 py-10 px-4 md:px-8 lg:px-16 xl:px-24">
            {randomTitle}
            <h4 className='text-center font-bold mt-5'><span className='gradient-text'>Explore</span> a collection of ideas turned into impact <span className='italic'> — where code meets creativity.</span></h4>
            <div className='mt-8 flex flex-row flex-wrap justify-center'>
                {projectData.map((project, idx) => {
                    return <ProjectShowCard className="mx-2 mb-8" project={project} key={project.project} />
                })}
            </div>
            <Toaster position="bottom-center" />
        </section>
    )
}

export default ProjectShowcase;