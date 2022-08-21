import { FormControl, TextField, Avatar, Box} from "@mui/material";
import { SettingStyled } from "./SettingStyled";
import PROFILE_PIC from "../../../assets/default.png";
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { devSkills } from "../../../helpers";


const Preferences = () => {

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
    const checkedIcon = <CheckBoxIcon fontSize="small" />

    return ( 
        <>
            <SettingStyled>
                <p className="header">Select your preferences</p>
                <hr></hr>
                <div className="form-wrapper">
                    <FormControl>   
                    <div className="avatar_wrapper">
                        <Avatar sx={{width:120, height:120}} 
                             alt="user-profile" src={PROFILE_PIC} 
                        />
                        <h2>Recruiter Kwame Yaw</h2>
                    </div>
                        <div className="inputs">
                            <Box>
                                <TextField                           
                                    id="outlined-basic" label="Company" 
                                    size="medium" sx={{width:350}} variant="outlined" 
                                    placeholder="Ex: Apple"
                                /> 
                            </Box> 
                            <Box>
                                <TextField                           
                                    id="outlined-basic" label="LinkedIn" 
                                    size="medium" sx={{width:350}} variant="outlined" 
                                /> 
                            </Box> 
                           
                        </div>   
                        <p className="select">Select the skills you are recruiting for</p>
                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={devSkills}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {option}
                                </li>
                            )}
                            style={{ width: 730 }}
                            renderInput={(params) => (
                                <TextField {...params} label="Select skills" placeholder="Ex: JavaScript" />
                            )}
                        />

                    </FormControl>
                </div>
            </SettingStyled>
        </>
     );
}
 
export default Preferences;