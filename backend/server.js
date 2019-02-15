const express = require("express");
const _d = require("./businessLogic/Deck");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Content-Type", "application/json");
  next();
});

app.get("/api/deal", (req, res) => {
    res.send(new _d.Deck().deal());
});

app.listen(3000, () => console.log("sever on port 3000"));
