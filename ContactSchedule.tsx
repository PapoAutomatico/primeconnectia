import { useState, FormEvent } from 'react';
import confetti from 'canvas-confetti';
import { COMPANY_CONTACTS } from '../data/plans';
import { DemoScheduleData, PricingPlan } from '../types';
import { Calendar, Clock, Send, CheckCircle2, Phone, Mail, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';

interface ContactScheduleProps {
  initialPlan?: PricingPlan | null;
}

export function ContactSchedule({ initialPlan }: ContactScheduleProps) {
  const [formData, setFormData] = useState<DemoScheduleData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    segment: 'Comércio & E-commerce',
    messageVolume: '10 a 50 conversas/dia',
    preferredDate: '',
    preferredTime: '14:00',
    mainGoal: initialPlan ? `Interesse no ${initialPlan.name}` : 'Aumentar vendas e conversão no WhatsApp',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#06b6d4', '#10b981', '#3b82f6'],
      });
    }, 800);
  };

  const getWhatsAppSubmissionUrl = () => {
    const message = encodeURIComponent(
      `🎯 *NOVO AGENDAMENTO DE DEMONSTRAÇÃO - PrimeConnect IA*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *WhatsApp:* ${formData.phone}\n` +
      `✉️ *E-mail:* ${formData.email || 'Não informado'}\n` +
      `🏢 *Empresa:* ${formData.company}\n` +
      `💼 *Segmento:* ${formData.segment}\n` +
      `📊 *Volume Diário:* ${formData.messageVolume}\n` +
      `📅 *Data Preferida:* ${formData.preferredDate || 'A combinar'}\n` +
      `⏰ *Horário Preferido:* ${formData.preferredTime}\n` +
      `🎯 *Objetivo:* ${formData.mainGoal}\n\n` +
      `Aguardo confirmação do especialista da PrimeConnect IA!`
    );
    return `https://wa.me/${COMPANY_CONTACTS.phoneRaw}?text=${message}`;
  };

  return (
    <section id="agendamento" className="py-20 bg-white border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Demonstração Personalizada Sem Compromisso
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Veja a IA operando ao vivo com o seu próprio nicho
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Agende uma sessão prática de 15 minutos com nossos especialistas em automação. Simularemos
            o chatbot atendendo os clientes da sua empresa em tempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Fast Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-lg">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Formulário Rápido de Agendamento
                  </h3>
                  <span className="text-xs text-blue-600 font-semibold bg-blue-100 px-2.5 py-0.5 rounded-full">
                    Grátis & 100% Online
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(99) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nome da Sua Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Clínica Saúde Total"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      E-mail Corporativo
                    </label>
                    <input
                      type="email"
                      placeholder="joao@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Segmento de Atuação
                    </label>
                    <select
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Comércio & E-commerce">Comércio & E-commerce</option>
                      <option value="Clínica, Saúde & Odonto">Clínica, Saúde & Odonto</option>
                      <option value="Imobiliária & Corretores">Imobiliária & Corretores</option>
                      <option value="Prestação de Serviços">Prestação de Serviços</option>
                      <option value="Educação, Cursos & Escolas">Educação, Cursos & Escolas</option>
                      <option value="Restaurantes & Delivery">Restaurantes & Delivery</option>
                      <option value="Outro Segmento">Outro Segmento</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Volume Médio de Mensagens/Dia
                    </label>
                    <select
                      value={formData.messageVolume}
                      onChange={(e) => setFormData({ ...formData, messageVolume: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Até 20 conversas/dia">Até 20 conversas/dia (Iniciante)</option>
                      <option value="20 a 100 conversas/dia">20 a 100 conversas/dia (Médio)</option>
                      <option value="100 a 500 conversas/dia">100 a 500 conversas/dia (Alto)</option>
                      <option value="Mais de 500 conversas/dia">Mais de 500 conversas/dia (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Data Preferida para Demonstração
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Horário Preferido
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="09:00">09:00 da Manhã</option>
                      <option value="11:00">11:00 da Manhã</option>
                      <option value="14:00">14:00 da Tarde</option>
                      <option value="16:00">16:00 da Tarde</option>
                      <option value="18:30">18:30 (Fim de Tarde)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Qual o principal gargalo no seu atendimento hoje?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Demoramos para responder à noite, perdemos orçamentos ou queremos qualificar quem tem real interesse..."
                    value={formData.mainGoal}
                    onChange={(e) => setFormData({ ...formData, mainGoal: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
                >
                  {isLoading ? (
                    <span>Registrando solicitação...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirmar Agendamento de Demonstração</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Seus dados estão protegidos e não enviamos spam.
                </p>
              </form>
            ) : (
              <div className="py-8 px-4 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Demonstração Solicitada com Sucesso!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Obrigado, <strong className="text-slate-900">{formData.name}</strong>! Nossa equipe
                  entrará em contato via WhatsApp no número <strong className="text-blue-600">{formData.phone}</strong> para
                  confirmar o link da demonstração.
                </p>

                <div className="pt-2">
                  <a
                    href={getWhatsAppSubmissionUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir Conversa Direta no WhatsApp Agora</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="block mx-auto text-xs text-blue-600 hover:underline pt-2 font-medium"
                >
                  Agendar para outra empresa ou horário
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Direct Contacts & Reassurance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-7 text-white shadow-xl border border-blue-900/40">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                Prefere falar agora mesmo?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Nosso time comercial está disponível para tirar qualquer dúvida e iniciar a ativação
                do seu chatbot imediatamente pelo WhatsApp oficial.
              </p>

              <div className="space-y-3">
                <a
                  href={COMPANY_CONTACTS.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 hover:bg-emerald-600 text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-cyan-300 font-semibold block">
                      Atendimento Imediato
                    </span>
                    <span className="text-sm font-bold">
                      {COMPANY_CONTACTS.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_CONTACTS.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 hover:bg-blue-600 text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-slate-300 font-semibold block">
                      E-mail Comercial
                    </span>
                    <span className="text-xs font-bold truncate block">
                      {COMPANY_CONTACTS.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* What to expect box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                O que você verá na demonstração:
              </h5>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Como a IA compreende dúvidas complexas do seu negócio sem travar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>O fluxo de envio de fotos, links de catálogo e checkout Pix.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Painel de monitoramento do servidor dedicado e métricas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Como conectar em 2 minutos via QR Code no seu WhatsApp atual.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
