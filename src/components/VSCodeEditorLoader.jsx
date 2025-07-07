// VSCodeEditorLoader.jsx
import { cn } from "../utils/aceternity";

const VSCodeEditorLoader = ({ className }) => {
    return (
        <div className={cn("h-[500px] rounded-md overflow-hidden border bg-[#1e1e1e] shadow-lg animate-pulse", className)}>
            {/* Top Bar with filename placeholder */}
            <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-2 text-white text-sm font-semibold">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="h-4 w-32 rounded-md bg-gray-600/60" />
                <div />
            </div>

            {/* Simulated Code Lines */}
            <div className="p-4 flex flex-col gap-2">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className={`h-3 rounded bg-gray-700/60 ${i % 4 === 0 ? "w-[60%]" : "w-full"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default VSCodeEditorLoader;
