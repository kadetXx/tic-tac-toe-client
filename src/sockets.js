const socketIOClient = require("socket.io-client");
const socket = socketIOClient("http://localhost:4444");

socket.on("connect", () => console.log("client is now connected"));

// socket.emit("checkUserDetail", { mobileNumber: "1234567890" });

// socket.on("checkUserDetailResponse", (data) => console.log(data));
