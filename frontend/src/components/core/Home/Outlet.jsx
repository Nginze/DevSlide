import React, { useContext } from "react";
import { userContext } from "../../../contexts/UserContext";
import Loader from "../../utils/Loader/Loader";
import Home from "./Home";
import useTimeline from "./hooks/useTimeline";

const Outlet = () => {
  const { user } = useContext(userContext);
  const { timeline: db, isLoading } = useTimeline(user?.id);
  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }else{
    return <>
        <Home db={db} user = {user}/>
    </>
  }
};

export default Outlet;
