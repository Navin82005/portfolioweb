import React, { useState } from 'react'
import ContactAnimatedBeam from './ContactAnimatedBeam'

const MainForm = () => {
    return <form>
        <div className='flex flex-col gap-4'>
            <input type="text" placeholder="Your Name" className='cursor-none p-2 border border-gray-300 rounded' />
            <input type="email" placeholder="Your Email" className='cursor-none p-2 border border-gray-300 rounded' />
            <textarea placeholder="Write What You Think . . ." className='cursor-none p-2 border border-gray-300 rounded' rows="4"></textarea>
            <button type="submit" className='cursor-none bg-blue-500 text-white p-2 rounded'>Send Message</button>
        </div>
    </form>
}

const IncognitoForm = () => {
    return <form>
        <div className='flex flex-col gap-4'>
            <textarea placeholder="Guess You Dare to Write Shit About Me? . . ." className='cursor-none p-2 border border-gray-300 rounded' rows="4"></textarea>
            <button type="submit" className='cursor-none bg-blue-500 text-white p-2 rounded gradient-text border-2 transition-all duration-300 font-bold border-transparent hover:border-red-500'>Send if You are Gay</button>
        </div>
    </form>
}

const ContactHero = () => {
    const [isIncognito, setIsIncognito] = useState(false);
    const handleIncognitoTrigger = () => {
        setIsIncognito(!isIncognito);
    }
    return (
        <div className='flex flex-col justify-center items-center md:text-end px-10 py-5 md:flex-row md:px-20 md:py-20 h-[500px]'>
            <div className='min-w-full md:min-w-1/2 md:pr-12'>
                <h2 className='text-3xl font-bold gradient-text'>
                    Contact me
                </h2>
                <p className='text-lg'>
                    If you have any questions, suggestions, or just want to say hello, feel free to reach out. I would love to hear from you!
                </p>
            </div>
            <div className='mt-12 md:mt-0 min-w-full md:min-w-1/2'>
                <h3 onDoubleClick={handleIncognitoTrigger} className="text-2xl transition-all duration-300 text-start font-semibold mb-4">
                    {isIncognito ? (
                        "Want to Scold me, huh? 😖"
                    ) : (
                        <>
                            Please Be <span className="gradient-text">Polite </span>😀
                        </>
                    )}
                </h3>

                {!isIncognito ? MainForm() : IncognitoForm()}
            </div>
        </div>
    )
}

export default ContactHero