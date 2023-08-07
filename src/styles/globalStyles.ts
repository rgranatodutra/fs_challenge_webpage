import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-brand-1: #171a7d;
        --color-brand-2: #272bad;
        --color-brand-3: #7772d8;
        --color-grey-1: #fefefe;
        --color-grey-2: #fafafa;
        --color-grey-3: #f5f5f5;
        --color-grey-4: #f0f0f0;
        --color-grey-5: #ebebeb;

        --size-1: 2rem;
        --size-2: 1.5rem;
        --size-3: 1.25rem;
        --size-4: 1rem;
        --size-5: 0.875rem;
        --size-6: 0.75rem;
        --size-7: 0.625rem;

        --typo-title: 'Anton', sans-serif;
        --typo-body: 'Roboto', sans-serif;

        --moz-linear-gradient: -moz-linear-gradient(45deg, var(--color-brand-1) 0%, var(--color-brand-2) 100%);
        --webkit-linear-gradient: -webkit-linear-gradient(45deg, var(--color-brand-1) 0%, var(--color-brand-2) 100%);
        --ms-linear-gradient: -ms-linear-gradient(45deg, var(--color-brand-1) 0%, var(--color-brand-2) 100%);
        --linear-gradient: linear-gradient(45deg, var(--color-brand-1) 0%, var(--color-brand-2) 100%);
        
        font-family: var(--typo-body);
        color: var(--color-grey-3);
        background-color: #979efd;
    }

    h1 {
        font-size: var(--size-1);
        font-weight: 700;
        font-family: var(--typo-title);
        color: var(--color-grey-1);
    }

    h2 {
        font-size: var(--size-2);
        font-weight: 600;
        color: var(--color-grey-2);
    }

    h3 {
        font-size: var(--size-3);
        font-weight: 500;
        color: var(--color-grey-3);
    }

    h4 {
        font-size: var(--size-4);
        font-weight: 500;
        color: var(--color-grey-4);
    }

    h5 {
        font-size: var(--size-5);
        font-weight: 500;
        color: var(--color-grey-5);
    }

    h6 {
        font-size: var(--size-6);
        font-weight: 500;
        color: var(--color-grey-5);
    }

    /* Firefox */
    * {
        scrollbar-width: none;
        scrollbar-color: var(--color-brand-1) var(--color-brand-2);
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 16px;
    }

    *::-webkit-scrollbar-track {
        background: var(--color-brand-1);
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--color-brand-2);
        border-radius: 8px;
    }

    body {
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;

        >#root {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }
    }
`