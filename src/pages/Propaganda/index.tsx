import { useEffect, useState } from "react";
import "./styles.css";

// --- Constantes de Configuração ---
const TOTAL_DURATION = 81000; // Aumentado para incluir a nova seção (20s a mais)

// --- Componentes de Cena ---
const LogoBenefitsScene = () => (
  <div id="logo-benefits-section" className="animation-section">
    <img
      src="3.png"
      alt="Logo Gestão Boa"
      className="logo-image"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = "https://placehold.co/180x180/0B1B34/FFFFFF?text=Logo";
      }}
    />
    <div className="benefits-text-container">
      <p className="benefit-text benefit-text-1">
        Organize sua barbearia/salão
      </p>
      <p className="benefit-text benefit-text-2">Decisões baseadas em dados</p>
      <p className="benefit-text benefit-text-3">Aumente seu faturamento</p>
    </div>
  </div>
);

const FeaturesScene = () => (
  <div id="features-section" className="animation-section">
    <div className="features-content">
      <ul className="features-list">
        <li className="feature-list-item">Controle de caixa</li>
        <li className="feature-list-item">Gestão de clientes</li>
        <li className="feature-list-item">Comissionamento</li>
        <li className="feature-list-item">Gestão de estoque</li>
        <li className="feature-list-item">Agenda online</li>
        <li className="feature-list-item">Inteligência artificial</li>{" "}
      </ul>
      <img
        src="app.png"
        alt="App Gestão Boa"
        className="app-image"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "https://placehold.co/300x400/007BFF/FFFFFF?text=APP";
        }}
      />
    </div>
  </div>
);

const TestimonialScene = () => (
  <div id="testimonial-section" className="animation-section">
    <div className="testimonial-content">
      <img
        src="leandro.png"
        alt="Leandro Figueiredo"
        className="testimonial-image"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "https://placehold.co/100x100/5CADFF/FFFFFF?text=LF";
        }}
      />
      <blockquote className="testimonial-text">
        "Hoje tenho clareza total dos números, consigo tomar decisões mais
        inteligentes e garantir a saúde financeira da barbearia."
      </blockquote>
      <cite className="testimonial-author">
        Leandro Figueiredo, Barbearia Duque
      </cite>
    </div>
  </div>
);

const CtaScene = () => (
  <div id="cta-section" className="animation-section">
    <div className="cta-container">
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://gestaoboa.com.br&bgcolor=0B1B34&color=FFFFFF&qzone=1"
        alt="QR Code para começar"
        className="qr-code"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "https://placehold.co/200x200/ffffff/0B1B34?text=QRCode";
        }}
      />
      <h2 className="cta-headline">Comece Agora!</h2>
      <p className="cta-subheadline">
        Aponte a câmera e revolucione sua gestão.
      </p>
    </div>
  </div>
);

const AdScene = () => (
  <div id="ad-section" className="animation-section ad-section">
    <div className="ad-content">
      <img
        src="joao.png"
        alt="João de Barro Studio"
        className="ad-logo-image"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "https://placehold.co/180x180/FFFFFF/000000?text=LOGO";
        }}
      />
      <div className="ad-info">
        <h3 className="ad-info-headline">Anuncie sua empresa aqui</h3>
        <p className="ad-info-p">✓ Tempo de tela: 30s</p>
        <p className="ad-info-p">✓ Anúncio personalizado</p>
        <p className="ad-info-p ad-info-price">R$ 100,00 / mês</p>
      </div>
    </div>
  </div>
);

const TilinhoLanchesScene = () => (
  <div id="tilinho-section" className="animation-section tilinho-section">
    <div className="tilinho-content">
      <div className="tilinho-header">
        <h2 className="tilinho-title">TILINHO LANCHES</h2>
        <p className="tilinho-subtitle">Restaurante Familiar - Cassino</p>
      </div>
      <div className="tilinho-menu">
        <div className="menu-item">
          <span className="menu-emoji">🍖</span>
          <span className="menu-text">Bauros Artesanais</span>
        </div>
        <div className="menu-item">
          <span className="menu-emoji">🧀</span>
          <span className="menu-text">Xis Tradicionais</span>
        </div>
        <div className="menu-item">
          <span className="menu-emoji">🍽️</span>
          <span className="menu-text">Ala-Minuta</span>
        </div>
      </div>
      <div className="tilinho-location">
        <p className="location-text">📍 Cassino - Rio Grande</p>
        <p className="location-slogan">Sabor e tradição em família!</p>
      </div>
    </div>
  </div>
);

// --- Componente Principal ---

export default function Anuncios() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Start the first cycle
    setIsPlaying(true);

    // Set up infinite loop
    const loopInterval = setInterval(() => {
      // Start restart animation
      setIsPlaying(false);

      // Reset after a brief pause for smooth transition
      setTimeout(() => {
        setIsPlaying(true);
      }, 500); // Increased to 1 second for smoother transition
    }, TOTAL_DURATION);

    return () => {
      clearInterval(loopInterval);
    };
  }, []);
  return (
    <div className={`video-container ${isPlaying ? "is-playing" : ""}`}>
      <LogoBenefitsScene />
      <FeaturesScene />
      <TestimonialScene />
      <CtaScene />
      {/* <AdScene /> */}
      {/* <TilinhoLanchesScene /> */}
    </div>
  );
}
