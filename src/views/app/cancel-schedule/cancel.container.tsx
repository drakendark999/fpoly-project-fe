import React, { useEffect } from 'react';
import Cancel from './cancel.component';
import { useDispatch } from 'react-redux';
import {
  onThunkGetDataLichThi2Busy,
  onThunkGetDataLichThi2Cancel,
} from '@src/core/store/reducer/lichthi2/thunk';
import { AppDispatch } from '@src/core/store/store';
import { onThunkGetAllDataCaRanh } from '@src/core/store/reducer/caranh/thunk';
import { onThunkGetAllDataGiangVien } from '@src/core/store/reducer/giangvien/thunk';

const CancelContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(onThunkGetAllDataCaRanh());
    dispatch(onThunkGetDataLichThi2Cancel());
    dispatch(onThunkGetDataLichThi2Busy());
    dispatch(onThunkGetAllDataGiangVien());
  }, []);

  return <Cancel />;
};

export default CancelContainer;
