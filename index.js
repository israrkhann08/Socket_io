const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for user messages
  socket.on("user-message", (message) => {
    console.log(`Message received: ${message}`);
    io.emit("message", message); // Broadcast to all clients
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Serve static files
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.listen(9000, () => console.log(`Server Started at PORT: 9000`));
