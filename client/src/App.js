import React from "react";
import Chat from "./Chat";
import Enter from "./Enter";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App(){
    return (
        <Router>
            <Route exact path = "/" component = {Enter} />
            <Route path = "/chat"  component = {Chat}/>
        </Router>
    )
}


  
  export default App;