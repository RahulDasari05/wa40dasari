var express = require("express");
var router = express.Router();
var value = 0;

/* GET users listing. */
router.get("/", function (req, res, next) {
  value = value + 1;
  random_number = Math.random() * 100;
  val = Math.trunc(random_number);
  res.send("Cos("+val+") is "+Math.cos(val));
});

module.exports = router;
