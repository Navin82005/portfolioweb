import { Fragment } from 'react'
import ProjectHero from './ProjectHero'
import FlagshipProject from './FlagshipProject'
import ProjectShowcase from './ProjectShowcase'

import { ArrowPointer, CirclePointer } from "../../components/Pointers";

const Project = () => {
    return (
        <section>
            <ProjectHero />
            <FlagshipProject />
            <ProjectShowcase />

            <CirclePointer />
        </section>
    )
}

export default Project