import { ApiResult } from '../api-result';

export class PutAllLichThi2Result extends ApiResult {
  content: string;

  constructor() {
    super();
    this.content = 'Upload lịch thi';
  }
}
