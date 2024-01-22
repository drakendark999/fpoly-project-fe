import ApiService from './api.service';
import { GiangVienModel } from '../models/giangvien/giangvien.model';
import { PutSttGiangVienResult } from '../data-transfer/giangvien/put-giangvien.api-results';

export class GiangVienService extends ApiService {
  public getAllGiangVien() {
    return this.apiGet<GiangVienModel[]>('/gv2');
  }

  public putSttGiangVien(data: { MaNV: string }) {
    return this.apiPut<PutSttGiangVienResult>(
      '/gv2/update_status_confirm',
      data,
    );
  }
}
