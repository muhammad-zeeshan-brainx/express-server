const express = require("express");

const { axios, fetch } = require("axios");

const app = new express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("server started at port 3000");
});

export const fetch = () => {};

export default fetch;
