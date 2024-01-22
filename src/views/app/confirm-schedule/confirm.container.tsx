import React, { useEffect } from 'react';
import Confirm from './confirm.component';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, persistor } from '@src/core/store/store';
import {
  onThunkGetAllNgayThi,
  onThunkGetDataLichThi2,
} from '@src/core/store/reducer/lichthi2/thunk';
import {
  onThunkGetAllDataCaRanh,
  onThunkGetCaRanhGv,
} from '@src/core/store/reducer/caranh/thunk';
import { onThunkGetAllDataGiangVien } from '@src/core/store/reducer/giangvien/thunk';
import { onThunkGetAllKyThi } from '@src/core/store/reducer/kythi/thunk';
import { onThunkGetAllTimeAllow } from '@src/core/store/reducer/timeallow/thunk';
import { getSelectorAccount } from '@src/selector/selectorAccount';
import { jwtAccount } from '@src/core/libs/ultis';

const ConfirmContainer: React.FunctionComponent = () => {
  persistor.pause();
  const dispatch = useDispatch<AppDispatch>();
  const { accessToken: token } = useSelector(getSelectorAccount);
  const gv = jwtAccount(token);
  // const gv = 'hungnq77';

  useEffect(() => {
    dispatch(onThunkGetAllNgayThi());
    dispatch(onThunkGetAllDataGiangVien());
    dispatch(onThunkGetAllDataCaRanh());
    dispatch(onThunkGetCaRanhGv(gv));
    dispatch(onThunkGetDataLichThi2());
    dispatch(onThunkGetAllKyThi());
    dispatch(onThunkGetAllTimeAllow());
  }, []);

  return <Confirm gv={gv} />;
};

export default ConfirmContainer;
