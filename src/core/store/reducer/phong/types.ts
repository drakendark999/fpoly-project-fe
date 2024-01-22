import { PhongModel } from '@src/core/models/phong/phong.model';
interface FilterPhongModel {
  toa_nha: number;
}
export interface phongState {
  phongList: PhongModel[];
  filter_phong: FilterPhongModel;
}
