import ApiService from './api.service';
import { BoMonModel } from '../models/bomon/bomon.model';

export class BoMonService extends ApiService {
  public getAllBoMon() {
    return this.apiGet<BoMonModel[]>('/bomon');
  }
}
