import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: span 12;
    padding: 12px;
    padding-left: 100px;
	padding-right: 100px;

    @media (max-width: 750px){
		justify-content: center;
	}
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    font-family: "Montserrat";
`

export const LogoImg = styled.img`
    width: 79.73px;
`

export const Title = styled.div`
    font-size: 32px;
    color: #03045E;
`

export const Links = styled.div`
    display: flex;
    gap: 30px;

    @media (max-width: 1030px){
        display: none;
    }
`

export const LinkItem = styled.div`
    cursor: pointer;
`

export const TestNow = styled.div`
    display: flex;

    @media (max-width: 750px){
        display: none;
    }
`