import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles, Phone, ArrowUpRight, Check } from 'lucide-react';
import { COMPANY_CONTACTS, PRICING_PLANS } from '../data/plans';
import { BotMessage } from '../types';

const INITIAL_SUPPORT_MESSAGES: BotMessage[] = [
  {
    id: '1',
    sender: 'bot',
    text: 'Olá! Seja muito bem-vindo à PrimeConnect IA. 👋 Como posso ajudar a impulsionar seu atendimento no WhatsApp agora?',
    timestamp: 'Agora',
    options: ['Conhecer os Planos 💳', 'Agendar Demonstração Gratuita 📅', 'Dúvidas Frequentes ❓', 'Falar com Especialista no WhatsApp 📲'],
  },
];

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState<BotMessage[]>(INITIAL_SUPPORT_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: BotMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponses = generateSupportResponse(text);
      setMessages((prev) => [...prev, ...botResponses]);
      setIsTyping(false);
    }, 900);
  };

  const generateSupportResponse = (input: string): BotMessage[] => {
    const text = input.toLowerCase();
    const ts = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    if (text.includes('plano') || text.includes('preço') || text.includes('valor')) {
      return [
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: `Nossos planos com servidores sob medida incluem:\n\n• Start: R$ 300 criação + R$ 79,90/mês\n• Pro: R$ 599 criação + R$ 150,00/mês (Recomendado com backup diário)\n• Premium: R$ 1.670 criação + R$ 400,00/mês (IA generativa e suporte 24/7)`,
          timestamp: ts,
          options: ['Ver Planos na Página 📋', 'Contratar via WhatsApp 🚀'],
        },
      ];
    }

    if (text.includes('agendar') || text.includes('demonstração') || text.includes('demo')) {
      return [
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'Com certeza! Você pode preencher o formulário rápido de agendamento na nossa página ou falar direto com nosso time agora pelo WhatsApp.',
          timestamp: ts,
          options: ['Abrir Formulário de Agendamento 📝', 'Chamar no WhatsApp (38) 9 9942-2060 📲'],
        },
      ];
    }

    if (text.includes('dúvidas') || text.includes('faq') || text.includes('como funciona')) {
      return [
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: '💡 Principais dúvidas:\n1. O bot funciona no meu número atual? Sim, sem trocar de chip!\n2. Em quanto tempo fica pronto? Geralmente entre 24h e 48h!\n3. Tem risco de banimento? Nossos servidores dedicados e monitoramento ativo mantêm a conexão estável e segura.',
          timestamp: ts,
          options: ['Falar com Consultor Humano 👤', 'Ver Planos 💳'],
        },
      ];
    }

    return [
      {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Obrigado por sua mensagem! Para um atendimento imediato personalizado para seu negócio, nosso especialista está pronto no WhatsApp oficial: ${COMPANY_CONTACTS.phoneDisplay}`,
        timestamp: ts,
        options: ['Chamar no WhatsApp Agora 📲', 'Agendar Demonstração 📅'],
      },
    ];
  };

  const handleOptionClick = (opt: string) => {
    if (opt.includes('Planos na Página') || opt.includes('Ver Planos')) {
      document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (opt.includes('Formulário de Agendamento') || opt.includes('Agendar Demonstração')) {
      document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (opt.includes('WhatsApp') || opt.includes('Especialista') || opt.includes('Consultor')) {
      window.open(COMPANY_CONTACTS.whatsappDirectUrl, '_blank');
      return;
    }

    handleSendMessage(opt);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      {/* Expanded Chat Box */}
      {isOpen && (
        <div
          id="chat-flutuante-box"
          className="w-[92vw] sm:w-[380px] h-[520px] max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-5 duration-200 ring-1 ring-blue-500/30"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 p-3.5 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-slate-900/90 border border-cyan-300/40 flex items-center justify-center text-cyan-300">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-blue-700"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm tracking-tight">Suporte PrimeConnect IA</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                </div>
                <p className="text-[11px] text-blue-100 flex items-center gap-1">
                  <span>Atendimento Automatizado & Consultores</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Contact Bar */}
          <div className="bg-slate-800/90 px-3 py-1.5 border-b border-slate-700 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-[11px]">
              <Phone className="w-3 h-3 text-cyan-400" />
              {COMPANY_CONTACTS.phoneDisplay}
            </span>
            <a
              href={COMPANY_CONTACTS.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-0.5 hover:underline"
            >
              WhatsApp Direto
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-950/70 text-slate-100 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-xs'
                      : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <span className="block text-[9px] text-slate-400 text-right mt-1">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.options && (
                  <div className="flex flex-col gap-1.5 mt-2 w-full max-w-[88%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        className="text-left px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-blue-600/30 text-cyan-300 border border-slate-700 hover:border-cyan-500/40 text-[11px] font-medium transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-xs text-cyan-400 bg-slate-800 w-fit px-3 py-2 rounded-xl border border-slate-700">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                <span className="text-[10px] text-slate-400 ml-1">Digitando resposta...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-2.5 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              placeholder="Digite sua dúvida ou solicitação..."
              className="flex-1 bg-slate-800 text-white placeholder-slate-400 text-xs rounded-xl px-3 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim()}
              className="p-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:opacity-90 disabled:opacity-40 transition-opacity"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        id="btn-chat-flutuante"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 text-white rounded-full shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 active:scale-95 transition-all border border-cyan-400/40"
        aria-label="Abrir chat de suporte"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 text-cyan-300 transition-transform group-hover:rotate-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-900"></span>
          </span>
        </div>

        <div className="flex flex-col text-left">
          <span className="text-xs font-bold tracking-tight text-white leading-tight">
            Suporte Imediato
          </span>
          <span className="text-[10px] text-cyan-300 leading-tight">
            Online no WhatsApp
          </span>
        </div>

        {unreadCount > 0 && !isOpen && (
          <span className="ml-1 px-1.5 py-0.5 bg-cyan-400 text-slate-950 text-[10px] font-extrabold rounded-full animate-bounce">
            1
          </span>
        )}
      </button>
    </div>
  );
}
