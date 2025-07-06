import React from "react";
import { cn } from "../../utils/aceternity";

export const Button = React.forwardRef(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        const base =
            "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            default: "bg-primary text-white hover:bg-primary/90",
            outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline text-primary",
        };

        const sizes = {
            default: "h-10 px-4 py-2 text-sm",
            sm: "h-9 px-3 text-sm",
            lg: "h-11 px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                className={cn(base, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
