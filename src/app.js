import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://localhost:3000");

socket.on("connected", (data) => console.log("client is now connected"));
