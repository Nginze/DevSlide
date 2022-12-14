import styled from "styled-components";


export const ErrorStyled = styled.div`

    .errorWrapper {
        display: grid;
        place-items: center;
        height: 100vh;
        max-width: 100vw;
        overflow: hidden;
        background: white;
        text-align: center;
        padding: 1rem;
    
        svg {
        width: 100%;
        height: auto;
        }
    
        strong {
        display: inline-block;
        padding: 2rem 0;
        font-size: 150%;
        color: darkslateblue;
        text-transform: capitalize;
        animation: not-found alternate-reverse 1s linear infinite;
        -webkit-animation: not-found ease-in-out 1s linear infinite;
    
            span {
                color: tomato;
            }
        }
    }
    
    @keyframes not-found {
        20% {
        text-transform: lowercase;
        }
    
        50% {
        text-transform: uppercase;
        }
    
        100% {
        text-underline-offset: unset;
        }
    }
    

`