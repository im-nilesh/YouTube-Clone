import bcrypt from "bcrypt";

const users = [
  {
    username: "Nilesh",
    email: "nilesh@gmail.com",
    password: await bcrypt.hash("12345678", 10),
  },
  {
    username: "John Doe",
    email: "john@gmail.com",
    password: await bcrypt.hash("12345678", 10),
  },
  {
    username: "Sarah",
    email: "sarah@gmail.com",
    password: await bcrypt.hash("12345678", 10),
  },
  {
    username: "Alex",
    email: "alex@gmail.com",
    password: await bcrypt.hash("12345678", 10),
  },
  {
    username: "Emma",
    email: "emma@gmail.com",
    password: await bcrypt.hash("12345678", 10),
  },
];

export default users;
