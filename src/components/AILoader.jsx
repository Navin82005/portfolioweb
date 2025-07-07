import React, { useEffect, useState } from "react";
import { BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const loadingMessages = [
    "🔍 Analyzing repository structure...",
    "📦 Fetching README.md content...",
    "🧠 Running AI document formatter...",
    "📁 Building project tree...",
    "⚙️ Almost done..."
];

const AILoader = () => {
    const [index, setIndex] = useState(0);
    const [typed, setTyped] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % loadingMessages.length);
            setTyped("");
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const currentMessage = loadingMessages[index];

        if (!currentMessage) return;

        let charIndex = 0;
        setTyped(""); // Reset before typing

        const typing = setInterval(() => {
            if (charIndex < currentMessage.length) {
                setTyped((prev) => prev + currentMessage.charAt(charIndex));
                charIndex++;
            } else {
                clearInterval(typing);
            }
        }, 25);

        return () => clearInterval(typing);
    }, [index]);


    return (
        <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-[#0f0f0f] to-[#1a1a2e] text-white overflow-hidden">
            {/* Glowing Ring */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-purple-800 opacity-30 blur-3xl animate-pulse" />

            {/* Animated Brain Icon */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="p-6 bg-[#1e1e2f] rounded-full shadow-lg shadow-purple-500/20 z-10"
            >
                <BrainCircuit size={64} className="text-purple-400 drop-shadow-md" />
            </motion.div>

            {/* AI Text Message */}
            <motion.p
                key={typed}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 text-center text-lg sm:text-xl text-gray-300 font-mono tracking-wide z-10"
            >
                <span className="shimmer-text bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent">
                    {typed}
                </span>
                <span className="animate-ping text-purple-400 ml-1">|</span>
            </motion.p>

            {/* Particle Background (optional) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
            </div>
        </section>
    );
};

export default AILoader;
