import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Instagram, ChevronRight, Calendar, Megaphone, CheckCircle2, ArrowRight, Briefcase, Award, Send } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Sobre', id: 'sobre' },
    { name: 'Experiência', id: 'experiencia' },
    { name: 'Projetos', id: 'projetos' },
    { name: 'Resultados', id: 'resultados' },
    { name: 'Competências', id: 'competencias' },
    { name: 'Contato', id: 'contato' },
  ];

  return (
    <div className="min-h-screen bg-light text-dark font-sans selection:bg-secondary/30 selection:text-primary">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-muted shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <button onClick={() => scrollTo('hero')} className="text-2xl md:text-3xl font-serif text-primary tracking-wide">
            Julia Mendes
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-muted hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-muted shadow-lg py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className="text-left text-base font-medium text-muted hover:text-primary py-2"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-start justify-center min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-dark leading-[1.1] mb-8 flex flex-col gap-2 md:gap-4 border-l-[6px] border-primary pl-6 md:pl-8">
            <span>Projetos</span>
            <span>Produção de Eventos</span>
            <span>Comunicação Digital</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed">
            Da organização à execução, transformando ideias em projetos que realmente acontecem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollTo('experiencia')}
              className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Ver Experiência
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('contato')}
              className="px-8 py-4 bg-white text-dark border border-muted rounded-full font-medium hover:bg-light hover:border-muted transition-colors flex items-center justify-center"
            >
              Entrar em contato
            </button>
          </div>
        </motion.div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8">Sobre Mim</h2>
            <div className="space-y-6 text-lg md:text-xl text-dark/80 leading-relaxed font-light">
              <p>
                Gosto de transformar organização em ação. Minha experiência vem da prática — do ritmo acelerado dos eventos e da dinâmica das campanhas digitais, onde cada detalhe faz diferença no resultado final.
              </p>
              <p>
                Ao longo da minha trajetória, fui me aproximando cada vez mais do universo dos projetos, participando da organização, planejamento e execução de diferentes demandas, sempre buscando manter tudo alinhado, dentro do prazo e funcionando da melhor forma possível.
              </p>
              <p>
                Tenho um perfil organizado, proativo e adaptável, com facilidade para lidar com múltiplas atividades ao mesmo tempo. Estou em constante evolução, construindo minha trajetória na área de projetos com base na experiência, no aprendizado contínuo e na vontade de fazer cada entrega acontecer da melhor forma.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiencia" className="py-24 bg-light px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-12 text-center">Áreas de Atuação</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-light h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <Megaphone size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-dark mb-6">Social Media</h3>
                <ul className="space-y-4">
                  {[
                    'Planejamento de campanhas digitais',
                    'Organização de cronogramas de postagens',
                    'Execução de estratégias de divulgação',
                    'Acompanhamento de resultados'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted">
                      <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-light h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <Calendar size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-dark mb-6">Produção de Eventos</h3>
                <ul className="space-y-4">
                  {[
                    'Liderança na organização de eventos',
                    'Coordenação de atividades operacionais',
                    'Comunicação com equipes e fornecedores',
                    'Apoio na execução logística'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted">
                      <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-12">Projetos em Destaque</h2>
          </FadeIn>

          <div className="space-y-12">
            {/* Projeto 1 */}
            <FadeIn delay={0.1}>
              <div className="group rounded-3xl bg-light border border-light overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-secondary/10 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-light">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-secondary/30 w-fit">
                    Megaevento
                  </div>
                  <h3 className="text-3xl font-bold text-dark mb-4">Evento Totus Tuus</h3>
                  <p className="text-muted">Maior evento católico do Centro-Oeste, reunindo mais de 60 mil pessoas em uma experiência monumental de fé e estrutura.</p>
                </div>
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-lg font-medium text-dark mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-primary" />
                    Nos Bastidores
                  </h4>
                  <p className="text-muted text-lg leading-relaxed">
                    Garantir que 60 mil pessoas tenham uma experiência impecável exige precisão absoluta. Atuei no coração da logística, transformando cronogramas complexos em execução fluida. Fui responsável por apoiar a estruturação das atividades e assegurar que cada detalhe do evento acontecesse no tempo exato, lidando com a pressão de um público massivo com organização e agilidade.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Projeto 2 */}
            <FadeIn delay={0.2}>
              <div className="group rounded-3xl bg-light border border-light overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-secondary/10 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-light">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-secondary/30 w-fit">
                    Festival
                  </div>
                  <h3 className="text-3xl font-bold text-dark mb-4">Buteco do Gusttavo Lima</h3>
                  <p className="text-muted">Um dos maiores festivais de música sertaneja do Brasil, conhecido por sua megaestrutura, longas horas de duração e recordes de público.</p>
                </div>
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-lg font-medium text-dark mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-primary" />
                    Nos Bastidores
                  </h4>
                  <p className="text-muted text-lg leading-relaxed">
                    Em um festival dessa magnitude, o ritmo é intenso e a margem para erros é zero. Fui peça-chave na engrenagem operacional, orquestrando a comunicação entre múltiplas equipes e fornecedores. Meu foco foi garantir que a megaestrutura funcionasse em perfeita harmonia, resolvendo imprevistos em tempo real para que o espetáculo não parasse.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Projeto 3 */}
            <FadeIn delay={0.3}>
              <div className="group rounded-3xl bg-light border border-light overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-secondary/10 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-light">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-secondary/30 w-fit">
                    Cruzeiro Temático
                  </div>
                  <h3 className="text-3xl font-bold text-dark mb-4">Cruzeiro da Ana Castela</h3>
                  <p className="text-muted">Um festival em alto mar. Dias de shows intensos e entretenimento contínuo com a maior artista do agronejo do país.</p>
                </div>
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-lg font-medium text-dark mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-primary" />
                    Nos Bastidores
                  </h4>
                  <p className="text-muted text-lg leading-relaxed">
                    Produção em alto mar é um desafio logístico único onde a adaptabilidade é a regra. Apoiei a coordenação das atividades operacionais em um ambiente confinado e dinâmico, garantindo entregas rápidas e suporte contínuo para que a magia acontecesse no palco, independentemente dos desafios logísticos do navio.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Projeto 4 */}
            <FadeIn delay={0.4}>
              <div className="group rounded-3xl bg-light border border-light overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-secondary/10 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-light">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-secondary/30 w-fit">
                    Gravação Audiovisual
                  </div>
                  <h3 className="text-3xl font-bold text-dark mb-4">Registro Histórico Luan Santana</h3>
                  <p className="text-muted">Gravação de DVD com superprodução, cenografia imersiva e captação audiovisual de altíssimo nível.</p>
                </div>
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-lg font-medium text-dark mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-primary" />
                    Nos Bastidores
                  </h4>
                  <p className="text-muted text-lg leading-relaxed">
                    Fazer parte da história exige foco absoluto. Contribuí diretamente para a organização do set e o fluxo das equipes de produção. Em um ambiente onde cada segundo de gravação custa caro, atuei para manter a ordem nos bastidores, ajudando a construir o ambiente perfeito para um registro audiovisual impecável.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Projeto 5 */}
            <FadeIn delay={0.5}>
              <div className="group rounded-3xl bg-light border border-light overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-secondary/10 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-light">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-secondary/30 w-fit">
                    Shows Diversos
                  </div>
                  <h3 className="text-3xl font-bold text-dark mb-4">Grandes Nomes da Música</h3>
                  <p className="text-muted">Produções de diversos artistas brasileiros de renome nacional, com diferentes formatos e públicos.</p>
                </div>
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-lg font-medium text-dark mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-primary" />
                    Nos Bastidores
                  </h4>
                  <p className="text-muted text-lg leading-relaxed">
                    A versatilidade é minha marca. De shows intimistas a grandes arenas, atuo nos bastidores para que o artista brilhe e o público viva momentos inesquecíveis. Minha experiência abrange a resolução rápida de problemas, gestão de camarins, logística de palco e excelência na entrega, independentemente do tamanho do evento.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="py-24 bg-dark text-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-6">Resultados e Impacto</h2>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                Foco em entregar bem e evoluir constantemente os processos
              </h3>
              <p className="text-muted text-lg">
                Através da prática, organização e atenção aos detalhes, contribuo para que projetos aconteçam com mais fluidez, mesmo em contextos dinâmicos e de grande escala.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                {[
                  'Apoio na execução de eventos dentro dos prazos planejados',
                  'Organização de atividades com foco em reduzir falhas operacionais',
                  'Melhoria na organização e no fluxo das entregas',
                  'Participação em projetos com grande volume de público e operação intensa',
                  'Desenvolvimento contínuo em ambientes dinâmicos e de alta demanda'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-dark/50 p-4 rounded-2xl border border-muted/30">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-secondary">
                      <Award size={20} />
                    </div>
                    <p className="text-light pt-2">{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Competências Section */}
      <section id="competencias" className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-12">Competências</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Organização e planejamento',
                'Gestão de cronogramas',
                'Comunicação',
                'Trabalho em equipe',
                'Resolução de problemas',
                'Organização de processos'
              ].map((skill, i) => (
                <span 
                  key={i} 
                  className="px-6 py-3 bg-light border border-muted rounded-full text-dark/90 font-medium text-lg hover:border-secondary hover:bg-secondary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24 bg-light px-6 md:px-12 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Vamos Conversar</h2>
              <h3 className="text-4xl font-bold text-dark mb-6">
                Pronta para novos desafios em projetos.
              </h3>
              <p className="text-lg text-muted mb-10">
                Se você busca uma profissional dedicada, organizada e com experiência prática em apoio a projetos, entre em contato.
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="https://instagram.com/juliamendes22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-dark/80 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white border border-muted flex items-center justify-center group-hover:border-secondary/50 group-hover:bg-secondary/20 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span className="font-medium text-lg">@juliamendes22</span>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <form className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-light" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark/80 mb-2">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-xl border border-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-light focus:bg-white"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark/80 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-xl border border-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-light focus:bg-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark/80 mb-2">Mensagem</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-light focus:bg-white resize-none"
                      placeholder="Como posso ajudar?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                  >
                    Enviar mensagem
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-muted text-center px-6">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Júlia Mendes. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
