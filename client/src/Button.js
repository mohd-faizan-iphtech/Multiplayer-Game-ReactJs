import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Icon } from "@iconify/react";
import ReactiveButton from "reactive-button";

function Button({ socket, username, room }) {
  const NumberofUser = localStorage.getItem("usercount");
  const onlinePlayers = localStorage.getItem("onlinePlayers");
  const roomId = localStorage.getItem("roomId");
  const [currentMessage, setCurrentMessage] = useState("");
  // const [messageList, setMessageList] = useState([]);
  const [buttonEnable, setButtonEnable] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    sendMessage();
    // send an HTTP request
    setTimeout(() => {
      setState("success");
    }, 500);
  };

  const sendMessage = async () => {
    setButtonEnable(true);
    const messageData = {
      room: room,
      author: username,
      message: currentMessage,
      buttonEnable: buttonEnable,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };

    await socket.emit("send_message", messageData);
    // setMessageList((list) => [...list, messageData]);
    // setCurrentMessage("");
  };
  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setButtonEnable(data.buttonEnable);
  //     // setMessageList((list) => [...list, data]);
  //     setUserDetails(data);
  //   });
  // }, [socket]);
  useEffect(() => {
    // socket.on("receive_message", (data) => {
    //   setButtonEnable(data.buttonEnable);
    //   setUserDetails(data);
    // });

    socket.on("enable_button", (data) => {
      console.log("setButtonEnable(true);", data);
      setButtonEnable(data.buttonEnable);
    });
  }, [socket]);

  console.log(userDetails);

  return (
    <div className="container p-5 ">
 <div> Room : {NumberofUser}</div>
      <div
        className="d-flex justify-content-between "
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   flexWrap: "nowrap",
        //   justifyContent: "space-between",
        // }}
      >
        <div> Room Id: {roomId}</div>
        <div> OnlinePlayers : {onlinePlayers}</div>
      </div>
      <div class="card text-center shaow">
        <div class="card-header "> Hi {username}</div>
        <div class="card-body">
          <h5 class="card-title">
            {!buttonEnable ? `Your Turn` : "waiting for opponent's Turn"}
          </h5>
          <p class="card-text"> </p>
          <ReactiveButton
            color="green"
            buttonState={state}
            idleText="Submit"
            loadingText="Loading"
            successText="Done"
            onClick={onClickHandler}
            style={{ borderRadius: 10 }}
            disabled={buttonEnable}
          />
        </div>
        <div class="card-footer text-body-secondary"></div>
      </div>
    </div>
  );
}
export default Button;
