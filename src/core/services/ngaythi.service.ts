import { NgayThiModel } from '../models/ngaythi/ngaythi.model';
import ApiService from './api.service';

export class NgayThiService extends ApiService {
  public getAllNgayThi() {
    return this.apiGet<NgayThiModel[]>('/lichthi2/ngaythi');
  }
}
