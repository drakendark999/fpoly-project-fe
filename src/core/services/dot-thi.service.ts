import { DotThiModel } from '../models/dot-thi/dot-thi.component';
import ApiService from './api.service';

export class DotThiService extends ApiService {
  public getAllDotThi() {
    return this.apiGet<DotThiModel[]>('/lichthi2/dotthi');
  }
}
