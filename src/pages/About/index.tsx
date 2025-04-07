import Header from "../../components/Header";
import "./styles.css";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        // Simple animation for elements with fade-in class
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header />
            <div className="about-page">
                {/* Enhanced Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <span className="pre-title">Conheça a Gestão Boa</span>
                        <h1 className="hero-title">Tecnologia que <span className="highlight">transforma</span> sonhos em negócios de sucesso</h1>
                        <p className="hero-subtitle">Ajudando empreendedores brasileiros a organizarem seus negócios.</p>
                        <div className="hero-buttons">
                            <button className="primary-button">Nossa solução</button>
                            <button className="secondary-button">Agendar demo</button>
                        </div>
                    </div>
                    <div className="hero-pattern"></div>
                </section>

                {/* Mission Statement */}
                <section className="mission-statement">
                    <div className="container">
                        <p className="mission-text">
                            "Nossa missão é democratizar o acesso à tecnologia de gestão, tornando simples o que antes era complexo."
                        </p>
                    </div>
                </section>

                {/* Updated History Section */}
                <section className="content-section history-section">
                    <div className="section-header">
                        <span className="section-badge">Nossa Jornada</span>
                        <h2>De uma ideia nas salas do IFRS para um sistema de sucesso</h2>
                        <p className="section-subtitle">Uma trajetória de inovação e superação</p>
                    </div>

                    <div className="timeline">
                        <div className="timeline-item fade-in">
                            <div className="timeline-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <div className="timeline-content">
                                <h3>A Descoberta</h3>
                                <p>
                                    Identificamos uma necessidade urgente entre empreendedores: sistemas de gestão acessíveis e 
                                    intuitivos. Entre planilhas confusas e cadernos de anotações, vimos a oportunidade de 
                                    transformar a realidade de pequenos negócios com tecnologia descomplicada.
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
                                    Conquistamos o 1º lugar na pré-incubação da FURG, um momento decisivo que confirmou 
                                    nosso potencial. Este reconhecimento nos deu a confiança para seguir em frente com 
                                    determinação e propósito ainda maiores.
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
                                    No 5º ciclo do Startup in Lab da fercomércio-RS, absorvemos conhecimentos que impulsionaram nossa evolução. 
                                    Culminando no Demoday em Porto Alegre, onde apresentamos ao mercado como a Gestão Boa 
                                    está revolucionando a administração de negócios no setor de beleza e estética.
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
                                    Hoje somos parceiros estratégicos de empreendedores. Nossa plataforma não apenas 
                                    organiza negócios, mas liberta tempo e energia para que nossos clientes possam focar no que 
                                    realmente importa: fazer seu negócio prosperar e crescer com tranquilidade. 🚀
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enhanced Achievements Section */}
                {/* <section className="achievements-section">
                    <div className="section-header">
                        <span className="section-badge">Nosso Impacto</span>
                        <h2>Transformando números em histórias de sucesso</h2>
                    </div>
                    <div className="achievement-items">
                        <div className="achievement-item fade-in">
                            <span className="achievement-number">1000+</span>
                            <p>Empreendedores Transformados</p>
                            <span className="achievement-detail">Negócios que aumentaram sua produtividade</span>
                        </div>
                        <div className="achievement-item fade-in">
                            <span className="achievement-number">5+</span>
                            <p>Reconhecimentos de Inovação</p>
                            <span className="achievement-detail">Premiações que validam nossa abordagem</span>
                        </div>
                        <div className="achievement-item fade-in">
                            <span className="achievement-number">24/7</span>
                            <p>Suporte Excepcional</p>
                            <span className="achievement-detail">Sempre prontos para ajudar você</span>
                        </div>
                    </div>
                </section> */}

                {/* Updated Team Section */}
                <section className="content-section team-section">
                    <div className="floating-element left"></div>
                    <div className="floating-element right"></div>
                    
                    <div className="section-header">
                        <span className="section-badge">Fundadores</span>
                        <h2>Mentes criativas por trás da revolução</h2>
                        <p className="section-subtitle">Uma equipe apaixonada por resolver problemas reais</p>
                    </div>

                    <div className="team-container">
                        <img src="/time.png" alt="Time Gestão Boa" className="team-image fade-in" />
                        <h3 className="team-category-title">Liderança Visionária</h3>
                        <div className="team-cards">
                        <div className="team-card fade-in">
                                <div className="card-header">
                                    <h3>Victor</h3>
                                    <span className="role">CTO</span>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Maestro tecnológico que orquestra nossas equipes de desenvolvimento e 
                                        projetos. Sua visão técnica combinada com habilidades em gestão de pessoas 
                                        impulsiona nossa capacidade de inovação contínua.
                                    </p>
                                </div>
                            </div>

                            <div className="team-card fade-in">
                                <div className="card-header">
                                    <h3>Karine</h3>
                                    <span className="role">CFO</span>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Mente estratégica por trás das finanças e do crescimento. Representa a 
                                        Gestão Boa em eventos de inovação e lidera nossas iniciativas de marketing 
                                        digital, elevando constantemente nossa presença no mercado.
                                    </p>
                                </div>
                            </div>
                            <div className="team-card fade-in">
                                <div className="card-header">
                                    <h3>Sílvio</h3>
                                    <span className="role">CEO</span>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Arquiteto de ideias que dá vida e direção à Gestão Boa. Navega com maestria entre 
                                        desenvolvimento tecnológico, vendas e estratégia, sempre vislumbrando o próximo 
                                        passo inovador que transformará o mercado.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Updated Products Section */}
                {/* <section className="content-section products-section">
                    <div className="section-header">
                        <span className="section-badge">Nossas Soluções</span>
                        <h2>Ferramentas que impulsionam seu crescimento</h2>
                        <p className="section-subtitle">Tecnologia pensada para facilitar sua jornada empreendedora</p>
                    </div>

                    <div className="products-container">
                        <div className="product-card featured fade-in">
                            <div className="product-icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <span className="product-label">Destaque</span>
                            <h3>Aplicativo Gestão Boa</h3>
                            <p>Transforme a administração do seu negócio com nossa solução completa e intuitiva</p>
                            <a href="#" className="product-link">Saiba mais</a>
                        </div>

                        <div className="product-card fade-in">
                            <div className="product-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <h3>Desenvolvimento de APIs</h3>
                            <p>Integrações poderosas para expandir possibilidades</p>
                        </div>

                        <div className="product-card fade-in">
                            <div className="product-icon">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h3>Aplicativos Mobile</h3>
                            <p>Experiências móveis intuitivas e funcionais</p>
                        </div>

                        <div className="product-card fade-in">
                            <div className="product-icon">
                                <i className="fas fa-robot"></i>
                            </div>
                            <h3>Automações com IA</h3>
                            <p>Tecnologia inteligente para processos mais eficientes</p>
                        </div>
                    </div>
                </section> */}

                {/* Updated Culture Section */}
                <section className="content-section culture-section">
                    <div className="section-header">
                        <span className="section-badge">Nossa Essência</span>
                        <h2>Cultivando inovação em cada interação</h2>
                        <p className="section-subtitle">Os valores que nos guiam todos os dias</p>
                    </div>

                    <div className="culture-content fade-in">
                        <div className="culture-values">
                            <div className="value-item">
                                <span className="value-icon">💡</span>
                                <h4>Inovação Constante</h4>
                                <p>Buscamos sempre as melhores soluções para os desafios dos nossos clientes</p>
                            </div>
                            <div className="value-item">
                                <span className="value-icon">🤝</span>
                                <h4>Colaboração Sem Barreiras</h4>
                                <p>Acreditamos no poder da criatividade coletiva sem hierarquias limitantes</p>
                            </div>
                            <div className="value-item">
                                <span className="value-icon">🚀</span>
                                <h4>Excelência Acessível</h4>
                                <p>Democratizamos a tecnologia para que todos possam crescer</p>
                            </div>
                        </div>
                        
                        <p>
                            Na Gestão Boa, nossa estrutura organizacional adhocrática elimina barreiras hierárquicas, 
                            permitindo que ideias inovadoras surjam de qualquer lugar. Desde nosso CEO até cada 
                            desenvolvedor, trabalhamos lado a lado porque entendemos que grandes soluções podem 
                            vir de qualquer pessoa.
                        </p>
                    </div>
                </section>

                {/* Enhanced CTA Section */}
                <section className="cta-section fade-in">
                    <div className="cta-pattern left"></div>
                    <div className="cta-pattern right"></div>
                    <h2>Pronto para transformar seu negócio?</h2>
                    <p>Junte-se aos milhares de empreendedores que já descobriram como a gestão eficiente pode impulsionar resultados</p>
                    <div className="cta-buttons">
                        <button className="cta-button primary">Começar agora</button>
                        <button className="cta-button secondary">Falar com especialista</button>
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
                            <p className="testimonial-text">A Gestão Boa revolucionou a forma como gerencio meu salão. Economizo 5 horas por semana em tarefas administrativas!</p>
                            <div className="testimonial-author">
                                <p className="author-name">Amanda Silva</p>
                                <p className="author-business">Studio de Beleza Amanda</p>
                            </div>
                        </div>
                        
                        <div className="testimonial fade-in">
                            <div className="quote-mark">"</div>
                            <p className="testimonial-text">Finalmente um sistema que realmente entende as necessidades do meu negócio. Interface intuitiva e suporte excepcional.</p>
                            <div className="testimonial-author">
                                <p className="author-name">Carlos Mendes</p>
                                <p className="author-business">Barbearia Vintage</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
