import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useMessage from "../Home/hooks/useMessage";
import { format } from "fecha";
import { isOwnMessage } from "./helpers";

const useStyles = makeStyles({
  table: {

    minWidth: "100%",
  },
  chatSection: {
    width: "100%",
    height: "100%",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
});

const Chat = ({ user, chats, socket }) => {
  const classes = useStyles();
  const [currentChatId, setCurrentChatId] = useState(null);
  const [currentReceiver, setCurrentReceiver] = useState(null);
  const [message, setMessage] = useState("");
  const { messages } = useMessage(currentChatId);
  const queryClient = useQueryClient();

  socket.off("get-message").on("get-message", async msg => {
    await queryClient.cancelQueries(["messages", currentChatId]);
    queryClient.setQueryData(["messages", currentChatId], old => [...old, msg]);
  });
  const sendMessage = useMutation(
    () => {
      return axios({
        method: "post",
        url: "http://localhost:5000/message",
        withCredentials: true,
        data: {
          chat_id: currentChatId,
          sender_id: user?.id,
          receiver_id: currentReceiver,
          text: message,
        },
      });
    },
    {
      onMutate: async variables => {
        await queryClient.cancelQueries(["messages", currentChatId]);
        // eslint-disable-next-line
        const previousMessages = queryClient.getQueryData([
          "messages",
          currentChatId,
        ]);
        queryClient.setQueryData(["messages", currentChatId], old => [
          ...old,
          {
            chat_id: currentChatId,
            sender_id: user?.id,
            receiver_id: currentReceiver,
            text: message,
            __createdtime__: Date.now(),
          },
        ]);
        socket.emit("send-message", {
          chatId: currentChatId,
          senderId: user?.id,
          receiverId: currentReceiver,
          text: message,
          __createdtime__: Date.now(),
        });
      },
    }
  );
  return (
    <div style={{ width: "80vw" }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message"></Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar alt="Dev" src={user?.profile_img} />
              </ListItemIcon>
              <ListItemText primary={user?.username}></ListItemText>
            </ListItem>
          </List>
          <Divider />

          <Divider />
          <List>
            {chats?.map(chat => (
              <ListItem
                onClick={() => {
                  setCurrentChatId(chat.id);
                  setCurrentReceiver(chat.id1);
                }}
                button
                key="RemySharp"
              >
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src={chat.profile_img} />
                </ListItemIcon>
                <ListItemText primary={chat?.username}>
                  {chat?.username}
                </ListItemText>
                <ListItemText secondary="online" align="right"></ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={9}>
          <List className={classes.messageArea}>
            {
              messages?.map(message => {
              if (isOwnMessage(message.sender_id, user?.id)) {
                return (
                  <ListItem key={message.id}>
                    <Grid container>
                      <Grid item xs={12}>
                        <ListItemText
                          align="right"
                          primary={message.text}
                        ></ListItemText>
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText
                          align="right"
                          secondary={format(
                            new Date(message.__createdtime__),
                            "shortTime"
                          )}
                        ></ListItemText>
                      </Grid>
                    </Grid>
                  </ListItem>
                )
              }
              return (
                <ListItem key={message.id}>
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText
                        align="left"
                        primary={message.text}
                      ></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        align="left"
                        secondary={format(
                          new Date(message.__createdtime__),
                          "shortTime"
                        )}
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
              );
            }) }
          </List>
          {
            chats.length === 0 && 
            <>
               <>
              <Box sx={{display:'flex', justifyContent:"center"}}>
                <h3>
                  No messages yet...Start Chatting 👋
                </h3>
              </Box>
            </>
            </>
          }
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                value={message}
                onChange={e => setMessage(e.target.value)}
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid xs={1} align="right">
              <Fab
                onClick={() => sendMessage.mutate()}
                color="primary"
                aria-label="add"
              >
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
