import { useEffect, useState } from "react";
import "./styles.css";

// --- Constantes de Configuração ---
const TOTAL_DURATION = 226000; // Gestão Boa (40s) + Vip Veículos (30s) + Tilinho (40s) + Ana Rose (30s) + João de Barro (20s) + Ads (3 * 20s) + Gestão Boa (36s)

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
        src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://gestaoboa.com.br&bgcolor=0B1B34&color=FFFFFF&qzone=1"
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

const TilinhoImage1Scene = () => (
  <div
    id="tilinho-image1-section"
    className="animation-section tilinho-image-scene"
  >
    <img
      src="Xis_tilinho.jpeg"
      alt="Xis do Tilinho Lanches"
      className="tilinho-food-image2"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = "https://placehold.co/1200x800/c0392b/FFFFFF?text=XIS";
      }}
    />
  </div>
);

const TilinhoImage2And3Scene = () => (
  <div
    id="tilinho-image2and3-section"
    className="animation-section tilinho-combined-scene"
  >
    <div className="tilinho-combined-container">
      <img
        src="ala-minuta.png"
        alt="Ala Minuta do Tilinho Lanches"
        className="tilinho-food-image-left"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/1200x800/c0392b/FFFFFF?text=ALA+MINUTA";
        }}
      />
      <img
        src="Batatinha Tilinho.jpeg"
        alt="Batatinha do Tilinho Lanches"
        className="tilinho-food-image-right"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/1200x800/c0392b/FFFFFF?text=BATATINHA";
        }}
      />
    </div>
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

const TilinhoQRCodeScene = () => (
  <div id="tilinho-qr-section" className="animation-section tilinho-qr-section">
    <div className="tilinho-qr-content">
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://pedido.anota.ai/loja/tilinho-lanches?f=ms%26fbclid=PAZXh0bgNhZW0CMTEAAaeyp7cqz4XksF9onMuTq-RlkLq7k_gmeXXLI6PV-LTGaVqolFeZ7AEvemtP3A_aem_uKVcmzhgjb6bdAqtJS3xbw&bgcolor=e74c3c&color=ffffff&qzone=2"
        alt="QR Code Cardápio Tilinho Lanches"
        className="tilinho-qr-code"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/300x300/e74c3c/ffffff?text=QR+CODE";
        }}
      />
      <h2 className="tilinho-qr-title">Cardápio Digital</h2>
      <p className="tilinho-qr-message">Peça agora mesmo!</p>
    </div>
  </div>
);

// --- Componentes do Anúncio Ana Rose Esmalteria ---
const AnaRoseIntroScene = () => (
  <div
    id="ana-rose-intro-section"
    className="animation-section ana-rose-intro-section"
  >
    <h1 className="ana-rose-title">Unhas Perfeitas em Qualquer Ocasião</h1>
    <div className="ana-rose-logo-container">
      <img
        src="Rosa.jpeg"
        alt="Ana Rose Esmalteria"
        className="ana-rose-logo"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/400x400/f06292/ffffff?text=ANA+ROSE";
        }}
      />
    </div>
    <h2 className="ana-rose-subtitle">
      Especialista em Manicure e Nail Designer
    </h2>
  </div>
);

const AnaRoseShowcaseScene = () => (
  <div
    id="ana-rose-showcase-section"
    className="animation-section ana-rose-showcase-section"
  >
    <div className="ana-rose-work-container">
      <div className="ana-rose-work-image-container">
        <img
          src="unhas.png"
          alt="Design de Unhas Ana Rose"
          className="ana-rose-work-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/600x400/f06292/ffffff?text=DESIGN+DE+UNHAS";
          }}
        />
        <div className="ana-rose-image-overlay">
          <span>Nail Art Premium</span>
        </div>
      </div>

      <div className="ana-rose-work-image-container">
        <img
          src="unhas2.png"
          alt="Unhas Decoradas Ana Rose"
          className="ana-rose-work-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/600x400/f06292/ffffff?text=UNHAS+DECORADAS";
          }}
        />
        <div className="ana-rose-image-overlay">
          <span>Designs Exclusivos</span>
        </div>
      </div>
    </div>

    <div className="ana-rose-features">
      <div className="ana-rose-feature">
        <div className="ana-rose-feature-icon">💅</div>
        <div className="ana-rose-feature-text">Alongamentos</div>
      </div>
      <div className="ana-rose-feature">
        <div className="ana-rose-feature-icon">✨</div>
        <div className="ana-rose-feature-text">Nail Art</div>
      </div>
      <div className="ana-rose-feature">
        <div className="ana-rose-feature-icon">💎</div>
        <div className="ana-rose-feature-text">Esmaltação em Gel</div>
      </div>
    </div>
  </div>
);

