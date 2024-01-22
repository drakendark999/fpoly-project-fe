import { AppState } from '@src/core/store/store';

export const getSelectorAllTimeAllow = (state: AppState) =>
  state.timeallow.listTimeAllow;
