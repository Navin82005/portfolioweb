import { useState, useRef, useEffect } from 'react';
import { SendHorizonal, User, Bot } from 'lucide-react';

const messagesStart = [
    { from: 'bot', text: 'Hey! I\'m MeChat 🤖 — your personal assistant who knows everything about Naveen N. Ask me anything!' },
];

const MeChat = () => {
    const [messages, setMessages] = useState(messagesStart);
    const [input, setInput] = useState('');
    const chatRef = useRef(null);

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { from: 'user', text: input }];

        // Simulate bot reply
        const botReply = getMeChatResponse(input);

        setMessages([...newMessages, { from: 'bot', text: botReply }]);
        setInput('');
    };

    const getMeChatResponse = (query) => {
        query = query.toLowerCase();

        // 🧠 Replace this logic with actual knowledge about you
        if (query.includes('name')) return 'His name is Naveen N.';
        if (query.includes('projects')) return 'He has worked on NoteHub, PharmaOne, Chronify, and many more!';
        if (query.includes('skills')) return 'Naveen is skilled in Flutter, React, Python, and Java.';
        if (query.includes('location')) return 'He lives in Coimbatore, India 🌏';
        if (query.includes('hackathon')) return 'Oh yes! He participated in Smart India Hackathon 2024 with PharmaOne!';
        return 'Hmm, I only know things about Naveen N. Could you rephrase that? 🤔';
    };

    useEffect(() => {
        chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="pt-[80px] min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col items-center justify-center text-white font-sans px-4 py-8">
            <div className="w-full max-w-3xl shadow-2xl border border-white/10 rounded-2xl bg-[#1e1e2f] flex flex-col h-[80vh] overflow-hidden">
                {/* Header */}
                <div className="bg-[#2c2c3d] px-6 py-4 border-b border-white/10 text-xl font-bold flex items-center gap-3">
                    🤖 MeChat — Ask me anything about Naveen!
                </div>

                {/* Chat Box */}
                <div ref={chatRef} className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg text-sm shadow-md
                ${msg.from === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}
              `}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="px-6 py-4 bg-[#2c2c3d] border-t border-white/10 flex items-center gap-3">
                    <input
                        type="text"
                        placeholder="Ask about Naveen N..."
                        className="flex-1 rounded-lg px-4 py-2 bg-[#3a3a4d] text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button
                        onClick={handleSend}
                        className="bg-violet-600 hover:bg-violet-700 text-white rounded-full p-2 transition-all"
                    >
                        <SendHorizonal size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MeChat;
