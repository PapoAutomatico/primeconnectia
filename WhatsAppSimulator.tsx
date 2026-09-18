import { useState, useRef, useEffect } from 'react';
import { Send, CheckCheck, Bot, Sparkles, RefreshCw, PhoneCall, Calendar, Zap, MessageCircle } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/plans';

interface SimMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  buttons?: string[];
  imageCard?: {
    title: string;
    description: string;
    tag: string;
  };
}

const INITIAL_MESSAGES: SimMessage[] = [
  {
    id: '1',
    sender: 'bot',
    text: '👋 Olá! Seja bem-vindo à *PrimeConnect IA*.\nAtendimento automatizado 24h por dia no WhatsApp!',
    time: '21:30',
  },
  {
    id: '2',
    sender: 'bot',
    text: '🤖 *MENU DE ATENDIMENTO:*\nComo posso te ajudar hoje? Escolha uma opção:\n\n[1] 💳 Ver Planos & Valores\n[2] 📅 Agendar Demonstração Gratuita\n[3] ⚙️ Como Funciona o Chatbot\n[4] 👤 Falar com Atendente Humano\n\n👉 *Digite o número da opção desejada (1 a 4):*',
    time: '21:30',
    buttons: ['[1] Ver Planos 💳', '[2] Agendar Demo 📅', '[3] Como Funciona ⚙️', '[4] Atendente Humano 👤'],
  },
];

