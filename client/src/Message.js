import React from "react";

function Message(props){
    let curUser = false;
    
    /// if(curUser) -> attach a class which shows msg at left else attach a class w,hich shows mwsg at right
    if(props.msg.name === props.name)
    {
        curUser=true;
    }

    return (
        curUser ? <div className="sender"> {props.msg.message}  </div> : <div className="reciever">{props.msg.name} : {props.msg.message} </div>
    )


}
export default Message;