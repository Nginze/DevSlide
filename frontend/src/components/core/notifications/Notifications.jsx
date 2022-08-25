import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Notifications = ({ notifications, user }) => {
  const queryClient = useQueryClient();
  const isRecruiter = false;
  const accept = useMutation(
    noti => {
      return axios({
        method: "put",
        url: "http://localhost:5000/accept",
        withCredentials: true,
        data: {
          id: noti.id,
          status: "ACCEPTED",
        },
      });
    },
    {
      onSuccess: async (data, variables, context) => {
        queryClient.invalidateQueries(["notifications", user.id]);
        queryClient.invalidateQueries(["chats", user.id]);

        await axios({
          method: "post",
          url: "http://localhost:5000/chat",
          withCredentials: true,
          data: {
            developer_id: isRecruiter ? variables.actor_id : user?.id,
            recruiter_id: isRecruiter ? user?.id : variables.actor_id,
          },
        });
      },
    }
  );
  const reject = useMutation(
    noti => {
      return axios({
        method: "put",
        url: "http://localhost:5000/decline",
        withCredentials: true,
        data: {
          id: noti.id,
          status: "REJECTED",
        },
      });
    },
    {
      onSuccess: async (data, variables, context) => {
        queryClient.invalidateQueries(["notifications", user.id]);
        queryClient.invalidateQueries(["chats", user.id]);
      },
    }
  );
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
