import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
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

    <div className="App">
      {!goInside ? (
        <div className="joinChatContainer">
          <h3>Multiplayer Game</h3>
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
      ) : (
        <Button socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