export function WhatsAppSimulator() {
  const [messages, setMessages] = useState<SimMessage[]>(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleUserSend = (text: string) => {
    if (!text.trim()) return;

    const currentTime = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const userMsg: SimMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: currentTime,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Simulate AI thinking and smart answering
    setTimeout(() => {
      const botResponses = generateBotReply(text);
      setMessages((prev) => [...prev, ...botResponses]);
      setIsTyping(false);
    }, 1100);
  };

  const generateBotReply = (input: string): SimMessage[] => {
    const trimmed = input.trim();
    const lower = trimmed.toLowerCase();
    const time = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    // Option 1: Planos
    if (trimmed === '1' || lower.startsWith('1') || lower.includes('[1]') || lower.includes('plano') || lower.includes('preço') || lower.includes('valor') || lower.includes('quanto')) {
      return [
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: '✅ *Opção [1] Selecionada - Planos & Servidores*\n\nTemos 3 opções sob medida para o seu negócio:',
          time,
          imageCard: {
            title: '⭐ Plano Pro (Recomendado)',
            description: 'Criação: R$ 599 | Manutenção + Servidor: R$ 150/mês. Resposta acelerada, backup diário e monitoramento ativo!',
            tag: 'Mais Escolhido',
          },
        },
        {
          id: (Date.now() + 2).toString(),
          sender: 'bot',
          text: '• *Plano Start:* R$ 300 setup + R$ 79,90/mês\n• *Plano Pro:* R$ 599 setup + R$ 150/mês (⭐ Mais Escolhido)\n• *Plano Premium com IA:* R$ 1.670 setup + R$ 400/mês.\n\n👉 *Digite 2 para agendar demonstração ou 4 para falar com atendente:*',
          time,
          buttons: ['[2] Agendar Demonstração 📅', '[4] Falar com Atendente 👤', 'Ver Tabela Completa 📋'],
        },
      ];
    }

    // Option 2: Agendar
    if (trimmed === '2' || lower.startsWith('2') || lower.includes('[2]') || lower.includes('agendar') || lower.includes('demonstração') || lower.includes('demo') || lower.includes('teste')) {
      return [
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: '✅ *Opção [2] Selecionada - Agendar Demonstração*\n\n🎯 Excelente escolha! Nossos especialistas preparam uma apresentação prática do chatbot com o fluxo personalizado da sua empresa.',
          time,
        },
        {
          id: (Date.now() + 2).toString(),
          sender: 'bot',
          text: 'Preencha o formulário de agendamento no site ou fale diretamente com nosso especialista no WhatsApp oficial:\n📲 *(38) 9 9942-2060*',
          time,
          buttons: ['Ir para Formulário 📝', 'Chamar no WhatsApp (38) 9 9942-2060 📲', '[1] Ver Planos 💳'],
        },
      ];
    }

    // Option 3: Como funciona o chatbot
    if (trimmed === '3' || lower.startsWith('3') || lower.includes('[3]') || lower.includes('como funciona') || lower.includes('chatbot') || lower.includes('ia') || lower.includes('inteligência')) {
      return [
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: '✅ *Opção [3] Selecionada - Como Funciona o Chatbot*\n\nNossos robôs operam no WhatsApp com a agilidade dos menus numéricos (1, 2, 3...) e inteligência artificial:\n\n• Resposta imediata em menos de 2 segundos\n• Menus interativos que evitam dúvidas e indecisão\n• Envio automático de catálogos, fotos, áudios e chave Pix\n• Transbordo suave para sua equipe humana\n• Servidor dedicado e estável sem quedas!',
          time,
        },
        {
          id: (Date.now() + 2).toString(),
          sender: 'bot',
          text: 'Qual o próximo passo que você deseja dar?',
          time,
          buttons: ['[1] Ver Planos 💳', '[2] Agendar Demo 📅', '[4] Falar com Atendente 👤'],
        },
      ];
    }

    // Option 4: Atendente humano
    if (trimmed === '4' || lower.startsWith('4') || lower.includes('[4]') || lower.includes('humano') || lower.includes('atendente') || lower.includes('suporte') || lower.includes('falar')) {
      return [
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: '✅ *Opção [4] Selecionada - Transbordo para Atendente Humano*\n\n👤 Transferindo seu atendimento para nossa equipe! Você pode falar diretamente pelo WhatsApp oficial:\n\n📲 *(38) 9 9942-2060*\n\nNossa equipe está pronta para tirar suas dúvidas e ativar o seu robô!',
          time,
          buttons: ['Chamar no WhatsApp (38) 9 9942-2060 📲', '[1] Voltar aos Planos 💳'],
        },
      ];
    }

    // Default response reinforcing the menu options
    return [
      {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `Recebi sua mensagem: "${input}"! Na PrimeConnect IA, automatizamos seu WhatsApp com menus numéricos e respostas inteligentes.`,
        time,
      },
      {
        id: (Date.now() + 2).toString(),
        sender: 'bot',
        text: '👉 Por favor, digite o *número* da opção desejada:\n\n[1] Ver Planos & Valores 💳\n[2] Agendar Demonstração 📅\n[3] Como Funciona o Chatbot ⚙️\n[4] Falar com Atendente Humano 👤',
        time,
        buttons: ['[1] Planos 💳', '[2] Agendar Demo 📅', '[3] Como Funciona ⚙️', '[4] Atendente 👤'],
      },
    ];
  };

  const handleButtonClick = (btnText: string) => {
    if (btnText.includes('Ir para Formulário')) {
      document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (btnText === 'Ver Tabela Completa 📋') {
      document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (btnText.includes('Depoimentos')) {
      document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (btnText.includes('Chamar no WhatsApp') || btnText.includes('WhatsApp Real')) {
      window.open(COMPANY_CONTACTS.whatsappDirectUrl, '_blank');
      return;
    }

    handleUserSend(btnText);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setIsTyping(false);
  };

  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] rounded-[36px] bg-slate-900 p-3.5 shadow-2xl shadow-blue-500/20 ring-1 ring-white/20">
      {/* Phone Notch / Speaker */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-full z-20 flex items-center justify-center">
        <div className="w-10 h-1.5 bg-slate-700 rounded-full"></div>
        <div className="w-2.5 h-2.5 ml-3 rounded-full bg-slate-900 border border-slate-700"></div>
      </div>

      {/* Screen Frame */}
      <div className="rounded-[28px] overflow-hidden bg-[#0c1317] flex flex-col h-[560px] relative border border-slate-800 text-slate-100">
        {/* WhatsApp Header */}
        <div className="bg-[#1f2c34] px-3.5 pt-7 pb-3 flex items-center justify-between border-b border-[#2a3942] z-10">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#1f2c34]"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-bold text-sm text-slate-100 leading-none">PrimeConnect IA</h4>
                <Sparkles className="w-3 h-3 text-cyan-400" />
              </div>
              <p className="text-[11px] text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                <span>online 24/7</span>
                <span className="text-slate-400">• verificado</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleReset}
              title="Reiniciar Simulação"
              className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors rounded-full hover:bg-white/5"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <a
              href={COMPANY_CONTACTS.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir no WhatsApp Real"
              className="p-1.5 text-emerald-400 hover:text-emerald-300 transition-colors rounded-full hover:bg-emerald-500/10"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Live Simulation Banner */}
        <div className="bg-blue-600/20 text-cyan-300 text-[10px] px-3 py-1 text-center font-medium border-b border-blue-500/20 flex items-center justify-center gap-1.5">
          <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span>Simulador Interativo • Teste o chatbot em tempo real</span>
        </div>

        {/* Chat Messages Area */}
        <div
          className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px] bg-[#0c1317]"
          style={{ scrollBehavior: 'smooth' }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-[#005c4b] text-white rounded-br-xs'
                    : 'bg-[#202c33] text-slate-100 rounded-bl-xs border border-white/5'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>

                {msg.imageCard && (
                  <div className="mt-2.5 p-2 rounded-xl bg-[#111b21] border border-cyan-500/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-cyan-400">{msg.imageCard.tag}</span>
                    </div>
                    <div className="font-bold text-xs text-white">{msg.imageCard.title}</div>
                    <p className="text-[11px] text-slate-300 mt-1">{msg.imageCard.description}</p>
                  </div>
                )}

                <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-400">
                  <span>{msg.time}</span>
                  {msg.sender === 'user' && <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />}
                </div>
              </div>

              {/* Bot Action Buttons */}
              {msg.buttons && (
                <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                  {msg.buttons.map((btn, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleButtonClick(btn)}
                      className="px-2.5 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-cyan-300 border border-cyan-500/30 text-[11px] font-medium transition-all text-left hover:scale-[1.02] active:scale-95"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 text-xs text-cyan-400 bg-[#202c33] w-fit px-3 py-2 rounded-xl border border-white/5">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
              <span className="text-[10px] text-slate-400 ml-1">Digitando resposta...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-2.5 bg-[#1f2c34] border-t border-[#2a3942] flex items-center gap-2">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUserSend(inputVal)}
            placeholder="Digite uma mensagem ou pergunta..."
            className="flex-1 bg-[#2a3942] text-xs text-white placeholder-slate-400 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          <button
            onClick={() => handleUserSend(inputVal)}
            disabled={!inputVal.trim()}
            className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-white flex items-center justify-center transition-all flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
