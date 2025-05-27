import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "../Terms/styles";
import PriceTag from "./components/PriceTag";
import "./styles.css";

type PlanType = "Anual" | "Semestral" | "Mensal";

const getDiscount = (type: PlanType) => {
  switch (type) {
    case "Anual":
      return 0.231; // 24% off
    case "Semestral":
      return 0.1; // 10% off
    default:
      return 0;
  }
};

const calculateDiscountedPrice = (price: number, type: PlanType) => {
  const discount = getDiscount(type);
  return price * (1 - discount);
};

const Price = () => {
  const [planType, setPlanType] = useState<PlanType>("Anual");
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft((prev) => {
        let hours = prev.hours;
        let minutes = prev.minutes;
        let seconds = prev.seconds;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }

        if (hours === 0 && minutes === 0 && seconds === 0) {
          return prev; // Mantém em zero quando chegar ao fim
        }

        return { hours, minutes, seconds };
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Price data
  const prices = {
    Anual: {
      Basico: { original: { vista: 900, parcelas: "69,90" } }, // usando valor mensal
      Standard: { original: { vista: 1080, parcelas: "89,90" } }, // usando valor mensal
      Premium: { original: { vista: 1200, parcelas: "129,90" } }, // usando valor mensal
    },
    Semestral: {
      Basico: { original: { vista: 450, parcelas: "89,90" } }, // usando valor mensal
      Standard: { original: { vista: 540, parcelas: "89,90" } }, // usando valor mensal
      Premium: { original: { vista: 650, parcelas: "129,90" } }, // usando valor mensal
    },
    Mensal: {
      Basico: { original: 64.89, parcelas: "69,90" },
      Standard: { original: 90.9, parcelas: "89,90" },
      Premium: { original: 129.91, parcelas: "129,90" },
    },
  };

  return (
    <Container>
      <Helmet>
        <title>Planos</title>
        <meta
          name="description"
          content="Assine agora e aproveite nossos planos!"
        />
        <link rel="canonical" href="/preco" />
      </Helmet>{" "}
      <Header />{" "}
      <div className="plans">
        <div className="top-countdown-container">
          <h2 className="top-countdown-title">
            OFERTA ESPECIAL POR TEMPO LIMITADO!
          </h2>
          <div className="top-countdown">
            <div className="top-countdown-number">
              {`${String(timeLeft.hours).padStart(2, "0")}:${String(
                timeLeft.minutes
              ).padStart(2, "0")}:${String(timeLeft.seconds).padStart(2, "0")}`}
            </div>
            <span>até o final da promoção</span>
          </div>
          <p className="top-countdown-text">
            Assine agora para não ficar de fora dessa oportunidade! Economize
            até 24% nos planos anuais.
          </p>
        </div>
        <h1 className="plans-title" id="plans-section">
          Assine agora!
        </h1>
        <div className="plan-type-selector">
          {[
            { type: "Anual", discount: "24% off" },
            { type: "Semestral", discount: "10% off" },
            { type: "Mensal" },
          ].map((plan) => (
            <button
              key={plan.type}
              className={`plan-type-button ${
                planType === plan.type ? "active" : ""
              }`}
              onClick={() =>
                setPlanType(plan.type as "Anual" | "Semestral" | "Mensal")
              }
            >
              <span>{plan.type}</span>
              {plan.discount && (
                <span className="plan-type-discount">{plan.discount}</span>
              )}
            </button>
          ))}
        </div>{" "}
        <div className="plan-cards">
          {" "}
          {/* Plano Básico */}
          <div className="plan-card">
            {(planType === "Anual" || planType === "Semestral") && (
              <div className="plan-discount-badge">
                {planType === "Anual" ? "24% OFF" : "10% OFF"}
              </div>
            )}
            <h2>Básico</h2>
            <p>Perfeito para quem está começando</p>{" "}
            <PriceTag
              dailyPrice={
                planType === "Mensal"
                  ? parseFloat(
                      prices.Mensal.Basico.parcelas.replace(",", ".")
                    ) / 30
                  : calculateDiscountedPrice(
                      prices.Mensal.Basico.original,
                      planType
                    ) / 30
              }
              monthlyPrice={
                planType === "Mensal"
                  ? prices.Mensal.Basico.parcelas
                  : calculateDiscountedPrice(
                      prices.Mensal.Basico.original,
                      planType
                    )
                      .toFixed(2)
                      .replace(".", ",")
              }
              originalPrice={
                planType !== "Mensal"
                  ? prices.Mensal.Basico.parcelas
                  : undefined
              }
              showDiscount={planType !== "Mensal"}
              planType={planType}
            />
            <button
              className="sign-button"
              onClick={() => {
                window.open(
                  "https://wa.me/5553999461550?text=Quero%20assinar%20o%20plano%20básico!"
                );
              }}
            >
              ASSINE AGORA!
            </button>{" "}
            <ul className="benefits-list">
              <li>
                <span className="check-icon">✔</span> Agendamentos
              </li>
              <li>
                <span className="check-icon">✔</span> Finanças
              </li>
              <li>
                <span className="check-icon">✔</span> Gráficos
              </li>
              <li>
                <span className="check-icon">✔</span> Suporte via WhatsApp
              </li>
              <li>
                <span className="check-icon">✔</span> Gestão de clientes
              </li>
              <li>
                <span className="x-icon">✖</span> Gestão de equipes
              </li>
              <li>
                <span className="x-icon">✖</span> Comissões automáticas
              </li>
              <li>
                <span className="check-icon">✔</span> Limite de 1 usuário
              </li>
            </ul>
          </div>{" "}
          {/* Plano Standard */}
          <div className="plan-card">
            {(planType === "Anual" || planType === "Semestral") && (
              <div className="plan-discount-badge">
                {planType === "Anual" ? "24% OFF" : "10% OFF"}
              </div>
            )}
            <h2>Crescimento</h2>
            <p>Para pequenos negócios</p>{" "}
            <PriceTag
              dailyPrice={
                planType === "Mensal"
                  ? parseFloat(
                      prices.Mensal.Standard.parcelas.replace(",", ".")
                    ) / 30
                  : calculateDiscountedPrice(
                      prices.Mensal.Standard.original,
                      planType
                    ) / 30
              }
              monthlyPrice={
                planType === "Mensal"
                  ? prices.Mensal.Standard.parcelas
                  : calculateDiscountedPrice(
                      prices.Mensal.Standard.original,
                      planType
                    )
                      .toFixed(2)
                      .replace(".", ",")
              }
              originalPrice={
                planType !== "Mensal"
                  ? prices.Mensal.Standard.parcelas
                  : undefined
              }
              showDiscount={planType !== "Mensal"}
              planType={planType}
            />
            <button
              className="sign-button"
              onClick={() => {
                window.open(
                  "https://wa.me/5553999461550?text=Quero%20assinar%20o%20plano%20standard!"
                );
              }}
            >
              ASSINE AGORA!
            </button>{" "}
            <ul className="benefits-list">
              <li>
                <span className="check-icon">✔</span> Agendamentos
              </li>
              <li>
                <span className="check-icon">✔</span> Finanças
              </li>
              <li>
                <span className="check-icon">✔</span> Gráficos
              </li>
              <li>
                <span className="check-icon">✔</span> Suporte via WhatsApp
              </li>
              <li>
                <span className="check-icon">✔</span> Gestão de clientes
              </li>
              <li>
                <span className="check-icon">✔</span> Gestão de equipes
              </li>
              <li>
                <span className="check-icon">✔</span> Comissões automáticas
              </li>
              <li>
                <span className="check-icon">✔</span> Limite de 2 usuários
              </li>
            </ul>
          </div>{" "}
          {/* Plano Premium */}
          <div className="plan-card">
            {(planType === "Anual" || planType === "Semestral") && (
              <div className="plan-discount-badge">
                {planType === "Anual" ? "24% OFF" : "10% OFF"}
              </div>
            )}
            <h2>Empresarial</h2>
            <p>Perfeito para quem já tem funcionários</p>{" "}
            <PriceTag
              dailyPrice={
                planType === "Mensal"
                  ? parseFloat(
                      prices.Mensal.Premium.parcelas.replace(",", ".")
                    ) / 30
                  : calculateDiscountedPrice(
                      prices.Mensal.Premium.original,
                      planType
                    ) / 30
              }
              monthlyPrice={
                planType === "Mensal"
                  ? prices.Mensal.Premium.parcelas
                  : calculateDiscountedPrice(
                      prices.Mensal.Premium.original,
                      planType
                    )
                      .toFixed(2)
                      .replace(".", ",")
              }
              originalPrice={
                planType !== "Mensal"
                  ? prices.Mensal.Premium.parcelas
                  : undefined
              }
              showDiscount={planType !== "Mensal"}
              planType={planType}
            />
            <button
              className="sign-button"
              onClick={() => {
                window.open(
                  "https://wa.me/5553999461550?text=Quero%20assinar%20o%20plano%20premium!"
                );
              }}
            >
              ASSINE AGORA!
            </button>{" "}
            <ul className="benefits-list">
              <li>
                <span className="check-icon">✔</span> Agendamentos
              </li>
              <li>
                <span className="check-icon">✔</span> Finanças
              </li>
              <li>
                <span className="check-icon">✔</span> Gráficos
              </li>
              <li>
                <span className="check-icon">✔</span> Suporte via WhatsApp
              </li>
              <li>
                <span className="check-icon">✔</span> Gestão de clientes
              </li>
              <li>
                <span className="check-icon">✔</span> Gestão de equipes
              </li>
              <li>
                <span className="check-icon">✔</span> Comissões automáticas
              </li>
              <li>
                <span className="check-icon">✔</span> Usuários ilimitados
              </li>
              <li>
                <span className="check-icon">✔</span> 30 minutos de Mentoria com
                Leandro Figueiredo
              </li>
            </ul>
            <button
              className="instagram-button"
              onClick={() => {
                window.open("https://www.instagram.com/oleandrofigueiredo/");
              }}
            >
              Saiba mais sobre a mentoria
            </button>
          </div>
        </div>
        <div className="comparison-section">
          <h2>Comparação de Sistemas de Gestão</h2>
          <div className="container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Funcionalidade</th>
                  <th>Gestão Boa</th>
                  <th>Sistema concorrentes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Agendamento online</td>
                  <td className="gestao-boa-col">
                    <span className="check-icon">✓</span>
                  </td>
                  <td>
                    <span className="check-icon">✓</span>
                  </td>
                </tr>
                <tr>
                  <td>Gestão financeira</td>
                  <td className="gestao-boa-col">
                    <span className="check-icon">✓</span>
                  </td>
                  <td>
                    <span className="check-icon">✓</span>
                  </td>
                </tr>
                <tr>
                  <td>Controle de estoque</td>
                  <td className="gestao-boa-col">
                    <span className="check-icon">✓</span>
                  </td>
                  <td>
                    <span className="check-icon">✓</span>
                  </td>
                </tr>
                <tr>
                  <td>Relatórios gerenciais</td>
                  <td className="gestao-boa-col">
                    <span className="check-icon">✓</span>
                  </td>
                  <td>
                    <span className="check-icon">✓</span>
                  </td>
                </tr>
                <tr>
                  <td>Aplicativo para profissionais</td>
                  <td className="gestao-boa-col">
                    <span className="check-icon">✓</span>
                  </td>
                  <td>
                    <span className="check-icon">✓</span>
                  </td>
                </tr>
                <tr>
                  <td>Programa de fidelidade</td>
                  <td className="gestao-boa-col">
                    <span className="check-icon">✓</span>
                  </td>
                  <td>
                    <span className="check-icon">✓</span>
                  </td>
                </tr>
                <tr>
                  <td>Emissão de comanda personalizada</td>
                  <td className="gestao-boa-col">
                    <span className="check-icon">✓</span>
                  </td>
                  <td>
                    <span className="x-icon">✖</span>
                  </td>
                </tr>
                {/* <tr>
                  <td>Chatbot WhatsApp</td>
                  <td className="gestao-boa-col">
                    <span className="check-icon">✓</span>
                  </td>
                  <td>
                    <span className="x-icon">✖</span>
                  </td>
                </tr> */}
                <tr>
                  <td>Personalização</td>
                  <td className="gestao-boa-col">
                    <span className="check-icon">✓</span>
                  </td>
                  <td>
                    <span className="x-icon">✖</span>
                  </td>
                </tr>
                <tr>
                  <td>Atualizações baseadas em feedback</td>
                  <td className="gestao-boa-col">
                    <span className="check-icon">✓</span>
                  </td>
                  <td>
                    <span className="x-icon">✖</span>
                  </td>
                </tr>
                <tr>
                  <td>Mentoria gratuita</td>
                  <td className="gestao-boa-col">
                    <span className="check-icon">✓</span>
                  </td>
                  <td>
                    <span className="x-icon">✖</span>
                  </td>
                </tr>
                <tr className="price-row">
                  <td>Plano Mensal</td>
                  <td className="gestao-boa-col">
                    R$ 99,90
                    <br />
                    Funcionários ilimitados
                  </td>
                  <td>
                    R$ 149,90
                    <br />
                    Até 5 funcionários
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="support-section">
          <p>Está em dúvida?</p>
          <p>Fale com nosso atendimento</p>
          <button
            className="support-button"
            onClick={() => {
              window.open("https://wa.me/5553999461550?text=Duvida");
            }}
          >
            FALAR COM SUPORTE
          </button>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Price;
