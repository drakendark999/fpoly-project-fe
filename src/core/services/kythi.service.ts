import ApiService from './api.service';
import { KyThiModel } from '../models/kythi/kythi.model';

export class KyThiService extends ApiService {
  public getAllKyThi() {
    return this.apiGet<KyThiModel[]>('/kythi');
  }
}
