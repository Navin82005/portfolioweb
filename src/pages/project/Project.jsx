import { Fragment } from 'react'
import ProjectHero from './ProjectHero'
import FlagshipProject from './FlagshipProject'

import { Pointer } from '@/components/Pointer.tsx'

const Project = () => {
    return (
        <section>
            <ProjectHero />
            <FlagshipProject />

            <Pointer>
                <svg
                    className="relative top-[-50%] left-[-50%] translate-y-[-50%] animate-pulse"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="12" cy="12" r="10" className="fill-purple-500" />
                    <circle cx="12" cy="12" r="5" className="fill-white" />
                </svg>
            </Pointer>
        </section>
    )
}

export default Project