import { styled } from "styled-components";

const StyledModal = styled.aside<{ $modalWidth?: string }>`
    background-color: rgba(0,0,0, 50%);
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    >div {
        display: flex;
        flex-direction: column;
        width: ${(props) => props.$modalWidth || `40rem`};
        background-color: white;
        border-radius: 0.25rem;

        >header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            background-color: var(--color-brand-2);
            box-sizing: border-box;
            padding: 0.5rem 1rem;

            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
            
            >button {
                background: none;
                border: none;
                font-size: 2rem;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
                margin: 0;
                cursor: pointer;

                :hover{
                    color: var(--color-brand-3);
                }
            }
        }

        >div {
            min-height: 6rem;
            color: var(--color-brand-1);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export default StyledModal;