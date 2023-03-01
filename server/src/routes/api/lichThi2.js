const lichThi2Router = require("express").Router();
const lichThi2 = require("../../models/lichThi2");

lichThi2Router.get("/", async (req, res) => {
  let data = await lichThi2.findAll();
  res.json(data);
});

lichThi2Router.post("/", async (req, res) => {
    let data = req.body;
    data.lichThiImport.forEach(async(e) => await lichThi2.create(e));
    res.json({success: 'Upload data success'});
  });
  

module.exports = lichThi2Router;
