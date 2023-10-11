import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Icon } from '@iconify/react';
import ReactiveButton from 'reactive-button';



function Button({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [buttonEnable,setButtonEnable]=useState(false)


  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');
    sendMessage();

    // send an HTTP request
    setTimeout(() => {
      setState('success');
    }, 500);
  };


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
    
         <div className="container p-5">
        <div class="card text-center">
          <div class="card-header ">Game</div>
          <div class="card-body">
            <h5 class="card-title"> Let's play </h5>
            <p class="card-text"> </p>
  
                 
   <ReactiveButton
      buttonState={state}
      idleText="Submit"
      loadingText="Loading"
      successText="Done"
      onClick={onClickHandler}
      color="teal"
      disabled={buttonEnable}
    />
                
          </div>
          <div class="card-footer text-body-secondary"></div>
        </div>
      </div>

  );
}

export default Button
