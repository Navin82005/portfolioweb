import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '../utils/aceternity';
import { ExternalLink } from 'lucide-react';

const VSCodeEditor = ({ code, language = "tsx", filename = "main.tsx", className, link }) => {
    return (
        <div className={cn("rounded-md overflow-hidden border bg-[#1e1e1e] shadow-lg", className)}>
            {/* Top Bar */}
            <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-2 text-white text-sm font-semibold">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-gray-300">{filename}</div>
                <div><a href={link} target='_blank' className='cursor-none'><ExternalLink size={18} /></a></div>
            </div>

            {/* Code Block */}
            <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={{
                    padding: '1rem',
                    fontSize: 13,
                    margin: 0,
                    background: '#1e1e1e',
                    overflowX: 'hidden',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                }}
                showLineNumbers
            >
                {code}
            </SyntaxHighlighter>

        </div>
    );
};

export default VSCodeEditor;
