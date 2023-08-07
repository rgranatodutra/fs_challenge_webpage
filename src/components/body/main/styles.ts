import { styled } from "styled-components";

const StyledMain = styled.div`
    >div.not_selected_client {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    >div.selected_client {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: relative;

        >h1 {
            >.highlight_name {
                color: var(--color-brand-1);
            }

            max-height: 2rem;
        }

        >ul {
            height: calc(100% - 4rem);
            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            flex-basis: content;
            gap: 1rem;
            row-gap: 1rem;
            overflow: auto;
        }

        >button.add_contact {
            background: rgba(255, 255, 255, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.8);
            color: white;
            font-size: 4rem;
            
            border-radius: 0.25rem;

            display: flex;
            align-items: center;
            justify-content: center;

            position: fixed;
            bottom: 2rem;
            right: 2rem;
            
            cursor: pointer;

            &:hover {
                background-color: var(--color-brand-3);
                border: 1px solid var(--color-brand-1);
                color: var(--color-brand-1);
                transition: 200ms ease-in-out;
            }
        }
    }
`;

export default StyledMain;