import express from "express";
import "./database/db.js";
import router from "./routes/routes.js";

const app = express();

const port = 5100;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Server is Running");
});
