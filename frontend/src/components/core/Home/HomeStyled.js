import styled from "styled-components";

export const HomeStyled = styled.section`

    display: flex;

    .feed{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        /* margin-left:calc(100vw - 90vw); */
        /* margin-top:4rem; */
        width:60vw;
        margin:4rem auto;
        gap:9.7rem;
        
    }

    .settings-wrapper{
        margin-top:2rem;
    }



    .buttons{
        position: absolute;
        top:80%;
        display: flex;
        width:340px;
        margin:auto;
        justify-content: center;
        margin-top:1rem;
        gap:5rem;
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