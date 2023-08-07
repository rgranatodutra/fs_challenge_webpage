import { styled } from "styled-components";

const StyledRegisterClientModal = styled.div`
    padding: 1rem 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    >div.inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    >button {
        align-self: flex-end;
        font-size: var(--size-2);
        background-color: var(--color-brand-2);
        color: var(--color-grey-1);
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;

        padding: 0.5rem 1.75rem;

        &:hover {
            background-color: var(--color-brand-3);
            transition: 200ms ease-in-out;
        }

        &:disabled {
            cursor: default;
            filter: grayscale(0.5);

            &:hover {
                background-color: var(--color-brand-2);
            }
        }
    }
`;

export const StyledInputWrapper = styled.div`
    position: relative;

    >input {
        width: 38rem;
        box-sizing: border-box;
        border-radius: 0.375rem;
        border: 2px solid rgba(0, 0, 0, 0.25);
        font-size: 1.125rem;
        font-weight: 400;
        padding: 0.75rem 1.25rem;
        background-color: white;

        &:disabled {
            color: rgba(0, 0, 0, 0.5);
        }
    }

    >label {
        font-size: 1rem;
        background-color: white;
        padding: 0 0.5rem;
        position: absolute;
        top: -0.5rem;
        left: 1.25rem;
    }
`;

export default StyledRegisterClientModal;