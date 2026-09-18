import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_CONTACTS } from '../data/plans';
import { Phone, Calendar, Menu, X, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenSchedule: () => void;
}

export function Header({ onOpenSchedule }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Planos & Valores', href: '#planos', highlight: true },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Blog IA', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-950 text-white text-xs py-2 px-4 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-600/30 text-cyan-300 font-semibold border border-cyan-500/30 text-[11px]">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Ativação Rápida em até 48h
            </span>
            <span className="hidden md:inline text-slate-300">
              Servidores dedicados com estabilidade e monitoramento ativo para WhatsApp
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${COMPANY_CONTACTS.phoneRaw}`}
              className="flex items-center gap-1 text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_CONTACTS.phoneDisplay}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={COMPANY_CONTACTS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <span>{COMPANY_CONTACTS.instagram}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section requested at the top */}
          <a href="#inicio" className="group focus:outline-none" aria-label="PrimeConnect IA Home">
            <Logo size="md" showTagline={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  link.highlight
                    ? 'text-blue-600 font-bold hover:text-blue-700'
                    : 'hover:text-blue-600'
                }`}
              >
                {link.label}
                {link.highlight && (
                  <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] bg-blue-100 text-blue-700 font-bold uppercase">
                    3 Opções
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSchedule}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all border border-blue-200"
            >
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>Agendar Demonstração</span>
            </button>

            <a
              href={COMPANY_CONTACTS.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold rounded-lg text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {link.highlight && (
                    <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">
                      Servidores Dedicados
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center gap-2 border border-blue-200"
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                Agendar Demonstração Gratuita
              </button>

              <a
                href={COMPANY_CONTACTS.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                Conversar no WhatsApp ({COMPANY_CONTACTS.phoneDisplay})
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
