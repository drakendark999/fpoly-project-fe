const indexRouter = require("express").Router();
const lichThiRouter = require("../models/lichThi");


indexRouter.get("/", async (req, res) => {
  res.send("123");
});

module.exports = indexRouter;
