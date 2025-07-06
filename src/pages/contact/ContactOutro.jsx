import React from 'react'

const ContactOutro = () => {
    return (
        <section className="text-center py-20 px-8 md:px-0">
            <div className="text-center relative z-10 flex flex-col items-center justify-center h-full">
                <p className="text-lg text-white italic">
                    Even if it's just to share a cool open-source repo or a random dev meme
                    <span className="gradient-text">— my inbox</span> is always open 👋
                </p>
                <div className='italic text-lg gradient-text'><a href='mailto:navin82005@gmail.com' className='hover:underline cursor-none'>navin82005@gmail.com</a> | <a href='tel:+91 98944 15673' className='hover:underline cursor-none'>+91 98944 15673</a></div>
            </div>
        </section>
    )
}

export default ContactOutro