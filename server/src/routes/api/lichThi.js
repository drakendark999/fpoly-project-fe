const lichThiRouter = require("express").Router();
const lichThi = require("../../models/lichThi");
const { Op } = require("sequelize");

lichThiRouter.get("/", async (req, res) => {
  let data = await lichThi.findAll();
  res.json(data);
});

lichThiRouter.get("/toaNha/:date/:toaNha/:chuyenNganh", async (req, res) => {
  let data = req.params.toaNha;
  let date = req.params.date;
  let chuyenNganh = req.params.chuyenNganh;
  console.log(date);
  let d = await lichThi.findAll({
    where: {
      [Op.and]: {
        idToa_Nha: data,
        ngay_Thi: {
          [Op.substring]: `${date}`,
        },
        boMon: chuyenNganh,
      },
    },
  });
  res.json(d);
});

lichThiRouter.get(
  "/chuyenNganh/:date/:toaNha/:chuyenNganh",
  async (req, res) => {
    let chuyenNganh = req.params.chuyenNganh;
    let date = req.params.date;
    let toaNha = req.params.toaNha;
    let d = await lichThi.findAll({
      where: {
        [Op.and]: {
          idToa_Nha: toaNha,
          ngay_Thi: {
            [Op.substring]: `${date}`,
          },
          boMon: chuyenNganh,
        },
      },
    });
    res.json(d);
  }
);

lichThiRouter.get("/date/:date/:toaNha/:chuyenNganh", async (req, res) => {
  let data = req.params.date;
  let toaNha = req.params.toaNha;
  let chuyenNganh = req.params.chuyenNganh;
  // console.log(data);
  let d = await lichThi.findAll({
    where: {
      [Op.and]: {
        ngay_Thi: {
          idToa_Nha: toaNha,
          ngay_Thi: {
            [Op.substring]: `${data}`,
          },
          boMon: chuyenNganh,
        },
      },
    },
  });

  console.log(d);
  res.json(d);
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

module.exports = lichThiRouter;
