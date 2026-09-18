import { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Star, Quote, CheckCircle2, MessageSquare, TrendingUp, Building } from 'lucide-react';

export function Testimonials() {
  const [selectedSegment, setSelectedSegment] = useState<string>('all');

  const segments = ['all', 'Saúde & Clínicas', 'E-commerce & Varejo', 'Imobiliário & Construção', 'Educação & Beleza'];

  const filteredTestimonials =
    selectedSegment === 'all'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.segment.includes(selectedSegment));

  return (
    <section id="depoimentos" className="py-20 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            Resultados Comprovados
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            O que nossos clientes dizem sobre a PrimeConnect IA
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Empresas reais que trocaram respostas manuais atrasadas por uma infraestrutura dedicada
            de atendimento automatizado inteligente.
          </p>

          {/* Segment Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {segments.map((seg) => (
              <button
                key={seg}
                onClick={() => setSelectedSegment(seg)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedSegment === seg
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-400'
                }`}
              >
                {seg === 'all' ? 'Todos os Segmentos' : seg}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Rating & Metric */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    {item.metric}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-500/20"
                />
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-xs text-slate-900 truncate">{item.name}</h4>
                    {item.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 truncate">
                    {item.role} • <span className="text-blue-600 font-medium">{item.company}</span>
                  </p>
                  <span className="inline-block mt-0.5 text-[10px] text-slate-400">
                    Segmento: {item.segment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proven Proof Metrics Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-8 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-blue-700/50">
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-black text-cyan-300 block font-mono">
                99.9%
              </span>
              <span className="text-xs text-slate-300 mt-1 block">
                Disponibilidade & Uptime dos Servidores
              </span>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-black text-white block font-mono">
                &lt; 3 seg
              </span>
              <span className="text-xs text-slate-300 mt-1 block">
                Tempo Médio de Primeira Resposta
              </span>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-black text-cyan-300 block font-mono">
                +85%
              </span>
              <span className="text-xs text-slate-300 mt-1 block">
                De Dúvidas Resolvidas Sem Humano
              </span>
            </div>
            <div className="p-2">
              <span className="text-3xl sm:text-4xl font-black text-white block font-mono">
                24/7
              </span>
              <span className="text-xs text-slate-300 mt-1 block">
                Vendas & Qualificação em Tempo Real
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
