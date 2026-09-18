import { useState } from 'react';
import { WhatsAppSimulator } from './WhatsAppSimulator';
import { COMPANY_CONTACTS } from '../data/plans';
import { Sparkles, Calendar, ShieldCheck, Zap, ArrowRight, CheckCircle2, Image as ImageIcon, Bot, Play, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenSchedule: () => void;
}

export function Hero({ onOpenSchedule }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'capa' | 'sim'>('capa');

  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background Decorative Grid and Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="uppercase">Vendas & Automação com IA</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium">PrimeConnect IA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Transforme seu <span className="text-blue-600">WhatsApp</span> em uma esteira de vendas{' '}
              <span className="underline decoration-cyan-400 decoration-4 underline-offset-4">24/7 com IA</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Chega de perder clientes por demora no atendimento. Nossos chatbots inteligentes
              qualificam leads, respondem dúvidas instantaneamente e fecham vendas com a linguagem da
              sua empresa e servidores dedicados sob medida.
            </p>

            {/* Highlighted Benefits Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Resposta em &lt; 3 segundos</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Servidores dedicados e estáveis</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Sem risco de bloqueios comuns</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenSchedule}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 hover:from-blue-700 hover:to-slate-950 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Agendar Demonstração Rápida</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#planos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 shadow-xs transition-all"
              >
                <span>Ver Planos & Servidores</span>
              </a>
            </div>

            {/* Direct Contact Micro-Info */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Ativação personalizada e homologada
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-blue-500" />
                WhatsApp: {COMPANY_CONTACTS.phoneDisplay}
              </span>
            </div>
          </div>

          {/* Right Column: Toggle between Capa Oficial and WhatsApp Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* View Switcher Tabs */}
            <div className="flex items-center p-1 bg-slate-200/80 rounded-2xl mb-4 shadow-inner border border-slate-300/80 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('capa')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  activeTab === 'capa'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Capa Oficial</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sim')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  activeTab === 'sim'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Simulador WhatsApp</span>
              </button>
            </div>

            {/* Tab 1: Capa Oficial Banner */}
            {activeTab === 'capa' && (
              <div className="w-full max-w-[420px] transition-all duration-300">
                <div className="relative rounded-[28px] bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 p-3.5 shadow-2xl shadow-blue-500/25 ring-1 ring-white/20 overflow-hidden group">
                  {/* Badge no topo da imagem */}
                  <div className="flex items-center justify-between px-2 pb-2.5 text-xs">
                    <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>PrimeConnect IA</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/30 text-[10px] font-semibold text-cyan-200 border border-cyan-400/30">
                      Capa Oficial
                    </span>
                  </div>

                  {/* Imagem da Capa */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-inner bg-slate-900">
                    <img
                      src="/capa.jpg"
                      alt="PrimeConnect IA - Vendas & Automação"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover aspect-square rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    
                    {/* Overlay gradiente inferior */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Info bar inferior */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white font-medium bg-slate-900/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 shadow-lg">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-bold text-cyan-300">@prime.connectia</span>
                      </div>
                      <span className="text-slate-300 text-[10px]">Automação 24h</span>
                    </div>
                  </div>

                  {/* Ações Rápidas abaixo da Capa */}
                  <div className="mt-3.5 pt-2 border-t border-slate-800/90 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab('sim')}
                      className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all"
                    >
                      <Play className="w-3.5 h-3.5 text-cyan-300 fill-cyan-300" />
                      <span>Testar Robô</span>
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_CONTACTS.phoneRaw}?text=${encodeURIComponent(
                        'Olá! Vi a capa oficial da PrimeConnect IA e gostaria de ativar meu robô de WhatsApp.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Real</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Simulador do WhatsApp */}
            {activeTab === 'sim' && (
              <div className="w-full">
                <WhatsAppSimulator />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
