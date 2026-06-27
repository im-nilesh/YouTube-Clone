import User from "../models/User.js";
import bcrypt from "bcrypt";

async function registerUser(req, res) {
  try {
    const userData = req.body;
    const existingUser = await User.findOne({
      email: userData.email,
    });
    if (existingUser) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }
    userData.password = await bcrypt.hash(userData.password, 10);
    const user = new User(userData);
    await user.save();

    res.status(201).json({
      message: "User registered Successfully",
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    // res.json({ message: "An error occured" });
    res.json({
      message: error,
    });
  }
}
export default registerUser;
