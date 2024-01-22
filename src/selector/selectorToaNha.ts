import { AppState } from '@src/core/store/store';

export const getSelectorAllToaNha = (state: AppState) =>
  state.toanha.listToaNha;
export const getSelectorFilterValueToaNha = (state: AppState) =>
  state.toanha.filter_toaNha;
