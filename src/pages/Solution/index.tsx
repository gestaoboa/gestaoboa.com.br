import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Content } from "./styles";

const Solution = () => {
  return (
    <Container>
      <Helmet>
        <title>Nossa Solução - Gestão Boa</title>
        <meta name="description" content="Conheça em detalhes como a Gestão Boa pode transformar a gestão do seu negócio com ferramentas poderosas e fáceis de usar." />
        <link rel="canonical" href="/solucao" />
      </Helmet>
      <Header />
      <Content>
        <section className="hero">
          <h1>Solução Completa para seu Negócio</h1>
          <p>Descubra como a Gestão Boa pode revolucionar sua forma de trabalhar</p>
        </section>

        <section className="features">
          <div className="feature-item">
            <img src="/Agenda.png" alt="Agenda" />
            <div className="feature-content">
              <h2>Agenda Inteligente</h2>
              <p>Gerencie seus compromissos com eficiência:</p>
              <ul>
                <li>Agendamento simplificado de serviços</li>
                <li>Notificações automáticas</li>
                <li>Visualização diária, semanal e mensal</li>
                <li>Integração com vendas e pagamentos</li>
              </ul>
            </div>
          </div>

          <div className="feature-item reverse">
            <img src="/Caixa.png" alt="Gestão Financeira" />
            <div className="feature-content">
              <h2>Gestão Financeira Completa</h2>
              <p>Controle total das suas finanças:</p>
              <ul>
                <li>Registro de vendas e despesas</li>
                <li>Relatórios detalhados</li>
                <li>Controle de fluxo de caixa</li>
                <li>Gestão de formas de pagamento</li>
              </ul>
            </div>
          </div>

          <div className="feature-item">
            <img src="/Clientes.jpeg" alt="Clientes" />
            <div className="feature-content">
              <h2>Gestão de Clientes</h2>
              <p>Fortaleça seu relacionamento com clientes:</p>
              <ul>
                <li>Cadastro completo de clientes</li>
                <li>Histórico de atendimentos</li>
                <li>Sistema de fidelização</li>
                <li>Comunicação automatizada</li>
              </ul>
            </div>
          </div>

          <div className="feature-item reverse">
            <img src="/produtos.jpeg" alt="Produtos" />
            <div className="feature-content">
              <h2>Gestão de Produtos</h2>
              <p>Controle seu estoque com precisão:</p>
              <ul>
                <li>Cadastro completo de produtos</li>
                <li>Controle de estoque em tempo real</li>
                <li>Relatórios de vendas por produto</li>
              </ul>
            </div>
          </div>

          <div className="feature-item">
            <img src="/comissões.jpeg" alt="Equipe" />
            <div className="feature-content">
              <h2>Gestão de Equipe</h2>
              <p>Organize sua equipe com eficiência:</p>
              <ul>
                <li>Controle de comissões</li>
                <li>Distribuição de tarefas</li>
                <li>Métricas de desempenho</li>
                <li>Gestão de permissões</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Comece Agora Mesmo</h2>
          <p>Transforme seu negócio com a solução mais completa do mercado</p>
          <div className="buttons">
            <a href="/preco" className="primary-button">Ver Planos</a>
            <a href="https://wa.me/5553999461550" className="secondary-button">Falar com Consultor</a>
          </div>
        </section>
      
        <section id="faq" className="faq">
          <h2 className="section-title text-center">Perguntas Frequentes</h2>
          <div className="faq-container">
            <details className="faq-item">
              <summary>Quanto tempo leva para implementar o sistema?</summary>
              <p>A implementação básica pode ser feita em apenas 24 horas. Para configurações mais personalizadas, podemos levar até 3 dias úteis.</p>
            </details>
            
            <details className="faq-item">
              <summary>É possível migrar dados de outro sistema?</summary>
              <p>Sim, oferecemos serviço de migração de dados de praticamente qualquer sistema existente para a Gestão Boa.</p>
            </details>
            
            <details className="faq-item">
              <summary>O sistema funciona em dispositivos móveis?</summary>
              <p>Sim! A Gestão Boa é totalmente responsiva e funciona perfeitamente em smartphones e tablets, além de contar com aplicativos nativos para iOS e Android.</p>
            </details>
          </div>
        </section>
      </Content>
      
      <Footer />
    </Container>
  );
};

export default Solution;
