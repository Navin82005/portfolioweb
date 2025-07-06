import { useEffect, useState } from "react";
import { Button } from "./button";
import { Check, Copy } from "lucide-react";

const LinkCopyButton = ({ link_text, className }) => {
    // const packageManagers = Object.keys(commandMap);
    // const [packageManager, setPackageManager] = useState(packageManagers[0]);
    const [copied, setCopied] = useState(false);
    const [highlightedCode, setHighlightedCode] = useState();
    const { theme } = { theme: "dark" };
    // const link_text = commandMap[packageManager];


    const copyToClipboard = () => {
        navigator.clipboard.writeText(link_text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return <div className="relative flex items-center">
        <div className="min-w-[300px] grow font-mono overflow-ellipsis w-full">
            <pre className="rounded-md border border-border bg-white p-2 px-4 w-full overflow-x-clip font-mono dark:bg-black">
                {link_text}
            </pre>
        </div>
        <Button
            variant="outline"
            size="icon"
            className="cursor-none relative ml-2 rounded-md"
            onClick={copyToClipboard}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
            <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
            <Copy
                className={`h-4 w-4 transition-all duration-300 ${copied ? "scale-0" : "scale-100"
                    }`}
            />
            <Check
                className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${copied ? "scale-100" : "scale-0"
                    }`}
            />
        </Button>
    </div>;
}

export default LinkCopyButton;