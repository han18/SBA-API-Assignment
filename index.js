console.log("My SAB API Assignment");

const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3008;

// static files to import files
app.use(express.static("./style"));

//Middleware
app.use(morgan("dev"));

// Creating the view engine
app.set("views", "./views"); // set the view
app.set("view engine", "pug"); // linking the route view

// inner router for texting
app.get("/", (req, res) => {
  res.send("This is my take home assignment");
});

// Linking the form the form.pug file

app.listen(PORT, () => {
  console.log("Listening at PORT 3008");
});
