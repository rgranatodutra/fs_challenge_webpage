import { styled } from "styled-components";

const StyledContactCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    overflow: hidden;
    cursor: pointer;

    width: 12rem;
    max-width: 12rem;
    height: 12rem;
    max-height: 12rem;
    box-sizing: border-box;
    padding: 1rem;

    border-radius: 0.25rem;
    text-align: center;

    >:nth-child(1) {
        font-size: 5rem;
    } 

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
        color: var(--color-brand-1);
        transition: 200ms ease-in-out;

        >h3 {
            color: var(--color-brand-1);
        }
    }
`;

export default StyledContactCard;