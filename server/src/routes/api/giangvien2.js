import { Router } from "express";
import GiangVien2 from "../../models/GiangVien2";

const giangVien2Router = Router();

giangVien2Router.get("/", async (req, res) => {
  let data = await GiangVien2.findAll();
  res.json(data);
});

giangVien2Router.get("/:idNV", async (req, res) => {
  let id = req.params.idNV;
  GiangVien2.findOne({ where: { idNV: id } }).then((data) => res.json(data));
});

giangVien2Router.post("/", async (req, res) => {
  let data = req.body;

  // const isExist = await GiangVien2.findOne({ where: { idNV: data.idNV } });
  // if (isExist === null) {
  //   await GiangVien2.create(data);
  //   res.json(data);
  // } else {
  //   console.log("IDNV đã tồn tại trong db:", data.idNV);
  // }
  await GiangVien2.create(data);
  res.json(data);
});

export default giangVien2Router;
