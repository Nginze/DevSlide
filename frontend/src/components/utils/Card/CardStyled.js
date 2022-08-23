import styled from "styled-components";



export const CardStyled = styled.section`

    .buttons{
        display: flex;
        justify-content: center;
        margin-top:2rem;
        gap:5rem;
    }

    .card{
        box-shadow: -4px -1px 17px -5px rgba(0,0,0,0.2);
        border-radius: 13px;
        height:360px;

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

    .card_wrapper{
        padding:7px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:2rem;
        margin-bottom:3rem;

    }

`