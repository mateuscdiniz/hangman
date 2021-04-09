// Read .env file
require("dotenv").config();

// Frameworks imports
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./db");

// Create web server
const app = express();
const http = require("http").createServer(app);

// Middlewares
app.use(cors()); // Allow cors
app.use(cookieParser()); // req.cookies
app.use(express.json()); // req.body

// Routes configs
app.use("/game", require("./controllers/player-controller"));
app.use("/ranking", require("./controllers/player-controller"));

// Connect to DB
console.log("Database connected ...");
db.connect(() => {
  console.log("successfully connected to the database");
  http.listen(parseInt(process.env.SERVER_PORT), () => {
    console.log("Server started successfully");
    console.log(
      `Server running on: http://localhost:${process.env.SERVER_PORT}`
    );
  });
});
