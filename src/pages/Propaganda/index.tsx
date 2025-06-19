import { useEffect, useState } from "react";
import "./styles.css";

// --- Constantes de Configuração ---
const TOTAL_DURATION = 131000; // Gestão Boa (40s) + Tilinho (30s) + Ads (3 * 20s)

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
        inteligentes e garantir a saúde financeira da minha empresa."
      </blockquote>
      <cite className="testimonial-author">Leandro Figueiredo</cite>
    </div>
  </div>
);

const CtaScene = () => (
  <div id="cta-section" className="animation-section">
    <div className="cta-container">
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=https://gestaoboa.com.br&bgcolor=0B1B34&color=FFFFFF&qzone=1"
        alt="QR Code para começar"
        className="qr-code"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "https://placehold.co/600x600/ffffff/0B1B34?text=QRCode";
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
        <h3 className="ad-info-headline">Plano Bronze - Anuncie Aqui</h3>
        <p className="ad-info-p">✓ Tempo de tela: 20s</p>
        <p className="ad-info-p">✓ Exposição compartilhada</p>
        <p className="ad-info-p">✓ Logo marca e informações essenciais</p>
        <p className="ad-info-p ad-info-price">R$ 100,00 / mês</p>
        <p className="ad-info-p">+ Anúncio personalizado: R$ 50,00</p>
      </div>
    </div>
  </div>
);

const AdScene2 = () => (
  <div id="ad-section-2" className="animation-section ad-section-silver">
    <div className="ad-content">
      <img
        src="joao.png"
        alt="João de Barro Studio"
        className="ad-logo-image"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "https://placehold.co/180x180/C0C0C0/000000?text=LOGO";
        }}
      />
      <div className="ad-info">
        <h3 className="ad-info-headline">Plano Prata - Destaque Premium</h3>
        <p className="ad-info-p">✓ Tempo de tela: 30s</p>
        <p className="ad-info-p">✓ Exposição compartilhada</p>
        <p className="ad-info-p">✓ Animações personalizadas</p>
        <p className="ad-info-p">✓ Call-to-action destacado</p>
        <p className="ad-info-p ad-info-price">R$ 150,00 / mês</p>
        <p className="ad-info-p">+ Anúncio personalizado: R$ 70,00</p>
      </div>
    </div>
  </div>
);

const AdScene3 = () => (
  <div id="ad-section-3" className="animation-section ad-section-gold">
    <div className="ad-content">
      <img
        src="joao.png"
        alt="João de Barro Studio"
        className="ad-logo-image"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "https://placehold.co/180x180/FFD700/000000?text=LOGO";
        }}
      />
      <div className="ad-info">
        <h3 className="ad-info-headline">Plano Ouro - Máxima Visibilidade</h3>
        <p className="ad-info-p">✓ Tempo de tela: 45s</p>
        <p className="ad-info-p">✓ Exposição exclusiva (sem concorrência)</p>
        <p className="ad-info-p">✓ Conteúdo totalmente personalizado</p>
        <p className="ad-info-p">✓ Informação completa, QRCode e contato</p>
        <p className="ad-info-p ad-info-price">R$ 225,00 / mês</p>
        <p className="ad-info-p">+ Anúncio personalizado: R$ 100,00!</p>
      </div>
    </div>
  </div>
);

