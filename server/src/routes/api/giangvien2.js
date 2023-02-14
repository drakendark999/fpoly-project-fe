import { Router } from "express";
import GiangVien2 from "../../models/GiangVien2";

const giangVien2Router = Router();

giangVien2Router.get("/", async (req, res) => {
  let data = await GiangVien2.findAll();
  res.json(data);
});

giangVien2Router.get("/:id", async (req, res) => {
  let id = req.params.id;
  GiangVien2.findOne({ where: { id: id } }).then((data) => res.json(data));
});

giangVien2Router.post("/", async (req, res) => {
  let data = req.body;
  GiangVien2.findOne({
    where: {
      idNV: data.idNV,
    },
  }).then(async (teacher) => {
    if (!teacher) {
      data.id = (await GiangVien2.max("id")) + 1;
      await GiangVien2.create(data);
    }
  });
});

export default giangVien2Router;
