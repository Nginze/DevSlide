import { TextField, FormControl, Button } from "@mui/material";
import ConstructionIcon from '@mui/icons-material/Construction';
import { StateStyled } from "./StateStyled";
import { handleRecruiterLogin } from "./Utils";
import GoogleIcon from '@mui/icons-material/Google';

const RecruiterLogin = () => {
    return ( 
        <>
        <StateStyled>
        <div className="auth-box">
                            
            {/* <div className="btn-wrapper">
                <Button 
                    onClick = {handleRecruiterLogin}
                    startIcon={<ConstructionIcon />}
                    className="btn"
                    variant="contained">
                    Use a demo account
                </Button>
            </div> */}
            <div className="btn-wrapper">
                <Button
                    onClick = {handleRecruiterLogin}
                    startIcon={<GoogleIcon />}
                    className="btn"
                    variant="contained">
                   Sign in with Google
                </Button>
            </div>
            <p>OR</p>

                
                <FormControl>
                    <TextField 
                        required
                        id="outlined-basic" label="Email" 
                        size="medium" sx={{width:350}} variant="outlined" />
                    <TextField
                        required
                        id="outlined-basic" label="Password" 
                        size="medium" sx={{width:350, my:3}} variant="outlined" />
                    <div className="btn-wrapper-2">
                        <Button variant="contained" className="btn">Sign Up</Button>
                    </div>
                </FormControl>      
            </div>
        </StateStyled>
        </>
     );
}
 
export default RecruiterLogin;