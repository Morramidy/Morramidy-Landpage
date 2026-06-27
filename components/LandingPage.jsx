"use client";

import { useCallback, useEffect, useState } from "react";

const CONTACT_EMAIL = "morramidy.development@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/morramidy_/";

const navLinks = [
  ["Diagnóstico", "#diagnostico"],
  ["Soluções", "#solucoes"],
  ["Processo", "#processo"],
  ["IA aplicada", "#ia"],
  ["Provas", "#provas"],
  ["FAQ", "#faq"],
  ["Contato", "#contato"],
];

const problems = [
  [
    "Processos manuais",
    "Planilhas, mensagens e tarefas repetidas consomem tempo e aumentam o risco de erro.",
  ],
  [
    "Dados espalhados",
    "Informações importantes ficam desconectadas, dificultando análise e tomada de decisão.",
  ],
  [
    "Sistemas que não conversam",
    "Ferramentas isoladas criam retrabalho e impedem uma operação fluida.",
  ],
  [
    "Produto sem evolução",
    "Ideias boas travam quando não há arquitetura, priorização e execução técnica.",
  ],
  [
    "Baixa visibilidade",
    "Sem indicadores claros, a gestão decide com atraso ou pouca confiança.",
  ],
];

const comparisonRows = [
  [
    "Planilhas, mensagens e tarefas soltas",
    "Fluxo digital com etapas, responsáveis e indicadores no mesmo lugar",
  ],
  [
    "Sistemas genéricos que forçam adaptação do time",
    "Software desenhado para as regras, exceções e prioridades da operação",
  ],
  [
    "Decisão sem visão clara de dados",
    "Painéis e automações que mostram gargalos antes que eles virem custo",
  ],
  [
    "Ideias travadas por incerteza técnica",
    "Diagnóstico, protótipo e arquitetura antes de comprometer investimento",
  ],
];

const valuePillars = [
  [
    "Estratégia antes do código",
    "Transformamos necessidade de negócio em escopo, prioridades e roadmap técnico.",
  ],
  [
    "Engenharia preparada para evoluir",
    "Construímos sistemas organizados, integráveis e prontos para manutenção.",
  ],
  [
    "Experiência para usuários reais",
    "Desenhamos fluxos claros para melhorar adoção, eficiência e tomada de decisão.",
  ],
];

const solutions = [
  [
    "Software sob medida",
    "Sistemas criados para regras, fluxos e objetivos específicos da sua empresa.",
  ],
  [
    "Sistemas web",
    "Aplicações modernas para gestão, atendimento, operação, análise e relacionamento.",
  ],
  [
    "MVP e SaaS",
    "Do primeiro produto validável a uma base técnica consistente para crescimento.",
  ],
  [
    "Integrações e APIs",
    "Conectamos sistemas, bancos de dados e serviços externos com arquitetura confiável.",
  ],
  [
    "Automação de processos",
    "Reduzimos tarefas manuais e criamos fluxos digitais mais previsíveis.",
  ],
  [
    "Modernização de sistemas",
    "Evoluímos produtos existentes com melhor performance, UX e manutenção.",
  ],
  [
    "UX/UI para produtos digitais",
    "Interfaces claras, profissionais e funcionais para melhorar adoção e eficiência.",
  ],
  [
    "Dashboards e indicadores",
    "Painéis para transformar dados operacionais em decisão e visibilidade.",
  ],
];

const processSteps = [
  ["Diagnóstico", "Entendemos o problema, o negócio, os usuários e as restrições."],
  ["Escopo", "Definimos prioridades, funcionalidades e critérios de sucesso."],
  ["Protótipo", "Validamos fluxos e telas antes de comprometer desenvolvimento."],
  ["Arquitetura", "Planejamos base técnica, integrações, dados, segurança e evolução."],
  ["Desenvolvimento", "Construímos com ciclos objetivos, qualidade técnica e comunicação clara."],
  ["Implantação", "Publicamos, configuramos ambientes e acompanhamos a entrada em operação."],
  ["Evolução", "Medimos, ajustamos e expandimos conforme o negócio cresce."],
];

