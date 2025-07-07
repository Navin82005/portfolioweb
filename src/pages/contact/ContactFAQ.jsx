const ContactFAQ = () => {
    return (
        <section className="relative z-10 px-6 py-16 md:px-20 md:py-24 bg-background text-white">
            {/* Optional glowing background */}
            {/* <div className="absolute inset-0 -z-10 blur-2xl opacity-25 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500" /> */}

            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    🤔 Before You <span className="gradient-text">Reach Out</span>
                </h2>

                <ul className="space-y-6 text-lg text-gray-300">
                    <li className="border border-white/10 p-4 rounded-lg bg-white/5 backdrop-blur-lg hover:scale-[1.02] transition-all duration-300">
                        <span className="font-semibold text-white">⏳ Response Time:</span> I usually reply within <span className="text-pink-400">24–48 hours</span>.
                    </li>
                    <li className="border border-white/10 p-4 rounded-lg bg-white/5 backdrop-blur-lg hover:scale-[1.02] transition-all duration-300">
                        <span className="font-semibold text-white">🎯 Projects I Take:</span> Freelance dashboards, dev tools, portfolio builds, AI-powered apps & side project consulting.
                    </li>
                    <li className="border border-white/10 p-4 rounded-lg bg-white/5 backdrop-blur-lg hover:scale-[1.02] transition-all duration-300">
                        <span className="font-semibold text-white">📅 Availability:</span> Currently accepting <span className="text-green-400">part-time freelance/contract work</span>.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ContactFAQ;
