import "./App.css";
import io from "socket.io-client";
import { useState,useCallback } from "react";
import Button from "./Button";


const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [goInside, setGoInside] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setGoInside(true);
    }
  };

 

  return (
    <div className="container">
    <div className="row" style={{height:"100vh"}}>
      {!goInside ? (
        <>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center hidemobile">
          <img src="image/sideimage.png" className="img-fluid"/>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
        <div className="joinChatContainer border-0 card shadow p-5" >
          <h3 className="mb-3">Multiplayer Game</h3>
          <hr className="mt-0" style={{width:"100%", color:"green"}}/>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
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

export default App;
