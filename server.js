const express = require("express");
require('dotenv').config()
const path = require("path");
const mongoose = require("mongoose");
const colors = require("colors");
const cors = require("cors");
var cookies = require("cookie-parser");
// Route Files
const main = require("./routes/main");

// DB Connection
const db = require("./config/keys").MongoURI;
// Connect MongoDB
mongoose.set("useFindAndModify", false);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected".green.bold))
  .catch((err) => console.log(err));

const app = express();
// var corsOptions = {
//     origins: ['http://localhost:3000',"http://localhost:3001"],
//     credentials:  true
//   }

var corsOptions = {
  origin: "https://company-vicky.vercel.app",
  credentials: true,
};

app.use(cors());
app.use(cookies());
app.use(express.json());

// Routing for API Service
app.use("/api/v1/main", main);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
