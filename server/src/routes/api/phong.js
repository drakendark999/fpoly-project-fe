const phongThiRouter = require("express").Router();
const Phong = require("../../models/phong")

phongThiRouter.get('/',async (req, res, next) =>{
    let data = await Phong.findAll()
    res.json(data)
})


module.exports = phongThiRouter;