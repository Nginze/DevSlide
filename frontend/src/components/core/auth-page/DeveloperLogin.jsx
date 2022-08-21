import { Button } from "@mui/material";
import { StateStyled } from "./StateStyled";
import GitHubIcon from '@mui/icons-material/GitHub';
import { handleDeveloperLogin } from "./Utils";


const DeveloperLogin = () => {
    return ( 
        <>
        <StateStyled>
        <div className="auth-box">
                            
            <div className="btn-wrapper dev">
                <Button
                    onClick = {handleDeveloperLogin}
                    startIcon={<GitHubIcon />}
                    className="btn"
                    variant="contained">
                   Sign in with Github
                </Button>
            </div>
                {/* <p>OR</p>
                
                <FormControl>
                    <TextField 
                        required
                        id="outlined-basic" label=" Email" 
                        size="medium" sx={{width:350}} variant="outlined" />
                    <TextField 
                        
                        required
                        id="outlined-basic" label=" Password" 
                        size="medium" sx={{width:350, my:3}} variant="outlined" />
                    <div className="btn-wrapper-2">
                        <Button variant="contained" className="btn">Sign Up</Button>
                    </div>
                </FormControl>       */}
            </div>
        </StateStyled>
        </>
     );
}
 
export default DeveloperLogin;