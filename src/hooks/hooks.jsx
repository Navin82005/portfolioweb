import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            setTheme(defaultTheme);
            localStorage.setItem("theme", defaultTheme);
        }
    }, []);

    return { theme, setTheme };
}


