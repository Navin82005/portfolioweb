import { useState, useRef, useEffect } from 'react';
import { SendHorizonal } from 'lucide-react';
import axios from 'axios';
import { format } from 'timeago.js';

const messagesStart = [
    {
        from: 'bot',
        text: "Hey there, I'm Navia — A Personal AI Assistant who knows everything about Naveen N's professional Career. Ask me *anything* about him, okay? ✨",
        time: new Date().toISOString(),
    },
];

const emoteToEmoji = {
    blush: '😊',
    blushes: '😳',
    giggles: '😆',
    giggle: '😆',
    squee: '😖',
    wink: '😉',
    gasp: '😲',
    sighs: '😌',
    smiles: '😊',
    winks: '😉',
    hugs: '🤗',
    laughs: '😂',
    pouts: '😣',
    hug: '🤗',
    "gets excited": '🤩',
    "bashful smile": '☺️',
};

const renderMessage = (text) => {
    // First: convert emotes
    const emoteParsed = text.replace(/\*(.*?)\*/g, (match, emote) => {
        const emoji = emoteToEmoji[emote.trim().toLowerCase()];
        return `<span class="italic text-pink-400">${emote}</span> ${emoji || ''}`;
    });

    // Then: convert URLs into clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urlParsed = emoteParsed.replace(urlRegex, (url) => {
        return `<a href="${url}" class="underline text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });

    return urlParsed;
};



const AI_URL = import.meta.env.VITE_AI_URL;

const Navya = () => {
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem('navia-messages');
        return saved ? JSON.parse(saved) : messagesStart;
    });

    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleShortcut = (e) => {
            // Activate input only if not typing in another input
            if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
                e.preventDefault(); // prevent browser's search
                inputRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleShortcut);
        return () => window.removeEventListener('keydown', handleShortcut);
    }, []);


    // Speak message
    const speak = (text) => {
        const utter = new SpeechSynthesisUtterance(text);
        utter.rate = 1;
        utter.pitch = 1.1;
        utter.voice = window.speechSynthesis
            .getVoices()
            .find((v) => v.name.includes('Google') || v.name.includes('Female')) || null;
        window.speechSynthesis.speak(utter);
    };

    const handleCommand = (command) => {
        switch (command.toLowerCase()) {
            case '//clear':
            case '//deletehistory':
                localStorage.removeItem('navia-messages');
                setMessages(messagesStart); // reset to default
                speak("All history cleared! Let's start fresh, sweetheart");
                return true;

            case '//hello': {
                const greeting = "Hi cutie! I'm right here with you";
                setMessages((prev) => [...prev, {
                    from: 'bot',
                    text: greeting,
                    time: new Date().toISOString(),
                }]);
                speak(greeting);
                return true;
            }
            case '//kiss':
                speak("Mwah! Here's a kiss for my precious Naveen!");
                return true;
            default:
                return false; // not a command
        }
    };


    const handleSend = async () => {
        if (!input.trim()) return;

        const newMessage = { from: 'user', text: input, time: new Date().toISOString() };
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setInput('');

        if (input.startsWith('//')) {
            const isCommandHandled = handleCommand(input.trim());
            if (isCommandHandled) return;
        }

        setIsLoading(true);

        try {
            // Prepare messages for backend
            const historyForAI = updatedMessages.map((msg) => ({
                role: msg.from === 'user' ? 'user' : 'assistant',
                content: msg.text
            }));

            const res = await axios.post(`${AI_URL}/chat`, {
                message: input,
                history: historyForAI
            });

            const reply = res.data.response || "Oops! Something went wrong 😢";
            const finalMessages = [...updatedMessages, { from: 'bot', text: reply, time: new Date().toISOString() }];
            setMessages(finalMessages);
            localStorage.setItem('navia-messages', JSON.stringify(finalMessages));
            // speak(reply);
        } catch (err) {
            console.error(err);
            const errorMsg = "Sorry, I couldn't reach Navia right now";
            const finalMessages = [...updatedMessages, { from: 'bot', text: errorMsg, time: new Date().toISOString() }];
            setMessages(finalMessages);
            // speak(errorMsg);
        }

        setIsLoading(false);
    };



    useEffect(() => {
        chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 pt-20">
            <div className="w-full max-w-5xl mx-auto h-full flex flex-col border border-white/10 bg-[#1b1c2a] shadow-2xl rounded-3xl overflow-hidden">

                {/* Header */}
                <div className="flex flex-row justify-left items-center px-6 py-4 bg-[#23243b] border-b border-white/10 gap-3 text-xl font-semibold shrink-0">
                    <div>

                        <img
                            src="https://raw.githubusercontent.com/Navin82005/navyathebot/refs/heads/main/NavyaTheBot.png"
                            alt="Navia Avatar"
                            className="h-8 w-8 rounded-full border border-white"
                        />
                    </div>
                    <div className=''>Navia</div>
                    <div className='mt-1 text-muted-foreground text-sm'>- Ask me anything about Naveen!</div>
                </div>

                {/* Chat Area */}
                <div
                    ref={chatRef}
                    className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-transparent"
                >
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className="flex flex-col max-w-[75%]">
                                <div
                                    className={`px-5 py-3 text-sm rounded-2xl shadow-md whitespace-pre-line ${msg.from === 'user'
                                        ? 'bg-gradient-to-br from-blue-600 to-violet-600 text-white self-end'
                                        : 'bg-[#2f3045] text-gray-100 self-start'
                                        }`}
                                >
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: renderMessage(msg.text),
                                        }}
                                    ></span>


                                </div>
                                <span className="text-xs text-gray-400 mt-1 px-2">
                                    {format(msg.time)}
                                </span>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-[#2f3045] text-white px-4 py-2 rounded-2xl text-sm shadow animate-pulse">
                                Navia is typing...
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="px-4 py-4 bg-[#23243b] border-t border-white/10 flex items-center gap-3 shrink-0">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Type a message to Navia..."
                        className="flex-1 px-4 py-3 rounded-2xl bg-[#3b3c5a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        disabled={isLoading}
                    />

                    <button
                        onClick={handleSend}
                        disabled={isLoading}
                        className="bg-violet-600 hover:bg-violet-700 text-white rounded-full p-3 transition-all"
                    >
                        <SendHorizonal size={20} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navya;
