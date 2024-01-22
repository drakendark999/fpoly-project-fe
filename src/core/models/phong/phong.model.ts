export class PhongModel {
  id: number;
  tenPhong: string;
  idToaNha: number;
  tienNghi: string;
  idLoaiPhong: number;
  trangThai: number;
  ghiChu: string | null;

  tenLoaiPhong: string;
  tenToaNha: string;
  idKhuVuc: number;
  tenKhuVuc: string;

  constructor() {
    this.id = 0;
    this.tenPhong = '';
    this.idToaNha = 0;
    this.tienNghi = '';
    this.idLoaiPhong = 0;
    this.trangThai = 0;
    this.ghiChu = null;
    this.tenLoaiPhong = '';
    this.tenToaNha = '';
    this.idKhuVuc = 0;
    this.tenKhuVuc = '';
  }
}
