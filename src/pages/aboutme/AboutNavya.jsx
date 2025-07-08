import { Bot, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NavyaBotImage } from "../../components/NavyaBotImage";

const NavyaSection = () => {
    return (
        <section className="relative w-full bg-[#0d0d0d] py-20 px-6 text-white overflow-hidden">
            {/* Matching background visual glow */}
            <div className="absolute inset-0 -z-10 opacity-10 blur-2xl"></div>

            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                    Meet <span className="gradient-text">Navya</span> — My AI Sidekick
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
                    Navya isn't just a chatbot — she's an AI that knows my entire journey,
                    projects, and goals. Got a question about me? Let her answer it!
                </p>

                <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl transition hover:shadow-2xl hover:scale-105 duration-300">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="p-4 bg-violet-600 rounded-full text-white animate-pulse">
                            {/* <Bot size={32} /> */}
                            <NavyaBotImage size={64} />
                        </div>
                        <div className="text-left">
                            <h3 className="text-2xl font-semibold mb-1">Talk to Navya</h3>
                            <p className="text-sm text-gray-400">
                                Curious about my skills, stack, or what I’ve been up to? Navya has all the answers.
                            </p>
                        </div>
                        <Link
                            to="/navya"
                            className="ml-auto cursor-none mt-4 sm:mt-0 inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-5 py-2 rounded-lg transition-all shadow-lg"
                        >
                            Talk to Her <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavyaSection;
