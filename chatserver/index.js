const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const { addUser, getRecipient, removeUser } = require("./helpers");
const { redisClient } = require("./db");
const socketOptions = {
  cors: {
    origin: ["http://localhost:3000", "*"],
  },
};
const io = require("socket.io")(httpServer, socketOptions);

io.on("connection", socket => {
  console.log("welcome to hackzero socket server", socket.id);
  socket.on("login", async credentials => {
    const { userId } = credentials;
    socket.userId = userId;
    addUser(userId, socket.id);
  });

  socket.on("disconnect", () => {
    console.log(socket.id, "disconnected");
    console.log(socket.userId);
    removeUser(socket.userId);
  });

  socket.on(
    "send-message",
    async ({ senderId, receiverId, chatId, text, __createdtime__ }) => {
      const activeUsers = await redisClient.sMembers("activeUsers");
      console.log({
        senderId,
        receiverId,
        text,
        chatId,
        __createdtime__,
      });
      if (activeUsers.includes(JSON.stringify(receiverId))) {
        const recipientSocket = await getRecipient(JSON.stringify(receiverId));
        console.log(recipientSocket)
        console.log(socket.id)
        io.to(recipientSocket).emit("get-message", {
          senderId,
          receiverId,
          text,
          chatId,
          __createdtime__,
        });
      }
    }
  );
});

httpServer.listen(process.env.PORT || 8000);
