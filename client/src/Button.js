import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Icon } from '@iconify/react';

function Button({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [buttonEnable,setButtonEnable]=useState(false)

  const sendMessage = async () => {
setButtonEnable(true)
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        buttonEnable:buttonEnable,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      // setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");

  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setButtonEnable(data.buttonEnable)
    setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    
        <button className="btn btn-success" onClick={sendMessage} disabled={buttonEnable}> Click</button> 
  );
}

export default BUtton;