const AnaRoseCtaScene = () => (
  <div
    id="ana-rose-cta-section"
    className="animation-section ana-rose-cta-section"
  >
    <h2 className="ana-rose-cta-headline">Agende seu Horário</h2>
    <p className="ana-rose-cta-text">
      Transforme suas mãos em uma obra de arte!
    </p>

    <div className="ana-rose-contact">
      <div className="ana-rose-contact-item">
        <div className="ana-rose-contact-icon">📱</div>
        <div className="ana-rose-contact-text">(53) 99109-5009</div>
      </div>
      <div className="ana-rose-contact-item">
        <div className="ana-rose-contact-icon">📍</div>
        <div className="ana-rose-contact-text">
          Rua Avenida Rio Grande 595 - Cassino
        </div>
      </div>
      <div className="ana-rose-contact-item">
        <div className="ana-rose-contact-icon">📸</div>
        <div className="ana-rose-contact-text">
          @anarosaesmalteria_naildesigner
        </div>
      </div>
    </div>

    <div className="ana-rose-cta-button-container">
      <div className="ana-rose-cta-button">AGENDE AGORA</div>
    </div>
  </div>
);

const JoaoDeBarroStudioPriceScene = () => (
  <div
    id="joao-barro-price-section"
    className="animation-section joao-barro-section"
  >
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
          <p className="studio-subtitle">TABELA DE PREÇOS</p>
        </div>
      </div>

      <div className="price-table-container">
        <div className="price-category">
          <h3 className="price-category-title">BEBIDAS</h3>
          <div className="price-items">
            <div className="price-item">
              <span className="price-service">Budweiser</span>
              <span className="price-value">R$ 8,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Eisenbahn</span>
              <span className="price-value">R$ 8,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Heineken e Stella</span>
              <span className="price-value">R$ 9,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Corona</span>
              <span className="price-value">R$ 10,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Refrigerantes</span>
              <span className="price-value">R$ 5,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Água</span>
              <span className="price-value">R$ 4,00</span>
            </div>
          </div>
        </div>

        <div className="price-category">
          <h3 className="price-category-title">CORTES</h3>
          <div className="price-items">
            <div className="price-item">
              <span className="price-service">Navalhado</span>
              <span className="price-value">R$ 40,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Tesoura</span>
              <span className="price-value">R$ 40,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Normal</span>
              <span className="price-value">R$ 35,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Básico</span>
              <span className="price-value">R$ 30,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Corte Infantil</span>
              <span className="price-value">R$ 45,00</span>
            </div>
          </div>
        </div>

        <div className="price-category">
          <h3 className="price-category-title">OUTROS</h3>
          <div className="price-items">
            <div className="price-item">
              <span className="price-service">Barba</span>
              <span className="price-value">R$ 30,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Pézinho</span>
              <span className="price-value">R$ 15,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Sobrancelha</span>
              <span className="price-value">R$ 15,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Relaxamento capilar</span>
              <span className="price-value">R$ 60,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Ajuste de barba</span>
              <span className="price-value">R$ 20,00</span>
            </div>
            <div className="price-item">
              <span className="price-service">Luzes</span>
              <span className="price-value">R$ 100,00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="studio-contact">
        <p className="contact-info">📞 99204-9016</p>
        <p className="contact-info">📱 @joaodebarrobarber</p>
      </div>
    </div>
  </div>
);

// --- Componentes do Anúncio Vip Veículos ---
const VipVeiculosIntroScene = () => (
  <div
    id="vip-veiculos-intro-section"
    className="animation-section vip-veiculos-intro-section"
  >
    <h1 className="vip-veiculos-title">Seu Carro Novo Está Aqui</h1>
    <div className="vip-veiculos-logo-container">
      <img
        src="Vip.jpeg"
        alt="Vip Veículos"
        className="vip-veiculos-logo"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/400x400/0a4b78/ffffff?text=VIP+VEÍCULOS";
        }}
      />
    </div>
    <h2 className="vip-veiculos-subtitle">
      15 anos de excelência em Rio Grande
    </h2>
  </div>
);

