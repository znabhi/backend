require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const github = {
  login: "znabhi",
  id: 67307608,
  node_id: "MDQ6VXNlcjY3MzA3NjA4",
  avatar_url: "https://avatars.githubusercontent.com/u/67307608?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/znabhi",
  html_url: "https://github.com/znabhi",
  followers_url: "https://api.github.com/users/znabhi/followers",
  following_url: "https://api.github.com/users/znabhi/following{/other_user}",
  gists_url: "https://api.github.com/users/znabhi/gists{/gist_id}",
  starred_url: "https://api.github.com/users/znabhi/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/znabhi/subscriptions",
  organizations_url: "https://api.github.com/users/znabhi/orgs",
  repos_url: "https://api.github.com/users/znabhi/repos",
  events_url: "https://api.github.com/users/znabhi/events{/privacy}",
  received_events_url: "https://api.github.com/users/znabhi/received_events",
  type: "User",
  site_admin: false,
  name: "Abhishek Jain",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Hy",
  twitter_username: null,
  public_repos: 7,
  public_gists: 0,
  followers: 1,
  following: 1,
  created_at: "2020-06-23T05:53:51Z",
  updated_at: "2024-05-21T04:24:09Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abhi", (req, res) => {
  res.send("Hi abhishek jain");
});

app.get("/github", (req, res) => {
  res.json(github);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
