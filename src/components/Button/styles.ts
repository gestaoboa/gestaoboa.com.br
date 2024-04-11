import styled from "styled-components";

type ContainerType = {
    type: "focused" | "unfocused",
    width: string | number | null,
}

export const Container = styled.div<ContainerType>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
    padding: 13px;
    padding-left: 50px;
    padding-right: 50px;
    font-weight: bold;
    ${props => props.width ? `width: ${props.width};` : ""}
    
    ${props => props.type == "focused" ? 
        "background-color: #03045E; color: #fff;" : 
        "background-color: #fff; color: #03045E; border: 1px solid #03045E; font-weight: bold;"
    }
`