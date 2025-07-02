import React from 'react'
import ContactHero from './ContactHero'

import { Pointer } from "@/components/Pointer.tsx";
import ContactAnimatedBeam from './ContactAnimatedBeam';
import ContactWays from './ContactWays';
import ContactMap from './ContactMap';
import ContactOutro from './ContactOutro';
import ContactFAQ from './ContactFAQ';

const Contact = () => {
    return (
        <section className='pt-[80px]'>
            <ContactHero />
            {/* <section className="mt-16">
                <h2 className="text-2xl font-bold mb-4">Tech I'm Currently Working With</h2>
                <p className="text-muted-foreground mb-4">Here’s my current freelance stack — if your project aligns, we’re halfway there.</p>
                <div className="flex flex-wrap gap-3">
                    {["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Firebase", "Flutter", "Django"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
            </section> */}
            <ContactMap />
            <ContactFAQ />
            <ContactWays />
            <ContactOutro />
            <Pointer className="fill-[#7808d0]" />
        </section>
    )
}

export default Contact