const VipVeiculosShowcaseScene = () => (
  <div
    id="vip-veiculos-showcase-section"
    className="animation-section vip-veiculos-showcase-section"
  >
    <h2 className="vip-veiculos-showcase-title">
      Te ajudamos a tomar a melhor decisão para sua família
    </h2>
    <div className="vip-veiculos-testimonials">
      <div className="vip-veiculos-testimonial">
        <img
          src="Cliente1.jpg"
          alt="Cliente Satisfeito Vip Veículos"
          className="vip-veiculos-client-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/600x400/0a4b78/ffffff?text=CLIENTE+SATISFEITO";
          }}
        />
        <div className="vip-veiculos-testimonial-overlay">
          <span>"Ambiente familiar e aconchegante!"</span>
        </div>
      </div>
      <div className="vip-veiculos-testimonial">
        <img
          src="Cliente2.jpg"
          alt="Cliente Satisfeito Vip Veículos"
          className="vip-veiculos-client-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/600x400/0a4b78/ffffff?text=CLIENTE+SATISFEITO";
          }}
        />
        <div className="vip-veiculos-testimonial-overlay">
          <span>"Atendimento nota 10!"</span>
        </div>
      </div>
    </div>
    <div className="vip-veiculos-slogan-container">
      <p className="vip-veiculos-slogan">"A certeza de uma ótima compra"</p>
    </div>
  </div>
);

const VipVeiculosCtaScene = () => (
  <div
    id="vip-veiculos-cta-section"
    className="animation-section vip-veiculos-cta-section"
  >
    <h2 className="vip-veiculos-cta-headline">
      Está na Hora de Trocar de Carro?
    </h2>
    <p className="vip-veiculos-cta-text">
      Condições especiais de financiamento e avaliação do seu usado!
    </p>

    <div className="vip-veiculos-benefits">
      <div className="vip-veiculos-benefit">
        <div className="vip-veiculos-benefit-icon">✓</div>
        <div className="vip-veiculos-benefit-text">Carros de qualidade</div>
      </div>
      <div className="vip-veiculos-benefit">
        <div className="vip-veiculos-benefit-icon">✓</div>
        <div className="vip-veiculos-benefit-text">Respeito e seriedade</div>
      </div>
      <div className="vip-veiculos-benefit">
        <div className="vip-veiculos-benefit-icon">✓</div>
        <div className="vip-veiculos-benefit-text">Desde 2008 no mercado</div>
      </div>
    </div>

    <div className="vip-veiculos-contact">
      <div className="vip-veiculos-contact-item">
        <div className="vip-veiculos-contact-icon">📱</div>
        <div className="vip-veiculos-contact-text">(53) 99104-3340</div>
      </div>
      <div className="vip-veiculos-contact-item">
        <div className="vip-veiculos-contact-icon">📍</div>
        <div className="vip-veiculos-contact-text">
          Av. Santos Dumont, 80 - Vila Juncao
        </div>
      </div>
      <div className="vip-veiculos-contact-item">
        <div className="vip-veiculos-contact-icon">📸</div>
        <div className="vip-veiculos-contact-text">@vipveiculos_</div>
      </div>
    </div>

    <div className="vip-veiculos-cta-button-container">
      <div className="vip-veiculos-cta-button">VISITE NOSSA LOJA</div>
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
      }, 500); // Increased to 0.5 second for smoother transition
    }, TOTAL_DURATION);

    return () => {
      clearInterval(loopInterval);
    };
  }, []);

  return (
    <div className={`video-container ${isPlaying ? "is-playing" : ""}`}>
      <VipVeiculosIntroScene />
      <VipVeiculosShowcaseScene />
      <VipVeiculosCtaScene />
      <TilinhoImage1Scene />
      <TilinhoImage2And3Scene />
      <TilinhoHungryScene />
      <TilinhoFinalScene />
      <TilinhoQRCodeScene />
      <AnaRoseIntroScene />
      <AnaRoseShowcaseScene />
      <AnaRoseCtaScene />
      <JoaoDeBarroStudioPriceScene />
      <AdScene />
      <AdScene2 />
      <AdScene3 />
      <LogoBenefitsScene />
      <FeaturesScene />
      <TestimonialScene />
      <CtaScene />
    </div>
  );
}
