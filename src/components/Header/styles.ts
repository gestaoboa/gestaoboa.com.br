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

    nav {
        .pricing {
            color: #03045E;
            font-weight: bold;
            padding: 8px 16px;
            border-radius: 6px;
            background: #90e0ef;
            transition: all 0.3s ease;

            &:hover {
                background: #caf0f8;
                transform: translateY(-2px);
            }
        }
    }

    @media (max-width: 800px){
        position: relative;
        width: calc(100% - 100px);
        padding-left: 50px;
        padding-right: 50px;
	}

    @media (max-width: 750px){
        width: 100%;
        justify-content: center;
        padding-left: 0px;
        padding-right: 0px;
    }

    @media (max-width: 768px) {
        nav {
            .pricing {
                width: 100%;
                text-align: center;
                margin-top: 10px;
            }
        }
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

    @media (max-width: 800px){
        width: 50px;
    }
`

export const Title = styled.div`
    font-size: 32px;
    color: #03045E;

    @media (max-width: 800px){
        font-size: 26px;
    }
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