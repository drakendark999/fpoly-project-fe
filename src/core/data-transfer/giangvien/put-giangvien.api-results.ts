import { ApiResult } from '../api-result';

export class PutSttGiangVienResult extends ApiResult {
  content: string;

  constructor() {
    super();
    this.content = 'Upload stt giang vien';
  }
}
