const http = require('http');
const express = require('express');
const port = 9000;
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server); // this io handle socket


// Socket.io
io.on('connection', (socket) => {
    console.log("A new User has connected", socket.id); // it automatically manage   
})

app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
    return res.sendFile("./public/index.html");
})

server.listen(port, () => {
  console.log(`app is running on port ${port}`);
})
