import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SendHorizonal, Bot, X, Loader } from 'lucide-react';

const MeChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi 👋, I'm MeChat. How can I help you today?" },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { type: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    type: 'bot',
                    text: `You said: "${userMessage.text}". I'm still learning 🤖.`,
                },
            ]);
            setIsTyping(false);
        }, 1000);
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.3 }}
                        className="w-80 md:w-96 h-[500px] bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-white font-semibold flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <Bot size={20} />
                                MeChat
                            </div>
                            <X className="cursor-pointer" onClick={toggleChat} />
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 space-y-2 overflow-y-auto text-wrap bg-white dark:bg-zinc-900 scrollbar-thin">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`max-w-[80%] px-4 py-2 text-wrap rounded-lg shadow-sm ${msg.type === 'user'
                                        ? 'ml-auto bg-indigo-600 text-white rounded-br-none'
                                        : 'bg-gray-200 dark:bg-zinc-800 text-black dark:text-white rounded-bl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                    <Loader className="animate-spin w-4 h-4" />
                                    MeChat is typing...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t bg-zinc-50 dark:bg-zinc-800 flex items-center gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleEnter}
                                type="text"
                                placeholder="Type your message..."
                                className="flex-1 px-3 py-2 rounded-md border bg-white dark:bg-zinc-900 dark:text-white focus:outline-none"
                            />
                            <button
                                onClick={sendMessage}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-md transition-all"
                            >
                                <SendHorizonal size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleChat}
                className="rounded-full shadow-lg p-4 bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center hover:scale-105 transition-all"
            >
                {isOpen ? <X /> : <Bot />}
            </motion.button>
        </div>
    );
};

export default MeChatBot;
