import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 400px;
  height: 350px;
  flex-direction: column;
  align-items: center;
  background-color: #060776;
  padding: 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  font-family: "Montserrat";
`;

export const LogoImg = styled.img`
  width: 79.73px;

  @media (max-width: 800px) {
    width: 50px;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  color: #f0f0f0;
`;

export const LogoEnterpriseWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  overflow: hidden;
`;

export const LogoEnterprise = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileImage = styled.img`
  position: absolute;
  bottom: 350px;
  right: 45%;
  transform: translateX(50%);
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  z-index: 10;
  object-fit: cover;
`;

export const NameEnterprise = styled.div`
  font-size: 24px;
  color: #f0f0f0;
  font-weight: bold;
  margin-top: 30px;
`;
