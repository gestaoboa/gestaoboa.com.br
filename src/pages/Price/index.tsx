import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "../Terms/styles";
import "./styles.css";

const Price = () => {
	const [planType, setPlanType] = useState<'Anual' | 'Mensal'>('Anual');

	// Price data
	const prices = {
		Anual: {
			Basico: { original: { vista: 900, parcelas: '69,90' } },
			Premium: { original: { vista: 1200, parcelas: '109,90' } },
		},
		Mensal: {
			Basico: { original: 79, parcelas: '79,90' },
			Premium: { original: 119, parcelas: '119,90' },
		},
	};

	return (
		<Container>
			<Helmet>
				<title>Planos</title>
				<meta name="description" content="Assine agora e aproveite nossos planos!" />
				<link rel="canonical" href="/preco" />
			</Helmet>
			<Header />
			<div className="plans">
				<h1 className="plans-title">Assine agora!</h1>
				<div className="plan-type-selector">
					{['Anual', 'Mensal'].map((type) => (
						<button
							key={type}
							className={`plan-type-button ${planType === type ? 'active' : ''}`}
							onClick={() => setPlanType(type as 'Anual' | 'Mensal')}
						>
							{type}
						</button>
					))}
				</div>
				<div className="plan-cards">
					{/* Plano Básico */}
					<div className="plan-card">
						<h2>Básico</h2>
						<p>Perfeito para quem está começando</p>
						<div className="price">
							{planType === 'Mensal' ? `R$ ${prices.Mensal.Basico.original},90` : `R$ ${prices[planType].Basico.original.parcelas}`}
							<span>/ mês</span>
						</div>
						<button
							className="sign-button"
							onClick={() => {
								window.open('https://wa.me/5553999461550?text=Quero%20assinar%20o%20plano%20básico!');
							}}
						>
							ASSINE AGORA!
						</button>
						<ul className="benefits-list">
							<li>
								<span className="check-icon">✔</span>
								Agendamentos
							</li>
							<li>
								<span className="check-icon">✔</span>
								Finanças
							</li>
							<li>
								<span className="check-icon">✔</span>
								Gráficos
							</li>
							<li>
								<span className="check-icon">✔</span>
								Suporte via WhatsApp
							</li>
							<li>
								<span className="check-icon">✔</span>
								Gestão de clientes
							</li>
							<li>
								<span className="x-icon">✖</span>
								Gestão de equipes
							</li>
							<li>
								<span className="x-icon">✖</span>
								Comissões automáticas
							</li>
						</ul>
					</div>
					{/* Plano Premium */}
					<div className="plan-card">
						<h2>Premium</h2>
						<p>Perfeito para quem já tem funcionários</p>
						<div className="price">
							{planType === 'Mensal' ? `R$ ${prices.Mensal.Premium.original},90` : `R$ ${prices[planType].Premium.original.parcelas}`}
							<span>/ mês</span>
						</div>
						<button
							className="sign-button"
							onClick={() => {
								window.open('https://wa.me/5553999461550?text=Quero%20assinar%20o%20plano%20premium!');
							}}
						>
							ASSINE AGORA!
						</button>
						<ul className="benefits-list">
							<li>
								<span className="check-icon">✔</span>
								Agendamentos
							</li>
							<li>
								<span className="check-icon">✔</span>
								Finanças
							</li>
							<li>
								<span className="check-icon">✔</span>
								Gráficos
							</li>
							<li>
								<span className="check-icon">✔</span>
								Suporte via WhatsApp
							</li>
							<li>
								<span className="check-icon">✔</span>
								Gestão de clientes
							</li>
							<li>
								<span className="check-icon">✔</span>
								Gestão de equipes
							</li>
							<li>
								<span className="check-icon">✔</span>
								Comissões automáticas
							</li>
						</ul>
					</div>
				</div>
				<div className="support-section">
					<p>Está em dúvida?</p>
					<p>Fale com nosso atendimento</p>
					<button
						className="support-button"
						onClick={() => {
							window.open('https://wa.me/5553999461550?text=Duvida');
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
