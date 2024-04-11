import Button from "../Button";
import { Container, LinkItem, Links, Logo, LogoImg, TestNow, Title } from "./styles";

export default function Header () {
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
                <a href="https://beasier.vercel.app" style={{ textDecoration: "none" }}>
                    <Button text="TESTAR AGORA" method={() => {}} type="focused"  />
                </a>
            </TestNow>
        </Container>
    )
}