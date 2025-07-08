import React, { useEffect, useState } from "react";
import { TerminalCommands } from "../../../components/Interactive/Terminal/terminalCommands.mjs";
import DevQuirksBox from "./DevQuirkBox";
import InteractiveTerminal from "../../../components/Interactive/Terminal/InteractiveTerminal";

import diceImg from "../../../assets/icon/dice.png";
import { AnimatedSpan, TypingAnimation } from "../../../components/ui/terminal";

const isCustomCommand = (command) => {
  if (typeof command !== 'object') {
    return !TerminalCommands.some(cmd => cmd.commandText === command.trim());
  }
  return false;
};

const DevLogs = () => {
  const [currentCommand, setCurrentCommand] = useState(TerminalCommands[0]);
  const [currentTerminalLog, setCurrentTerminalLog] = useState([]);
  const [terminalLoading, setTerminalLoading] = useState(true);
  const [editCommand, setEditCommand] = useState(false);

  const [customCommand, setCustomCommand] = useState(false);

  // const { theme } = useTheme();

  const handleRunCode = () => {
    if (!isCustomCommand(currentCommand)) {
      setCustomCommand(false);
    }
    if (customCommand && isCustomCommand(currentCommand)) {
      return;
    }
    if (currentCommand.command) {
      currentCommand.command();
      setCurrentTerminalLog(currentCommand.cmdLogs || []);
    }
  };

  const handleRandomCommand = () => {
    setCurrentCommand(TerminalCommands[Math.floor(Math.random() * TerminalCommands.length)]);
    setCurrentTerminalLog([]);
  }

  const handleEditCode = () => {
    setEditCommand(!editCommand);
    setCurrentTerminalLog([]);
    setCustomCommand(true);
  }

  const handleClearCode = () => {
    setCurrentTerminalLog([]);
  };

  const handleCommandChange = (e) => {
    setCurrentCommand({
      commandText: e.target.value,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalLoading(false);
    }, 3000); // Adjust the delay as needed

    handleRandomCommand();
    return () => clearTimeout(timer);
  }, []);

  return <section className="relative min-w-full px-[4vw] py-8 md:py-16 lg:py-24 overflow-hidden bg-black">
    {/* Gradient Glow Layer */}
    {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-40" /> */}

    {/* Noise Texture Layer as Image */}
    {/* <img
      src="https://github.com/Navin82005/TempRepo/blob/main/noise.png?raw=true"
      alt="noise-texture"
      className="absolute inset-0 w-full h-full object-cover z-[-10] opacity-[0.03] mix-blend-soft-light pointer-events-none animate-pulse"
    /> */}

    {/* Gradient Background */}
    {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-40" /> */}

    {/* Terminal Content */}
    <div className="mb-8 flex flex-row justify-end items-end">
      <h2 className="text-2xl md:text-3xl text-right lg:text-4xl font-bold tracking-tighter text-white">
        Random Dev Logs
      </h2>
      <button
        onClick={handleRandomCommand}
        className="cursor-none fill-white text-white font-bold rounded mx-3"
      >
        <img
          src={diceImg}
          height={32}
          width={32}
          className="invert brightness-0 transition duration-300 hover:scale-110"
        />
      </button>
    </div>

    {/* TERMINAL BOX */}
    <div className="interactive-terminal-container w-full max-w-3xl mx-auto p-4 flex flex-col gap-y-4">

      <div
        className=
        "z-0 h-full min-h-[400px] bg-[#111] max-h-[500px] rounded-xl"
      >
        <div className="flex flex-col justify-center gap-y-2 border-b border-gray-800 p-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-x-2">
              <div className="h-2 w-2 my-auto rounded-full bg-red-500"></div>
              <div className="h-2 w-2 my-auto rounded-full bg-yellow-500"></div>
              <div className="h-2 w-2 my-auto rounded-full bg-green-500"></div>
            </div>
            <div className="flex flex-row gap-x-2">
              {/* <h6 onClick={handleEditCode} className="text-sm font-mono text-gray-400 hover:underline">edit</h6> */}
              <h6 onClick={handleClearCode} className="text-sm font-mono text-gray-400 hover:underline">clear</h6>
              <h6 onClick={handleRunCode} className="text-sm font-mono text-gray-400 hover:underline">run</h6>
            </div>
          </div>
        </div>
        <pre className="p-4">
          {editCommand ? (
            <div>
              <input onChange={handleCommandChange} value={currentCommand.commandText} className="bg-gray-900 px-3 rounded-sm font-mono outline-0 border-0" />
              <button
                onClick={handleEditCode}
                className="ml-2 px-3 py-1 cursor-none "
              >
                ✔
              </button>
            </div>
          ) : (
            <code onDoubleClick={handleEditCode} className="grid gap-y-1 overflow-auto no-scrollbar">
              <TypingAnimation className="terminal-text font-mono">
                {`> ${currentCommand.commandText}`}
              </TypingAnimation>
              {
                currentTerminalLog.map((log, index) => (
                  <span key={index}>
                    <AnimatedSpan className="font-mono" delay={index * 1000}>
                      {log}
                    </AnimatedSpan>
                  </span>
                ))
              }
            </code>
          )}
        </pre>
      </div>
    </div>
  </section>;
};

export default DevLogs;
