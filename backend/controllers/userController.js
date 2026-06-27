import User from "../models/User.js";

async function registerUser(req, res) {
  try {
    const userData = req.body;
    const user = new User(userData);
    await user.save();
    res.json({
      message: "User registered Successfully",
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.json({ message: "An error occured" });
  }
}
export default registerUser;
