import React, { useContext } from "react";
import { userContext } from "../../../contexts/UserContext";
import Home from "./Home";
import useTimeline from "./hooks/useTimeline";
import Loading from "./Loading";

const Outlet = ({socket}) => {
  const { user } = useContext(userContext);
  const { timeline: db, isLoading } = useTimeline(user?.id);
  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }else{
    return <>
        <Home db={db} user = {user} socket = {socket}/>
    </>
  }
};

export default Outlet;
