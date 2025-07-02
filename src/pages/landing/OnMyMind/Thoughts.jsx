"use client";

import { useEffect, useState } from "react";
import { ThoughtsData } from "../../../controllers/thoughts.controller.mjs";

const Thoughts = () => {
  const [thoughts, setThoughts] = useState(ThoughtsData);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     // Simulate fetching data (can replace with real API later)
  //     const timer = setTimeout(() => {
  //       setThoughts(ThoughtsData);
  //       setLoading(false);
  //     }, 1200); // 1.2 second delay

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <section className="my-16 px-6 lg:px-12" id="mind">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
        What's on my
        <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          {" Mind ?"}
        </span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mb-6">
        Occasional thoughts, tech takes, and developer reflections from my side
        of the screen.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-muted p-5 rounded-xl shadow animate-pulse space-y-3"
              >
                <div className="h-5 w-1/2 bg-gray-300 rounded" />
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
              </div>
            ))
          : thoughts.map((thought, index) => (
              <div
                key={thought.title + index}
                className="bg-muted p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">
                  {thought.emoji} {thought.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {thought.description}
                </p>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Thoughts;
