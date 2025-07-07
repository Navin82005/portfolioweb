"use client";

import { useEffect, useState } from "react";
import { ThoughtsData } from "../../../controllers/thoughts.controller.mjs";

const placeholderThoughts = [
  { emoji: "🧠", title: "Thinking...", description: "Something deep is cooking in my head..." },
  { emoji: "⌛", title: "Patience...", description: "Thoughts take time. Creativity can't be rushed." },
  { emoji: "🤔", title: "Drafting...", description: "Trying to connect dots, one line at a time." },
  { emoji: "💭", title: "Warming up...", description: "The neurons are firing up ideas." },
];

const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setThoughts(ThoughtsData);
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="my-24 px-6 lg:px-12" id="mind">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          What's on my{" "}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Mind?
          </span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mt-2">
          Occasional thoughts, tech takes, and developer reflections from my side of the screen.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? placeholderThoughts.map((thought, i) => (
            <div
              key={i}
              className="relative p-5 rounded-xl border border-white/10 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 animate-pulse shadow-inner backdrop-blur-lg"
            >
              <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold uppercase bg-pink-600 text-white rounded-bl-lg">
                Drafting
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {thought.emoji} {thought.title}
              </h3>
              <p className="text-sm text-white/70">{thought.description}</p>
            </div>
          ))
          : thoughts.map((thought, index) => (
            <div
              key={thought.title + index}
              className="group relative bg-gradient-to-br from-[#1f1f1f] to-[#262626] p-5 rounded-xl border border-white/10 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:border-gradient hover:scale-[1.03]"
            >
              {/* Emoji Badge */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl shadow-md">
                {thought.emoji}
              </div>

              {/* Content */}
              <div className="pt-4">
                <h3 className="font-semibold text-lg mb-2 text-white">
                  {thought.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {thought.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Thoughts;
