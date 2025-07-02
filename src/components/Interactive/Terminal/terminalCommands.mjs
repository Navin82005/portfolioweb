export const TerminalCommands = [
  {
    commandText: "fun-fact --random",
    cmdLogs: [
      "Fetching a random fun fact...",
      "Did you know? Octopuses have three hearts and blue blood.",
    ],
    command: () => console.log("Command executed: fun-fact --random"),
  },
  {
    commandText: "uname -a",
    cmdLogs: [
      "naviOS 1.0.0-nextgen #1 SMP Mon 2025 x64",
      "Kernel: creativity-linux 🧠 | Arch: dev64 | Uptime: lifetime",
    ],
    command: () => console.log("Command executed: uname -a"),
  },
  {
    commandText: "whoami",
    cmdLogs: ["User: Naveen N.", "Role: Developer in Command 🚀"],
    command: () => console.log("Command executed: whoami"),
  },
  {
    commandText: "echo 'Done is better than perfect.' >> motivation.txt",
    cmdLogs: [
      "motivation.txt created with the quote: 'Done is better than perfect.'",
      "You can view it with: cat motivation.txt",
      "✅ Progress logged successfully.",
    ],
    command: () =>
      console.log(
        "Command executed: echo 'Done is better than perfect.' >> motivation.txt"
      ),
  },
  {
    commandText: "fortune",
    cmdLogs: [
      "🔮 Your fortune: “The bugs you ignore today become the features of tomorrow.”",
    ],
    command: () => console.log("Command executed: fortune"),
  },
  {
    commandText: "npx navi --intro",
    cmdLogs: [
      "🚀 Running intro script...",
      "Hi, I'm Naveen — dev by day, debugger by night.",
      "Welcome to my terminal. Let's build something cool!",
    ],
    command: () => console.log("Command executed: npx navi --intro"),
  },
  {
    commandText: "productivity.sh",
    cmdLogs: [
      "⌛ Analyzing productivity modules...",
      "✅ Deep work mode: enabled",
      "☕ Distractions: muted",
      "💡 Tip: Take a break every 90 mins!",
    ],
    command: () => console.log("Command executed: productivity.sh"),
  },
  {
    commandText: "roll --dice",
    cmdLogs: [
      "🎲 You rolled a 6!",
      "Lucky day. Push that PR!",
    ],
    command: () => console.log("Command executed: roll --dice"),
  },
];
