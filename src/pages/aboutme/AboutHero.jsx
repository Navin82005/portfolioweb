import React from "react";
import { Sparkles } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="bg-black text-white pt-[140px] pb-20 px-6 md:px-20">
            <div className="max-w-5xl mx-auto text-center">
                <div className="mb-6 inline-flex items-center gap-2 text-pink-500">
                    <Sparkles size={24} />
                    <span className="uppercase tracking-widest font-semibold">About Me</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Hey, I’m <span className="gradient-text">Naveen N.</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                    A passionate Full Stack Developer crafting intuitive digital experiences.
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
                    I love transforming ideas into real-world products. Whether it’s building powerful backend services or crafting polished frontends, I’m all about solving problems and delivering clean, maintainable code.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;
