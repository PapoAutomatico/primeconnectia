import { useState } from 'react';
import { BLOG_POSTS } from '../data/blog';
import { BlogPost } from '../types';
import { BookOpen, Clock, ArrowRight, X, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

interface BlogProps {
  onOpenSchedule: () => void;
}

export function Blog({ onOpenSchedule }: BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['all', 'Vendas', 'Tecnologia'];

  const filteredPosts =
    selectedCategory === 'all'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Conteúdo Especializado & Tendências
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Vantagens da Inteligência Artificial no WhatsApp
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Estratégias, estudos de caso e insights práticos sobre como alavancar vendas e modernizar
            o atendimento da sua marca.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? 'Todos os Artigos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-7 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Key Insight Pill */}
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 mb-5 flex items-center gap-3">
                  <div className="text-xl font-black text-blue-600 font-mono">
                    {post.relatedStat.number}
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium leading-tight">
                    {post.relatedStat.label}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <div className="text-[11px]">
                    <span className="font-bold text-slate-800 block">{post.author.name}</span>
                    <span className="text-slate-400">{post.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(post)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Article Full Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
            <div className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                      {activeArticle.category}
                    </span>
                    <span className="text-xs text-slate-500">• {activeArticle.readTime}</span>
                    <span className="text-xs text-slate-500">• {activeArticle.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {activeArticle.title}
                  </h3>
                  <p className="text-xs text-slate-600">{activeArticle.subtitle}</p>
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors flex-shrink-0"
                  aria-label="Fechar artigo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-slate-700 text-sm leading-relaxed">
                {/* Highlight box */}
                <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-blue-900">
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5 text-blue-800">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    Principais Conclusões para o seu Negócio:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-blue-950">
                    {activeArticle.keyTakeaways.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Article Paragraphs */}
                {activeArticle.content.map((p, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed text-sm">
                    {p}
                  </p>
                ))}

                {/* Bottom Call to Action inside article */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">
                      Gostou desta estratégia?
                    </h5>
                    <p className="text-xs text-slate-500">
                      Podemos implementar essa inteligência no seu WhatsApp em até 48h.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onOpenSchedule();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
                  >
                    <span>Agendar Demonstração</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
