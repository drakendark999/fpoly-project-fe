import { PhongModel } from '../models/phong/phong.model';
import ApiService from './api.service';

export class PhongService extends ApiService {
  public getAllPhong() {
    return this.apiGet<PhongModel[]>('/phong');
  }
}
