import { useState } from "react"
import ImageWithLoader from "../../components/ImageWithLoader";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SingleHero = ({ projectHero, heroAlt, projectName, tagline, projectLive }) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigator = useNavigate();

    return (
        <section className='h-screen relative overflow-hidden bg-black text-white flex items-center justify-center'>
            <article className="container max-w-2xl pb-14">
                <div className='pt-[80px] relative overflow-hidden bg-black text-white flex items-center justify-start'>
                    <button className='flex group flex-row justify-center items-center font-semibold cursor-none' onClick={() => navigator(-1)}>
                        <ChevronLeft className="pl-3 group-hover:pl-0 transition-all duration-300" />
                        <div>Back</div>
                    </button>
                </div>
                <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter gradient-text">{projectName}</h2>
                <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">{tagline}</h3>
                <a className="group relative flex cursor-none flex-col gap-2 overflow-hidden" href={projectLive}>
                    <ImageWithLoader src={projectHero} alt={heroAlt} width="500" height="300" className="size-full max-h-[300px] rounded-xl object-cover" />
                    {projectLive === undefined ? <div></div> :
                        <div className="flex flex-col">
                            <div className="group inline-flex cursor-none items-center justify-start gap-1 text-xl font-semibold text-neutral-700 duration-200 hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-200">
                                {projectLive}
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                    <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                    }
                </a>
            </article>
        </section>
    )
}

export default SingleHero