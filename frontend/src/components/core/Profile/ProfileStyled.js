import styled from "styled-components";

export const ProfileStyled = styled.section`

    width: 85vw;
    margin-top:0.5rem;
    height:100vh;
    padding:10px;
    position: sticky;
    overflow-y: auto;

    .header{
        font-size: 25px;
        padding:10px;
        font-family: "Inter",sans-serif;
    }


    .header-two{
        font-size: 23px;
        padding:10px;
        font-weight: 500;
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

    .username-bio{
        display: flex;
        flex-direction:column;
        gap:2rem;
        
    }

    h4{
        font-weight:300;
    }

    .name-btn{
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .username{
        font-size:35px;
        font-family: "Inter",sans-serif;
        font-weight:400;
    }
    
    .avatar_wrapper{
        width:750px;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        margin-bottom:1rem;
        align-items: center;
    }

    .p-bar{
        display:flex;
        align-items: center;
        gap:1rem;
    }

    .social-links{
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .profile-wrapper{
        width:400px;
        display: flex;
        justify-content: space-between;
    }

    


`