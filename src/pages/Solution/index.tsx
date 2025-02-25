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
            <img src="/Clientes.png" alt="Clientes" />
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
            <img src="/comissões.png" alt="Equipe" />
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
      </Content>
      <Footer />
    </Container>
  );
};

export default Solution;
