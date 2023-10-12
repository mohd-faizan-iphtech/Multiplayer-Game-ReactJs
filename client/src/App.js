import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import Button from "./Button";

const socket = io.connect("http://localhost:3001");

function App() {
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
    }
  };

  const randomRoomId = () => {
    var minm = 1000;
    var maxm = 9999;
    const demo = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    setRoom(demo);
  };

  return (

    <>

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateGames/>}/>
        <Route path="/Game" element={<Game />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
