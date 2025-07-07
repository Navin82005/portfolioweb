import { Link } from 'react-router-dom';
import { Sparkles, Bot, ArrowRight } from 'lucide-react';

const MeChatSection = () => {
    return (
        <section className="relative w-full bg-black py-20 px-4 text-white overflow-hidden">
            {/* Background Sparkle Visual */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
                    Meet <span className="text-violet-400">MeChat</span> — My Personal AI Sidekick
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
                    Talk to an AI that knows everything about <span className="font-semibold text-white">Me.</span><br />
                    Ask about my projects, skills, and journey. It's like having him right there with you!
                </p>

                {/* MeChat Card */}
                <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl transition hover:shadow-2xl hover:scale-105 duration-300">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="p-4 bg-violet-600 rounded-full text-white animate-pulse">
                            <Bot size={32} />
                        </div>
                        <div className="text-left">
                            <h3 className="text-2xl font-semibold mb-1">Talk to MeChat</h3>
                            <p className="text-sm text-gray-400">
                                Ask anything about Me. — Projects, Stack, you name it.
                            </p>
                        </div>
                        <Link
                            to="/mechat"
                            className="ml-auto cursor-none mt-4 sm:mt-0 inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-5 py-2 rounded-lg transition-all shadow-lg"
                        >
                            Start Chatting
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Bottom note */}
                <div className="mt-10 flex justify-center items-center gap-2 text-sm text-gray-400">
                    <Sparkles className="animate-bounce" size={16} />
                    <span>Powered by MeChat — tailored just for Naveen N.</span>
                </div>
            </div>
        </section>
    );
};

export default MeChatSection;
