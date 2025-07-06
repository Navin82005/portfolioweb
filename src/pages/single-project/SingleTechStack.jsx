import { Laptop2, Server, Database, Code2 } from "lucide-react";

const iconMap = {
    frontend: <Laptop2 className="text-pink-500" />,
    backend: <Server className="text-blue-500" />,
    storage: <Database className="text-green-500" />,
    language: <Code2 className="text-yellow-500" />,
    framework: <Code2 className="text-purple-500" />,
};

const TechStack = ({ stack }) => (
    <section className="py-8 px-4 md:py-16 md:px-12">
        <h2 className="text-center text-3xl font-extrabold mb-8"><span className="gradient-text">Technology</span> Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {Object.entries(stack).map(([key, value]) => (
                <div
                    key={key}
                    className="flex group items-start gap-4 p-4 border border-zinc-700 bg-zinc-800/60 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                    <div className="text-xl group-hover:scale-120 duration-300">{iconMap[key] || <Code2 className="text-neutral-400" />}</div>
                    <div>
                        <p className="text-base font-semibold capitalize text-white">{key}</p>
                        <p className="text-sm text-zinc-400">{value}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default TechStack;
