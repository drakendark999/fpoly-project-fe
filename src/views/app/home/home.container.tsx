import React, { useEffect, useState } from 'react';
import Home from './home.component';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/core/store/store';
import {
  onThunkGetAllDotThi,
  onThunkGetAllNgayThi,
  onThunkGetDataLichThi2,
} from '@src/core/store/reducer/lichthi2/thunk';
import { onThunkGetAllDataGiangVien } from '@src/core/store/reducer/giangvien/thunk';
import { onThunkGetAllPhong } from '@src/core/store/reducer/phong/thunk';
import { onThunkGetAllToaNha } from '@src/core/store/reducer/toanha/thunk';
import { onThunkGetAllBoMon } from '@src/core/store/reducer/bomon/thunk';
import { onThunkGetAllDataCaRanh } from '@src/core/store/reducer/caranh/thunk';
import { onThunkGetAllKyThi } from '@src/core/store/reducer/kythi/thunk';
import { socket } from '@src/core/socket/socket';

const HomeContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [resetScreen, setResetScreen] = useState<number>(0);

  useEffect(() => {
    dispatch(onThunkGetAllNgayThi());
    dispatch(onThunkGetAllPhong());
    dispatch(onThunkGetAllToaNha());
    dispatch(onThunkGetAllBoMon());
    dispatch(onThunkGetAllDotThi());
    dispatch(onThunkGetAllKyThi());
    // socket.on('reset_screen_data_lichthi', (data) => {
    //   setResetScreen(data);
    // });
  }, []);

  useEffect(() => {
    dispatch(onThunkGetDataLichThi2());
    dispatch(onThunkGetAllDataCaRanh());
    dispatch(onThunkGetAllDataGiangVien());
    socket.on('reset_screen_data_lichthi', (data) => {
      setResetScreen(data);
    });
  }, [resetScreen]);

  return <Home />;
};

export default HomeContainer;
