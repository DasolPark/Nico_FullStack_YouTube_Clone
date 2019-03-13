import "@babel/polyfill";
import dotenv from "dotenv";
import "./db";
import path from "path";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  const pathJoin = path.join(__dirname, "views");
  console.log(`pathJoin: ${pathJoin}`);
  console.log(`Listening on: http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);
