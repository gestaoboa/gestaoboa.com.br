import { Container, LinkItem, Links, Logo, LogoImg, TestNow, Title } from "./styles";

export default function Header (/* xPosition: number */) {
    return (
        <Container>
            <Logo>
                <LogoImg src="/beasier-1-1-1@2x.png" alt="logo beasier"  />
                <Title>BEasier</Title>
            </Logo>

            <Links>
                <LinkItem>INÍCIO</LinkItem>
                <LinkItem>NOSSA SOLUÇÃO</LinkItem>
                <LinkItem>TIME</LinkItem>
                <LinkItem>CONTATO</LinkItem>
            </Links>

            <TestNow>

            </TestNow>
        </Container>
    )
}