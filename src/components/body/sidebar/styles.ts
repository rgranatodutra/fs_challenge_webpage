import { styled } from "styled-components";

const StyledSidebar = styled.div`
    height: 100%;
    box-sizing: border-box;
    grid-area: sidebar;

    background: var(--color-brand-1);
    border-right: 2px solid rgba(255, 255, 255, 0.8);

    >header {
        border-bottom: 2px solid rgba(255, 255, 255, 0.3);
        background-color: rgba(0, 0, 0, 0.2);
        padding: 1rem;
        height: 2rem;

        >h2 {
            text-shadow: 0 0 4px rgba(0, 0, 0, 0.9);
        }
    }

    >ul {
        height: calc(100% - 8.1rem);
        max-height: calc(100% - 8.1rem);
        overflow-y: auto;
    }
    
    >footer {
        box-sizing: border-box;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        background-color: rgba(0,0,0, 0.2);

        >button.footer_button {
            color: white;
            background: none;
            font-size: var(--size-3);
            font-weight: 600;
            padding: 1rem 2rem;
            width: 97.5%;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;

            &:hover {
                background-color: white;
                color: var(--color-brand-1);
            }
        }
    }
`;

export default StyledSidebar;