import { styled } from "styled-components"

const StyledClientCard = styled.li`
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    >div:nth-child(1) {
        display: flex;
        gap: 1rem;

        >:nth-child(1) {
            font-size: 5rem;

            :hover {
                color: var(--color-brand-3);
                transition: 120ms ease-in-out;
            }
        }

        >div:nth-child(2) {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            >h4, h5 {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: 0.5rem;
            }
        }
    }

    >:nth-child(2) {
        font-size: 2rem;
        margin-right: 1rem;
        background: none;
        border: none;
    }

    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgb(255, 255, 255, 0.2);

    &.selected {
        background-color: var(--color-brand-2);
    }
`;

export default StyledClientCard;