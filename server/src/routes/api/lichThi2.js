const lichThi2Router = require("express").Router();
const lichThi2 = require("../../models/lichThi2");
const lichThi = require("../../models/lichThi")

lichThi2Router.get("/", async (req, res) => {
  let data = await lichThi2.findAll();
  res.json(data);
});

lichThi2Router.post("/", async (req, res) => {
    let data = req.body;

    // Chuyển hết dữ liệu từ lịch thi 2 sang lịch thi
    // lichThi2.findAll().then(data => {
    //   data.forEach((row) => {
    //     lichThi.findOrCreate({
    //       where: {
    //         maLich_Thi: row.dataValues.maLich_Thi,
    //       },
    //       defaults: {
    //         maKy_Thi: row.dataValues.maKy_Thi,
    //         idKhu_Vuc: row.dataValues.idKhu_Vuc,
    //         idToa_Nha: row.dataValues.idToa_Nha,
    //         ten_Phong: row.dataValues.ten_Phong,
    //         ma_Lop: row.dataValues.ma_Lop,
    //         ma_Mon: row.dataValues.ma_Mon,
    //         bo_Mon: row.dataValues.bo_Mon,
    //         dot_Thi: row.dataValues.dot_Thi,
    //         ngay_Thi: row.dataValues.ngay_Thi,
    //         ca_Thi: row.dataValues.ca_Thi,
    //         so_SV: row.dataValues.so_SV,
    //         maLich_Thi: row.dataValues.maLich_Thi,
    //         GV1: row.dataValues.GV1,
    //         GV2: row.dataValues.GV2,
    //         status: row.dataValues.status
    //       }
    //   })
    // })});

    // Xóa hết dữ liệu lịch thi 2 
    await lichThi2.destroy({where: {}})

    // Upload dữ liệu mới
    data.lichThiUpload.forEach(async(e) => await lichThi2.create(e));
  
    res.json({success: 'Upload data success'});
  });
  


module.exports = lichThi2Router;
