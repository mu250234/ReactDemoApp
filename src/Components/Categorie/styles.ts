import styled, { css } from "styled-components";

interface ColorTagProps{
    color:string;
}

interface ContainerProps{
    isActive: boolean;
}

export const Categorie = styled.div<ContainerProps>`
    height: 38px;
    margin: 4px 0 4px 52px;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    border-radius:5px;
    color:white!important;
   
        ${props =>
            props.isActive &&
            css`
              background: #0000be;
              color:#7f56da;
        `};
`

export const ColorTag = styled.div<ColorTagProps>` 
    height: 14px;
    width: 14px;
    border-radius: 4px;
    background: ${props=> props.color};
`

export const ListName = styled.p`
    font-size: 16px;
    color: #777;
    margin-left:8px;
    font-weight:400; 
`