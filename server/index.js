  
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin:  "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });


app.use(cors());
var users = [];
console.log(users);

app.get("/", (req, res)=>{res.send("good")});


io.on('connection', (socket)=>{
     /// recieving multiple argumentson
    console.log("socket connected");
    socket.on("enter", (name, room)=>{
        /// add user credentials to the array
        console.log("enter event fired");
        
        var userObj = {id : socket.id, userName:name, userRoom : room };
        users.push(userObj);

        /// make the socket join the room
        socket.join(room);

          
          socket.emit("message", `welcome to ${room}`, "admin");
    //     socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    // socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
        console.log(room);



    });  
    socket.on("add-message", (message, room, name)=>{
        // let incomingId = socket.id;
        // let user = users.find((user) => user.id === incomingId);
        console.log(users);
        
        io.to(room).emit("message", message, name) /// when id event is triggered pass username and message
        //else console.log("Not found.....", socket.id, incomingId);
        //setVal("");
        console.log(message);
        console.log(room);
    })
})


server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
