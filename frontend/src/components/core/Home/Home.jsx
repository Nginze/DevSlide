import DevCard from "../../utils/Card/Card";
import Navbar from "../../utils/Navbar/Navbar";
import Sidebar from "../../utils/Sidebar/Sidebar";
import Stats from "../../utils/Stats/Stats";
import { HomeStyled } from "./HomeStyled";
import { useContext, useState } from "react";
import Settings from "../Preferences/Settings";
import styled from "styled-components";
import Match from "../Matches/Match";
import Profile from "../Profile/Profile";
import { userContext } from "../../../contexts/UserContext";
import useTimeline from "./hooks/useTimeline";

const EnableScroll = styled.section`
  height: 100vh;
  overflow-y: auto;
`;

const Home = () => {
  const [value, setValue] = useState("swipe");
  const { user, isLoading } = useContext(userContext);
  const { timeline, loading } = useTimeline(user.id);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Navbar />
      <HomeStyled>
        <Sidebar value={value} handleChange={handleChange} />
        {value === "swipe" && (
          <div className="feed">
            {timeline?.map(user => {
              return (
                <>
                  <DevCard
                    username={user?.username}
                    bio={user?.bio}
                    profile_img={user?.profile_img}
                  />
                  <Stats
                    skills={[
                      user.skill_1,
                      user.skill_2,
                      user.skill_3,
                      user.skill_4,
                    ]}
                    skillsProf={[user.skill_1_prof, user.skill_2_prof, user.skill_3_prof, user.skill_4_prof]}
                  />
                </>
              );
            })}
          </div>
        )}
        {value === "settings" && (
          <>
            <EnableScroll>
              <Settings />
            </EnableScroll>
          </>
        )}
        {value === "matches" && (
          <>
            <Match />
          </>
        )}
        {value === "profile" && (
          <>
            <Profile />
          </>
        )}
      </HomeStyled>
    </>
  );
};

export default Home;
