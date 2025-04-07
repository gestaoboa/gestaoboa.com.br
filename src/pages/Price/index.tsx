import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "../Terms/styles";
import "./styles.css";

const Price = () => {
	const [planType, setPlanType] = useState<'Anual' | 'Semestral' | 'Mensal'>('Anual');

	// Price data
	const prices = {
		Anual: {
			Basico: { parcelas: '54,90' },      // 69,90 - 20%
			Avancado: { parcelas: '69,90' },    // 89,90 - 20%
			Premium: { parcelas: '109,90' },    // Changed to fixed 109,90
		},
		Semestral: {
			Basico: { parcelas: '64,90' },      // 69,90 - 10%
			Avancado: { parcelas: '79,90' },    // 89,90 - 10%
			Premium: { parcelas: '119,90' },    // Changed - between annual and monthly
		},
		Mensal: {
			Basico: '69,90',                    // Base price
			Avancado: '89,90',                  // Base price
			Premium: '129,90',                  // Base price
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
					{['Anual', 'Semestral', 'Mensal'].map((type) => (
						<button
							key={type}
							className={`plan-type-button ${planType === type ? 'active' : ''}`}
							onClick={() => setPlanType(type as 'Anual' | 'Semestral' | 'Mensal')}
						>
							{type}
						</button>
					))}
				</div>
				<div className="plan-cards">
					{/* Plano Básico */}
					<div className="plan-card">
						<h2>Start</h2>
						<p>O primeiro passo para a organização</p>
						<div className="price">
							{planType === 'Mensal' 
								? `R$ ${prices.Mensal.Basico}` 
								: `R$ ${prices[planType].Basico.parcelas}`}
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
								Controle de caixa
							</li>
							<li>
								<span className="check-icon">✔</span>
								Relatórios
							</li>
							<li>
								<span className="check-icon">✔</span>
								Atendimento individulizado
							</li>
							<li>
								<span className="check-icon">✔</span>
								Gestão de clientes
							</li>
							<li>
								<span className="check-icon">✔</span>
								Instalação e configuração
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

					{/* Plano Avançado */}
					<div className="plan-card">
						<h2>Growth</h2>
						<p>Para negócios que estão começando a expandir</p>
						<div className="price">
							{planType === 'Mensal' 
								? `R$ ${prices.Mensal.Avancado}` 
								: `R$ ${prices[planType].Avancado.parcelas}`}
							<span>/ mês</span>
						</div>
						<button
							className="sign-button"
							onClick={() => {
								window.open('https://wa.me/5553999461550?text=Quero%20assinar%20o%20plano%20avançado!');
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
								Controle de caixa
							</li>
							<li>
								<span className="check-icon">✔</span>
								Relatórios
							</li>
							<li>
								<span className="check-icon">✔</span>
								Atendimento individulizado
							</li>
							<li>
								<span className="check-icon">✔</span>
								Gestão de clientes
							</li>
							<li>
								<span className="check-icon">✔</span>
								Instalação e configuração
							</li>
							<li>
								<span className="check-icon">✔</span>
								Gestão de equipes (até 2 usuários)
							</li>
							<li>
								<span className="check-icon">✔</span>
								Comissões automáticas
							</li>
						</ul>
					</div>

					{/* Plano Premium */}
					<div className="plan-card">
						<h2>Elite</h2>
						<p>Gestão completa para grandes equipes</p>
						<div className="price">
							{planType === 'Mensal' 
								? `R$ ${prices.Mensal.Premium}` 
								: `R$ ${prices[planType].Premium.parcelas}`}
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
								Controle de caixa
							</li>
							<li>
								<span className="check-icon">✔</span>
								Relatórios
							</li>
							<li>
								<span className="check-icon">✔</span>
								Atendimento individulizado
							</li>
							<li>
								<span className="check-icon">✔</span>
								Gestão de clientes
							</li>
							<li>
								<span className="check-icon">✔</span>
								Instalação e configuração
							</li>
							<li>
								<span className="check-icon">✔</span>
								Gestão de equipes (usuários ilimitados)
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
