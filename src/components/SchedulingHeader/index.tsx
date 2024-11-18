import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Logo,
  LogoImg,
  Title,
  LogoEnterpriseWrapper,
  LogoEnterprise,
  ProfileImage,
  NameEnterprise,
} from "./styles";

interface EnterpriseInfo {
  name: string;
  image: string;
  owner_image: string;
  owner_name: string;
}

export default function SchedulingHeader() {
  const [enterpriseInfo, setEnterpriseInfo] = useState<EnterpriseInfo | null>(
    null
  );
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchEnterpriseInfo = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/enterprises/info/${id}`
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar informações da empresa");
        }
        const data = await response.json();
        setEnterpriseInfo(data);
      } catch (error) {
        console.error("Erro ao buscar informações da empresa:", error);
      }
    };

    fetchEnterpriseInfo();
  }, [id]);

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <LogoImg src="/beasier-1-1-1@2x.png" alt="logo beasier" />
        <Title>Gestão Boa</Title>
      </Logo>
      {enterpriseInfo ? (
        <>
          <LogoEnterpriseWrapper>
            <LogoEnterprise
              src={enterpriseInfo.image}
              alt={`Logo de ${enterpriseInfo.name}`}
            />
            <ProfileImage
              src={enterpriseInfo.owner_image}
              alt={`Imagem do dono ${enterpriseInfo.owner_name}`}
            />
          </LogoEnterpriseWrapper>
        </>
      ) : (
        <p>Carregando...</p>
      )}
      {enterpriseInfo && <NameEnterprise>{enterpriseInfo.name}</NameEnterprise>}
    </Container>
  );
}
