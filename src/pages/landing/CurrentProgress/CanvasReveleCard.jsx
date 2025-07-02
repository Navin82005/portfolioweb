"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "../../../components/ui/canvas-revele-effect";
// import { CanvasRevealEffect } from "@lib/components/ui/canvas-reveal-effect";

export function CanvasRevealEffectProp({ sectionInfo }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="min-h-[300px] rounded-2xl flex flex-col lg:flex-row overflow-hidden items-center justify-center m-5 md:m-0 w-full gap-4 px-8 relative"
    >
      <div
        className="showcase-section text-white relative text-start z-20"
        key={sectionInfo.title}
      >
        <h3 className="text-2xl mb-3">
          <span className="icon text-white inline-block">{sectionInfo.icon}</span>{" "}
          {sectionInfo.title}
        </h3>
        <ul>
          {sectionInfo.items.map((item, idx) => (
            <li key={idx}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 translate-x-0 inline-block transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
