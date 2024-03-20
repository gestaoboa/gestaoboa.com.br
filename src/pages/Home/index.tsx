import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='entreEmContato']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNOSSASOLUOText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='masEComo']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTIMEText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='conheaONosso']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCONTATOText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='entreEmContato']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='entreEmContato']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTermosECondiesClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onPolticaDePrivacidadeClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <div className="desktop-2">
      <div className="desktop-2-child" />
      <div className="desktop-2-item" />
      <div className="desktop-2-inner" />
      <div className="rectangle-div" />
      <div className="desktop-2-child1" />
      <div className="desktop-2-child2" />
      <div className="desktop-2-child3" />
      <div className="beasier-1-1-1-parent">
        <img className="beasier-1-1-1" alt="" src="/beasier-1-1-1@2x.png" />
        <b className="beasier">BEasier</b>
      </div>
      <b className="para-melhor-gesto">
        Para melhor gestão, BEasier é a solução!
      </b>
      <div className="desktop-2-child4" />
      <div className="incio">INÍCIO</div>
      <div className="desktop-2-child5" />
      <div className="nossa-soluo">NOSSA SOLUÇÃO</div>
      <div className="desktop-2-child6" />
      <div className="time">TIME</div>
      <div className="desktop-2-child7" />
      <div className="contato">CONTATO</div>
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="group-child" />
        <b className="testar-agora">TESTAR AGORA</b>
      </div>
      <div className="beasier-1-1-1-parent">
        <img className="beasier-1-1-1" alt="" src="/beasier-1-1-1@2x.png" />
        <b className="beasier">BEasier</b>
      </div>
      <div className="incio">INÍCIO</div>
      <div className="nossa-soluo1" onClick={onNOSSASOLUOText1Click}>
        NOSSA SOLUÇÃO
      </div>
      <div className="time1" onClick={onTIMEText1Click}>
        TIME
      </div>
      <div className="contato1" onClick={onCONTATOText1Click}>
        CONTATO
      </div>
      <div className="rectangle-parent" onClick={onGroupContainer1Click}>
        <div className="group-child" />
        <b className="testar-agora">TESTAR AGORA</b>
      </div>
      <b className="mas-e-como" data-scroll-to="masEComo">
        Mas e como funciona?
      </b>
      <b className="conhea-o-nosso" data-scroll-to="conheaONosso">
        Conheça o nosso time!
      </b>
      <b className="entre-em-contato" data-scroll-to="entreEmContato">
        Entre em contato conosco!
      </b>
      <img className="growth-1-icon" alt="" src="/growth-1@2x.png" />
      <div className="bar-chart-1-1-parent">
        <img className="bar-chart-1-1" alt="" src="/barchart-1-1@2x.png" />
        <b className="as-ferramentas-para">
          As ferramentas para gerir o seu negócio em um único lugar
        </b>
      </div>
      <b className="beasieroficial">@BEasierOficial</b>
      <b className="b">(53) 99946-1551</b>
      <b className="beasieriggmailcom">BEasier.IG@gmail.com</b>
      <div className="adaptar-se-pra-economia-40-parent">
        <b className="adaptar-se-pra-economia">Adaptar-se pra economia 4.0</b>
        <img className="store-1-icon" alt="" src="/store-1@2x.png" />
      </div>
      <div className="conhecimento-financeiro-de-man-parent">
        <b className="conhecimento-financeiro-de">
          Conhecimento financeiro de maneira simplificada
        </b>
        <img className="check-list-1-icon" alt="" src="/checklist-1@2x.png" />
      </div>
      <div className="mostrar-formas-de-captar-clien-parent">
        <b className="conhecimento-financeiro-de">
          Mostrar formas de captar clientes
        </b>
        <img className="check-list-1-icon" alt="" src="/monitoring-1@2x.png" />
      </div>
      <img className="partnership-1-icon" alt="" src="/partnership-1@2x.png" />
      <div className="silvio-quintana-parent">
        <b className="silvio-quintana">Silvio Quintana</b>
        <i className="ceouxdesenvolvedor">CEO/UX/Desenvolvedor</i>
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      </div>
      <div className="karine-quintana-parent">
        <b className="karine-quintana">Karine Quintana</b>
        <i className="criao-de-contedo">Criação de Conteúdo</i>
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      </div>
      <div className="victor-amaral-parent">
        <b className="victor-amaral">Victor Amaral</b>
        <i className="uxdesenvolvedor">UX/Desenvolvedor</i>
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      </div>
      <div className="bruno-nascimento-parent">
        <b className="bruno-nascimento">Bruno Nascimento</b>
        <i className="uxdesenvolvedor">Desenvolvedor</i>
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      </div>
      <img className="instagram-1-icon" alt="" src="/instagram-1@2x.png" />
      <img className="whatsapp-1-icon" alt="" src="/whatsapp-1@2x.png" />
      <img className="envelope-1-icon" alt="" src="/envelope-1@2x.png" />
      <img className="profits-1-icon" alt="" src="/profits-1@2x.png" />
      <b className="como-a-podemos">Como a podemos te ajudar?</b>
      <div className="ellipse-div" />
      <div className="desktop-2-child8" />
      <div className="desktop-2-child9" />
      <div className="desktop-2-child10" />
      <div className="desktop-2-child11" />
      <div className="desktop-2-child12" />
      <div className="desktop-2-child13" />
      <b className="cadastre-a-sua">Cadastre a sua empresa pelo nosso app</b>
      <b className="registre-os-seus">Registre os seus produtos e clientes</b>
      <b className="ao-realizar-uma">
        Ao realizar uma venda, informe no aplicativo
      </b>
      <b className="agora-voc-pode">
        Agora você pode ver estatísticas do seu negócio!
      </b>
      <b className="uma-ia-ir">
        Uma IA irá oferecer insights baseado nas suas vendas
      </b>
      <div className="termos-e-condies" onClick={onTermosECondiesClick}>
        Termos e Condições de Uso
      </div>
      <div
        className="poltica-de-privacidade"
        onClick={onPolticaDePrivacidadeClick}
      >
        Política de privacidade
      </div>
    </div>
  );
};

export default Home;