const differentials = [
  ["Menos risco técnico", "Decisões importantes são tomadas antes de comprometer tempo e orçamento."],
  ["Clareza de execução", "Você sabe o que será construído, por que e em qual prioridade."],
  ["Design funcional", "A interface serve ao processo, não apenas à estética."],
  ["Arquitetura preparada", "O sistema nasce pronto para manutenção, integração e crescimento."],
  ["Comunicação direta", "Riscos, decisões e próximos passos ficam visíveis durante o projeto."],
  ["Visão de negócio", "A entrega é pensada para operação, eficiência e resultado."],
];

const aiPrinciples = [
  [
    "Produtividade com critério",
    "IA entra para acelerar pesquisa, rascunhos técnicos, documentação, testes e revisão sem terceirizar decisão importante.",
  ],
  [
    "Engenharia continua no controle",
    "Arquitetura, segurança, regras de negócio, integrações e manutenção passam por validação humana e contexto real do projeto.",
  ],
  [
    "Sem vibe code",
    "Nada de copiar resposta pronta e torcer para funcionar. O código precisa ser compreendido, revisado, testável e sustentável.",
  ],
];

const productTabs = [
  {
    id: "operacao",
    label: "Operação",
    eyebrow: "Roadmap priorizado",
    title: "Sistema operacional interno",
    status: "Em produção",
    metrics: [
      ["Gargalos mapeados", "Fluxos críticos"],
      ["Risco reduzido", "Antes do código"],
      ["Entrega", "Ciclos claros"],
    ],
    workflow: ["Ideia", "Escopo", "UX/UI", "API", "Deploy"],
    chartEyebrow: "Visibilidade da operação",
    chartTitle: "Dados, produto e execução conectados.",
    chartBars: [42, 58, 48, 72, 66, 84],
  },
  {
    id: "dados",
    label: "Dados",
    eyebrow: "Indicadores consolidados",
    title: "Dashboard executivo",
    status: "Dados vivos",
    metrics: [
      ["Fontes conectadas", "APIs e banco"],
      ["Decisão", "Visão única"],
      ["Ritmo", "Alertas claros"],
    ],
    workflow: ["Coleta", "Modelo", "Métricas", "Alertas", "Decisão"],
    chartEyebrow: "Leitura gerencial",
    chartTitle: "Indicadores organizados para decidir com menos ruído.",
    chartBars: [34, 46, 64, 52, 78, 88],
  },
  {
    id: "automacao",
    label: "Automação",
    eyebrow: "Fluxos automatizados",
    title: "Rotinas sem retrabalho",
    status: "Integrado",
    metrics: [
      ["Tarefas manuais", "Reduzidas"],
      ["Integrações", "Sincronizadas"],
      ["Operação", "Mais previsível"],
    ],
    workflow: ["Entrada", "Regra", "Validação", "Integração", "Saída"],
    chartEyebrow: "Eficiência operacional",
    chartTitle: "Menos tarefas repetidas e mais controle sobre exceções.",
    chartBars: [26, 42, 56, 70, 82, 76],
  },
  {
    id: "produto",
    label: "Produto",
    eyebrow: "MVP evolutivo",
    title: "Produto digital escalável",
    status: "Roadmap ativo",
    metrics: [
      ["Usuários", "Fluxos claros"],
      ["Arquitetura", "Preparada"],
      ["Evolução", "Backlog vivo"],
    ],
    workflow: ["Descoberta", "MVP", "Feedback", "Escala", "Evolução"],
    chartEyebrow: "Crescimento do produto",
    chartTitle: "Base técnica pronta para validar, aprender e expandir.",
    chartBars: [30, 44, 60, 68, 74, 90],
  },
];

