import { FormControl, Avatar, Button, Box, Typography } from "@mui/material";
import { ProfileStyled } from "./ProfileStyled";
import EditIcon from "@mui/icons-material/Edit";
import ProgressBar from "react-percent-bar";
import DownloadIcon from "@mui/icons-material/Download";
import { useContext } from "react";
import { userContext } from "../../../contexts/UserContext";
import GitHubCalendar from "react-github-calendar";
const Profile = ({ setValue }) => {
  //eslint-disable-next-line
  const { user, isLoading } = useContext(userContext);

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
                  src={user?.profile_img}
                />
              </div>
              <div className="username-bio">
                <div className="name-btn">
                  <h2 className="username">{user?.username}</h2>
                </div>
                <h4>{user?.bio}</h4>
              </div>
            </div>
            <Box>
              <div className="profile-wrapper">
                <Button
                  onClick={() => setValue("settings")}
                  startIcon={<EditIcon />}
                >
                  Edit Your Profile
                </Button>
                {
                  user.isRecruiter ? "" : 
                    <Button startIcon={<DownloadIcon />}>Download Resume</Button>
                }
              </div>
            </Box>
              {
                user.isRecruiter ? "" :
                <Box mt={3}>
                    <GitHubCalendar username={user.github_username} />
                </Box>
              }
            {!user.isRecruiter && (
              <>
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
                  <Typography mb={1}>{user?.skill_1}</Typography>
                  <div className="p-bar">
                    <ProgressBar
                      width="500px"
                      height="12px"
                      colorShift={false}
                      fillColor="#0275d8"
                      percent={user?.skill_11 * 100}
                    />
                    <p>{user?.skill_11 * 100}%</p>
                  </div>
                </Box>

                <Box mx={2} mt={3}>
                  <Typography mb={1}>{user?.skill_2}</Typography>
                  <div className="p-bar">
                    <ProgressBar
                      width="500px"
                      height="12px"
                      colorShift={false}
                      fillColor="#0275d8"
                      percent={user?.skill_21 * 100}
                    />
                    <p>{user?.skill_21 * 100}%</p>
                  </div>
                </Box>
                <Box mx={2} mt={3}>
                  <Typography mb={1}>{user?.skill_3}</Typography>
                  <div className="p-bar">
                    <ProgressBar
                      width="500px"
                      height="12px"
                      colorShift={false}
                      fillColor="#0275d8"
                      percent={user?.skill_31 * 100}
                    />
                    <p>{user?.skill_31 * 100}%</p>
                  </div>
                </Box>
                <Box mx={2} mt={3}>
                  <Typography mb={1}>{user?.skill_4}</Typography>
                  <div className="p-bar">
                    <ProgressBar
                      width="500px"
                      height="12px"
                      colorShift={false}
                      fillColor="#0275d8"
                      percent={user?.skill_41 * 100}
                    />
                    <p>{user?.skill_41 * 100}%</p>
                  </div>
                </Box>
              </>
            )}

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
