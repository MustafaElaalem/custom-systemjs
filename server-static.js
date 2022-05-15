const express = require("express");
const path = require("path");
const app = express();

//setting middleware
app.use(express.static(path.join(__dirname, "dist"))); //Serves resources from dist folder

const server = app.listen(5006, () => {
  console.log("listened");
});
