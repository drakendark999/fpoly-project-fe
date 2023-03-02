const lichThiRouter = require("express").Router();
const lichThi = require("../../models/lichThi");
const { Op } = require("sequelize");

lichThiRouter.get("/", async (req, res) => {
    let data = await lichThi.findAll();
    res.json(data);
});

lichThiRouter.put("/updateLichThi", async (req, res) => {
    let data = req.body;
    // console.log(data);
    let d = await lichThi.update({ GV1: data.GV1, GV2: data.GV2 }, { where: { id: data.id } });
    let backData = await lichThi.findAll();
    res.json(backData);
});

module.exports = lichThiRouter;
