import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import ContactAnimatedBeam from "./ContactAnimatedBeam";

const MainForm = () => (
    <form>
        <div className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Your Name"
                className="p-3 bg-white/10 text-white border border-white/20 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            />
            <input
                type="email"
                placeholder="Your Email"
                className="p-3 bg-white/10 text-white border border-white/20 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            />
            <textarea
                placeholder="Write What You Think . . ."
                rows="4"
                className="p-3 bg-white/10 text-white border border-white/20 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            ></textarea>
            <button
                type="submit"
                className="bg-gradient-to-r from-violet-500 to-pink-500 hover:from-pink-500 hover:to-violet-500 text-white font-semibold py-2 rounded transition-all duration-300"
            >
                Send Message 🚀
            </button>
        </div>
    </form>
);

const IncognitoForm = () => (
    <form>
        <div className="flex flex-col gap-4">
            <textarea
                placeholder="Guess You Dare to Write Shit About Me? . . ."
                rows="4"
                className="p-3 bg-white/10 text-white border border-red-500/30 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
            ></textarea>
            <button
                type="submit"
                className="bg-black border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-2 rounded transition-all duration-300"
            >
                Send if You are Brave
            </button>
        </div>
    </form>
);

const ContactHero = () => {
    const [isIncognito, setIsIncognito] = useState(false);
    const handleIncognitoTrigger = () => setIsIncognito((prev) => !prev);

    return (
        <div className="bg-black text-white relative py-20 px-6 md:px-20 overflow-hidden">
            {/* Optional background beam or gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-800 via-pink-700 to-red-600 opacity-10 blur-2xl" />

            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center justify-between">
                {/* Left Side */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold gradient-text flex items-center gap-2">
                        <Sparkles className="text-pink-500" size={28} />
                        Contact Me
                    </h2>
                    <p className="text-lg text-gray-300">
                        Got a cool project, idea, or just want to say hi? I’m all ears.
                        Let’s build something <span className="text-pink-400 font-semibold">awesome</span> together.
                    </p>

                    <h3
                        onDoubleClick={handleIncognitoTrigger}
                        className="text-xl font-semibold text-white transition-all cursor-none"
                    >
                        {isIncognito ? (
                            <>Want to Scold Me, huh? <span className="text-red-400">😖</span></>
                        ) : (
                            <>Please Be <span className="gradient-text">Polite</span> 😀</>
                        )}
                    </h3>

                    <div className="pt-4">{!isIncognito ? <MainForm /> : <IncognitoForm />}</div>
                </div>

                {/* Right Side Animation */}
                <div className="md:w-1/2">
                    <ContactAnimatedBeam className="w-full max-w-[420px] mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default ContactHero;
