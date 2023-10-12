import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const socket = io.connect("http://localhost:3001");

export default function Game() {
  const { state } = useLocation();
console.log(state)
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [goInside, setGoInside] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [onlinePlayers, setOnlinePlayers] = useState(0);
  
  localStorage.setItem("usercount", userCount);
  localStorage.setItem("onlinePlayers", onlinePlayers);

  useEffect(() => {
    socket.on("user_count", (count) => {
      setUserCount(count);
    });

    return () => {
      socket.off("user_count");
    };
  }, []);

  useEffect(() => {
    socket.on("player_status", (statusObj) => {
      const onlineCount = Object.values(statusObj).filter(
        (status) => status === "online"
      ).length;
      setOnlinePlayers(onlineCount);
    });
    return () => {
      socket.off("player_status");
    };
  }, []);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setGoInside(true);
      localStorage.setItem("roomId",room)
    }
  };

  const randomRoomId = () => {
    var minm = 1000;
    var maxm = 9999;
    const demo = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    setRoom(demo);
  };


  return (
    <div className="container">
      <div className="row" style={{ height: "100vh" }}>
        {!goInside ? (
          <>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center hidemobile">
              <img src="image/sideimage.png" className="img-fluid" />
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              <div className="joinChatContainer border-0 card shadow p-5">
                <h3 className="mb-3">Multiplayer Game</h3>
                <hr
                  className="mt-0"
                  style={{ width: "100%", color: "green" }}
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
                <input
                  value={room}
                  type="text"
                  placeholder="Room ID"
                  onChange={(event) => {
                    setRoom(event.target.value);
                  }}
                />
                {state?.join !==true &&<button onClick={randomRoomId}>Generate Room Id</button>}
                 <button onClick={joinRoom}>Join</button>
              </div>
            </div>
          </>
        ) : (
          <Button socket={socket} username={username} room={room} />
        )}
      </div>
    </div>
  );
}
