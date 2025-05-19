import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { ButtonLink, Container, LinkItem, Links, Logo, LogoImg, MenuButton, MobileLinks, TestNow, Title } from "./styles";

export default function Header() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <Container isMenuOpen={isMenuOpen} onClick={(e) => {
            if (e.target === e.currentTarget || (e.target as HTMLElement).tagName === 'A') {
                closeMenu();
            }
        }}>
            <Logo onClick={() => navigate("/")}>
                <LogoImg src="/beasier-1-1-1@2x.png" alt="logo beasier" />
                <Title>Gestão Boa</Title>
            </Logo>

            <Links>
                <LinkItem href="/#start" title="Ir para início" data-to-scrollspy-id="start">INÍCIO</LinkItem>
                <LinkItem href="/solution" title="Ver nossas soluções" data-to-scrollspy-id="solution">SOLUÇÃO</LinkItem>
                <LinkItem href="/preco" title="Ver nossos planos" className="pricing">PLANOS</LinkItem>
                <LinkItem href="/about" title="Conheça nossa equipe" data-to-scrollspy-id="team">SOBRE NÓS</LinkItem>
                <LinkItem href="/#contact" title="Entre em contato" data-to-scrollspy-id="contact">CONTATO</LinkItem>
            </Links>

            <MenuButton onClick={toggleMenu} isOpen={isMenuOpen} aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
                <span></span>
                <span></span>
                <span></span>
            </MenuButton>

            <MobileLinks isOpen={isMenuOpen} onClick={(e) => e.stopPropagation()}>
                <LinkItem href="/#start" title="Ir para início" onClick={closeMenu}>INÍCIO</LinkItem>
                <LinkItem href="/solution" title="Ver nossas soluções" onClick={closeMenu}>SOLUÇÃO</LinkItem>
                <LinkItem href="/preco" title="Ver nossos planos" className="pricing" onClick={closeMenu}>PLANOS</LinkItem>
                <LinkItem href="/about" title="Conheça nossa equipe" onClick={closeMenu}>SOBRE NÓS</LinkItem>
                <LinkItem href="/#contact" title="Entre em contato" onClick={closeMenu}>CONTATO</LinkItem>
                <ButtonLink href="https://app.gestaoboa.com.br" title="Testar o Gestão Boa agora" onClick={closeMenu}>
                    <Button width="100%" text="TESTAR AGORA" method={() => {}} type="focused" />
                </ButtonLink>
            </MobileLinks>

            <TestNow>
                <ButtonLink href="https://app.gestaoboa.com.br" title="Testar o Gestão Boa agora">
                    <Button width="200px" text="TESTAR AGORA" method={() => {}} type="focused" />
                </ButtonLink>
            </TestNow>
        </Container>
    );
}