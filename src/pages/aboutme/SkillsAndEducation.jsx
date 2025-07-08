// components/SkillsAndEducation.jsx
import React from "react";
import { GraduationCap, Code2, Wrench, Hammer, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const skills = {
    "Frontend": ["React", "Flutter", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Node.js", "Django", "Express.js"],
    "Languages": ["JavaScript", "Python", "Java", "Dart"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Postman", "MongoDB"]
};

const education = [
    {
        degree: "B.E in Computer Science and Engineering",
        institution: "Sri Shakthi Istitution of Engineering and Technology, Coimbatore",
        year: "2022 - 2026",
        score: "8.0 CGPA (Till 5th Sem)"
    },
    {
        degree: "Higher Secondary (HSC)",
        institution: "Orison Academy - CBSE, Coimbatore",
        year: "2020 - 2022",
        score: "89%"
    },
    {
        degree: "SSLC",
        institution: "Vivek Vidya Mandir - CBSE, Coimbatore",
        year: "2019 - 2020",
        score: "91%"
    }
];

const SkillsAndEducation = () => {
    return (
        <section className="relative bg-gradient-to-b from-black via-[#0d0d0d] to-gray-900 text-white py-24 px-6 md:px-24 overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* Skills Section */}
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                        <Wrench className="text-violet-400" size={32} />
                        My Tech <span className="gradient-text">Arsenal</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(skills).map(([category, items], i) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-violet-500/30 transition"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-violet-300 flex items-center gap-2">
                                    <Sparkles className="text-violet-500" size={20} />
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2 text-sm text-white">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-violet-700/20 border border-violet-500/20 px-3 py-1 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                        <GraduationCap className="text-pink-400" size={32} />
                        My <span className="gradient-text">Academic</span> Journey
                    </h2>
                    <div className="relative pl-6 border-l-2 border-pink-500 space-y-10">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="ml-4 relative"
                            >
                                <span className="absolute -left-[15px] top-2 h-3 w-3 rounded-full bg-pink-400 border border-white"></span>
                                <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md shadow-md hover:shadow-pink-500/30 transition">
                                    <h3 className="text-2xl font-semibold text-white mb-1">{edu.degree}</h3>
                                    <p className="text-gray-300">{edu.institution}</p>
                                    <p className="text-gray-400 text-sm">{edu.year}</p>
                                    <p className="text-pink-300 font-medium mt-2">{edu.score}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Optional soft noise effect */}
            <img
                src="https://github.com/Navin82005/TempRepo/blob/main/noise.png?raw=true"
                alt="noise"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.03] mix-blend-soft-light z-0 pointer-events-none"
            />
        </section>
    );
};

export default SkillsAndEducation;
