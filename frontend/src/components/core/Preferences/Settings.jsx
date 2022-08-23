import { FormControl, TextField, Avatar, Box, Select, MenuItem, Button } from "@mui/material";
import { SettingStyled } from "./SettingStyled";
import PROFILE_PIC from "../../../assets/default.png";
import { useState } from "react";
import { devSkills } from "../../../helpers";
import { proficiency } from "../../../helpers";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';

const Settings = ({user}) => {
    
    const [skills, setSkills] = useState(devSkills[0])
    const [username, setUsername] = useState(user?.username)
    const [email, setEmail] = useState(user?.email)
    const [bio, setBio] = useState(user?.bio)
    const [portfolioUrl, setPortfolio] = useState(user?.portfolio_url)

                    
    const changeSkill = (e) => {
        setSkills(e.target.value)
    }

    const [prof, setProf] = useState(proficiency[0])

    const changeProf = (e) => {
        setProf(e.target.value)
    }


    return ( 
        <>
            <SettingStyled>
                <p className="header">Setup your account</p>
                <hr></hr>
                <div className="form-wrapper">
                    <FormControl>   
                    <div className="avatar_wrapper">
                        <Avatar sx={{width:120, height:120}} 
                             alt="user-profile" src={user?.profile_img} 
                        />
                        <h2>{user?.username}</h2>
                    </div>
                        <div className="inputs">
                            <TextField 
                                value = {username}
                                onChange = {(e) => setUsername(e.target.value) }
                                id="outlined-basic" label="Username" 
                                size="medium" sx={{width:350}} variant="outlined" 
                            />  
                            <TextField 
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                                id="outlined-basic" label="Email" 
                                size="medium" sx={{width:350}} variant="outlined" 
                            />  
                        </div>   
                        <Box>
                            <TextField  
                                value = {bio} 
                                onChange = {(e) => setBio(e.target.value)}                        
                                id="outlined-basic" label="Bio" 
                                size="medium" sx={{width:730}} variant="outlined" 
                            /> 
                        </Box> 
                        <Box mt={2}>
                            <TextField     
                                value = {portfolioUrl} 
                                onChange = {(e) => setPortfolio(e.target.value)}                    
                                id="outlined-basic" label="Portfolio URL" 
                                size="medium" sx={{width:730}} variant="outlined" 
                            /> 
                        </Box> 
                        <p className="select">Select your top skills and proficiency (4 maximum*)</p>
                        <div className="inputs">
                            <Select onChange={changeSkill} value={skills} sx={{width:350}}>
                                {
                                    devSkills?.map((skill, key) => {
                                       return <MenuItem key={key} value={skill}>{skill}</MenuItem>
                                    })
                                }
                            </Select>
                            <Select onChange={changeProf} value={prof} sx={{width:350}}>
                                {
                                    proficiency?.map((level,key) => {
                                        return <MenuItem key={key} value={level}>{level}</MenuItem>
                                    })
                                }
                            </Select>
                        </div>

                        <div className="inputs">
                            <Select onChange={changeSkill} value={skills} sx={{width:350}}>
                                {
                                    devSkills?.map((skill, key) => {
                                       return <MenuItem key={key} value={skill}>{skill}</MenuItem>
                                    })
                                }
                            </Select>
                            <Select onChange={changeProf} value={prof} sx={{width:350}}>
                                {
                                    proficiency?.map((level,key) => {
                                        return <MenuItem key={key} value={level}>{level}</MenuItem>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="inputs">
                            <Select onChange={changeSkill} value={skills} sx={{width:350}}>
                                {
                                    devSkills?.map((skill, key) => {
                                       return <MenuItem key={key} value={skill}>{skill}</MenuItem>
                                    })
                                }
                            </Select>
                            <Select onChange={changeProf} value={prof} sx={{width:350}}>
                                {
                                    proficiency?.map((level,key) => {
                                        return <MenuItem key={key} value={level}>{level}</MenuItem>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="inputs">
                            <Select onChange={changeSkill} value={skills} sx={{width:350}}>
                                {
                                    devSkills?.map((skill, key) => {
                                       return <MenuItem key={key} value={skill}>{skill}</MenuItem>
                                    })
                                }
                            </Select>
                            <Select onChange={changeProf} value={prof} sx={{width:350}}>
                                {
                                    proficiency?.map((level,key) => {
                                        return <MenuItem key={key} value={level}>{level}</MenuItem>
                                    })
                                }
                            </Select>
                        </div>
                        
                
                        <p className="select-two">Uploads</p>

                        <div className="upload-area">
                            <Button startIcon={<CloudUploadIcon />}
                                className="resume"
                                variant="contained">
                                Upload your resume
                            </Button>
                        </div>

                        <div className="submit">
                            <Button startIcon={<SaveIcon />}
                                className="saved"
                                variant="contained">
                                Save
                            </Button>
                        </div>


                    </FormControl>
                </div>
            </SettingStyled>
        </>
     );
}
 
export default Settings;