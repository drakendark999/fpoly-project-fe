import { ToaNhaModel } from '../models/toanha/toanha.model';
import ApiService from './api.service';

export class ToaNhaService extends ApiService {
  public getAllToaNha() {
    return this.apiGet<ToaNhaModel[]>('/toanha');
  }
}
