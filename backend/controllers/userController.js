import User from "../models/User.js";

async function registerUser(req, res) {
  const userData = req.body;
  const user = new User(userData);
  await user.save();
}
export default registerUser;
