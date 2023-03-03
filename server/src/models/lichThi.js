const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connect");

const lichThi = sequelize.define("lichThi",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    maKy_Thi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idKhu_Vuc: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '"pmqt": CS3, "nk": CS2'
    },
    idToa_Nha: {
      type: DataTypes.STRING,
      allowNull: true,
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
    bo_Mon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dot_Thi: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
      allowNull: true,
    },
    maLich_Thi: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    GV1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    GV2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '"pending": đang chờ; "rejected": từ chối; "confirmed": đã xác nhận; "": chưa có gv2',
    },
  },
  {
    timestamps: false,
  }
);

lichThi.sync({ alter: true });

module.exports = lichThi;