const JoaoDeBarroStudioScene = () => (
  <div id="joao-barro-section" className="animation-section joao-barro-section">
    <div className="joao-barro-content">
      <div className="studio-header">
        <img
          src="joao.png"
          alt="João de Barro Studio"
          className="studio-logo"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/600x600/8B4513/FFFFFF?text=JOÃO+DE+BARRO";
          }}
        />
        <div className="studio-title-container">
          <h2 className="studio-title">JOÃO DE BARRO STUDIO</h2>
          <p className="studio-subtitle">Barbearia Premium</p>
        </div>
      </div>

      <div className="studio-services">
        <div className="service-item">
          <span className="service-icon">✂️</span>
          <span className="service-text">Cortes Modernos</span>
        </div>
        <div className="service-item">
          <span className="service-icon">🧔</span>
          <span className="service-text">Barba & Bigode</span>
        </div>
        <div className="service-item">
          <span className="service-icon">💆‍♂️</span>
          <span className="service-text">Tratamentos</span>
        </div>
      </div>

      <div className="studio-welcome">
        <p className="welcome-text">
          "Transformamos seu visual com cuidado e profissionalismo. Aqui você
          encontra o ambiente perfeito para relaxar e sair renovado!"
        </p>
        <div className="studio-contact">
          {/* <p className="contact-info">📍 Endereço da Barbearia</p> */}
          <p className="contact-info">📞 53 99204-9016</p>
          <p className="studio-slogan">Sua confiança, nosso compromisso!</p>
        </div>
      </div>
    </div>
  </div>
);

const TilinhoImage1Scene = () => (
  <div
    id="tilinho-image1-section"
    className="animation-section tilinho-image-scene"
  >
    <img
      src="xis.png"
      alt="Xis do Tilinho Lanches"
      className="tilinho-food-image"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = "https://placehold.co/1200x800/c0392b/FFFFFF?text=XIS";
      }}
    />
  </div>
);

const TilinhoImage2Scene = () => (
  <div
    id="tilinho-image2-section"
    className="animation-section tilinho-image-scene"
  >
    <img
      src="ala-minuta.png"
      alt="Ala Minuta do Tilinho Lanches"
      className="tilinho-food-image"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src =
          "https://placehold.co/1200x800/c0392b/FFFFFF?text=ALA+MINUTA";
      }}
    />
  </div>
);

const TilinhoImage3Scene = () => (
  <div
    id="tilinho-image3-section"
    className="animation-section tilinho-image-scene"
  >
    <img
      src="xis2.png"
      alt="Outro Xis do Tilinho Lanches"
      className="tilinho-food-image"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = "https://placehold.co/1200x800/c0392b/FFFFFF?text=XIS+2";
      }}
    />
  </div>
);

const TilinhoHungryScene = () => (
  <div
    id="tilinho-hungry-section"
    className="animation-section tilinho-hungry-section"
  >
    <h2 className="tilinho-hungry-text">Bateu aquela fome?</h2>
  </div>
);

const TilinhoFinalScene = () => (
  <div
    id="tilinho-final-section"
    className="animation-section tilinho-final-section"
  >
    <div className="tilinho-final-logo-container">
      <img
        src="tilinho_Xis.png"
        alt="Logo Tilinho Lanches"
        className="tilinho-final-logo"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/400x400/FFFFFF/000000?text=TILINHO";
        }}
      />
    </div>
    <div className="tilinho-final-details-container">
      <div className="tilinho-final-detail">
        <div className="tilinho-info-icon clock-icon" />
        <div className="tilinho-info-text">
          <h3>Horário de Funcionamento:</h3>
          <p>Diariamente</p>
          <p>11:00 às 14:30</p>
          <p>18:00 às 23:59</p>
        </div>
      </div>
      <div className="tilinho-final-detail">
        <div className="tilinho-info-icon phone-icon" />
        <div className="tilinho-info-text">
          <h3>Telefones:</h3>
          <p>(53)99973-4386</p>
          <p>3236-5401</p>
          <p>3236-4428</p>
        </div>
      </div>
      <div className="tilinho-final-detail">
        <div className="tilinho-info-icon location-icon" />
        <div className="tilinho-info-text">
          <h3>Localização:</h3>
          <p>Lisboa, 424 - Cassino.</p>
        </div>
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
      <TilinhoImage1Scene />
      <TilinhoImage2Scene />
      <TilinhoImage3Scene />
      <TilinhoHungryScene />
      <TilinhoFinalScene />
      <AdScene />
      <AdScene2 />
      <AdScene3 />
      {/* <JoaoDeBarroStudioScene /> */}
    </div>
  );
}
