//import { checkPropTypes } from "prop-types";
import React from "react";
import "./style.css";

function Button(props){
    return (
       
            <button className ="button" onClick = {props.addMessage}> Send </button>
        
    )
}

export default Button;

//<button type="button" class="btn btn-outline-primary">Primary</button>