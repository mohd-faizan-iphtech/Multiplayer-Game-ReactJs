const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const server = http.createServer(app);
const PORT = 3001;

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const players = [];
let currentPlayerIndex = -1;
const roomUsers = {};
const playerStatus = {};

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("join_room", (data) => {
    socket.join(data);
    players.push({ id: socket.id, room: data });
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
    if (!roomUsers[data]) {
      roomUsers[data] = 1;
    } else {
      roomUsers[data]++;
    }

    io.to(data).emit("user_count", roomUsers[data]);
    playerStatus[socket.id] = "online";
    io.emit("player_status", playerStatus);
  });

  socket.on("send_message", (data) => {
    // if(players.length<3){
    //   socket.to(data.room).emit("receive_message", data);
    // }
    // else{
    const currentPlayerIndex = players.findIndex(
      (player) => player.id === socket.id
    );
    console.log("currentPlayerIndex", currentPlayerIndex);
    const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
    const nextPlayer = players[nextPlayerIndex];
    console.log(nextPlayerIndex);
    // socket.to(data.room).emit("receive_message", data);
    // console.log(nextPlayer.id)
    socket.to(nextPlayer.id).emit("enable_button", data);
    //}
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
    const index = players.findIndex((player) => player.id === socket.id);
    if (index !== -1) {
      players.splice(index, 1);
    }
    for (const room in roomUsers) {
      if (socket.rooms.has(room)) {
        roomUsers[room]--;
        io.to(room).emit("user_count", roomUsers[room]);
        break;
      }
    }
    playerStatus[socket.id] = "offline";
    io.emit("player_status", playerStatus);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