const proofItems = [
  "Sistemas internos de gestão",
  "Plataformas web e portais",
  "Produtos MVP e SaaS",
  "Dashboards operacionais",
  "Integrações entre sistemas",
  "Automação de rotinas",
  "Modernização de sistemas",
  "UX/UI para produtos digitais",
];

const offerTracks = [
  [
    "Diagnóstico técnico",
    "Organizamos ideia, riscos, integrações e prioridades antes de iniciar o desenvolvimento.",
  ],
  [
    "MVP validável",
    "Construímos uma primeira versão enxuta para testar valor, operação e experiência de uso.",
  ],
  [
    "Sistema sob medida",
    "Criamos plataformas, portais, CRMs, ERPs internos e fluxos digitais específicos.",
  ],
  [
    "Evolução de produto",
    "Melhoramos sistemas existentes com UX, arquitetura, performance e integrações.",
  ],
];

const examples = [
  [
    "CRM customizado",
    "Atendimento, funil comercial, histórico e automações no fluxo da sua empresa.",
  ],
  [
    "Portal de clientes",
    "Área logada para dados, documentos, solicitações e acompanhamento.",
  ],
  [
    "Sistema operacional interno",
    "Controle de processos, aprovações, cadastros e tarefas críticas.",
  ],
  [
    "Dashboard executivo",
    "Indicadores consolidados para gestão acompanhar performance e gargalos.",
  ],
  [
    "Plataforma SaaS",
    "Produto digital com usuários, permissões, planos e evolução contínua.",
  ],
  [
    "Integrações e automações",
    "APIs e rotinas para conectar ferramentas e eliminar retrabalho.",
  ],
];

const technologies = [
  "Front-end",
  "Back-end",
  "Cloud",
  "APIs REST",
  "Bancos de dados",
  "Automação",
  "Segurança",
  "UX/UI",
  "React",
  "Node.js",
  "Python",
  "AWS",
  "Integrações",
  "Arquitetura",
];

