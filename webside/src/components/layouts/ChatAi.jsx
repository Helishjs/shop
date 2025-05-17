// components/ChatButton.jsx
// 'use client'; // Nếu bạn dùng Next.js App Router

import { useState } from 'react';

export default function ChatButton() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Xin chào! Tôi có thể giúp gì cho bạn?' }
    ]);
    const [input, setInput] = useState('');

    const toggleChat = () => {
        setOpen(!open);
    };

    const sendMessage = async () => {
        if (input.trim() === '') return;

        setMessages([...messages, { sender: 'user', text: input }]);
        setInput('');

        // Gửi lên server
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: input }),
        });

        const data = await res.json();

        setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
    };

    return (
        <div className="fixed bottom-6 right-6">
            {open && (
                <div className="w-72 h-96 bg-white shadow-lg rounded-lg flex flex-col overflow-hidden mb-4">
                    <div className="bg-blue-600 text-white p-3">Hỗ trợ khách hàng</div>
                    <div className="flex-1 p-3 overflow-y-auto space-y-2">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`p-2 rounded ${
                                    msg.sender === 'bot' ? 'bg-gray-200 text-left' : 'bg-blue-100 text-right'
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="p-2 border-t flex">
                        <input
                            type="text"
                            className="flex-1 border rounded p-1 mr-2 text-sm"
                            placeholder="Nhập tin nhắn..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        />
                        <button onClick={sendMessage} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                            Gửi
                        </button>
                    </div>
                </div>
            )}
            <button
                onClick={toggleChat}
                className="w-14 h-14 bg-gradient-to-r bg-cyan-400 to bg-blue-200 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
            >
                <div className="text-3x2">
                    💬
                </div>
            </button>
        </div>
    );
}
