export interface CheckResponse {
  message: string;
}

export interface AccountState {
  accessToken: string;
  loginStatus:
    | 'logged-in'
    | 'not-submit-an-email'
    | 'not-a-fpt-email'
    | 'not-found'
    | '';
}
