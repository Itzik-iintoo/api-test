const express = require("express");
const cors = require("cors");
const { encryptPassword } = require("./middleware/login.middeware");
const { loginUser, connectTest } = require("./controllers/test.controller.js");

const app = express();
app.use(cors());
app.use(express.json());
// app.use(encryptPassword);
app.post("/api/login", encryptPassword, loginUser);

app.get("/api/test", connectTest);
const PORT = process.env.PORT || 3001;
app.get("/", (req, res) => {
  return res.send(`welcome to api-test`);
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
