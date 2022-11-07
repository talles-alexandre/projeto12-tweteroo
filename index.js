import express, { json } from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(json());

const users = [];
let avatar;
const tweets = [];

app.post("/sign-up", (req, res) => {
  const newUser = req.body;
  avatar = req.body.avatar;

  users.push(newUser);
  res.send("Ok");
});
app.post("/tweets", (req, res) => {
  const posts = req.body;
  posts.id = tweets.length + 1;
  posts.avatar = avatar;
  tweets.push(posts);
  res.send("Ok");
});
app.get("/tweets", (req, res) => {
  const displayedTweets = tweets.slice(-10);
  displayedTweets.reverse();
  res.send(displayedTweets);
});

app.listen(5000, () => {
  console.log("Servidor iniciado");
});
