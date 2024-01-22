import { CaRanhModel } from '@src/core/models/caranh/ca-ranh.model';

interface FilterCaRanhModel {
  date: string;
}

export interface caRanhState {
  all_ca_ranh: CaRanhModel[];
  ca_ranh_gv: CaRanhModel[];
  filter_caranh: FilterCaRanhModel;
}

export interface dragToAddCaBanGvAction {
  oldMaNV: string;
  caXacNhan: string;
  ngay_Thi: string;
  MaNV: string;
  ca: string;
}

export interface addCaRanhGv2Action {
  ngay_Thi: string;
  MaNV: string;
  ca: number;
}

export interface dragFixCaBanAction {
  oldMaNV: string;
  ngay_Thi: string;
  MaNV: string;
  ca: number;
  caOld: string;
}

export interface updateCaBanAction {
  id: number;
  caBanUpdate: string;
}

export interface addCabanAction {
  MaNV: string;
  ngay_Thi: string;
  caXacNhan: string;
}
