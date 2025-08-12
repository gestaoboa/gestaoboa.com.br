import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Content } from "./styles";

const Solution = () => {
  useEffect(() => {
    // Função para fazer scroll suave para a seção
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove o # do hash
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);

        if (element) {
          // Remove highlight de todas as seções
          document.querySelectorAll(".feature-item").forEach((item) => {
            item.classList.remove("highlighted");
          });

          // Aguarda um pouco para garantir que a página foi renderizada
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

            // Adiciona highlight na seção atual
            element.classList.add("highlighted");

            // Remove o highlight após 3 segundos
            setTimeout(() => {
              element.classList.remove("highlighted");
            }, 3000);
          }, 100);
        }
      }
    };

    // Executa quando a página carrega
    scrollToSection();

    // Escuta mudanças no hash da URL
    const handleHashChange = () => {
      scrollToSection();
    };

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <Container>
      <Helmet>
        <title>
          Soluções de gestão Completa - Gestão Boa | Agenda, Finanças e CRM
        </title>
        <meta
          name="description"
          content="Descubra nossa solução completa de gestão: agenda inteligente, controle financeiro, CRM, gestão de estoque e relatórios avançados. Transforme seu negócio com a Gestão Boa."
        />
        <meta
          name="keywords"
          content="solução gestão, sistema completo gestão, agenda empresarial, CRM gestão clientes, controle financeiro, gestão estoque, relatórios empresariais, automação negócios"
        />
        <meta name="author" content="Gestão Boa" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gestaoboa.com.br/solucao" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Soluções de gestão Completa - Gestão Boa"
        />
        <meta
          property="og:description"
          content="Descubra nossa solução completa de gestão: agenda inteligente, controle financeiro, CRM, gestão de estoque e relatórios avançados."
        />
        <meta property="og:url" content="https://gestaoboa.com.br/solucao" />
        <meta property="og:site_name" content="Gestão Boa" />
        <meta
          property="og:image"
          content="https://gestaoboa.com.br/Agenda.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Soluções de gestão da Gestão Boa - Agenda, Finanças, CRM"
        />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Soluções de gestão Completa - Gestão Boa"
        />
        <meta
          name="twitter:description"
          content="Descubra nossa solução completa de gestão: agenda inteligente, controle financeiro, CRM, gestão de estoque e relatórios avançados."
        />
        <meta
          name="twitter:image"
          content="https://gestaoboa.com.br/Agenda.png"
        />
        <meta
          name="twitter:image:alt"
          content="Soluções de gestão da Gestão Boa"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#007BFF" />
        <meta name="application-name" content="Gestão Boa" />

        {/* Schema.org structured data for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Gestão Boa - Sistema de gestão",
            description:
              "Solução completa de gestão com agenda inteligente, controle financeiro, CRM, gestão de estoque e relatórios avançados",
            provider: {
              "@type": "Organization",
              name: "BEasier Tech",
              url: "https://gestaoboa.com.br",
            },
            serviceType: "Software de gestão",
            category: "Business Software",
            offers: {
              "@type": "Offer",
              price: "49.90",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Funcionalidades da Gestão Boa",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Agenda Inteligente",
                    description:
                      "Gerencie seus compromissos com agendamento simplificado, notificações automáticas e integração com vendas",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Gestão Financeira",
                    description:
                      "Controle total das finanças com registro de vendas, relatórios e fluxo de caixa",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "CRM - Gestão de Clientes",
                    description:
                      "Sistema completo de relacionamento com clientes, histórico e fidelização",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Gestão de Estoque",
                    description:
                      "Controle de produtos e estoque em tempo real com relatórios de vendas",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Análises e Relatórios",
                    description:
                      "Relatórios avançados e insights para tomada de decisão baseada em dados",
                  },
                },
              ],
            },
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://gestaoboa.com.br",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Soluções",
                item: "https://gestaoboa.com.br/solucao",
              },
            ],
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quanto tempo leva para implementar o sistema de gestão?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A implementação básica da Gestão Boa pode ser feita em apenas 24 horas. Para configurações mais personalizadas e migração de dados, podemos levar até 3 dias úteis. Nossa equipe oferece suporte completo durante todo o processo.",
                },
              },
              {
                "@type": "Question",
                name: "É possível migrar dados de outro sistema de gestão?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim, oferecemos serviço completo de migração de dados de praticamente qualquer sistema existente para a Gestão Boa. Nossa equipe técnica cuida de todo o processo, garantindo que você não perca nenhuma informação importante.",
                },
              },
              {
                "@type": "Question",
                name: "O sistema funciona em dispositivos móveis e tablets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim! A Gestão Boa é totalmente responsiva e funciona perfeitamente em smartphones e tablets, além de contar com aplicativos nativos para iOS e Android. Você pode gerenciar seu negócio de qualquer lugar.",
                },
              },
              {
                "@type": "Question",
                name: "Quais tipos de relatórios o sistema oferece?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nossa solução oferece relatórios completos de vendas, análises financeiras, relatórios de produtos mais vendidos, desempenho de funcionários, métricas de clientes e muito mais. Todos os relatórios podem ser exportados e personalizados conforme sua necessidade.",
                },
              },
              {
                "@type": "Question",
                name: "O sistema integra com outras ferramentas que já uso?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim, a Gestão Boa possui integrações com diversas ferramentas populares como WhatsApp para comunicação com clientes, sistemas de pagamento, e APIs para conectar com outros softwares que você já utiliza no seu negócio.",
                },
              },
            ],
          })}
        </script>
      </Helmet>
      <Header />
      <Content>
        <section className="hero">
          <h1>
            Sistema de Gestão completo - Todas as Ferramentas que seu Negócio
            Precisa
          </h1>
          <p>
            Descubra como a Gestão Boa pode revolucionar sua forma de trabalhar
            com soluções integradas de agenda, finanças, CRM e muito mais
          </p>
        </section>

        <section className="features">
          <div id="agenda" className="feature-item">
            <img
              src="/Agenda.png"
              alt="Agenda Inteligente da Gestão Boa - Interface de agendamento com calendário e notificações automáticas"
            />
            <div className="feature-content">
              <h2>Agenda Inteligente</h2>
              <p>Gerencie seus compromissos com eficiência:</p>
              <ul>
                <li>
                  <strong>Agendamento simplificado de serviços</strong> -
                  Interface intuitiva para marcação rápida
                </li>
                <li>
                  <strong>Notificações automáticas</strong> - Lembre clientes e
                  funcionários dos compromissos
                </li>
                <li>
                  <strong>Visualização diária, semanal e mensal</strong> -
                  Organize sua agenda de forma flexível
                </li>
                <li>
                  <strong>Integração com vendas e pagamentos</strong> - Conecte
                  agendamentos com faturamento
                </li>
              </ul>
            </div>
          </div>

          <div id="financeiro" className="feature-item reverse">
            <img
              src="/Caixa.png"
              alt="Gestão Financeira da Gestão Boa - Dashboard de controle de caixa, vendas e despesas"
            />
            <div className="feature-content">
              <h2>Gestão Financeira Completa</h2>
              <p>Controle total das suas finanças:</p>
              <ul>
                <li>
                  <strong>Registro de vendas e despesas</strong> - Controle
                  completo do fluxo financeiro
                </li>
                <li>
                  <strong>Relatórios detalhados</strong> - Análises profundas do
                  desempenho financeiro
                </li>
                <li>
                  <strong>Controle de fluxo de caixa</strong> - Monitore
                  entradas e saídas em tempo real
                </li>
                <li>
                  <strong>Gestão de formas de pagamento</strong> - Organize
                  recebimentos por método de pagamento
                </li>
              </ul>
            </div>
          </div>

          <div id="clientes" className="feature-item">
            <img
              src="/Clientes.jpeg"
              alt="CRM Gestão de Clientes - Sistema de cadastro e relacionamento com histórico completo"
            />
            <div className="feature-content">
              <h2>Gestão de Clientes (CRM)</h2>
              <p>Fortaleça seu relacionamento com clientes:</p>
              <ul>
                <li>
                  <strong>Cadastro completo de clientes</strong> - Base de dados
                  organizada e segura
                </li>
                <li>
                  <strong>Histórico de atendimentos</strong> - Acompanhe todo
                  relacionamento com o cliente
                </li>
                <li>
                  <strong>Sistema de fidelização</strong> - Programe recompensas
                  e benefícios automáticos
                </li>
                <li>
                  <strong>Comunicação automatizada</strong> - Envie mensagens
                  personalizadas via WhatsApp
                </li>
              </ul>
            </div>
          </div>

          <div id="produtos" className="feature-item reverse">
            <img
              src="/produtos.jpeg"
              alt="Gestão de Produtos e Estoque - Controle de inventário em tempo real com relatórios"
            />
            <div className="feature-content">
              <h2>Gestão de Produtos e Estoque</h2>
              <p>Controle seu estoque com precisão:</p>
              <ul>
                <li>
                  <strong>Cadastro completo de produtos</strong> - Gerencie
                  informações detalhadas de cada item
                </li>
                <li>
                  <strong>Controle de estoque em tempo real</strong> - Monitore
                  quantidades disponíveis instantaneamente
                </li>
                <li>
                  <strong>Relatórios de vendas por produto</strong> -
                  Identifique produtos mais vendidos e rentáveis
                </li>
                <li>
                  <strong>Alertas de estoque baixo</strong> - Receba
                  notificações para reposição
                </li>
              </ul>
            </div>
          </div>

          <div id="analytics" className="feature-item">
            <img
              src="/comissões.jpeg"
              alt="Analytics e Relatórios Empresariais - Dashboard com métricas e análises de desempenho"
            />
            <div className="feature-content">
              <h2>Análises e Relatórios Avançados</h2>
              <p>Tome decisões baseadas em dados:</p>
              <ul>
                <li>
                  <strong>Relatórios detalhados de vendas</strong> - Análise
                  completa do faturamento por período
                </li>
                <li>
                  <strong>Análise de desempenho</strong> - Métricas de
                  produtividade e crescimento
                </li>
                <li>
                  <strong>Métricas de crescimento</strong> - Acompanhe a
                  evolução do seu negócio
                </li>
                <li>
                  <strong>Insights sobre clientes</strong> - Entenda
                  comportamentos e preferências
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Comece a Transformar seu Negócio Hoje Mesmo</h2>
          <p>
            Experimente a solução mais completa de gestão do mercado - teste
            grátis por 20 dias
          </p>
          <div className="buttons">
            <a href="/preco" className="primary-button">
              Ver Planos
            </a>
            <a href="https://wa.me/5553999461550" className="secondary-button">
              Falar com Consultor
            </a>
          </div>
        </section>

        <section id="faq" className="faq">
          <h2 className="section-title text-center">
            Perguntas Frequentes sobre Nossas Soluções
          </h2>
          <div className="faq-container">
            <details className="faq-item">
              <summary>
                Quanto tempo leva para implementar o sistema de gestão?
              </summary>
              <p>
                A implementação básica da Gestão Boa pode ser feita em apenas 24
                horas. Para configurações mais personalizadas e migração de
                dados, podemos levar até 3 dias úteis. Nossa equipe oferece
                suporte completo durante todo o processo.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                É possível migrar dados de outro sistema de gestão?
              </summary>
              <p>
                Sim, oferecemos serviço completo de migração de dados de
                praticamente qualquer sistema existente para a Gestão Boa. Nossa
                equipe técnica cuida de todo o processo, garantindo que você não
                perca nenhuma informação importante.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                O sistema funciona em dispositivos móveis e tablets?
              </summary>
              <p>
                Sim! A Gestão Boa é totalmente responsiva e funciona
                perfeitamente em smartphones e tablets, além de contar com
                aplicativos nativos para iOS e Android. Você pode gerenciar seu
                negócio de qualquer lugar.
              </p>
            </details>

            <details className="faq-item">
              <summary>Quais tipos de relatórios o sistema oferece?</summary>
              <p>
                Nossa solução oferece relatórios completos de vendas, análises
                financeiras, relatórios de produtos mais vendidos, desempenho de
                funcionários, métricas de clientes e muito mais. Todos os
                relatórios podem ser exportados e personalizados conforme sua
                necessidade.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                O sistema integra com outras ferramentas que já uso?
              </summary>
              <p>
                Sim, a Gestão Boa possui integrações com diversas ferramentas
                populares como WhatsApp para comunicação com clientes, sistemas
                de pagamento, e APIs para conectar com outros softwares que você
                já utiliza no seu negócio.
              </p>
            </details>
          </div>
        </section>
      </Content>

      <Footer />
    </Container>
  );
};

export default Solution;
