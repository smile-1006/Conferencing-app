const express = require("express");
const http = require("http");
const {v4: uuidv4 } = require("uuid");
const cors = require('cors')
const twilio =require('twilio');

const PORT = process.env.PORT || 5000;

const app = express();

// we will create a server for the app which is made up of simple express application
const server = http.createServer(app);

app.use(cors());

//
const io = require('socket.io')(server, { cors: {
    origin:'*',
    methods: ['GET','POST']
}})

server.listen(PORT, () => {
    console.log(`server is listening on post no ${PORT}`);
})