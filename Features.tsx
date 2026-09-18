import { Zap, Server, Shield, BrainCircuit, Users, BarChart3, Clock, CheckCircle } from 'lucide-react';

export function Features() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico & Mapeamento',
      desc: 'Entendemos o fluxo de atendimento da sua empresa, horários de pico, principais dúvidas dos clientes e metas de vendas.',
    },
    {
      number: '02',
      title: 'Configuração do Servidor & IA',
      desc: 'Subimos seu servidor sob medida em ambiente dedicado e alimentamos a IA com seus produtos, preços e políticas.',
    },
    {
      number: '03',
      title: 'Conexão via QR Code',
      desc: 'Conectamos seu número oficial do WhatsApp em menos de 2 minutos, sem necessidade de trocar de chip ou operadora.',
    },
    {
      number: '04',
      title: 'Atendimento & Vendas 24/7',
      desc: 'Sua esteira de conversão entra em operação instantânea, com monitoramento contínuo e suporte técnico PrimeConnect IA.',
    },
  ];

  const pillars = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-blue-600" />,
      title: 'Chatbot com Menus Numéricos & IA',
      desc: 'Menus numéricos ágeis (1, 2, 3...) para direcionamento instantâneo do cliente, aliados a respostas inteligentes, envio de catálogos e suporte humanizado.',
    },
    {
      icon: <Server className="w-6 h-6 text-blue-600" />,
      title: 'Servidores Sob Medida',
      desc: 'Ao contrário de soluções compartilhadas que caem a todo momento, você tem infraestrutura isolada, monitorada e com manutenção ativa.',
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: 'Atendimento Ininterrupto 24/7',
      desc: 'Capture e feche clientes à meia-noite, fins de semana e feriados. 78% das compras são decididas pela empresa que responde primeiro.',
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Transbordo Inteligente',
      desc: 'A IA qualifica o lead e, quando necessário, passa a conversa para o vendedor certo com todo o histórico organizado.',
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: 'Segurança & Backups',
      desc: 'Backups automáticos regulares e protocolos que protegem a integridade do seu número contra interrupções de serviço.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: 'Recuperação de Vendas',
      desc: 'Follow-ups automáticos e amigáveis para clientes que pediram orçamento ou link Pix e não concluíram o pagamento.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            Metodologia & Tecnologia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Como a PrimeConnect IA revoluciona seu atendimento
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Combinamos inteligência artificial avançada com estabilidade de servidores dedicados para
            que sua empresa nunca perca uma oportunidade de negócio.
          </p>
        </div>

        {/* 6 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100/70 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <span className="group-hover:text-white transition-colors">{pillar.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Step-by-Step Implementation Timeline */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Implementação Sem Atrito
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Do zero ao WhatsApp rodando no automático em 4 passos
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative hover:bg-white/10 transition-colors"
                >
                  <span className="text-3xl font-extrabold text-cyan-400/50 block mb-3 font-mono">
                    {step.number}
                  </span>
                  <h4 className="font-bold text-base text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
