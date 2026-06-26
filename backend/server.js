import express from "express";
import "./database/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

const port = 5100;

app.use(express.json());
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
