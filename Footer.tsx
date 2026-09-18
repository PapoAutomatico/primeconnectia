import { Logo } from './Logo';
import { COMPANY_CONTACTS } from '../data/plans';
import { Phone, Mail, Instagram, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" light={true} showTagline={true} />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Especialistas em automação para WhatsApp com inteligência artificial e servidores
              sob medida. Conecte sua empresa, automatize conversas e simplifique suas vendas 24/7.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Infraestrutura monitorada & segura</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-cyan-300 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-cyan-300 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-cyan-300 transition-colors">
                  Planos & Servidores
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-cyan-300 transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-cyan-300 transition-colors">
                  Blog & Artigos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Plans Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Planos Sob Medida</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between">
                <span className="text-slate-400">Plano Start</span>
                <span className="text-cyan-300 font-mono">R$ 79,90/mês</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-white font-semibold">Plano Pro (Recomendado)</span>
                <span className="text-cyan-300 font-mono font-bold">R$ 150,00/mês</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-400">Plano Premium (Com IA)</span>
                <span className="text-cyan-300 font-mono">R$ 400,00/mês</span>
              </li>
              <li className="pt-2">
                <a
                  href="#planos"
                  className="inline-flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300"
                >
                  <span>Ver especificações completas</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts matching user's image */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contatos Oficiais</h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${COMPANY_CONTACTS.phoneRaw}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>{COMPANY_CONTACTS.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY_CONTACTS.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>{COMPANY_CONTACTS.email}</span>
              </a>

              <a
                href={COMPANY_CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>{COMPANY_CONTACTS.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 PrimeConnect IA. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 text-slate-400 text-[11px]">
            <span>PrimeConnect IA • Vendas & Automação para WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
