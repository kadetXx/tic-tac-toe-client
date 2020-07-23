const express = require("express");
const http = require("http");
var path = require("path");

class App {
  router = express.Router();
  app;
  server;

  constructor() {
    this.app = express();

    this.server = http.createServer(this.app);

    this.initializeControllers();
  }

  initializeControllers() {
    this.router.get("/", (req, res) => {
      res.sendFile(path.join(__dirname + "/index.html"));
    });

    this.app.use("/", this.router);
  }

  listen() {
    this.server.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);

      // this can be placed anywhere you want
      const sockets = require("./sockets");
    });
  }

  getServer() {
    return this.server;
  }
}

module.exports = App;
