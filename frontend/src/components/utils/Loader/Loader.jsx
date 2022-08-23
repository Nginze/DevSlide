import styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';

const LoaderStyled = styled.div`
    .loader-wrapper{
        display:flex;
        justify-content: center;
        margin-top:20rem;
    }

    .text{
        display:flex;
        justify-content: center;
        margin-top:2rem;
    }

`

const Loader = () => {
    return ( 
        <>
        <LoaderStyled>
            <div className="loader-wrapper">
                <CircularProgress sx={{width:300, height:300}}  />
            </div>
            <div className="text">
                <h2>Loading ....</h2>
            </div>
        </LoaderStyled>
        
        </>
     );
}
 
export default Loader;