const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connect");

const GiangVien2 = sequelize.define("giangvien2s", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idNV: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  MaNV: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hoVaTen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  doiTuong: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  BoMon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ghiChu: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
GiangVien2.sync({ alter: true });

module.exports = GiangVien2;
