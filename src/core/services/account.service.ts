import { CheckResponse } from '../store/reducer/account/types';
import ApiService from './api.service';

export class AccountService extends ApiService {
  public checkEmail(email: string) {
    return this.apiPost<CheckResponse>(
      '/gv2/email-checking',
      JSON.stringify({ emailToCheck: email }),
    );
  }
}
