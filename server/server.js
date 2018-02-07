/**
 * server.server.js
 * basic server operation's
 * */

const {config} = require('./../config/config'),
    express = require('express'),
    path = require('path'),
    http = require('http'),
    socketIo = require('socket.io'),
    publicPath = path.join(__dirname, '../public'),
    app = express(),
    server = http.createServer(app),
    io = socketIo(server);

app.use(express.static(publicPath));
io.on('connection',(socket)=>{
    console.log('new user connected')

    socket.emit('newEmail',{
        from:"hardik@gmail.com",
        text:"welcome to the chat",
        createdAt:123
    });
    socket.broadcast.emit('newEmail',{
        from:"hardik@gmail.com",
        text:"chat joined",
        createdAt:123
    });

    socket.on('createEmail',(newEmail)=>{
        console.log("createEMail: ",newEmail);
    });

    socket.on('disconect',()=>{
        console.log('bhaqi gyo');
    });
});

server.listen(config.port, () => {
    console.log(`server start on port ${config.port}`);
});