const express = require("express");
const dbConnect = require("./db");
const User = require("./user");
const app = express();
app.use(express.json())

app.get("/", async (req, res) => {
  let users = await User.find();
  res.send(users);
});

app.get("/user", (req, res) => {
  res.send("view");
});


app.post("/", async (req, res) => {
  let user = await User.create(req.body)
  res.send(user)
});

app.put("/:id", async (req, res) => {

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id, req.body, { new: true });
  res.send(updatedUser);
});

app.delete("/:id", async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  res.send("User deleted successfully");
});


app.listen(4808, () => {
  console.log(`server on port 4808`);
  dbConnect();
});

