const indexRouter = require("express").Router();
const lichthi2 = require('../models/lichThi2');

indexRouter.get("/", async (req, res) => {
  res.send("123");
});

module.exports = indexRouter;
