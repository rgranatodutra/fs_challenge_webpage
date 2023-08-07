import { styled } from "styled-components";

export const StyledBody = styled.main`
    border: 1px solid black;    
    height: calc(100% - 10rem);
    box-sizing: border-box;

    display: grid;
    grid-template-areas: "sidebar body";
    grid-template-columns: 30rem 1fr;
`;