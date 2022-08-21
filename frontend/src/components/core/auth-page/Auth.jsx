import { AuthStyled } from "./AuthStyled";
import { Tabs, Tab} from '@mui/material';
import { useState } from "react";
import RecruiterLogin from "./RecruiterLogin";
import DeveloperLogin from "./DeveloperLogin";



const Auth = () => {

    const [value, setValue] = useState("recruiter")
    
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return ( 
        <>
        <AuthStyled>
        <h2 >Welcome to DevSlide 👋</h2>
        <p>Connecting developers 💻 and recruiters 🤵 </p>
            <div className="main_wrapper">
                <div className="wrappper">
                <div className="tab-wrapper">

                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        orientation="horizontal"
                    >
                    
                    <Tab
                        value="recruiter"
                        className="tab"
                        label="I am a recruiter"
                    />  
                    <Tab
                        value="developer"
                        className="tab"
                        label="I am a developer"
                    />
                        
                    </Tabs>
                </div>
                    { value === "recruiter" ?  <RecruiterLogin  /> : <DeveloperLogin /> }
                </div>
            </div>
        </AuthStyled>
        </>
     );
}
 
export default Auth;            