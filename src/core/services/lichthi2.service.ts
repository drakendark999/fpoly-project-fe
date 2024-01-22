import ApiService from './api.service';
import { LichThi2Model } from '../models/lichthi2/lichthi2.model';
import { PutAllLichThi2Result } from '../data-transfer/lichthi2/put-lichthi2.api-results';

export class LichThi2Service extends ApiService {
  public getAllLichThi2() {
    return this.apiGet<LichThi2Model[]>('/lichthi2');
  }

  public getAllLichThi2Cancel() {
    return this.apiGet<LichThi2Model[]>('/lichthi2/cancel');
  }

  public getAllLichThi2Busy() {
    return this.apiGet<LichThi2Model[]>('/lichthi2/busy');
  }

  public putAllLichThi2(data: LichThi2Model[]) {
    return this.apiPut<PutAllLichThi2Result>(
      '/lichthi2/updateLichThi2Fix',
      data,
    );
  }
}
