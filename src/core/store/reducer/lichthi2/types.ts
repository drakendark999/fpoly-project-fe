import { BlockEnum } from '@src/core/libs/constants';
import { DotThiModel } from '@src/core/models/dot-thi/dot-thi.component';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import { NgayThiModel } from '@src/core/models/ngaythi/ngaythi.model';

interface filterLichThiModel {
  date: string;
  bo_mon: string[];
  toa_nha: number;
  block: BlockEnum;
  khu_vuc: string;
  ca_thi: number[];
  dot_thi: number[];
}
export interface lichThi2State {
  allLichThi2: LichThi2Model[];
  allLichThi2Cancel: LichThi2Model[];
  allLichThi2Busy: LichThi2Model[];
  allNgayThi: NgayThiModel[];
  filter_lichthi2: filterLichThiModel;
  allDotThi: DotThiModel[];
  reset_screen: number;
}

export interface addGv2Action {
  id: number;
  nameDrag: string;
}

export interface moveLichThiAction {
  id: number;
  ngay_Thi: string;
  ca_Thi: number;
  ten_Phong: string;
  idToa_Nha: number;
}
