console.log("My SBA API Assignment");
const express = require("express");
const morgan = require("morgan");
const posts = require("./routes/posts");
const app = express();
const PORT = 3008;

// Middleware for converting files or post received as jason format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files to import files
app.use(express.static("./style"));
app.use("/posts", posts);

//Middleware
app.use(morgan("dev"));

// Creating the view engine
app.set("views", "./views"); // set the view
app.set("view engine", "pug"); // linking the route view

// inner root router for texting
app.get("/", (req, res) => {
  res.send("This is my take home assignment");
});

// Linking the form.pug file from the view folder to render
app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/form/posts", (req, res) => {
  res.render("form");
});

//======== Post Request Route =====
// sending post request to this endpoint "/form" for a new user account object
app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT}`);
});
