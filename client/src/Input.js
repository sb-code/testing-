
import React from "react";
import "./style.css";

function Input(props){
    console.log("input event", props);
    return (
          <div  className = "input-group mb-3">
          <input aria-describedby="button-addon2" className = "form-control" value = {props.value} onChange = {(e) => {props.setVal(e.target.value)}}/>
          <div className="input-group-append">
          <button className ="btn btn-primary " id="button-addon2" onClick = {props.addMessage}> Send </button>
          </div>
          </div>
          

       
    )
}

export default Input;
