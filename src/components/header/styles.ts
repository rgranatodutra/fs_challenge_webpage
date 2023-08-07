import { styled } from "styled-components"

const StyledHeader = styled.header`
    background: var(--color-brand-1);
    background: var(--moz-linear-gradient);
    background: var(--webkit-linear-gradient);
    background: var(--ms-linear-gradient);
    background: var(--linear-gradient);

    box-sizing: border-box;
    width: 100%;
    height: 10rem;
    padding: 0 4rem;

    display: flex;
    align-items: center;

    >h1 {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 2.5rem;

        >:nth-child(1) {
            font-size: 4rem;
        }
    }

    border-bottom: 2px solid white;

`;

export default StyledHeader;