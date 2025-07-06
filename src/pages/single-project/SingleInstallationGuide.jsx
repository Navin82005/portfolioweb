import { ClipboardCheck, TerminalSquare } from "lucide-react";
import { useState } from "react";

const InstallationGuide = ({ steps }) => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const copyStep = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    if (!steps || steps.length === 0) return null;

    return (
        <section className="py-8 px-4 md:py-16 md:px-12 ">
            <h2 className="text-3xl font-extrabold text-center mb-6 gradient-text">
                Installation Guide
            </h2>
            <ol className="space-y-4 max-w-3xl mx-auto">
                {steps.map((step, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-3 bg-zinc-900/60 border border-zinc-700 rounded-xl px-5 py-4 hover:shadow transition"
                    >
                        <TerminalSquare className="text-green-400 mt-1" size={22} />
                        <div className="flex-1 text-sm md:text-base text-zinc-100">{step}</div>
                        <button
                            onClick={() => copyStep(step, index)}
                            className="cursor-none text-xs text-blue-400 hover:text-blue-300 transition"
                            title="Copy to clipboard"
                        >
                            <ClipboardCheck className={`w-5 h-5 ${copiedIndex === index ? "text-green-400" : ""}`} />
                        </button>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default InstallationGuide;
