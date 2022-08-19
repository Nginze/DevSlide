import styled from "styled-components";



export const CardStyled = styled.section`

    .buttons{
        display: flex;
        justify-content: center;
        margin-top:2rem;
        gap:5rem;
        /* position:absolute */
    }

    .card{
        box-shadow: -4px -1px 35px -13px rgba(0,0,0,0.25);
        border-radius: 13px;

    }

    .swipe-right{
        border-radius: 1000px;
        padding: 5px;
        background-color: #5cb85c;
        width:70px;
        height:70px;
    }

    .swipe-left{
        border-radius: 1000px;
        padding: 5px;
        background-color: #d9534f;
        width:70px;
        height:70px;
    }

`