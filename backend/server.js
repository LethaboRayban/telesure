var express = require("express");
var bodyParser = require("body-parser");
var _d = require("./businessLogic/Deck");
var cors = require("cors");

var app = express();

app.use(cors());

app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  const b = new _d.Deck();
  return res.json(b.cards);
});

app.listen(3000, () => console.log("sever on port 3000"));
