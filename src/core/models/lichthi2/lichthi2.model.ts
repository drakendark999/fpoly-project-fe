import { Subject } from '@src/core/libs/constants';

export class LichThi2Model {
  id: number;
  maKy_Thi: string;
  idKhu_Vuc?: string;
  idToa_Nha: number;
  ten_Phong: string;
  ma_Lop?: string;
  ma_Mon?: string;
  bo_Mon: Subject;
  dot_Thi: number;
  ngay_Thi: string;
  ca_Thi: number;
  so_SV?: number;
  maLich_Thi?: string;
  GV1: string;
  GV2: string;
  GV1_busy: string;
  status_GV1: string;
  status_GV2?: string;
  status_cancel: string;
  ghiChu: string;
  idImportHistory?: number;

  constructor() {
    this.id = 0;
    this.maKy_Thi = '';
    this.idKhu_Vuc = '';
    this.idToa_Nha = 0;
    this.ten_Phong = '';
    this.ma_Lop = '';
    this.ma_Mon = '';
    this.bo_Mon = Subject.UDPM;
    this.dot_Thi = 0;
    this.ngay_Thi = '';
    this.ca_Thi = 0;
    this.so_SV = 0;
    this.maLich_Thi = '';
    this.GV1 = '';
    this.GV2 = '';
    this.GV1_busy = '';
    this.status_GV1 = '';
    this.status_GV2 = '';
    this.ghiChu = '';
    this.status_cancel = '';
    this.idImportHistory = 0;
  }
}
