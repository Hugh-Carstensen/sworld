// index.js
// Created 08/07/2020: Hugh Carstensen
// Load app and setup socket

const Express = require("express")();
var app = Express();
const Http = require("http").Server(app);
const Socket = require("socket.io")(Http);

