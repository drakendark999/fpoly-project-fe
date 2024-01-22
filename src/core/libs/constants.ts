export enum BlockEnum {
  B1 = 'B1',
  B2 = 'B2',
}

export enum KhuVucEnum {
  pmqt = 'pmqt',
  nk = 'nk',
}

export enum ToaNhaEmum {
  toa_F = 1,
  toa_P = 2,
  toa_T = 3,
}

export enum KindOfGvEnum {
  ThinhGiang = 'TG',
  ThinhGiangVT = 'TG',
  CoHuu = 'CH',
  CoHuuVT = 'CH',
  CanBoQuanLy = 'CBQL',
  CanBoQuanLyVT = 'CBQL',
  CanBoNhanVien = 'CBNV',
  CanBoNhanVienVT = 'CBNV',
}

export enum CheckAccountResponseMessages {
  OK = 'ok',
  NotFound = 'email not found',
  NotFPTEmail = 'not a fpt.edu.vn email',
  EmptyRequest = 'empty request body or empty fields in the request body.',
}

export enum LoginStatus {
  LoggedIn = 'logged-in',
  NotAnEmail = 'not-submit-an-email',
  NotFPTEmail = 'not-a-fpt-email',
  NotFound = 'not-found',
}
export enum StatusEnum {
  FREE = 'FREE',
  BUSY = 'BUSY',
  CANCEL = 'CANCEL',
  NOT_ALLOW = 'NOT_ALLOW',
  EMPTY = 'EMPTY',
}

export enum Subject {
  TA = 'TIẾNG ANH',
  DIEN = 'ĐIỆN',
  CK = 'CK',
  CB = 'CƠ BẢN',
  DLNHKS = 'DLNHKS',
  KT = 'KINH TẾ',
  TMĐT = 'TMĐT',
  TKĐH = 'TKĐH',
  UDPM = 'UDPM',
  CNTT = 'CNTT',
}

export enum Pages {
  HOME = '/',
  CONFIRM = '/confirm',
  CANCEL = '/cancel',
  REPORT = '/report',
}
