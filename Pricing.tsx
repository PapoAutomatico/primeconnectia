import { useState } from 'react';
import { PRICING_PLANS, COMPANY_CONTACTS } from '../data/plans';
import { PricingPlan } from '../types';
import { Check, Sparkles, Shield, ArrowRight, Phone, Mail, Instagram, HelpCircle, Server } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const [selectedPlanTab, setSelectedPlanTab] = useState<'all' | 'start' | 'pro' | 'premium'>('all');
  const [showComparison, setShowComparison] = useState(false);

  const getDirectPlanWhatsAppUrl = (plan: PricingPlan) => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse em contratar o *${plan.name}* da PrimeConnect IA (Criação: R$ ${plan.creationPrice} + Mensalidade: R$ ${plan.monthlyPrice.toFixed(2).replace('.', ',')}/mês). Gostaria de tirar dúvidas e iniciar a ativação!`
    );
    return `https://wa.me/${COMPANY_CONTACTS.phoneRaw}?text=${text}`;
  };

  const filteredPlans =
    selectedPlanTab === 'all'
      ? PRICING_PLANS
      : PRICING_PLANS.filter((p) => p.id === selectedPlanTab);

  return (
    <section id="planos" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Server className="w-3.5 h-3.5" />
            Infraestrutura & Automação Sob Medida
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Servidores Sob Medida: Planos, Criação e Mensalidade
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Transparência total e estabilidade garantida. Escolha a infraestrutura ideal para a escala
            do seu negócio com suporte comercial, técnico e preventivo.
          </p>

          {/* Plan Filter Tabs */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setSelectedPlanTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedPlanTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Todos os Planos (3)
            </button>
            <button
              onClick={() => setSelectedPlanTab('start')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedPlanTab === 'start'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Plano Start
            </button>
            <button
              onClick={() => setSelectedPlanTab('pro')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedPlanTab === 'pro'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Plano Pro (Recomendado)
            </button>
            <button
              onClick={() => setSelectedPlanTab('premium')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedPlanTab === 'premium'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Plano Premium (Com IA)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {filteredPlans.map((plan) => {
            const isPro = plan.isPopular;
            return (
              <div
                key={plan.id}
                id={`card-plano-${plan.id}`}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  isPro
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white shadow-2xl shadow-blue-600/20 ring-2 ring-blue-500 lg:-translate-y-2'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-300'
                }`}
              >
                {/* Popular Badge */}
                {isPro && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 text-xs font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    RECOMENDADO
                  </div>
                )}

                {/* Card Top Information */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`text-xl font-extrabold tracking-tight ${
                        isPro ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        isPro
                          ? 'bg-blue-500/20 text-cyan-300 border border-blue-400/30'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      Servidor Dedicado
                    </span>
                  </div>

                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      isPro ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Pricing Breakdown */}
                  <div
                    className={`p-4 rounded-2xl mb-6 ${
                      isPro ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200'
                    }`}
                  >
                    <div className="flex items-baseline justify-between border-b pb-3 mb-3 border-slate-200/40">
                      <span className={`text-xs font-semibold ${isPro ? 'text-slate-300' : 'text-slate-600'}`}>
                        Criação & Setup:
                      </span>
                      <span className={`text-lg font-extrabold ${isPro ? 'text-cyan-300' : 'text-slate-900'}`}>
                        R$ {plan.creationPrice.toLocaleString('pt-BR')}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className={`text-xs font-semibold ${isPro ? 'text-slate-300' : 'text-slate-600'}`}>
                          Servidor + Manutenção:
                        </span>
                        <p className={`text-[10px] ${isPro ? 'text-slate-400' : 'text-slate-500'}`}>
                          Mensalidade contínua
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl sm:text-3xl font-black text-blue-600">
                          R$ {plan.monthlyPrice.toFixed(2).replace('.', ',')}
                        </span>
                        <span className={`text-xs ${isPro ? 'text-slate-400' : 'text-slate-500'}`}>
                          /mês
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isPro ? 'text-cyan-300' : 'text-slate-800'
                      }`}
                    >
                      O que está incluso:
                    </p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        {feat.included ? (
                          <div
                            className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${
                              feat.highlight
                                ? 'bg-emerald-500 text-white'
                                : isPro
                                ? 'bg-blue-500/20 text-cyan-300'
                                : 'bg-blue-100 text-blue-600'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full mt-0.5 flex-shrink-0 border border-slate-300 text-slate-300 flex items-center justify-center text-[10px]">
                            -
                          </div>
                        )}
                        <span
                          className={`${
                            !feat.included
                              ? 'text-slate-400 line-through'
                              : feat.highlight
                              ? 'font-bold text-slate-900 dark:text-white'
                              : isPro
                              ? 'text-slate-200'
                              : 'text-slate-700'
                          }`}
                        >
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-4 border-t border-slate-200/20">
                  <a
                    href={getDirectPlanWhatsAppUrl(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all shadow-md ${
                      isPro
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-slate-950 shadow-blue-500/30'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                    }`}
                  >
                    <span>Contratar {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-2 px-4 rounded-xl text-xs font-semibold transition-colors ${
                      isPro
                        ? 'text-slate-300 hover:text-white hover:bg-white/5'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                    }`}
                  >
                    Agendar Demonstração deste plano
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Comparison Modal/Drawer Trigger */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold transition-all shadow-xs"
          >
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>{showComparison ? 'Ocultar Comparativo Completo' : 'Ver Comparativo Técnico Lado a Lado'}</span>
          </button>
        </div>

        {/* Comparison Table View */}
        {showComparison && (
          <div className="mb-16 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-6">
            <h4 className="text-lg font-bold text-slate-900 mb-4">Comparativo Técnico Detalhado</h4>
            <table className="w-full text-left text-xs text-slate-700 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-900">
                  <th className="py-3 px-4 font-bold">Recurso / Especificação</th>
                  <th className="py-3 px-4 font-bold">Plano Start</th>
                  <th className="py-3 px-4 font-bold text-blue-600">Plano Pro (Recomendado)</th>
                  <th className="py-3 px-4 font-bold text-purple-600">Plano Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-semibold">Valor de Criação (Setup)</td>
                  <td className="py-3 px-4">R$ 300</td>
                  <td className="py-3 px-4 font-bold text-blue-600">R$ 599</td>
                  <td className="py-3 px-4 font-bold text-purple-600">R$ 1.670</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Mensalidade (Servidor + Manutenção)</td>
                  <td className="py-3 px-4">R$ 79,90/mês</td>
                  <td className="py-3 px-4 font-bold text-blue-600">R$ 150,00/mês</td>
                  <td className="py-3 px-4 font-bold text-purple-600">R$ 400,00/mês</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Nível de Suporte</td>
                  <td className="py-3 px-4">Suporte Comercial</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">Suporte Prioritário</td>
                  <td className="py-3 px-4 text-purple-600 font-bold">Suporte 24/7 & VIP</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Velocidade de Resposta</td>
                  <td className="py-3 px-4">Rápida</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">Acelerada</td>
                  <td className="py-3 px-4 text-purple-600 font-bold">Ultra Acelerada</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Frequência de Backup</td>
                  <td className="py-3 px-4">Semanal</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">Diário Automático</td>
                  <td className="py-3 px-4 text-purple-600 font-bold">Tempo Real & Diário</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Inteligência Artificial Generativa</td>
                  <td className="py-3 px-4 text-slate-400">Fluxos Fixos</td>
                  <td className="py-3 px-4 text-blue-600">Fluxos Avançados</td>
                  <td className="py-3 px-4 text-purple-600 font-bold">Integração Total com IA</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Monitoramento de Conexão</td>
                  <td className="py-3 px-4">Monitoramento</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">Monitoramento Ativo</td>
                  <td className="py-3 px-4 text-purple-600 font-bold">Monitoramento Contínuo 24/7</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Contact Banner matching planos.jpg faithfully */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-blue-900/60 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Shield className="w-3.5 h-3.5" />
                Contratação Direta & Assessoria
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Dúvidas sobre qual servidor escolher?
              </h3>
              <p className="text-slate-300 text-sm mt-2">
                Fale diretamente com nossa equipe comercial. Analisamos o fluxo de mensagens da sua
                empresa e indicamos a configuração sob medida mais econômica e eficiente.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              {/* Phone from image */}
              <a
                href={`tel:${COMPANY_CONTACTS.phoneRaw}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                    Telefone & WhatsApp
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {COMPANY_CONTACTS.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Email from image */}
              <a
                href={`mailto:${COMPANY_CONTACTS.email}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                    E-mail Oficial
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate block">
                    {COMPANY_CONTACTS.email}
                  </span>
                </div>
              </a>

              {/* Instagram from image */}
              <a
                href={COMPANY_CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                    Instagram Oficial
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {COMPANY_CONTACTS.instagram}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
