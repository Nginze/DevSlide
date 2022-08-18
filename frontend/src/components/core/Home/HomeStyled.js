import styled from "styled-components";

export const HomeStyled = styled.section`
    display: flex;


    .feed{
        display: flex;
        justify-content: center;
        width:calc(100vw - 50%);
        flex-grow: 4;
        margin-top:5rem;
        
    }

    .card{
        box-shadow: -4px -1px 35px -13px rgba(0,0,0,0.25);
        border-radius: 13px;

    }

    .user-stats{
        flex-grow:2;
        margin-top:3rem;
        
    }

`