# step:1 first create simple server for socket.io 

# const http = require('http');
# const express = require('express');
# const port = 9000;
# const path = require('path');
# const app = express();
# const server = http.createServer(app);
# app.use(express.static(path.resolve('./public')));
# app.get('/', (req, res) => {
#     return res.sendFile("./public/index.html");
# })
# server.listen(port, () => {
#   console.log(`app is running on port ${port}`);
# })

# step: 2