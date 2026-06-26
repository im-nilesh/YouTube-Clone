import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/youtube-clone");
const db = mongoose.connection;

db.on("open", () => {
  console.log("Database connected");
});
db.on("error", () => {
  console.log("Connection Failed");
});
