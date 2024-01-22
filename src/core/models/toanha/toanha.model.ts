export class ToaNhaModel {
  id: number;
  tenToaNha: string;
  thuTu: number;
  anHien: number;
  idKhuVuc: number;
  ghiChu: string | null;
  constructor() {
    this.id = 0;
    this.tenToaNha = '';
    this.thuTu = 0;
    this.anHien = 0;
    this.idKhuVuc = 0;
    this.ghiChu = null;
  }
}