const faqs = [
  [
    "Preciso ter o escopo pronto?",
    "Não. Podemos começar pelo diagnóstico e transformar sua necessidade em escopo, prioridades e plano técnico.",
  ],
  [
    "Vocês fazem apenas desenvolvimento?",
    "Não. Atuamos com estratégia, UX/UI, arquitetura, desenvolvimento, integrações, implantação e evolução.",
  ],
  [
    "É possível começar com um MVP?",
    "Sim. Priorizamos uma primeira versão enxuta para validar valor antes de ampliar investimento e escopo.",
  ],
  [
    "Vocês integram com sistemas existentes?",
    "Sim. Projetamos APIs, automações e integrações conforme o ambiente técnico disponível.",
  ],
  [
    "Vocês fazem manutenção e evolução?",
    "Sim. Podemos acompanhar o produto após a implantação, corrigindo, melhorando e expandindo funcionalidades.",
  ],
  [
    "Como pedir orçamento?",
    "O melhor caminho é iniciar por uma conversa de diagnóstico para entender objetivo, complexidade e prioridade.",
  ],
];

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " brand--footer" : ""}`} href="#top" aria-label="Morramidy">
      <span className="brand__lockup" aria-hidden="true"></span>
      <span className="brand__sr">Morramidy</span>
    </a>
  );
}

function Arrow() {
  return <span aria-hidden="true">-&gt;</span>;
}

function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = productTabs[activeIndex];

  return (
    <div className="product-showcase" aria-label="Exemplos de interfaces e fluxos digitais">
      <div className="showcase-tabs" role="tablist" aria-label="Visualizações do produto">
        {productTabs.map((item, index) => (
          <button
            className={index === activeIndex ? "is-active" : ""}
            id={`showcase-tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`showcase-panel-${item.id}`}
            onClick={() => setActiveIndex(index)}
            key={item.id}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        className="product-window"
        id={`showcase-panel-${activeTab.id}`}
        role="tabpanel"
        aria-labelledby={`showcase-tab-${activeTab.id}`}
      >
        <div className="mockup-topbar">
          <span></span>
          <span></span>
        </div>

        <div className="product-window__body">
          <aside className="product-window__rail">
            {["01", "02", "03", "04"].map((item) => (
              <span className={item === "01" ? "is-active" : ""} key={item}>
                {item}
              </span>
            ))}
          </aside>

          <div className="product-window__main" key={activeTab.id}>
            <div className="product-window__header">
              <div>
                <small>{activeTab.eyebrow}</small>
                <strong>{activeTab.title}</strong>
              </div>
              <span>{activeTab.status}</span>
            </div>

            <div className="metric-grid">
              {activeTab.metrics.map(([label, value]) => (
                <div key={label}>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <div className="workflow-board">
              {activeTab.workflow.map((item, index) => (
                <div className="workflow-node" style={{ "--node-index": index }} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>

            <div className="chart-card">
              <div>
                <small>{activeTab.chartEyebrow}</small>
                <strong>{activeTab.chartTitle}</strong>
              </div>
              <div className="chart-bars">
                {activeTab.chartBars.map((height, index) => (
                  <span
                    style={{ "--bar-height": `${height}%`, "--bar-index": index }}
                    key={`${activeTab.id}-${index}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIProductivityIllustration() {
  return (
    <div className="ai-illustration" aria-hidden="true">
      <div className="ai-illustration__grid"></div>
      <div className="ai-core">
        <img src="/assets/logo-icon-white.png" alt="" />
        <span>IA aplicada</span>
      </div>
      <div className="ai-lane ai-lane--one">
        <span>Contexto</span>
        <strong>Briefing</strong>
      </div>
      <div className="ai-lane ai-lane--two">
        <span>Critério</span>
        <strong>Arquitetura</strong>
      </div>
      <div className="ai-lane ai-lane--three">
        <span>Qualidade</span>
        <strong>Testes</strong>
      </div>
      <div className="ai-output">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

function CaseVisual({ index }) {
  return (
    <div className="case-visual" aria-hidden="true">
      <div className="case-visual__topbar">
        <span></span>
        <span></span>
      </div>
      <div className="case-visual__layout">
        <div className="case-visual__rail">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="case-visual__content">
          <span className="case-visual__line case-visual__line--wide"></span>
          <div className="case-visual__cards">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="case-visual__chart">
            {[44, 62, 52, 76, 66].map((height, barIndex) => (
              <span
                style={{ "--bar-height": `${height - index * 2}%`, "--bar-index": barIndex }}
                key={barIndex}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  const closeNav = useCallback(() => {
    setNavOpen(false);
  }, []);

  const handleDiagnosticSubmit = useCallback((event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = [
      ["Nome", formData.get("name")],
      ["Empresa", formData.get("company")],
      ["E-mail", formData.get("email")],
      ["Tipo de projeto", formData.get("projectType")],
      ["Principal desafio", formData.get("challenge")],
    ];
    const company = formData.get("company") || "novo projeto";
    const body = fields
      .filter(([, value]) => String(value || "").trim())
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Diagnóstico Morramidy - ${company}`,
    )}&body=${encodeURIComponent(body)}`;
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", navOpen);

    return () => {
      document.body.classList.remove("nav-locked");
    };
  }, [navOpen]);

  useEffect(() => {
    const syncHeaderState = () => {
      setIsScrolled(window.scrollY > 12);
      setShowStickyCta(window.scrollY > 1800);
    };

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

          <a className="header-cta" href="#diagnostico" onClick={closeNav}>
            Agendar diagnóstico
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="section-shell hero__inner">
            <div className="hero__copy reveal">
              <div className="hero__proof" aria-label="Frentes estratégicas da Morramidy">
                <span>Diagnóstico</span>
                <span>Escopo</span>
                <span>UX/UI</span>
                <span>Arquitetura</span>
                <strong>Clareza técnica antes da primeira linha de código.</strong>
              </div>
              <p className="eyebrow">Software house estratégica</p>
              <h1 id="hero-title">
                Software sob medida para transformar processos complexos em produtos digitais
                escaláveis.
              </h1>
              <p className="hero__lead">
                A Morramidy ajuda empresas a estruturar, desenhar e desenvolver sistemas web,
                plataformas, integrações e produtos digitais com clareza técnica, boa experiência
                de uso e arquitetura preparada para evolução.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#diagnostico">
                  Agendar diagnóstico
                  <Arrow />
                </a>
                <a className="button button--ghost" href="#exemplos">
                  Ver exemplos de soluções
                </a>
              </div>
              <p className="hero__microcopy">
                Conte sua ideia ou gargalo operacional. Nós ajudamos a transformar em escopo,
                arquitetura e plano de execução.
              </p>
              <div className="hero__metrics" aria-label="Frentes de atuação">
                <span>MVP e SaaS</span>
                <span>Sistemas web</span>
                <span>Integrações</span>
                <span>Automação</span>
              </div>
            </div>

            <div className="hero__visual reveal reveal--delay">
              <ProductShowcase />
            </div>
          </div>
        </section>

        <section className="section-block section-block--tight comparison-section" aria-labelledby="comparison-title">
          <div className="section-shell">
            <div className="section-head section-head--wide reveal">
              <p className="eyebrow">Antes e depois</p>
              <h2 id="comparison-title">
                Não é só desenvolver uma tela. É transformar a operação em um produto digital que
                funciona.
              </h2>
              <p>
                O salto de qualidade vem quando processo, dados, experiência e arquitetura deixam
                de viver separados.
              </p>
            </div>

            <div className="comparison-card reveal">
              <div className="comparison-card__head">
                <span>O que limita crescimento</span>
                <strong>vs</strong>
                <span>O que construímos</span>
              </div>
              <div className="comparison-rows">
                {comparisonRows.map(([before, after]) => (
                  <div className="comparison-row" key={before}>
                    <p>{before}</p>
                    <span></span>
                    <p>{after}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-block section-block--tight" id="problemas" aria-labelledby="problems-title">
          <div className="section-shell">
            <div className="section-head section-head--wide reveal">
              <p className="eyebrow">Problemas que destravam crescimento</p>
              <h2 id="problems-title">
                Quando a operação cresce, planilhas e sistemas genéricos começam a limitar o
                negócio.
              </h2>
              <p>
                Seu negócio não precisa de mais uma ferramenta padrão. Precisa de uma solução que
                acompanhe a forma como sua operação realmente funciona.
              </p>
            </div>

            <div className="problem-grid">
              {problems.map(([title, text], index) => (
                <article className="problem-card reveal" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block section-block--alt" aria-labelledby="value-title">
          <div className="section-shell">
            <div className="section-head section-head--split reveal">
              <div>
                <p className="eyebrow">Proposta de valor</p>
                <h2 id="value-title">Da ideia ao software em produção, com estratégia antes do código.</h2>
              </div>
              <p>
                Antes de desenvolver, entendemos o problema, o contexto do negócio e o que realmente
                precisa ser construído. Isso reduz desperdício, melhora a experiência do usuário e
                aumenta a chance de o produto gerar valor.
              </p>
            </div>

            <div className="value-grid">
              {valuePillars.map(([title, text], index) => (
                <article className="pillar-card reveal" key={title}>
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="solucoes" aria-labelledby="solutions-title">
          <div className="section-shell">
            <div className="section-head section-head--split reveal">
              <div>
                <p className="eyebrow">Soluções</p>
                <h2 id="solutions-title">Produtos digitais sob medida para operações que precisam evoluir.</h2>
              </div>
              <p>
                De sistemas internos a plataformas digitais, cada entrega é pensada para ser útil,
                clara, segura e preparada para crescer sem perder controle.
              </p>
            </div>

            <div className="solutions-grid solutions-grid--expanded">
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

        <section className="section-block section-block--alt" id="processo" aria-labelledby="process-title">
          <div className="section-shell">
            <div className="section-head reveal">
              <p className="eyebrow">Processo</p>
              <h2 id="process-title">Um processo claro para reduzir risco e acelerar decisões.</h2>
              <p>
                A sequência de trabalho foi desenhada para dar visibilidade ao projeto, evitar
                desperdício e construir com qualidade desde o primeiro ciclo.
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
              <h2 id="why-title">Por que escolher uma software house estratégica.</h2>
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

        <section className="section-block ai-section" id="ia" aria-labelledby="ai-title">
          <div className="section-shell ai-grid">
            <div className="ai-copy reveal">
              <p className="eyebrow">IA aplicada ao trabalho</p>
              <h2 id="ai-title">IA para aumentar produtividade, sem abrir mão de engenharia.</h2>
              <p>
                A Morramidy usa IA como ferramenta de trabalho: para acelerar análise, organização,
                documentação, testes e revisão. Não é vibe code. É processo técnico com contexto,
                critério e responsabilidade sobre o resultado.
              </p>
              <div className="ai-principles">
                {aiPrinciples.map(([title, text]) => (
                  <article className="ai-principle reveal" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="reveal reveal--delay">
              <AIProductivityIllustration />
            </div>
          </div>
        </section>

        <section className="product-section" id="provas" aria-labelledby="proof-title">
          <div className="section-shell proof-grid">
            <div className="product-copy reveal">
              <p className="eyebrow">Provas de capacidade</p>
              <h2 id="proof-title">Experiência aplicada em desafios digitais reais.</h2>
              <p>
                A Morramidy atua em frentes que exigem organização técnica, visão de produto e
                entendimento de operação. O foco é transformar complexidade em sistemas usáveis,
                integrados e preparados para evoluir.
              </p>
            </div>

            <div className="proof-list reveal">
              {proofItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block section-block--alt" aria-labelledby="tracks-title">
          <div className="section-shell">
            <div className="section-head section-head--split reveal">
              <div>
                <p className="eyebrow">Caminhos de contratação</p>
                <h2 id="tracks-title">Entre pelo ponto certo do seu projeto.</h2>
              </div>
              <p>
                A conversa comercial fica mais objetiva quando o desafio é enquadrado em uma trilha
                clara: diagnóstico, MVP, sistema sob medida ou evolução.
              </p>
            </div>

            <div className="tracks-grid">
              {offerTracks.map(([title, text], index) => (
                <article className="track-card reveal" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="exemplos" aria-labelledby="examples-title">
          <div className="section-shell">
            <div className="section-head reveal">
              <p className="eyebrow">Aplicações</p>
              <h2 id="examples-title">O que podemos construir com você.</h2>
              <p>
                Exemplos concretos de produtos e sistemas que geram controle, reduzem retrabalho e
                criam vantagem operacional.
              </p>
            </div>

            <div className="examples-grid">
              {examples.map(([title, text], index) => (
                <article className="case-card reveal" key={title}>
                  <CaseVisual index={index} />
                  <div className="case-card__body">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block section-block--compact" id="tecnologias" aria-labelledby="tech-title">
          <div className="section-shell">
            <div className="section-head section-head--split reveal">
              <div>
                <p className="eyebrow">Tecnologias</p>
                <h2 id="tech-title">Tecnologia certa para cada desafio.</h2>
              </div>
              <p>
                Selecionamos stack, serviços e integrações de acordo com o problema, o estágio do
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

        <section className="diagnostic-section" id="diagnostico" aria-labelledby="diagnostic-title">
          <div className="section-shell diagnostic-grid">
            <div className="diagnostic-copy reveal">
              <p className="eyebrow">Diagnóstico</p>
              <h2 id="diagnostic-title">Não sabe por onde começar? Comece pelo diagnóstico.</h2>
              <p>
                Você não precisa chegar com tudo definido. A Morramidy ajuda a organizar a ideia,
                identificar prioridades e transformar o desafio em um plano técnico viável.
              </p>
              <div className="diagnostic-points">
                <span>Escopo inicial</span>
                <span>Riscos técnicos</span>
                <span>Prioridades</span>
                <span>Próximo passo</span>
              </div>
            </div>

            <form className="diagnostic-form reveal" onSubmit={handleDiagnosticSubmit}>
              <label>
                Nome
                <input name="name" type="text" placeholder="Seu nome" required />
              </label>
              <label>
                Empresa
                <input name="company" type="text" placeholder="Nome da empresa" required />
              </label>
              <label>
                E-mail
                <input name="email" type="email" placeholder={CONTACT_EMAIL} required />
              </label>
              <label>
                Tipo de projeto
                <select name="projectType" defaultValue="Software sob medida">
                  <option>Software sob medida</option>
                  <option>Sistema web</option>
                  <option>MVP ou SaaS</option>
                  <option>Integração ou automação</option>
                  <option>Modernização de sistema</option>
                  <option>Ainda estou definindo</option>
                </select>
              </label>
              <label className="form-field--full">
                Principal desafio
                <textarea
                  name="challenge"
                  rows="4"
                  placeholder="Descreva a ideia, processo ou gargalo que você quer resolver"
                  required
                ></textarea>
              </label>
              <button className="button button--primary form-field--full" type="submit">
                Solicitar diagnóstico
                <Arrow />
              </button>
              <p className="form-microcopy form-field--full">
                O envio abre seu e-mail com as informações preenchidas para contato direto com a
                Morramidy.
              </p>
            </form>
          </div>
        </section>

        <section className="section-block" id="faq" aria-labelledby="faq-title">
          <div className="section-shell faq-grid">
            <div className="section-head reveal">
              <p className="eyebrow">FAQ</p>
              <h2 id="faq-title">Perguntas antes de iniciar um projeto digital.</h2>
            </div>
            <div className="faq-list reveal">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contato" aria-labelledby="cta-title">
          <div className="section-shell cta-shell reveal">
            <p className="eyebrow">Contato</p>
            <h2 id="cta-title">
              Transforme uma ideia, processo ou gargalo operacional em software de verdade.
            </h2>
            <p>
              Converse com a Morramidy e descubra como estruturar uma solução digital sob medida
              para o seu negócio.
            </p>
            <div className="cta-actions">
              <a
                className="button button--primary"
                href={`mailto:${CONTACT_EMAIL}?subject=Solicitar%20diagn%C3%B3stico%20Morramidy`}
              >
                Falar com a Morramidy
                <Arrow />
              </a>
              <a className="button button--ghost" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram @morramidy_
              </a>
            </div>
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
            <a href="#diagnostico">Diagnóstico</a>
            <a href="#solucoes">Soluções</a>
            <a href="#processo">Processo</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h2>Contato</h2>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram @morramidy_
            </a>
            <a href="tel:+554198880068">(41) 9888-0068</a>
            <span>Av. Paulista, 1106 - São Paulo, SP</span>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© 2026 Morramidy. Todos os direitos reservados.</span>
        </div>
      </footer>

      <div className={`mobile-sticky-cta${showStickyCta ? " is-visible" : ""}`} aria-label="Contato rápido">
        <a className="button button--primary" href="#diagnostico">
          Agendar diagnóstico
          <Arrow />
        </a>
        <a className="button button--ghost" href={`mailto:${CONTACT_EMAIL}`}>
          Contato
        </a>
      </div>
    </>
  );
}
