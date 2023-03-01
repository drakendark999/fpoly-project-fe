const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connect");

const lichThi = sequelize.define(
  "lichThi",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    boMon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maKy_Thi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idKhu_Vuc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idToa_Nha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ten_Phong: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ma_Lop: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ma_Mon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    đợt_Thi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ngay_Thi: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ca_Thi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    so_SV: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maLich_Thi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GV1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GV2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      comment:
        '"pending": đang chờ; "rejected": từ chối; "confirmed": đã xác nhận; "": chưa có gv2',
    },
  },
  {
    timestamps: false,
    tableName: "lichThi",
  }
);

lichThi.sync({ alter: true });

module.exports = lichThi;
