const express = require("express");
const app = express();

function handleListening() {
  console.log("Listening on: http://localholst:4000");
}

app.listen(4000, handleListening);
