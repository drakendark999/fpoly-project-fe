import { TimeAllowModel } from '../models/timeallow/timeallow.model';
import ApiService from './api.service';

export class TimeAllowService extends ApiService {
  public getAllTimeAllow() {
    return this.apiGet<TimeAllowModel[]>('/timeallow');
  }
}
