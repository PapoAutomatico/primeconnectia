import { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/plans';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'O que significa "Servidor Sob Medida"?',
      a: 'Diferente de plataformas genéricas onde milhares de usuários dividem o mesmo computador na nuvem (o que gera lentidão e quedas constantes), na PrimeConnect IA alocamos uma instância dedicada monitorada ativamente para sua empresa, com rotinas de backup e manutenção contínua.',
    },
    {
      q: 'Preciso trocar meu número de telefone do WhatsApp?',
      a: 'Não! Você pode usar exatamente o número que sua empresa já utiliza hoje (seja celular comum ou número fixo comercial). A conexão é feita em menos de 2 minutos via leitura de QR Code, como no WhatsApp Web.',
    },
    {
      q: 'Qual a diferença entre a taxa de criação e a mensalidade?',
      a: 'A taxa de criação cobre o setup completo, desenvolvimento dos fluxos de atendimento, treinamento da inteligência artificial com os dados da sua empresa e configuração do servidor. A mensalidade cobre a hospedagem ininterrupta do servidor em nuvem, manutenção preventiva, backups e monitoramento de conexão.',
    },
    {
      q: 'Como funciona o chatbot com menus numéricos (1, 2, 3...)?',
      a: 'O robô envia uma saudação inicial personalizada com um menu numerado e objetivo (ex: [1] Planos, [2] Agendamento, [3] Dúvidas, [4] Falar com Atendente). O cliente digita apenas o número e recebe na hora a resposta exata, fotos, áudios explicativos ou link Pix, com triagem imediata e zero espera.',
    },
    {
      q: 'Se um cliente fizer uma pergunta muito específica, o que acontece?',
      a: 'No Plano Pro e Premium, a IA realiza um transbordo inteligente para sua equipe humana: ela notifica seus atendentes, envia o resumo da conversa e permite que um atendente assuma o atendimento imediatamente sem que o cliente perceba atrito.',
    },
    {
      q: 'Existe risco de banimento do meu número?',
      a: 'A PrimeConnect IA utiliza rotinas seguras que respeitam as boas práticas de envio e tráfego orgânico do WhatsApp. Além disso, a infraestrutura dedicada evita os bloqueios em massa que ocorrem em ferramentas amadoras não monitoradas.',
    },
    {
      q: 'Em quanto tempo meu chatbot estará no ar após a contratação?',
      a: 'O prazo padrão de entrega e ativação é de 24h a 48h úteis após o envio das informações e cardápio/catálogo da sua empresa.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Tudo o que você precisa saber sobre nossa infraestrutura e automação inteligente no WhatsApp.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm text-slate-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-slate-900">Ainda tem alguma pergunta específica?</h4>
            <p className="text-xs text-slate-500">Nosso consultor responde você no WhatsApp em poucos minutos.</p>
          </div>
          <a
            href={COMPANY_CONTACTS.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
