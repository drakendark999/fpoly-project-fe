import { GiangVienModel } from '@src/core/models/giangvien/giangvien.model';

export interface giangVienState {
  allGiangVien: GiangVienModel[];
  filter: string;
  filterDT: string[];
}
