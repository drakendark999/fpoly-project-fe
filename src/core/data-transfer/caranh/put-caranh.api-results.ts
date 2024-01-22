import { CaRanhModel } from '@src/core/models/caranh/ca-ranh.model';
import { ApiResult } from '../api-result';

export class PutAllCaRanhResult extends ApiResult {
  data: CaRanhModel[];
  content: string;

  constructor() {
    super();
    this.data = [];
    this.content = 'Upload caranh thành công';
  }
}
