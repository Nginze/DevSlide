import { FormControl, Avatar, Button, Box, Typography } from "@mui/material";
import { ProfileStyled } from "./ProfileStyled";
import PROFILE_PIC from "../../../assets/default.png";
import EditIcon from "@mui/icons-material/Edit";
import ProgressBar from "react-percent-bar";
import DownloadIcon from "@mui/icons-material/Download";
import { useContext } from "react";
import { userContext } from "../../../contexts/UserContext";
import useProfile from "./hooks/useProfile";

const Profile = () => {
  const { user, isLoading } = useContext(userContext);
  const { profile, loading } = useProfile(user.id);
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
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  alt="user-profile"
                  src={profile?.profile_img}
                />
              </div>
              <div className="username-bio">
                <div className="name-btn">
                  <h2 className="username">{profile?.username}</h2>
                </div>
                <h4>{profile?.bio}</h4>
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
                <img
                  alt="vef"
                  src="https://img.icons8.com/fluency/24/000000/verified-badge.png"
                />
              </div>
            </Box>
            <Box mx={2} mt={3}>
              <Typography mb={1}>{profile?.skill_1}</Typography>
              <div className="p-bar">
                <ProgressBar
                  width="500px"
                  height="12px"
                  colorShift={false}
                  fillColor="#0275d8"
                  percent={profile?.skill_11 * 100}
                />
                <p>{profile?.skill_11 * 100}%</p>
              </div>
            </Box>

            <Box mx={2} mt={3}>
              <Typography mb={1}>{profile?.skill_2}</Typography>
              <div className="p-bar">
                <ProgressBar
                  width="500px"
                  height="12px"
                  colorShift={false}
                  fillColor="#0275d8"
                  percent={profile?.skill_21 * 100}
                />
                <p>{profile?.skill_21 * 100}%</p>
              </div>
            </Box>
            <Box mx={2} mt={3}>
              <Typography mb={1}>{profile?.skill_3}</Typography>
              <div className="p-bar">
                <ProgressBar
                  width="500px"
                  height="12px"
                  colorShift={false}
                  fillColor="#0275d8"
                  percent={profile?.skill_31 * 100}
                />
                <p>{profile?.skill_31 * 100}%</p>
              </div>
            </Box>
            <Box mx={2} mt={3}>
              <Typography mb={1}>{profile?.skill_4}</Typography>
              <div className="p-bar">
                <ProgressBar
                  width="500px"
                  height="12px"
                  colorShift={false}
                  fillColor="#0275d8"
                  percent={profile?.skill_41 * 100}
                />
                <p>{profile?.skill_41 * 100}%</p>
              </div>
            </Box>

            <Box mt={4}>
              <div className="name-btn">
                <p className="header-two">Social Links</p>
                <img
                  alt="vef"
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
            <div style={{ height: "100px" }}></div>
          </FormControl>
        </div>
      </ProfileStyled>
    </>
  );
};

export default Profile;
