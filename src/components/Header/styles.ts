import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    grid-column: span 12;
    padding: 12px;
    padding-left: 5%;
	padding-right: 5%;
    position: fixed;
    z-index: 200;
    background-color: #ffff;

    @media (max-width: 800px){
		justify-content: center;
        position: relative;
        width: 100%;
        padding-left: 0%;
        padding-right: 0%;
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
    color: #03045E;
    transition: all ease 0.5s;
    border-bottom: 1px solid transparent;

    :hover {
        font-weight: bold;
        border-bottom: 1px solid #03045E;
    }

    @media (max-width: 1030px){
        display: none;
    }
`

export const LinkItem = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #03045E !important;
`

export const TestNow = styled.div`
    display: flex;

    @media (max-width: 750px){
        display: none;
    }
`