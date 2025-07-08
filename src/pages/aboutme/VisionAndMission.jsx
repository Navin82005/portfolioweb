import { Eye, Target } from "lucide-react";

const VisionAndMission = () => {
    // bg-gradient-to-br from-[#1e1e1e] via-black to-[#0f0f0f]
    return (
        <section className="relative text-white py-20 px-6 md:px-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
                    My <span className="gradient-text">Vision</span> & <span className="gradient-text">Mission</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 text-left">
                    {/* Vision */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-violet-500/20 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <Eye className="text-violet-400" size={28} />
                            <h3 className="text-2xl font-semibold">Vision</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            To become a leading innovator in software development by building products that improve lives,
                            inspire creativity, and push the boundaries of what technology can do.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-pink-500/20 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="text-pink-400" size={28} />
                            <h3 className="text-2xl font-semibold">Mission</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            To continuously learn, grow, and create intuitive digital solutions that solve real-world problems.
                            I aim to contribute to open-source communities, collaborate with talented minds, and leave a meaningful impact through code.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionAndMission;
