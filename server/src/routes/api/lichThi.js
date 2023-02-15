import { Router } from "express";
import lichThi from "../../models/lichThi";

const lichThiRouter = Router();

lichThiRouter.get("/", async (req, res) => {
  let data = await lichThi.findAll();
  res.json(data);
});

lichThiRouter.put("/updateLichThi", async (req, res) => {
  let data = req.body;
  // console.log(data);
  let d = await lichThi.update(
    { GV1: data.GV1, GV2: data.GV2 },
    { where: { id: data.id } }
  );
  let backData = await lichThi.findAll();
  res.json(backData);
});

export default lichThiRouter;
