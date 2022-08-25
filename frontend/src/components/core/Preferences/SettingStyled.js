import styled from "styled-components";


export const SettingStyled = styled.section`

    width: 80vw;
    margin:0.5rem;
    height:500px;
    padding:10px;
    position: sticky;

    .header{
        font-size: 25px;
        padding:10px;
        font-family: "Inter",sans-serif;
    }

    .inputs{
        display: flex;
        justify-content: space-between;
        gap:30px;
        margin-bottom: 1rem;
    }
    .form-wrapper{
        margin:1rem;

    }
    .avatar_wrapper{
        display: flex;
        margin-bottom:1rem;
        align-items: center;
        gap:2rem;
    }

    .select{
        margin-top:2rem;
        margin-bottom:1rem;
    }
    .select-two{
        margin-top:1rem;
        margin-bottom:1rem;
    }

    
    .submit{
        margin-top:3rem;
        margin-bottom:6rem;
        display: flex;
        justify-content: center;
    }

    .saved{
        padding:10px;
        width:350px;
    }

`