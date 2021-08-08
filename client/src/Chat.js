import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Messages from "./Messages";
import Input from "./Input";
//import Button from "./Button";

import "./style.css";
const endpoint = "http://localhost:5000"
//  message to be typed is written in this input block

let socket;
function Chat({location}){
    //console.log("properties are",props);

    socket = io(endpoint, {
        withCredentials: true,
        extraHeaders: {
          //"my-custom-header": "abcd"
        }
      });

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [messages, setMessages] = useState([{message :"heie", name:"Sab"}, {message : "dsai", name : "baj"}]);
    const [message, setMessage] = useState("");

    useEffect(()=>{
        const {name, room} = queryString.parse(location.search);
        console.log("component rendered", {name, room});

        setName(name);
        setRoom(room);

        socket.emit("enter", name, room);  // passing a multiple arguments

        




    },[location.search]);

    useEffect(()=>{

        socket.on("message", (message, name)=>{
            setMessages(prevMessages=>[...prevMessages, {message, name}])
        });




    });

    
    function sendMessage(e){
        //e.preventDefault();

        //socket.emit('addMessage', message, ()=>setMessages(""));
        //setMessages((prev) => [...prev, message]);
        
        socket.emit("add-message", message, room, name);
        setMessage("");

        


    }




    return (
        <div className = "outer-container">
           
            <Messages className = "messages " messages = {messages} setMessages = {setMessages} name = {name}/>
            
            <div className="input-container">
            <Input value = {message} setVal={setMessage} addMessage = {sendMessage} /> 
           
            </div>
            
            
            
            
        </div>
    )
}

export default Chat;
//<Button addMessage = {sendMessage}/>