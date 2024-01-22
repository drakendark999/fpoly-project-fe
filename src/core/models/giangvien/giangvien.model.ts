export class GiangVienModel {
  id?: number;
  idNV?: string;
  MaNV?: string;
  hoVaTen?: string;
  doiTuong: string;
  BoMon?: string;
  mail_fe?: string;
  mail_fpt?: string;
  count?: number;
  khongPhanGV2?: boolean | number;
  ghiChu?: string | null;

  constructor() {
    this.id = 0;
    this.idNV = '';
    this.MaNV = '';
    this.hoVaTen = '';
    this.doiTuong = '';
    this.BoMon = '';
    this.mail_fe = '';
    this.mail_fpt = '';
    this.count = 0;
    this.khongPhanGV2 = false;
    this.ghiChu = null;
  }
}
