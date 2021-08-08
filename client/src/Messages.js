import React from "react";
import Message from "./Message";
import "./style.css";

function Messages(props){
    
    console.log("Messages module", props.msg);
    return(
       <div className="message-container">
          {props.messages.map((msg) =>  <Message msg = {msg} name={props.name}/>)}
       </div> 
    )
}

export default Messages;