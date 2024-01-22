export class CaRanhModel {
  id: number;
  maKy_Thi: string;
  idKhu_Vuc: string;
  MaNV: string;
  ngay_Thi: string;
  caXacNhan: string;
  timeSendMail: Date | null;
  timeConfirmedMail: Date | null;

  constructor() {
    this.id = 0;
    this.maKy_Thi = '';
    this.idKhu_Vuc = '';
    this.MaNV = '';
    this.ngay_Thi = '';
    this.caXacNhan = '';
    this.timeSendMail = null;
    this.timeConfirmedMail = null;
  }
}
