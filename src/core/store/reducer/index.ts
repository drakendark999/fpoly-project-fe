import { combineReducers } from '@reduxjs/toolkit';
import { lichThi2Reudcer } from './lichthi2';
import { giangVienReducer } from './giangvien';
import { phongReduce } from './phong';
import { toaNhaReducer } from './toanha';
import { boMonReducer } from './bomon';
import { caRanhReducer } from './caranh';
import { accountReducer } from './account';
import { kyThiReducer } from './kythi';
import { timeAllowReducer } from './timeallow';

const rootReducer = combineReducers({
  lichthi2: lichThi2Reudcer,
  giangvien: giangVienReducer,
  phong: phongReduce,
  toanha: toaNhaReducer,
  bomon: boMonReducer,
  caranh: caRanhReducer,
  account: accountReducer,
  kythi: kyThiReducer,
  timeallow: timeAllowReducer,
});

export default rootReducer;
