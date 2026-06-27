"use client";

import { useCallback, useEffect, useState } from "react";

const navLinks = [
  ["Soluções", "#solucoes"],
  ["Processo", "#processo"],
  ["Tecnologias", "#tecnologias"],
  ["Cases", "#cases"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

const featureCards = [
  {
    title: "Desenvolvimento sob encomenda",
    text: "Soluções construídas para a lógica, escala e prioridade real do negócio.",
    icon: "M4 7h16M7 4v16M17 4v16M4 17h16",
  },
  {
    title: "Consultoria em tecnologia",
    text: "Decisões técnicas, arquitetura e evolução digital com clareza de impacto.",
    icon: "M5 17l4-4 3 3 7-8M5 20h14",
  },
  {
    title: "Web design e interfaces",
    text: "Experiências modernas, rápidas e fáceis de usar em cada ponto de contato.",
    icon: "M4 5h16v14H4zM4 10h16M9 5v14",
  },
  {
    title: "Dados, integrações e automações",
    text: "Fluxos conectados, dados estruturados e operações menos dependentes de esforço manual.",
    icon: "M6 8a3 3 0 106 0 3 3 0 00-6 0zM13 16a3 3 0 106 0 3 3 0 00-6 0zM11 10l4 4",
  },
];

const solutions = [
  [
    "Software sob medida",
    "Sistemas desenvolvidos para atender exatamente às necessidades da sua operação.",
  ],
  [
    "Sistemas web e plataformas SaaS",
    "Produtos digitais escaláveis, seguros e preparados para crescimento.",
  ],
  [
    "Web design e landing pages",
    "Experiências digitais modernas, rápidas e orientadas à conversão.",
  ],
  ["Integrações e APIs", "Conectamos sistemas, dados e operações com arquitetura robusta."],
  [
    "Consultoria em tecnologia",
    "Apoiamos decisões técnicas, arquitetura, produto e evolução digital.",
  ],
  ["Dados e hospedagem", "Estruturação, tratamento, aplicações e ambientes digitais confiáveis."],
];

const processSteps = [
  ["Diagnóstico", "Entendemos o problema, o negócio e os objetivos."],
  ["Estratégia", "Definimos arquitetura, escopo, prioridades e roadmap."],
  ["Design", "Criamos interfaces claras, modernas e funcionais."],
  ["Desenvolvimento", "Construímos com código limpo, escalável e seguro."],
  ["Implantação", "Publicamos, integramos e acompanhamos a operação."],
  ["Evolução", "Medimos resultados e aprimoramos continuamente."],
];

const differentials = [
  ["Engenharia orientada a negócio", "Cada decisão técnica parte do impacto esperado para a operação."],
  ["Design limpo e funcional", "Interfaces sofisticadas, objetivas e fáceis de usar."],
  [
    "Arquitetura escalável",
    "Base técnica preparada para crescer com segurança e previsibilidade.",
  ],
  ["Comunicação objetiva", "Prioridades, riscos e próximos passos sempre claros."],
  [
    "Entregas sob medida",
    "Soluções criadas para contexto real, sem empilhar recursos desnecessários.",
  ],
  [
    "Performance, segurança e evolução",
    "Produtos rápidos, confiáveis e prontos para melhoria contínua.",
  ],
];

const technologies = [
  "Front-end",
  "Back-end",
  "Cloud",
  "APIs",
  "Dados",
  "Automação",
  "Segurança",
  "UX/UI",
  "React",
  "Node.js",
  "Python",
  "AWS",
  "REST",
  "Bancos de dados",
  "Integrações",
];

const cases = [
  {
    image: "/assets/brand-wall-dark.png",
    title: "Plataforma interna de gestão",
    text: "Operações, cadastros, aprovações e indicadores em um sistema próprio.",
  },
  {
    image: "/assets/brand-wall-light.png",
    title: "CRM ou atendimento customizado",
    text: "Fluxos comerciais e relacionamento com clientes adaptados ao seu processo.",
  },
  {
    image: "/assets/brand-wallpaper.jpg",
    title: "Portal institucional premium",
    text: "Presença digital sofisticada, responsiva e pensada para conversão.",
  },
  {
    image: "/assets/brand-wall-dark.png",
    title: "Dashboard de dados e indicadores",
    text: "Visibilidade operacional com métricas, integrações e relatórios acionáveis.",
  },
];

function IconTile({ path }) {
  return (
    <span className="icon-tile" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </span>
  );
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " brand--footer" : ""}`} href="#top" aria-label="Morramidy">
      <img src="/assets/logo-icon-white.png" alt="" className="brand__mark" />
      <span className="brand__name">morramidy</span>
    </a>
  );
}

export default function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeNav = useCallback(() => {
    setNavOpen(false);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", navOpen);

    return () => {
      document.body.classList.remove("nav-locked");
    };
  }, [navOpen]);

  useEffect(() => {
    const syncHeaderState = () => setIsScrolled(window.scrollY > 12);

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", syncHeaderState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeNav();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeNav]);

  useEffect(() => {
    document.documentElement.classList.add("js");

    const revealElements = Array.from(document.querySelectorAll(".reveal"));

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("js");
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    revealElements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.95) {
        element.classList.add("is-visible");
        return;
      }

      revealObserver.observe(element);
    });

    return () => {
      revealObserver.disconnect();
      document.documentElement.classList.remove("js");
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Ir para o conteúdo
      </a>

      <header
        className={`site-header${isScrolled ? " is-scrolled" : ""}${navOpen ? " nav-open" : ""}`}
      >
        <div className="header-shell">
          <Brand />

          <button
            className="nav-toggle"
            type="button"
            aria-label={navOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span></span>
            <span></span>
          </button>

          <nav className="site-nav" id="site-nav" aria-label="Navegação principal">
            {navLinks.map(([label, href]) => (
              <a href={href} onClick={closeNav} key={href}>
                {label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#contato" onClick={closeNav}>
            Fale com um especialista
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="section-shell hero__inner">
            <div className="hero__copy reveal">
              <p className="eyebrow">Software house premium</p>
              <h1 id="hero-title">Software sob medida para empresas que constroem o futuro.</h1>
              <p className="hero__lead">
                Unimos engenharia, design e estratégia para desenvolver soluções digitais
                inteligentes, escaláveis e orientadas a resultado.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#contato">
                  Comece seu projeto
                  <span aria-hidden="true">-&gt;</span>
                </a>
                <a className="button button--ghost" href="#solucoes">
                  Conheça nossas soluções
                </a>
              </div>
              <div className="hero__metrics" aria-label="Áreas de atuação">
                <span>Software</span>
                <span>Web design</span>
                <span>Dados</span>
                <span>Cloud</span>
              </div>
            </div>

            <div className="hero__visual reveal reveal--delay" aria-hidden="true">
              <div className="cube-stage">
                <img
                  src="/assets/logo-icon-white.png"
                  alt=""
                  className="cube-stage__logo"
                  fetchPriority="high"
                />
                <div className="signal-card signal-card--top">
                  <span>Arquitetura</span>
                  <strong>Escalável</strong>
                </div>
                <div className="signal-card signal-card--bottom">
                  <span>Operação</span>
                  <strong>Integrada</strong>
                </div>
                <div className="signal-grid">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <span key={index}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block" id="solucoes" aria-labelledby="authority-title">
          <div className="section-shell">
            <div className="section-head reveal">
              <p className="eyebrow">Precisão digital</p>
              <h2 id="authority-title">Tecnologia com precisão, estratégia e fluidez.</h2>
              <p>
                A Morramidy desenvolve sistemas, plataformas, sites e aplicações digitais sob
                medida para empresas que precisam transformar processos, escalar operações e criar
                experiências digitais de alto impacto.
              </p>
            </div>

            <div className="authority-grid">
              {featureCards.map((card) => (
                <article className="feature-card reveal" key={card.title}>
                  <IconTile path={card.icon} />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block section-block--compact" aria-labelledby="solutions-title">
          <div className="section-shell">
            <div className="section-head section-head--split reveal">
              <div>
                <p className="eyebrow">Soluções</p>
                <h2 id="solutions-title">Soluções digitais completas para o seu negócio.</h2>
              </div>
              <p>
                De sistemas internos a plataformas digitais, cada entrega é pensada para ser útil,
                clara, performática e preparada para evoluir.
              </p>
            </div>

            <div className="solutions-grid">
              {solutions.map(([title, text], index) => (
                <article className="solution-card reveal" key={title}>
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="processo" aria-labelledby="process-title">
          <div className="section-shell">
            <div className="section-head reveal">
              <p className="eyebrow">Processo</p>
              <h2 id="process-title">Do conceito ao produto em produção.</h2>
              <p>
                Um fluxo claro para reduzir incerteza, priorizar o que gera valor e construir com
                qualidade desde o primeiro ciclo.
              </p>
            </div>

            <div className="process-line">
              {processSteps.map(([title, text], index) => (
                <article className="process-step reveal" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block section-block--compact" aria-labelledby="why-title">
          <div className="section-shell">
            <div className="section-head reveal">
              <p className="eyebrow">Diferenciais</p>
              <h2 id="why-title">Por que escolher a Morramidy?</h2>
            </div>

            <div className="differentials-grid">
              {differentials.map(([title, text]) => (
                <article className="mini-card reveal" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section" aria-labelledby="product-title">
          <div className="section-shell product-grid">
            <div className="dashboard-mockup reveal" aria-label="Mockup de dashboard digital">
              <div className="mockup-sidebar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="mockup-main">
                <div className="mockup-topbar">
                  <span></span>
                  <span></span>
                </div>
                <div className="metric-row">
                  <div>
                    <strong>98%</strong>
                    <span>uptime</span>
                  </div>
                  <div>
                    <strong>42k</strong>
                    <span>eventos</span>
                  </div>
                  <div>
                    <strong>12</strong>
                    <span>integrações</span>
                  </div>
                </div>
                <div className="chart-panel">
                  {["44%", "62%", "52%", "78%", "66%", "88%"].map((height) => (
                    <span style={{ height }} key={height}></span>
                  ))}
                </div>
                <div className="data-list">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="product-copy reveal">
              <p className="eyebrow">Produto digital</p>
              <h2 id="product-title">
                Criamos produtos digitais que unem performance técnica, experiência de usuário e
                visão estratégica.
              </h2>
              <p>
                Sistemas internos, portais, dashboards e plataformas passam a operar como ativos de
                negócio: organizam dados, reduzem atrito e dão suporte a decisões melhores.
              </p>
            </div>
          </div>
        </section>

        <section className="section-block" id="tecnologias" aria-labelledby="tech-title">
          <div className="section-shell">
            <div className="section-head section-head--split reveal">
              <div>
                <p className="eyebrow">Tecnologias</p>
                <h2 id="tech-title">Tecnologia certa para cada desafio.</h2>
              </div>
              <p>
                Selecionamos stacks, serviços e integrações de acordo com o problema, o estágio do
                produto e a necessidade de escala.
              </p>
            </div>

            <div className="tech-cloud reveal">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block section-block--compact" id="cases" aria-labelledby="cases-title">
          <div className="section-shell">
            <div className="section-head reveal">
              <p className="eyebrow">Aplicações</p>
              <h2 id="cases-title">O que podemos construir com você.</h2>
            </div>

            <div className="cases-grid">
              {cases.map((caseItem) => (
                <article className="case-card reveal" key={caseItem.title}>
                  <img src={caseItem.image} alt="" loading="lazy" decoding="async" />
                  <div>
                    <h3>{caseItem.title}</h3>
                    <p>{caseItem.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="sobre" aria-labelledby="about-title">
          <div className="section-shell about-grid">
            <div className="about-copy reveal">
              <p className="eyebrow">Sobre</p>
              <h2 id="about-title">
                Uma software house para projetos que exigem clareza, técnica e visão.
              </h2>
              <p>
                A Morramidy nasceu para ajudar empresas a transformar ideias, processos e desafios
                de negócio em soluções digitais sólidas. Atuamos combinando desenvolvimento de
                software, design de interfaces, consultoria tecnológica e visão estratégica.
              </p>
            </div>
            <figure className="brand-panel reveal">
              <img
                src="/assets/brand-wall-dark.png"
                alt="Identidade visual da Morramidy em fundo escuro"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="cta-section" id="contato" aria-labelledby="cta-title">
          <div className="section-shell cta-shell reveal">
            <p className="eyebrow">Contato</p>
            <h2 id="cta-title">Pronto para transformar sua ideia em software?</h2>
            <p>
              Converse com a Morramidy e descubra como podemos desenvolver uma solução digital sob
              medida para o seu negócio.
            </p>
            <a
              className="button button--primary"
              href="mailto:contato@morramidy.com.br?subject=Solicitar%20proposta%20Morramidy"
            >
              Solicitar proposta
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div>
            <Brand footer />
            <p>Software sob medida, design e estratégia para negócios digitais.</p>
          </div>
          <div>
            <h2>Links</h2>
            <a href="#solucoes">Soluções</a>
            <a href="#processo">Processo</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </div>
          <div>
            <h2>Contato</h2>
            <a href="mailto:contato@morramidy.com.br">contato@morramidy.com.br</a>
            <a href="tel:+554198880068">(41) 9888-0068</a>
            <span>Av. Paulista, 1106 - São Paulo, SP</span>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© 2026 Morramidy. Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  );
}
