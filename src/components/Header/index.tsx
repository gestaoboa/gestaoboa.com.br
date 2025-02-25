import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { Container, LinkItem, Links, Logo, LogoImg, TestNow, Title } from "./styles";
import { useState } from "react";

export default function Header () {
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Container>
            <Logo onClick={() => navigate("/")}>
                <LogoImg src="/beasier-1-1-1@2x.png" alt="logo beasier"  />
                <Title>Gestão Boa</Title>
            </Logo>

            <Links className={isMenuOpen ? 'active' : ''}>
                <LinkItem href="/#start" data-to-scrollspy-id="start">INÍCIO</LinkItem>
                <LinkItem href="/solution" data-to-scrollspy-id="solution">SOLUÇÃO</LinkItem>
                <LinkItem href="/preco" className="pricing">PLANOS</LinkItem>
                {/* <LinkItem href="/#team" data-to-scrollspy-id="team">TIME</LinkItem> */}
                <LinkItem href="/#contact" data-to-scrollspy-id="contact">CONTATO</LinkItem>
            </Links>

            <TestNow>
                <a href="https://app.gestaoboa.com.br" style={{ textDecoration: "none" }}>
                    <Button width="200px" text="TESTAR AGORA" method={() => {}} type="focused"  />
                </a>
            </TestNow>

            {/* <button
                className={`menu ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button> */}
        </Container>
    )
}