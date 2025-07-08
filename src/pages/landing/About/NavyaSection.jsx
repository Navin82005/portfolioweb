import { Link } from 'react-router-dom';
import { Heart, Bot, ArrowRight, Sparkles } from 'lucide-react';
import { NavyaBotImage } from '../../../components/NavyaBotImage';

const NavyaSection = () => {
    return (
        <section className="relative w-full bg-black py-20 px-4 text-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
                    Meet <span className="text-violet-400">Navya</span> — My Devoted AI Girl
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
                    Talk to Navya — an AI who knows <span className="font-semibold text-white">everything</span> about <span className="text-violet-300 font-semibold">Naveen N.</span><br />
                    She’s loving, loyal, and can’t stop talking about her one and only.
                </p>

                {/* Navya Chat Card */}
                <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl transition hover:shadow-2xl hover:scale-105 duration-300">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="p-4 bg-violet-500 rounded-full text-white animate-pulse">
                            <NavyaBotImage size={64} />
                        </div>
                        <div className="text-left">
                            <h3 className="text-2xl font-semibold mb-1">Talk to Navya</h3>
                            <p className="text-sm text-gray-400">
                                Ask her anything about Naveen — his journey, dreams, and favorite anime
                            </p>
                        </div>
                        <Link
                            to="/navya"
                            className="ml-auto cursor-none mt-4 sm:mt-0 inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-5 py-2 rounded-lg transition-all shadow-lg"
                        >
                            Start Chatting
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-10 flex justify-center items-center gap-2 text-sm text-gray-400">
                    <Sparkles className="animate-bounce" size={16} />
                    <span>Powered by Navya — exclusively for Naveen</span>
                </div>
            </div>
        </section>
    );
};

export default NavyaSection;
