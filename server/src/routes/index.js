import { Router } from "express";


const indexRouter = Router();

indexRouter.get("/", async ( req,res) => {
  
  res.send("123");
});

export default indexRouter;
