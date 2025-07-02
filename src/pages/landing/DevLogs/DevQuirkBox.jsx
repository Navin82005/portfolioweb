import { useState, useEffect } from 'react';
import { DevQuirks } from '../../../controllers/devQuirks.controller.mjs';

import { cn } from '../../../utils/aceternity.jsx';

const DevQuirksBox = ({ className }) => {
    const [currentQuirk, setCurrentQuirk] = useState("");

    useEffect(() => {
        const getRandomQuirk = () =>
            DevQuirks[Math.floor(Math.random() * DevQuirks.length)];

        setCurrentQuirk(getRandomQuirk());

        const interval = setInterval(() => {
            setCurrentQuirk(getRandomQuirk());
        }, 4000); // change every 4s

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={cn("bg-muted rounded-xl shadow-lg p-6 w-full text-center text-base font-medium transition-all duration-300 ease-in-out", className)} >
            <span className="text-primary/80">💡 Dev Quirk:</span>
            <p className="mt-2 text-muted-foreground italic">{currentQuirk}</p>
        </div>
    );
}

export default DevQuirksBox;