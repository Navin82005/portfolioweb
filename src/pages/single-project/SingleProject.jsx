import React, { Fragment, useEffect, useState } from 'react'
import { getProjectData } from '../../controllers/project.controller.mjs';
import SingleHero from './SingleHero';
import { ArrowPointer } from '../../components/Pointers';
import { edumatricespro } from '../../assets/project/projects.mjs';
import AnalyticsImage from './SingleAnalyticsImage';
import ContactSection from './SingleContactSection';
import FeatureList from './SingleFeatures';
import FileStructureList from './SingleFileStructure';
import GameplayInstructions from './SingleGameplayInstructions';
import InstallationGuide from './SingleInstallationGuide';
import LicenseSection from './SingleLicenseSection';
import ResourceLinks from './SingleResourceLinks';
import Role from './SingleRole';
import ScreenshotGallery from './SingleScreenshotGallery';
import TechStack from './SingleTechStack';
import ProjectDescription from './SingleProjectDescription';
import { useParams } from 'react-router-dom';

const SingleProject = () => {
    const [projectData, setProjectData] = useState({});
    const [loadingProject, setLoadingProject] = useState(true);

    const { projectName } = useParams();

    useEffect(() => {
        setLoadingProject(true);
        const loadProjectData = async () => {
            const response = await getProjectData(projectName);

            if (!response.error) {
                setProjectData(response.data)
            }
            console.log("response.data", response.data)
            setLoadingProject(false);
        }
        loadProjectData();

    }, []);

    return (
        <section className='cursor-none'>

            {loadingProject ? <></> : (
                <Fragment>
                    <SingleHero projectHero={projectData.heroSrc} projectName={projectData.name} tagline={projectData.tagline} heroAlt={projectData.heroAlt} projectLive={projectData.liveLink} />
                    <ProjectDescription shortDescription={projectData.shortDescription} description={projectData.description} />
                    <FeatureList features={projectData.features} />
                    <Role roles={projectData.roles} />
                    <TechStack stack={projectData.techStack} />
                    <GameplayInstructions projectData={projectData.gameplayInstructions} />
                    <FileStructureList elements={projectData.fileStructure} mainDocument={projectData.mainDocument} />
                    <InstallationGuide
                        steps={
                            projectData.installation ||
                            (projectData.usage ? Object.values(projectData.usage) : [])
                        }
                    />

                    <ScreenshotGallery images={projectData.screenshots} />
                    <ResourceLinks frontend={projectData.resources?.frontendRepo} backend={projectData.resources?.backendRepo} />
                    {/* <AnalyticsImage src={projectData.analytics} /> */}
                </Fragment>
            )}
            <ArrowPointer />
        </section>
    )
}

export default SingleProject