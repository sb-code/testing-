import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Enter(){
    const [name, setName] = React.useState("");
    const [room, setRoom] = React.useState("");

    return(
        <div className = " mx-auto card">
        <div className = "mx-auto card-body">
          <form className = "enter-form">
            <div className = "form-group">
            <label>User-Name</label>
            
            <input className = " form-control " id = "name" type="text" placeholder="enter your name" onChange={(e)=> {setName(e.target.value)}} value = {name}/>

            
            </div>

            <br/>

            <div className = "form-group">
                <label> Room Name</label>
                
                
                <input className = "form-control" id="room" type = "text" placeholder = "enter room" onChange={(e)=> {setRoom(e.target.value)}} value = {room}/>
            </div>
            
            <br />
            
            <Link to ={`./chat?name=${name}&room=${room}`}>
             <button className="btn btn-primary" type = "submit">Join Room</button>
            </Link>
            </form>

          
            </div>
        </div>
    )
}
export default Enter;