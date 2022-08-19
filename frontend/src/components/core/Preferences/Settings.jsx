import { FormControl, TextField, Avatar, Box, Select, MenuItem, Button } from "@mui/material";
import { SettingStyled } from "./SettingStyled";
import PROFILE_PIC from "../../../assets/default.png";
import { useState } from "react";
import { devSkills } from "../../../helpers";
import { proficiency } from "../../../helpers";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';

const Settings = () => {

    const [skills, setSkills] = useState(devSkills[0])

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
                <p className="header">Settings</p>
                <hr></hr>
                <div className="form-wrapper">
                    <FormControl>   
                    <div className="avatar_wrapper">
                        <Avatar sx={{width:120, height:120}} 
                             alt="user-profile" src={PROFILE_PIC} 
                        />
                        <h2>John Kwame Doe</h2>
                    </div>
                        <div className="inputs">
                            <TextField 
                                id="outlined-basic" label="Username" 
                                size="medium" sx={{width:350}} variant="outlined" 
                            />  
                            <TextField 
                                id="outlined-basic" label="Email" 
                                size="medium" sx={{width:350}} variant="outlined" 
                            />  
                        </div>   
                        <Box>
                            <TextField                           
                                id="outlined-basic" label="Bio" 
                                size="medium" sx={{width:730}} variant="outlined" 
                            /> 
                        </Box> 
                        <Box mt={2}>
                            <TextField                           
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