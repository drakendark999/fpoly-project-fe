export class KyThiModel {
  id: number;
  maHocKy: string;
  block: string;
  maKyThi: string;
  ngayBatDau: Date;
  ngayKetThuc: Date;
  ghiChu: string;
  constructor() {
    this.id = 0;
    this.maHocKy = '';
    this.block = '';
    this.maKyThi = '';
    this.ngayBatDau = new Date();
    this.ngayKetThuc = new Date();
    this.ghiChu = '';
  }
}
