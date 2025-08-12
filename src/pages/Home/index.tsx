/* eslint-disable no-irregular-whitespace */
import emailjs from "@emailjs/browser";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { FunctionComponent, useEffect, useRef } from "react";
import ScrollSpy from "react-ui-scrollspy";
import * as yup from "yup";
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";
import CustomTextarea from "../../components/CustomTextArea";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { UnformErrors } from "../../interfaces/interfaces";
import { FB_PIXEL } from "../../utils/pixel";

import { Helmet } from "react-helmet-async";
import ReactPlayer from "react-player";
import { Banner, Contact, Container, FAQ, Grid, Solutions } from "./styles";

// Import the carousel styles
import "./testimonial-carousel.css";

const Home: FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);
  const viewedSections = useRef(new Set<string>());

  // Rastreia visualização da página quando o componente é montado
  useEffect(() => {
    FB_PIXEL.pageView();

    // Rastrear visualização de conteúdo importante quando a página carrega
    FB_PIXEL.trackCustomEvent("ViewHomePage", {
      page_type: "home",
      content_category: "landing_page",
    });

    // Configurar rastreamento de scrolls para seções importantes
    const handleScroll = () => {
      const sections = ["solution", "contact", "demonstration"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          isElementInViewport(element) &&
          !viewedSections.current.has(section)
        ) {
          viewedSections.current.add(section);
          FB_PIXEL.trackCustomEvent("ViewSection", {
            section_name: section,
            page: "home",
          });
        }
      });
    };

    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    formRef.current?.setErrors({});
    try {
      const schemaLogin = yup
        .object()
        .shape({
          name: yup.string().required("Informe o seu nome"),
          email: yup
            .string()
            .email("Email inválido")
            .required("Informe o seu email"),
          phone: yup.string().required("Informe o seu número de celular"),
          message: yup.string(),
        })
        .required();

      await schemaLogin.validate(data, { abortEarly: false });

      console.log("Passou tudo");

      const emailBody = {
        from_name: formRef.current?.getFieldValue("name"),
        email: formRef.current?.getFieldValue("email"),
        phone: formRef.current?.getFieldValue("phone"),
        message: formRef.current?.getFieldValue("message"),
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
          import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
          emailBody,
          import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
        )
        .then((res) => {
          if (res && res.status == 200) {
            // Rastreie o evento de lead após o envio bem-sucedido do formulário
            FB_PIXEL.trackLead({
              content_name: "Formulário de Contato",
              content_category: "contato",
              value: 1,
            });

            formRef.current?.clearField("name");
            formRef.current?.clearField("email");
            formRef.current?.clearField("phone");
            formRef.current?.clearField("message");
          }
        });
    } catch (err) {
      const validationErrors: UnformErrors = {};
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) validationErrors[error.path] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
        console.log("validationErrors ", validationErrors);
      }
    }
  };

  // Funções para rastreamento de eventos do Facebook Pixel
  const trackAppDownload = (platform: string) => {
    FB_PIXEL.trackCustomEvent("AppDownloadClick", { platform });
  };

  const trackDemonstrationClick = () => {
    FB_PIXEL.trackStartTrial({
      content_name: "Demonstração",
      content_category: "demonstração",
    });
  };

  return (
    <ScrollSpy>
      <Container>
        <Helmet>
          <title>
            Gestão Boa - Sistema de Gestão Empresarial Completo | Aumente suas
            Vendas
          </title>
          <meta
            name="description"
            content="Sistema de gestão empresarial completo: agendamentos, controle financeiro, CRM, estoque e comissões. Teste grátis por 20 dias!"
          />
          <meta
            name="keywords"
            content="sistema de gestão empresarial, software de gestão, CRM, controle financeiro, agendamento online, gestão de estoque, comissões, gestão de clientes, ERP, sistema para pequenas e micros empresas"
          />
          <meta name="author" content="Gestão Boa" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://gestaoboa.com.br/" />

          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Gestão Boa - Sistema de Gestão Empresarial Completo"
          />
          <meta
            property="og:description"
            content="Sistema de gestão empresarial completo: agendamentos, controle financeiro, CRM, estoque e comissões. Teste grátis por 20 dias!"
          />
          <meta property="og:url" content="https://gestaoboa.com.br/" />
          <meta property="og:site_name" content="Gestão Boa" />
          <meta
            property="og:image"
            content="https://gestaoboa.com.br/cellphone.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="Gestão Boa - App de gestão empresarial"
          />
          <meta property="og:locale" content="pt_BR" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Gestão Boa - Sistema de Gestão Empresarial Completo"
          />
          <meta
            name="twitter:description"
            content="Sistema de gestão empresarial completo: agendamentos, controle financeiro, CRM, estoque e comissões. Teste grátis por 20 dias!"
          />
          <meta
            name="twitter:image"
            content="https://gestaoboa.com.br/cellphone.png"
          />
          <meta
            name="twitter:image:alt"
            content="Gestão Boa - App de gestão empresarial"
          />

          {/* Additional SEO Meta Tags */}
          <meta name="theme-color" content="#007BFF" />
          <meta name="msapplication-TileColor" content="#007BFF" />
          <meta name="application-name" content="Gestão Boa" />
          <meta name="apple-mobile-web-app-title" content="Gestão Boa" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          {/* Schema.org structured data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Gestão Boa",
              description:
                "Sistema de gestão empresarial completo com agendamentos, controle financeiro, CRM, estoque e comissões",
              url: "https://gestaoboa.com.br",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, iOS, Android",
              offers: {
                "@type": "Offer",
                price: "49.90",
                priceCurrency: "BRL",
                priceValidUntil: "2025-12-31",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "500",
              },
              provider: {
                "@type": "Organization",
                name: "BEasier Tech",
                url: "https://gestaoboa.com.br",
              },
            })}
          </script>
        </Helmet>
        <Grid>
          <Header />

          <Banner id="start">
            <div className="content">
              <h1 className="title">Gestão inteligente para o seu negócio</h1>
              <div className="subtitle">
                Simplifique seus agendamentos e organize comissões com
                facilidade. Gerencie tudo em um app e veja sua receita decolar!
              </div>

              <div className="buttons">
                <a
                  className="button"
                  style={{ textDecoration: "none" }}
                  href="/preco"
                  title="TESTAR GRÁTIS"
                >
                  <Button
                    width="100%"
                    text="TESTAR GRÁTIS!"
                    method={() => {}}
                    type={"focused"}
                  />
                </a>
                <a
                  className="button"
                  style={{ textDecoration: "none" }}
                  href="/solution"
                  title="SAIBA MAIS"
                >
                  <Button
                    width="100%"
                    text="SAIBA MAIS"
                    method={() => {}}
                    type={"unfocused"}
                  />
                </a>
              </div>
            </div>
            <div className="images">
              <img
                className="cellphone"
                src="/cellphone.png"
                alt="Aplicativo Gestão Boa em smartphone mostrando interface de gestão empresarial"
              />
              <img
                className="elipse"
                src="/Ellipse.svg"
                alt="Elemento decorativo"
              />
            </div>
          </Banner>

          <Solutions id="solution">
            <div className="solutionBanner">
              <div className="vignette"></div>
              <h2 className="title">
                Como a Gestão Boa pode turbinar o seu negócio?
              </h2>
            </div>

            <div className="benefits">
              <div className="benefit">
                <img
                  src="/check-list.png"
                  alt="Ícone de agenda simplificada - checklist para organização de compromissos"
                />
                <div className="info">
                  <h3 className="title">Agenda Simplificada</h3>
                  <div className="subtitle">
                    Mantenha seus compromissos sempre à mão.
                  </div>
                  <a
                    href="/solution#agenda"
                    className="benefit-button"
                    title="Saiba mais sobre Agenda Simplificada"
                  >
                    <Button
                      width="120px"
                      text="Saiba mais"
                      method={() => {}}
                      type={"unfocused"}
                    />
                  </a>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="calendar (1) 1 (1).svg"
                  alt="Ícone de gerenciamento de produtos - controle de estoque e vendas"
                />
                <div className="info">
                  <h3 className="title">Gerenciamento e vendas de produtos</h3>
                  <div className="subtitle">
                    Controle seu estoque, e tenha uma análise completa sobre as
                    vendas dos seus produtos.
                  </div>
                  <a
                    href="/solution#produtos"
                    className="benefit-button"
                    title="Saiba mais sobre Gerenciamento e vendas de produtos"
                  >
                    <Button
                      width="120px"
                      text="Saiba mais"
                      method={() => {}}
                      type={"unfocused"}
                    />
                  </a>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="calendar (1) 1.svg"
                  alt="Ícone de controle de custos - gestão financeira de despesas"
                />
                <div className="info">
                  <h3 className="title">Controle de Custos</h3>
                  <div className="subtitle">
                    Lidar com contas para pagar é uma tarefa complicada. No
                    nosso app você pode já registrar quanto e quando vai pagar
                    seus boletos.
                  </div>
                  <a
                    href="/solution#financeiro"
                    className="benefit-button"
                    title="Saiba mais sobre Controle de Custos"
                  >
                    <Button
                      width="120px"
                      text="Saiba mais"
                      method={() => {}}
                      type={"unfocused"}
                    />
                  </a>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="calendar (1) 2.svg"
                  alt="Ícone de gestão financeira - acompanhamento de entradas e saídas"
                />
                <div className="info">
                  <h3 className="title">Gestão Financeira</h3>
                  <div className="subtitle">
                    Acompanhe entradas e saídas por método de pagamento.
                  </div>
                  <a
                    href="/solution#financeiro"
                    className="benefit-button"
                    title="Saiba mais sobre Gestão Financeira"
                  >
                    <Button
                      width="120px"
                      text="Saiba mais"
                      method={() => {}}
                      type={"unfocused"}
                    />
                  </a>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="calendar (1) 3.svg"
                  alt="Ícone de análises detalhadas - relatórios e insights de negócio"
                />
                <div className="info">
                  <h3 className="title">Análises Detalhadas</h3>
                  <div className="subtitle">
                    Visualize resultados e tome decisões baseadas em dados.
                  </div>
                  <a
                    href="/solution#analytics"
                    className="benefit-button"
                    title="Saiba mais sobre Análises Detalhadas"
                  >
                    <Button
                      width="120px"
                      text="Saiba mais"
                      method={() => {}}
                      type={"unfocused"}
                    />
                  </a>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="calendar (1) 3 (1).svg"
                  alt="Ícone de fidelização do cliente - automação de mensagens e relacionamento"
                />
                <div className="info">
                  <div className="title">Fidelização do Cliente</div>
                  <div className="subtitle">
                    Automatize mensagens e crie relacionamentos duradouros.
                  </div>
                  <a
                    href="/solution#clientes"
                    className="benefit-button"
                    title="Saiba mais sobre Fidelização do Cliente"
                  >
                    <Button
                      width="120px"
                      text="Saiba mais"
                      method={() => {}}
                      type={"unfocused"}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Botão Experimente gratuitamente */}
            <div className="try-free-button-container">
              <a
                className="try-free-button"
                href="/preco"
                title="EXPERIMENTE GRATUITAMENTE"
              >
                <Button
                  width="100%"
                  text="EXPERIMENTE GRATUITAMENTE"
                  method={() => {}}
                  type={"focused"}
                />
              </a>
            </div>

            <div className="testimonies">
              <div className="heading">
                Empreendedores de sucesso já contam com nossa solução: organize,
                cresça e fidelize seus clientes!
              </div>

              {/* Leandro's testimonial - fixed */}
              <div className="card featured-testimonial">
                <video
                  controls
                  onPlay={() =>
                    FB_PIXEL.trackCustomEvent("VideoPlay", {
                      video: "depoimentoLeandro",
                      type: "testimonial",
                    })
                  }
                  onPause={() =>
                    FB_PIXEL.trackCustomEvent("VideoPause", {
                      video: "depoimentoLeandro",
                      type: "testimonial",
                    })
                  }
                >
                  <source src="/depoimentoLeandro.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                <div className="texts">
                  <div className="title">Uso e recomendo</div>
                  <div className="desc">
                    Se tem uma coisa que mudou o jogo aqui na minha barbearia
                    foi começar a usar o Gestão Boa. Antes era tudo no papel, na
                    cabeça ou em planilhas. Hoje eu tenho clareza total dos
                    números, consigo tomar decisões mais inteligentes e garantir
                    a saúde financeira da barbearia. Eu uso e indico para
                    qualquer barbearia que queira crescer com gestão.
                  </div>
                  <div className="person">
                    - Leandro Figueiredo, Proprietário da Barbearia Duque
                  </div>
                </div>
              </div>

              {/* Other testimonials carousel */}
              <div className="testimonials-carousel">
                <div className="testimonials-track">
                  <div className="card carousel-card">
                    <img
                      src="/WhatsApp Image 2024-07-05 at 10.01.10.jpeg"
                      alt="Janaina Christello"
                    />
                    <div className="texts">
                      <div className="title">
                        Ficou mais fácil organizar minhas finanças
                      </div>
                      <div className="desc">
                        O aplicativo ajudou muito a organizar os meus
                        recebimentos e entender quais são os lucros e despesas
                        de forma muito clara e objetiva. Além de conseguir
                        abranger vários objetivos em um só APP como organizar
                        agendamentos que antes usava o Google agenda e também
                        organizar os recebimentos que antes usava o Excel. Assim
                        se torna muito mais prático e organizado as minhas
                        finanças.
                      </div>
                      <div className="person">
                        - Janaina Christello, Psicóloga
                      </div>
                    </div>
                  </div>

                  <div className="card carousel-card">
                    <img
                      src="/pedroCirilo.png"
                      alt="Pedro Cirilo"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/200x200/007BFF/FFFFFF?text=PC";
                      }}
                    />
                    <div className="texts">
                      <div className="title">Grandes parceiros</div>
                      <div className="desc">
                        A equipe é extremamente profissional. Entendem muito bem
                        as demandas e estão sempre atualizados. Já trabalhei com
                        eles na construção de outras plataformas e sites e foram
                        impecáveis! Tenho como grandes parceiros!
                      </div>
                      <div className="person">- Pedro Cirilo, Designer</div>
                    </div>
                  </div>

                  <div className="card carousel-card">
                    <img
                      src="/PedroArthur.jpg"
                      alt="Pedro Arthur"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/200x200/007BFF/FFFFFF?text=PA";
                      }}
                    />
                    <div className="texts">
                      <div className="title">Controle total do negócio</div>
                      <div className="desc">
                        O app da gestão boa vem me ajudando muito desde o
                        primeiro dia, consigo saber com exatidão quantos
                        clientes eu tenho e atendo, faturamento, venda de
                        produtos, etc. Comecei a ter controle não só dos cortes,
                        mas das vendas dos produtos e dos custos. E hoje eu
                        tenho controle do quanto custa cada corte, isso é muito
                        importante, até para precificar os serviços. A atenção
                        do suporte também é um ponto importante de citar, sempre
                        tiram as dúvidas e resolvem o que precisa com rapidez.
                      </div>
                      <div className="person">
                        - Pedro Arthur, Proprietário da Prime Barbershop
                      </div>
                    </div>
                  </div>

                  {/* Duplicate cards for infinite scroll effect */}
                </div>
              </div>
            </div>
            <div className="tutorial" id="demonstration">
              <div className="callout">
                <div className="title">
                  Gestão financeira e vendas <span>na palma da sua mão</span>
                </div>
                <div className="description">
                  Veja nossa demonstração, onde mostramos o passo a passo para
                  adicionar serviço, registrar vendas e custos, agendar
                  serviços, adicionar clientes. Além de ver relatórios que te
                  ajudam a entender seus lucros, melhores clientes e gráficos de
                  vendas.
                </div>

                <div className="buttons">
                  <div className="top">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.beasier&pcampaignid=web_share"
                      className="unfocused"
                      onClick={() => trackAppDownload("Android")}
                    >
                      <img
                        src="/Vector.svg"
                        alt="Ícone Android - baixar app para Android"
                      />
                      ANDROID
                    </a>

                    <div className="or">ou</div>

                    <a
                      href="https://app.gestaoboa.com.br"
                      className="unfocused"
                      onClick={() => trackAppDownload("iOS")}
                    >
                      <img
                        src="/mage_playstore.svg"
                        alt="Ícone da App Store"
                        className="ios-icon"
                      />
                      IOS
                    </a>
                  </div>
                  <a
                    href="https://app.gestaoboa.com.br"
                    className="focused"
                    onClick={trackDemonstrationClick}
                  >
                    Desktop
                  </a>
                </div>
              </div>{" "}
              <div className="player">
                <ReactPlayer
                  className="buying"
                  url="/demonstracao.mp4"
                  width="fit-content"
                  height="85vh"
                  controls={true}
                  loop={true}
                  playing={true}
                  muted
                  onStart={() =>
                    FB_PIXEL.trackCustomEvent("DemoVideoStart", {
                      video: "demonstracao",
                      section: "demonstration",
                    })
                  }
                  onPlay={() =>
                    FB_PIXEL.trackCustomEvent("DemoVideoPlay", {
                      video: "demonstracao",
                      section: "demonstration",
                    })
                  }
                  onPause={() =>
                    FB_PIXEL.trackCustomEvent("DemoVideoPause", {
                      video: "demonstracao",
                      section: "demonstration",
                    })
                  }
                  onProgress={(state) => {
                    const progress = Math.floor(state.played * 100);
                    if (progress === 25 || progress === 50 || progress === 75) {
                      FB_PIXEL.trackCustomEvent("DemoVideoProgress", {
                        video: "demonstracao",
                        progress: `${progress}%`,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </Solutions>

          {/* FAQ Section */}
          <FAQ id="faq">
            <h2 className="section-title text-center">Perguntas Frequentes</h2>
            <div className="faq-container">
              <details className="faq-item">
                <summary>
                  O que é a Gestão boa e como ela pode me ajudar?
                </summary>
                <p>
                  A Gestão boa é uma plataforma completa de gestão para o seu
                  negócio. Nós centralizamos tudo o que você precisa em um só
                  lugar: agendamentos online, controle de fluxo de caixa, gestão
                  de clientes (CRM), pagamento de comissões, controle de estoque
                  e muito mais. Nosso objetivo é que você tenha mais tempo e
                  possa tomar decisões inteligentes e fazer sua empresa crescer
                  com segurança e tecnologia.
                </p>
              </details>

              <details className="faq-item">
                <summary>É possível migrar dados de outro sistema?</summary>
                <p>
                  Sim, oferecemos serviço de migração de dados de praticamente
                  qualquer sistema existente para a Gestão Boa.
                </p>
              </details>

              <details className="faq-item">
                <summary>O sistema funciona em dispositivos móveis?</summary>
                <p>
                  Sim! A Gestão Boa é totalmente responsiva e funciona
                  perfeitamente em smartphones e tablets, além de contar com
                  aplicativos nativos para iOS e Android.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  {" "}
                  Quais são os planos? Existe um período de teste?
                </summary>
                <p>
                  Temos planos flexíveis que se adaptam ao tamanho e à
                  necessidade do seu negócio, começando em R$ 49,90 e indo até
                  R$ 99,90 por mês. Todos os planos incluem as funcionalidades
                  essenciais para uma gestão de ponta. E você pode experimentar
                  gratuitamente por 20 dias, sem necessidade de cartão de
                  crédito!
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Preciso ter conhecimento técnico para usar o sistema? Como
                  funciona a implantação?
                </summary>
                <p>
                  Não! Nossa plataforma é 100% intuitiva e foi pensada para o
                  dia a dia do empreendedor, não para especialistas em
                  tecnologia. A implantação é simples e nossa equipe está pronta
                  para te auxiliar nos primeiros passos, garantindo que você e
                  seus funcionários consigam usar todas as ferramentas desde o
                  primeiro dia.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  O sistema é seguro? Meus dados ficam protegidos?
                </summary>
                <p>
                  Sim! Utilizamos criptografia de ponta a ponta, servidores
                  seguros com certificação SSL e backup automático diário. Seus
                  dados são protegidos por protocolos de segurança bancária e
                  nunca são compartilhados com terceiros.
                </p>
              </details>
            </div>
          </FAQ>

          <Contact id="contact">
            {/* */}
            <div className="info">
              <div className="title">
                Entre em contato e acelere seu crescimento!
              </div>
              <div className="links">
                <a href="https://www.instagram.com/gestaoboa/">
                  <img
                    src="/instagram-1@2x.png"
                    alt="Instagram da Gestão Boa - siga-nos nas redes sociais"
                  />
                  @gestaoboa
                </a>
              </div>
            </div>

            <div className="space"></div>

            <div className="form">
              <Form
                ref={formRef}
                onSubmit={handleSubmit}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <div className="input-wrapper double">
                  <div className="label">Nome completo</div>
                  <CustomInput width="100%" name="name" placeholder="Nome" />
                </div>
                <div className="input-wrapper">
                  <div className="label">Email</div>
                  <CustomInput
                    width="98%"
                    name="email"
                    placeholder="seumelhoremail@mail.com"
                  />
                </div>
                <div className="input-wrapper">
                  <div className="label">Telefone</div>
                  <CustomInput
                    width="98%"
                    name="phone"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="textarea">
                  <div className="label">Mensagem</div>
                  <CustomTextarea
                    width="100%"
                    name="message"
                    placeholder="Olá, tudo bem?"
                  />
                </div>
              </Form>
              <div className="button">
                <Button
                  width={"100%"}
                  text="Enviar"
                  method={() => formRef.current?.submitForm()}
                  type="focused"
                />
              </div>
            </div>
          </Contact>

          <Footer />
        </Grid>
      </Container>
    </ScrollSpy>
  );
};

export default Home;
