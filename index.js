const express = require("express");
const requestIp = require("request-ip");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const fromRequestIp = requestIp.getClientIp(req);
  res.send({ fromRequestIp });
});

app.listen(80, "0.0.0.0", () => {
  console.log(`Example app listening on port 80`);
});
