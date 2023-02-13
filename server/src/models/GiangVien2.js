import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./connect";

const GiangVien2 = sequelize.define("giangvien2s", {
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
    ghiChu: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
});
GiangVien2.sync({ alter: true });

export default GiangVien2;
