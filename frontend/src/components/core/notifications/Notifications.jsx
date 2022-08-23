import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Notifications = ({ notifications }) => {
  const accept = useMutation((noti) => {
    return axios({
      method: "put",
      url: "http://localhost:5000/accept",
      withCredentials: true,
      data: {
        id: noti.id,
        status: "ACCEPTED",
      },
    });
  });
  const reject =  useMutation((noti) => {
    return axios({
      method: "put",
      url: "http://localhost:5000/reject",
      withCredentials: true,
      data: {
        id: noti.id,
        status: "REJECTED",
      },
    });
  });
  return (
    <div>
      {notifications?.map(noti => (
        <div>
          <img src={noti.profile_img} />
          <h1>{noti.username}</h1>
          <button onClick={() => accept.mutate(noti)}>Accept</button>
          <button onClick={() => reject.mutate(noti)}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
