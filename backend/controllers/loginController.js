import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function loginUser(req, res) {
  const userData = req.body;
  const user = await User.findOne({
    email: userData.email,
  });
  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }
  const isMatch = await bcrypt.compare(userData.password, user.password);
  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid email or Password",
    });
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });
  res.status(200).json({
    message: "Login Successful",
    token: token,
    user: {
      username: user.username,
      email: user.email,
    },
  });
}
export default loginUser;
