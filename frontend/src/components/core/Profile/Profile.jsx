import { FormControl, Avatar, Button, Box, Typography } from "@mui/material";
import { ProfileStyled } from "./ProfileStyled";
import PROFILE_PIC from "../../../assets/default.png";
import EditIcon from '@mui/icons-material/Edit';
import ProgressBar from 'react-percent-bar';
import DownloadIcon from '@mui/icons-material/Download';


const Profile = () => {

    const percent = 66;

    return ( 
        <>
            <ProfileStyled>
                <p className="header">Profile</p>
                <hr></hr>
                <div className="form-wrapper">
                    <FormControl>
                        <div className="avatar_wrapper">
                            <div>
                                <Avatar sx={{width:150, height:150}} 
                                    alt="user-profile" src={PROFILE_PIC} 
                                />
                            </div>
                            <div className="username-bio">
                                <div className="name-btn">
                                    <h2 className="username">John Kwame Doe</h2>
                                </div>
                                <h4>Software Developer and Designer</h4>
                            </div>
                        </div>
                        <Box>
                            <div className="profile-wrapper">
                                <Button startIcon={<EditIcon />}>Edit Your Profile</Button>
                                <Button startIcon={<DownloadIcon />}>Download Resume</Button>
                            </div>
                        </Box>
                        <Box mt={3}>
                            <div className="name-btn">
                                <p className="header-two">Top Skills</p>
                                <img alt="vef" 
                                    src="https://img.icons8.com/fluency/24/000000/verified-badge.png"
                                />
                            </div>

                        </Box>
                        <Box mx={2} mt={3}>
                            <Typography mb={1}>React.js</Typography>
                            <div className="p-bar">
                                <ProgressBar width="500px" height="12px" colorShift={false} 
                                    fillColor="#0275d8" percent={percent}
                                />
                                <p>{percent}%</p>
                            </div>
                        </Box>
              
                        <Box mx={2} mt={3}>
                            <Typography mb={1}>Node.js</Typography>
                            <div className="p-bar">
                                <ProgressBar width="500px" height="12px" colorShift={false} 
                                    fillColor="#0275d8" percent={percent}
                                />
                                <p>{percent}%</p>
                            </div>
                        </Box>
                        <Box mx={2} mt={3}>
                            <Typography mb={1}>Django</Typography>
                            <div className="p-bar">
                                <ProgressBar width="500px" height="12px" colorShift={false} 
                                    fillColor="#0275d8" percent={percent}
                                />
                                <p>{percent}%</p>
                            </div>
                        </Box>
                        <Box mx={2} mt={3}>
                            <Typography mb={1}>SQL</Typography>
                            <div className="p-bar">
                                <ProgressBar width="500px" height="12px" colorShift={false} 
                                    fillColor="#0275d8" percent={percent}
                                />
                                <p>{percent}%</p>
                            </div>
                        </Box>

                        <Box mt={4}>
                            <div className="name-btn">
                                <p className="header-two">Social Links</p>
                                <img alt="vef" 
                                    src="https://img.icons8.com/fluency/24/000000/verified-badge.png"
                                />
                            </div>

                        </Box>

                        <Box mx={2} mt={2}>
                            <div className="social-links">
                                <Button variant="contained">Github</Button>
                                <Button variant="contained"> Dev Portfolio</Button>
                                <Button variant="contained">Email Address</Button>
                                <Button variant="contained">LinkedIn</Button>

                            </div>
                        </Box>
                        <div style={{height:"100px"}}></div>
                    </FormControl>
                </div>
            </ProfileStyled>
        </>
     );
}
 
export default Profile;