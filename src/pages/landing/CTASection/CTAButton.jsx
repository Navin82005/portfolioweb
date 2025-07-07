import { useNavigate } from "react-router-dom";
import { Pointer } from "../../../components/Pointer";
import { CoolMode } from "../../../components/ui/cool-mode";
import { useEffect, useRef, useState } from "react";

import hiGojoSticker from "@/assets/stickers/hi-gojo.png";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Share } from "lucide-react";

export const CTAButton1 = () => {
    const navigator = useNavigate();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [holdTime, setHoldTime] = useState(0); // milliseconds
    const [isHolding, setIsHolding] = useState(false);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(null);

    const startHold = () => {
        if (isHolding) return;
        setIsHolding(true);
        startTimeRef.current = Date.now();

        intervalRef.current = setInterval(() => {
            if (startTimeRef.current) {
                const duration = Date.now() - startTimeRef.current;
                setHoldTime(duration);
            }
        }, 50);
    };

    const stopHold = () => {
        setIsHolding(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        startTimeRef.current = null;
    };

    const handleNavigateToContact = () => {
        navigator("/contact");
    }

    // Clean up interval on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        if (holdTime >= 10000) {
            setIsDialogOpen(true);
            stopHold();
        }
    }, [holdTime]);

    const buttonText = "Connect Me";

    return <CoolMode className="cool-mode">
        <div>
            <Dialog className="absolute top-0 left-0 w-full h-full z-50" open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                {/* <DialogTrigger>Open</DialogTrigger> */}
                <DialogContent className="bg-black border-0">
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-bold">Having Fun!</DialogTitle>
                        <DialogDescription>
                            <div className="flex items-center gap-2">
                                <div className="flex flex-col items-start justify-between text-start w-full h-full">
                                    <p className="text-white text-lg">
                                        Consider connecting with me. Let's build something amazing together!
                                    </p>
                                    <button onClick={handleNavigateToContact} className="cursor-pointer outline-0 my-auto text-2xl font-bold border-0 gradient-text">
                                        Connect →
                                    </button>
                                </div>
                                <img src={hiGojoSticker} className="min-h-70 max-h-70 min-w-70 max-w-70" />
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <div onClick={handleNavigateToContact} onMouseDown={startHold} onMouseUp={stopHold} className="bg-white cursor-none relative inline-flex h-14 items-center rounded-full px-8 font-semibold text-lg text-neutral-950 group overflow-hidden">
                <span className="absolute inset-0 rounded-full overflow-hidden">
                    <span className="absolute left-1/2 -top-[60%] -translate-x-1/2 aspect-square w-[200%]">
                        <span className="absolute inset-0 scale-0 rounded-full bg-purple-400 transition-transform duration-[1300ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-100" />
                        <span className="absolute inset-0 scale-0 rounded-full bg-teal-300 transition-transform duration-[1300ms] delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-100" />
                        <span className="absolute inset-0 scale-0 rounded-full gradient-bg transition-transform duration-[1300ms] delay-200 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-100" />
                    </span>
                </span>
                <span className="relative pointer-events-none">
                    <span className="text-black block transition-all duration-300 ease-linear group-hover:opacity-0 group-hover:-translate-y-6">
                        {buttonText}
                    </span>
                    <span className="text-white absolute top-0 left-0 opacity-0 translate-y-6 transition-all duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-y-0">
                        {buttonText}
                    </span>
                </span>
            </div>
        </div>
    </CoolMode>;
}