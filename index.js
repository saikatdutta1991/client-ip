const express = require("express");
const requestIp = require("request-ip");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({ success: true });
});

app.get("/ip", (req, res) => {
  const fromRequestIp = requestIp.getClientIp(req);
  res.send({ fromRequestIp });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
