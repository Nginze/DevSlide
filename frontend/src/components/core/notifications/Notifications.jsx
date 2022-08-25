import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Box, Button } from "@mui/material";
import styled from "styled-components";

const NotifStyled = styled.div`

  overflow-y:scroll;
  height:100vh;
  width:90vw;


  .notif-box{
      width: 300px;
      box-shadow: -4px -1px 17px -5px rgba(0,0,0,0.2);
      border-radius: 8px;
      height:120px;
      padding:10px;

  }

`



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
      <NotifStyled>      
    <div>
      {
        notifications ? notifications.map(noti => (
          <> 
          <Box m={4}>  
              <div className="notif-box">
                <img alt="" src={noti.profile_img} />
                <h3>{noti.username}</h3>
                <Box mt={3}>
                  <Button onClick={() => accept.mutate(noti)}>Accept</Button>
                  <Button sx={{color:"#d9534f"}} onClick={() => reject.mutate(noti)}>Reject</Button>
                </Box>
              </div>
          </Box>


          </>

)) : 
<>
        <div style={{display:"flex", justifyContent:"center", marginTop:"25vh", marginLeft:"30vw"}}>
              <h2>
              You have no notifications yet
              </h2>
        </div>
       </>
      }
    </div>
    <div style={{height:"100px"}}></div>
      </NotifStyled>
  );
};

export default Notifications;
