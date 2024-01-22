import { ToaNhaModel } from '@src/core/models/toanha/toanha.model';

export interface ToaNhaState {
  listToaNha: ToaNhaModel[];
  filter_toaNha: string;
}
