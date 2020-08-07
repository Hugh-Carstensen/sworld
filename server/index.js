// index.js
// Created 08/07/2020: Hugh Carstensen
// Load app and setup socket

const App = require("express")();
const Http = require("http").Server(App);
const socketio = require("socket.io")(Http);


// Example socket handling for some generic message protocol
socketio.on('connection', socket => {
  socket.on('message', ({name, message}) => {
    socketio.emit('message', {name, message});
  });
});

Http.listen(3000, () => {
  console.log('Listening on :3000');
});