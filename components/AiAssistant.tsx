import React, { useState } from 'react';
import { Sparkles, Send, Loader2, X, MessageSquareText } from 'lucide-react';
import { getTravelRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Здравствуй! Я твоя помощница. Куда лежит твоя душа сегодня? Горы, море или уютный старый город?' }
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await getTravelRecommendation(userMsg.text);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-matreshka-mustard border-2 border-matreshka-ink rounded-lg p-4 flex items-center justify-between group hover:shadow-solid transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px]"
      >
        <div className="flex items-center gap-4">
          <div className="bg-matreshka-ink text-matreshka-mustard p-2 rounded-full border border-matreshka-ink">
            <Sparkles size={20} />
          </div>
          <div className="text-left text-matreshka-ink">
            <span className="block font-serif font-bold text-xl leading-none">Спроси совет</span>
            <span className="text-xs font-sans font-semibold uppercase tracking-wider">AI-Помощник</span>
          </div>
        </div>
        <div className="bg-matreshka-cream border border-matreshka-ink px-2 py-1 text-xs font-bold uppercase tracking-widest rounded-md">
          Beta
        </div>
      </button>
    );
  }

  return (
    <div className="w-full bg-matreshka-paper border-2 border-matreshka-ink rounded-lg overflow-hidden shadow-solid animate-in fade-in zoom-in-95 duration-200">
      <div className="bg-matreshka-cream border-b-2 border-matreshka-ink p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <MessageSquareText size={20} className="text-matreshka-rust" />
          <div>
            <span className="block font-serif font-bold text-lg text-matreshka-ink leading-none">Матрёшка</span>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-matreshka-rust hover:text-white p-1 rounded transition-colors border border-transparent hover:border-matreshka-ink">
          <X size={20} />
        </button>
      </div>

      <div className="p-4 h-64 overflow-y-auto bg-matreshka-paper space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`
              max-w-[85%] p-3 rounded-lg text-sm font-sans font-medium leading-relaxed border-2 border-matreshka-ink
              ${msg.role === 'user' 
                ? 'bg-matreshka-ink text-matreshka-cream rounded-br-none shadow-sm' 
                : 'bg-matreshka-mustard/20 text-matreshka-ink rounded-bl-none'}
            `}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border-2 border-matreshka-ink p-3 rounded-lg rounded-bl-none flex items-center gap-2">
              <Loader2 className="animate-spin text-matreshka-rust" size={16} />
              <span className="text-xs font-bold uppercase">Думаю...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 border-t-2 border-matreshka-ink bg-matreshka-cream flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Куда хотите поехать?"
          className="flex-1 bg-white border-2 border-matreshka-ink rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-matreshka-rust text-matreshka-ink placeholder-stone-400 font-sans"
        />
        <button 
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="bg-matreshka-rust text-white px-4 rounded-md border-2 border-matreshka-ink hover:bg-matreshka-ink transition-colors disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};