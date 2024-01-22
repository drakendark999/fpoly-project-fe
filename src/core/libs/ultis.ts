import jwt_decode from 'jwt-decode';

interface TokenModel {
  email: string;
}

export const jwtAccount = (token: string) => {
  const account: TokenModel = token.length ? jwt_decode(token) : { email: '' };
  const MaNV = account.email.split('@')[0];
  return MaNV.toLowerCase();
};
