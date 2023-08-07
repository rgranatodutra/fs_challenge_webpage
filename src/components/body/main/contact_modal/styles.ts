import styled from "styled-components";

const StyledContactModal = styled.div`
    width: 100%;
    padding: 0 2rem;

    >div.inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 0;

        >h4 {
            color: rgba(0, 0, 0, 0.75);

            >span {
                color: var(--color-brand-1);
            }
        }
    }

    >div.buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;
        padding: 0.5rem 0;

        >button {
            background: none;
            border: none;
            font-size: 2rem;
            color: rgba(0, 0, 0, 0.625);
            cursor: pointer;

            :hover {
                transition: 200ms ease-in-out;
                color: var(--color-brand-3);
            }
        }
    }
`;

export const StyledInputWrapper = styled.div`
    position: relative;

    >input {
        width: 34rem;
        border-radius: 0.375rem;
        border: 2px solid rgba(0, 0, 0, 0.25);
        font-size: 1rem;
        font-weight: 400;
        padding: 0.75rem 1.25rem;
        background-color: white;

        &:disabled {
            color: rgba(0, 0, 0, 0.5);
        }
    }

    >label {
        font-size: 0.875rem;
        background-color: white;
        padding: 0 0.25rem;
        position: absolute;
        top: -0.375rem;
        left: 1rem;
    }
`;

export default StyledContactModal;