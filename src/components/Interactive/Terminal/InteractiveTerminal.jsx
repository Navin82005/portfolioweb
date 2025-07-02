import { useEffect, useState } from "react";
import { ScriptCopyBtn } from "../../ui/script-copy-cutton";
import { useTheme } from "../../../hooks/hooks";

import "./interactiveTerminal.css";

import diceImg from "../../../assets/icon/dice.png";
import { TypingAnimation } from "../../ui/terminal";

const InteractiveTerminal = ({ commands }) => {
    const [currentCommand, setCurrentCommand] = useState(commands[0]);
    const [currentTerminalLog, setCurrentTerminalLog] = useState([]);
    const [loading, setLoading] = useState(true);

    const { theme } = useTheme();

    const handleRunCode = () => {
        if (currentCommand.command) {
            currentCommand.command();
            setCurrentTerminalLog(currentCommand.cmdLogs || []);
        }
    };

    useEffect(() => {
        // Simulate loading state
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    const handleRandomCommand = () => {
        setCurrentCommand(commands[Math.floor(Math.random() * commands.length)]);
        setCurrentTerminalLog([]);
    }

    return <div className="interactive-terminal-container w-full max-w-3xl mx-auto p-4 flex flex-col gap-y-4">

        <div
            className=
            "z-0 h-full min-h-[400px] max-h-[500px] lg:min-w-2/3 lg:max-w-2/3 rounded-xl bg-background dark:bg-black"
        >
            <div className="flex flex-col justify-center gap-y-2 border-b border-gray-800 p-4">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-x-2">
                        <div className="h-2 w-2 my-auto rounded-full bg-red-500"></div>
                        <div className="h-2 w-2 my-auto rounded-full bg-yellow-500"></div>
                        <div className="h-2 w-2 my-auto rounded-full bg-green-500"></div>
                    </div>
                    <div className="">
                        <h6 onClick={handleRunCode} className="text-sm font-mono text-gray-400 hover:underline">
                            run
                        </h6>
                    </div>
                </div>
            </div>
            <pre className="p-4">
                <code className="grid gap-y-1 overflow-auto no-scrollbar">
                    <TypingAnimation className="terminal-text">
                        {currentCommand.commandText}
                    </TypingAnimation>
                    {
                        currentTerminalLog.map((log, index) => (
                            <span key={index} className="">
                                {log}
                            </span>
                        ))
                    }
                </code>
            </pre>
        </div>
        {/* <div className="min-w-[300px] grow font-mono">
                    <pre className="rounded-md bg-white p-2 px-4 font-mono dark:bg-black overflow-auto no-scrollbar terminal-text">
                        {currentCommand.commandText}
                    </pre>
                </div> */}
        <button
            onClick={handleRandomCommand}
            className="cursor-none fill-white text-white font-bold py-2 px-4 rounded"
        >
            {/* <a href="https://www.flaticon.com/free-icons/dice" title="dice icons">Dice icons created by Mayor Icons - Flaticon</a> */}
            <img
                src={diceImg}
                height={32}
                width={32}
                className="invert brightness-0 transition duration-300 hover:scale-110"
            />

        </button>
    </div>;
}

export default InteractiveTerminal;