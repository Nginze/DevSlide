import DevCard from "../../utils/Card/Card";
import Navbar from "../../utils/Navbar/Navbar";
import Sidebar from "../../utils/Sidebar/Sidebar";
import Stats from "../../utils/Stats/Stats";
import { HomeStyled } from "./HomeStyled";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Settings from "../Preferences/Settings";
import styled from "styled-components";
import Match from "../Matches/Match";
import Profile from "../Profile/Profile";
import TinderCard from "react-tinder-card";
import { Button, Tooltip } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import useMatch from "./hooks/useMatch";
import Notifications from "../notifications/Notifications";
import useNotiifications from "./hooks/useNotiifications";
import Chat from "../chat/Chat";
import useChat from "./hooks/useChat";
const EnableScroll = styled.section`
  height: 100vh;
  overflow-y: auto;
`;

const Home = ({ db, user, socket}) => {
  const [value, setValue] = useState("swipe");
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const { matches, isLoading } = useMatch(user?.id);
  const { notifications } = useNotiifications(user?.id);
  const { chats } = useChat(user?.id);
  const [currentSlide, setSlide] = useState(db[currentIndex]);
  const currentIndexRef = useRef(currentIndex);
  useEffect(() => {
    socket.emit("login", { userId: user?.id });
  }, []);
  useEffect(() => {
    setSlide(db[currentIndex]);
  }, [currentIndex]);
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(i => React.createRef()),
    []
  );

  const updateCurrentIndex = val => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async dir => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const sendLike = useMutation(async () => {
    return await axios({
      method: "post",
      url: "http://localhost:5000/like",
      withCredentials: true,
      data: {
        actor_id: user.id,
        receiver_id: currentSlide.id,
        status: "PENDING",
      },
    });
  });
  const sendDislike = useMutation(async () => {
    return await axios({
      method: "post",
      url: "http://localhost:5000/dislike",
      withCredentials: true,
      data: {
        actor_id: user.id,
        receiver_id: currentSlide.id,
      },
    });
  });
  return (
    <>
      <Navbar />
      <HomeStyled>
        <Sidebar value={value} handleChange={handleChange} user = {user} />
        {value === "swipe" && (
          <div className="feed">
            {db?.map((user, index) => (
              <>
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <TinderCard
                    ref={childRefs[index]}
                    className="swipe"
                    key={user.name}
                    onSwipe={dir => swiped(dir, user.name, index)}
                    onCardLeftScreen={() => outOfFrame(user.name, index)}
                  >
                    <div style={{ display: "flex", width: "100%" }}>
                      <DevCard
                        key={index}
                        username={user.username}
                        bio={user.bio}
                        profile_img={user.profile_img}
                      />
                    </div>
                  </TinderCard>
                </div>
              </>
            ))}
            <div className="buttons">
              <Tooltip title="I like it" arrow>
                <Button
                  onClick={() => {
                    sendLike.mutate();
                    swipe("right");
                  }}
                  variant="contained"
                  className="swipe-right"
                  size="large"
                >
                  <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
                </Button>
              </Tooltip>

              <Tooltip title="I dislike it" arrow>
                <Button
                  onClick={() => {
                    swipe("left");
                    sendDislike.mutate();
                  }}
                  variant="contained"
                  className="swipe-left"
                  size="large"
                >
                  <ClearOutlinedIcon sx={{ fontSize: 30 }} />
                </Button>
              </Tooltip>
            </div>
            {db && (
              <Stats
                skills={[
                  currentSlide?.skill_1,
                  currentSlide?.skill_2,
                  currentSlide?.skill_3,
                  currentSlide?.skill_4,
                ]}
                skillsProf={[
                  currentSlide?.skill_1_prof,
                  currentSlide?.skill_2_prof,
                  currentSlide?.skill_3_prof,
                  currentSlide?.skill_4_prof,
                ]}
              />
            )}
          </div>
        )}

        {/* <div className="buttons">
          <button
            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
            onClick={() => swipe("left")}
          >
            Swipe left!
          </button>
          <button
            style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
            onClick={() => goBack()}
          >
            Undo swipe!
          </button>
          <button
            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
            onClick={() => swipe("right")}
          >
            Swipe right!
          </button>
        </div> */}

        {value === "settings" && (
          <>
            <EnableScroll>
              <Settings user={user} />
            </EnableScroll>
          </>
        )}
        {value === "matches" && (
          <>
            <Match matches={matches} />
          </>
        )}
        {value === "notifications" && (
          <>
            <Notifications notifications={notifications} user={user} />
          </>
        )}

        {value === "chats" && (
          <>
            <Chat user={user} chats={chats} socket={socket} />
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
