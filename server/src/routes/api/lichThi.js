import { Router } from "express";
import lichThi from "../../models/lichThi";

const lichThiRouter = Router();

lichThiRouter.get("/", async (req, res) => {
  let data = await lichThi.findAll();
  res.json(data);
});

export default lichThiRouter;
