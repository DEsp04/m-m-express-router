const express = require("express");
const app = express();
const routes = require("./routes/index.js");
const db = require("./db");
const logger = require("morgan")

const PORT = process.env.PORT || 3000;




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

app.use("/api", routes);



db.on("error", console.error.bind(console, "MongoDB connection error"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));



//https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c