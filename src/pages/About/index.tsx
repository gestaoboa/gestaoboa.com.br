import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./styles.css";

const About = () => {
  useEffect(() => {
    // Simple animation for elements with fade-in class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleDemoClick = () => {
    window.open("https://wa.me/5553999461550", "_blank");
  };

  const [activeFounder, setActiveFounder] = useState("silvio");
  const [hoveredFounder, setHoveredFounder] = useState("");

  return (
    <>
      <Header />
      <div className="about-page">
        {/* Enhanced Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <span className="pre-title">Conheça a Gestão Boa</span>
            <h1 className="hero-title">
              Tecnologia que <span className="highlight">transforma</span>{" "}
              sonhos em negócios de sucesso
            </h1>
            <p className="hero-subtitle">
              Ajudando empreendedores brasileiros a organizarem seus negócios.
            </p>
            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() =>
                  window.open("https://beasier.vercel.app", "_blank")
                }
              >
                Nossa solução
              </button>
              <button className="secondary-button" onClick={handleDemoClick}>
                Agendar demo
              </button>
            </div>
          </div>
          <div className="hero-pattern"></div>
        </section>

        {/* Mission Statement */}
        <section className="mission-statement">
          <div className="container">
            <p className="mission-text">
              "Nossa missão é democratizar o acesso à tecnologia de gestão,
              tornando simples o que antes era complexo."
            </p>
          </div>
        </section>

        {/* Updated History Section */}
        <section className="content-section history-section">
          <div className="section-header">
            <span className="section-badge">Nossa Jornada</span>
            <h2>De uma ideia nas salas do IFRS para um sistema de sucesso</h2>
            <p className="section-subtitle">
              Uma trajetória de inovação e superação
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item fade-in">
              <div className="timeline-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="timeline-content">
                <h3>A Descoberta</h3>
                <p>
                  Identificamos uma necessidade urgente entre empreendedores:
                  sistemas de gestão acessíveis e intuitivos. Entre planilhas
                  confusas e cadernos de anotações, vimos a oportunidade de
                  transformar a realidade de pequenos negócios com tecnologia
                  descomplicada.
                </p>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="timeline-content">
                <h3>A Validação</h3>
                <p>
                  Conquistamos o 1º lugar na pré-incubação da FURG, um momento
                  decisivo que confirmou nosso potencial. Este reconhecimento
                  nos deu a confiança para seguir em frente com determinação e
                  propósito ainda maiores.
                </p>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="timeline-content">
                <h3>O Crescimento</h3>
                <p>
                  No 5º ciclo do Startup in Lab da fercomércio-RS, absorvemos
                  conhecimentos que impulsionaram nossa evolução. Culminando no
                  Demoday em Porto Alegre, onde apresentamos ao mercado como a
                  Gestão Boa está revolucionando a administração de negócios no
                  setor de beleza e estética.
                </p>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="timeline-content">
                <h3>O Presente</h3>
                <p>
                  Hoje somos parceiros estratégicos de empreendedores. Nossa
                  plataforma não apenas organiza negócios, mas liberta tempo e
                  energia para que nossos clientes possam focar no que realmente
                  importa: fazer seu negócio prosperar e crescer com
                  tranquilidade. 🚀
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Updated Team Section with Interactive Hover */}
        <section className="content-section team-section">
          <div className="floating-element left"></div>
          <div className="floating-element right"></div>

          <div className="section-header">
            <span className="section-badge">Fundadores</span>
            <h2>Mentes criativas por trás da revolução</h2>
            <p className="section-subtitle">
              Uma equipe apaixonada por resolver problemas reais
            </p>
          </div>

          <div className="interactive-team-container">
            <div className="team-image-container fade-in">
              <div
                className={`team-image-wrapper ${
                  hoveredFounder ? "has-hover" : ""
                }`}
              >
                <img
                  src="/time.png"
                  alt="Time Gestão Boa"
                  className="team-image"
                  useMap="#founders-map"
                />
                <div
                  className={`founder-overlay victor ${
                    hoveredFounder === "victor" ? "active" : ""
                  }`}
                ></div>
                <div
                  className={`founder-overlay karine ${
                    hoveredFounder === "karine" ? "active" : ""
                  }`}
                ></div>
                <div
                  className={`founder-overlay silvio ${
                    hoveredFounder === "silvio" ? "active" : ""
                  }`}
                ></div>
              </div>
              <map name="founders-map">
                <area
                  shape="rect"
                  coords="0,0,180,400"
                  alt="Victor"
                  onMouseEnter={() => {
                    setActiveFounder("victor");
                    setHoveredFounder("victor");
                  }}
                  onMouseLeave={() => setHoveredFounder("")}
                />
                <area
                  shape="rect"
                  coords="181,0,350,400"
                  alt="Karine"
                  onMouseEnter={() => {
                    setActiveFounder("karine");
                    setHoveredFounder("karine");
                  }}
                  onMouseLeave={() => setHoveredFounder("")}
                />
                <area
                  shape="rect"
                  coords="351,0,550,400"
                  alt="Sílvio"
                  onMouseEnter={() => {
                    setActiveFounder("silvio");
                    setHoveredFounder("silvio");
                  }}
                  onMouseLeave={() => setHoveredFounder("")}
                />
              </map>

              <div className="founder-indicators">
                <div
                  className={`indicator ${
                    activeFounder === "victor" ? "active" : ""
                  }`}
                  onClick={() => setActiveFounder("victor")}
                  onMouseEnter={() => setHoveredFounder("victor")}
                  onMouseLeave={() => setHoveredFounder("")}
                >
                  <span>Victor</span>
                </div>
                <div
                  className={`indicator ${
                    activeFounder === "karine" ? "active" : ""
                  }`}
                  onClick={() => setActiveFounder("karine")}
                  onMouseEnter={() => setHoveredFounder("karine")}
                  onMouseLeave={() => setHoveredFounder("")}
                >
                  <span>Karine</span>
                </div>
                <div
                  className={`indicator ${
                    activeFounder === "silvio" ? "active" : ""
                  }`}
                  onClick={() => setActiveFounder("silvio")}
                  onMouseEnter={() => setHoveredFounder("silvio")}
                  onMouseLeave={() => setHoveredFounder("")}
                >
                  <span>Sílvio</span>
                </div>
              </div>
            </div>

            <div className="team-cards-container">
              <h3 className="team-category-title">Liderança Visionária</h3>
              <div className="team-cards">
                <div
                  className={`team-card fade-in ${
                    activeFounder === "victor" ? "active" : ""
                  }`}
                >
                  <div className="card-header">
                    <h3 style={{ color: "white" }}>Victor</h3>
                    <span className="role">CTO</span>
                  </div>
                  <div className="card-body">
                    <p>
                      Maestro tecnológico que orquestra nossas equipes de
                      desenvolvimento e projetos. Sua visão técnica combinada
                      com habilidades em gestão de pessoas impulsiona nossa
                      capacidade de inovação contínua.
                    </p>
                  </div>
                </div>

                <div
                  className={`team-card fade-in ${
                    activeFounder === "karine" ? "active" : ""
                  }`}
                >
                  <div className="card-header">
                    <h3 style={{ color: "white" }}>Karine</h3>
                    <span className="role">CFO</span>
                  </div>
                  <div className="card-body">
                    <p>
                      Mente estratégica por trás das finanças e do crescimento.
                      Representa a Gestão Boa em eventos de inovação e lidera
                      nossas iniciativas de marketing digital, elevando
                      constantemente nossa presença no mercado.
                    </p>
                  </div>
                </div>

                <div
                  className={`team-card fade-in ${
                    activeFounder === "silvio" ? "active" : ""
                  }`}
                >
                  <div className="card-header">
                    <h3 style={{ color: "white" }}>Sílvio</h3>
                    <span className="role">CEO</span>
                  </div>
                  <div className="card-body">
                    <p>
                      Arquiteto de ideias que dá vida e direção à Gestão Boa.
                      Navega com maestria entre desenvolvimento tecnológico,
                      vendas e estratégia, sempre vislumbrando o próximo passo
                      inovador que transformará o mercado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updated Culture Section */}
        <section className="content-section culture-section">
          <div className="section-header">
            <span className="section-badge">Nossa Essência</span>
            <h2>Cultivando inovação em cada interação</h2>
            <p className="section-subtitle">
              Os valores que nos guiam todos os dias
            </p>
          </div>

          <div className="culture-content fade-in">
            <div className="culture-values">
              <div className="value-item">
                <span className="value-icon">💡</span>
                <h4>Inovação Constante</h4>
                <p>
                  Buscamos sempre as melhores soluções para os desafios dos
                  nossos clientes
                </p>
              </div>
              <div className="value-item">
                <span className="value-icon">🤝</span>
                <h4>Colaboração Sem Barreiras</h4>
                <p>
                  Acreditamos no poder da criatividade coletiva sem hierarquias
                  limitantes
                </p>
              </div>
              <div className="value-item">
                <span className="value-icon">🚀</span>
                <h4>Excelência Acessível</h4>
                <p>Democratizamos a tecnologia para que todos possam crescer</p>
              </div>
            </div>

            <p>
              Na Gestão Boa, nossa estrutura organizacional adhocrática elimina
              barreiras hierárquicas, permitindo que ideias inovadoras surjam de
              qualquer lugar. Desde nosso CEO até cada desenvolvedor,
              trabalhamos lado a lado porque entendemos que grandes soluções
              podem vir de qualquer pessoa.
            </p>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="cta-section fade-in">
          <div className="cta-pattern left"></div>
          <div className="cta-pattern right"></div>
          <h2>Pronto para transformar seu negócio?</h2>
          <p>
            Junte-se aos milhares de empreendedores que já descobriram como a
            gestão eficiente pode impulsionar resultados
          </p>
          <div className="cta-buttons">
            <button
              className="cta-button primary"
              onClick={() =>
                window.open("https://beasier.vercel.app", "_blank")
              }
            >
              Começar agora
            </button>
            <button className="cta-button secondary" onClick={handleDemoClick}>
              Falar com especialista
            </button>
          </div>
        </section>

        {/* Testimonials Section - New */}
        <section className="content-section testimonials-section">
          <div className="section-header">
            <span className="section-badge">Depoimentos</span>
            <h2>O que dizem nossos clientes</h2>
          </div>

          <div className="testimonials-container">
            <div className="testimonial fade-in">
              <div className="quote-mark">"</div>
              <p className="testimonial-text2">
                “Agora consigo me organizar e entender quais são os lucros e
                despesas de forma muito clara e objetiva. Antes usava o Google
                Agenda e o Excel. Mas hoje utilizo tudo em um só App.”!
              </p>
              <div className="testimonial-author">
                <p className="author-name">Janaína Christello</p>
                <p className="author-business">Psicóloga</p>
              </div>
            </div>

            <div className="testimonial fade-in">
              <div className="quote-mark">"</div>
              <p className="testimonial-text2">
                “Muito fácil de operar, fiquei feliz com uma coisa que eu não
                sabia o barbeiro consegue lançar no caixa a comanda pelo celular
                dele muito prático”
              </p>
              <div className="testimonial-author">
                <p className="author-name">Leandro Figueiredo</p>
                <p className="author-business">Barbearia Duque - Pelotas RS</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
