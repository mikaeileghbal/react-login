const express = require("express");
const cors = require("cors");
const PORT = 4000;
const app = express();

const users = [];
const generateID = () => Math.random().toString(36).substring(2, 10);
const generateCode = () => Math.random().toString(36).substring(2, 5);

let code;

const sendVerificationCode = (recipient, code) => {
  console.log(recipient, code);
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/api/register", (req, res) => {
  console.log("user: ", req.body);
  const { email, tel, username, password } = req.body;

  let result = users.filter((user) => user.email === email || user.tel === tel);

  if (result.length === 0) {
    const newUser = { id: generateID(), email, tel, username, password };
    users.push(newUser);
    return res.json({ message: "Account created successfully!" });
  }

  res.json({ error_message: "User already exists" });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const result = users.filter(
    (user) => user.email === email && user.password === password
  );

  if (result.length === 0) {
    return res.json({ error_message: "Incorrect credentials" });
  }

  code = generateCode();

  sendVerificationCode(result[0].tel, code);

  res.json({
    message: "Login successfully",
    data: { username: result[0].username },
  });
});

app.post("/api/verification", (req, res) => {
  if (code === req.body.code) {
    return res.json({ message: "You're verified successfully" });
  } else {
    res.json({ error_message: "Incorrect credentials" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
