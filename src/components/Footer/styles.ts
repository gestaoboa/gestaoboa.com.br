import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 46px;
    padding-left: 100px;
    padding-right: 100px;
    grid-column: span 12;
    align-items: center;
    background-color: #03045E;
    color: #fff;

    a { color: #fff; font-weight: bold; text-decoration: none; }

    .link {
        display: flex;
        flex-direction: column;
        gap: 12px;
        justify-content: center;
        font-size: 16px;
    }

    .logo {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: 32px;
        justify-content: center;
        align-items: center;
    }

    .logo img {
        width: 79px;
        margin-bottom: -10px;
    }

    .copyright {
        display: flex;
        justify-content: end;
        font-weight: lighter;
        font-size: 16px;
    }
`