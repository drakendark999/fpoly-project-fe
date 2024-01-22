import { PutAllCaRanhResult } from '../data-transfer/caranh/put-caranh.api-results';
import { CaRanhModel } from '../models/caranh/ca-ranh.model';
import ApiService from './api.service';

export class CaRanhService extends ApiService {
  public getAllCaRanh() {
    return this.apiGet<CaRanhModel[]>('/caranh');
  }

  public getCaRanhOfGv(gv: string) {
    return this.apiGet<CaRanhModel[]>(`/caranh/${gv}`);
  }

  public putAllCaRanh(data: CaRanhModel[]) {
    return this.apiPut<PutAllCaRanhResult>('/caranh/updateCaBan', data);
  }
}
