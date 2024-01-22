import { AppState } from '@src/core/store/store';

export const getSelectorAllKyThi = (state: AppState) => state.kythi.listKyThi;
