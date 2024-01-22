import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { AiOutlineSave } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectorAllLichThi2 } from '@src/selector/selectorLichThi2';
import { onThunkPutAllCaRanh } from '@src/core/store/reducer/caranh/thunk';
import { getSelectorAllCaRanh } from '@src/selector/selectorCaRanh';
import { AppDispatch } from '@src/core/store/store';
import { onThunkPutAllLichThi2 } from '@src/core/store/reducer/lichthi2/thunk';
import { socket } from '@src/core/socket/socket';
import { getSelectorAccount } from '@src/selector/selectorAccount';
import { jwtAccount } from '@src/core/libs/ultis';
import { allowGv } from '@src/core/data/allow-gv';

const SaveSchedule: React.FunctionComponent = () => {
  const all_lich_thi = useSelector(getSelectorAllLichThi2);
  const all_ca_ranh = useSelector(getSelectorAllCaRanh);
  const dispatch = useDispatch<AppDispatch>();

  const { accessToken: token } = useSelector(getSelectorAccount);
  const MaGV = jwtAccount(token);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountAccepted] = useState(allowGv.includes(MaGV));
  const handleSaveAll = () => {
    const accept = confirm('Bạn có muốn lưu danh sách lịch thi?');
    if (!accept) return;

    dispatch(onThunkPutAllCaRanh(all_ca_ranh));
    dispatch(onThunkPutAllLichThi2(all_lich_thi));
    socket.emit('reset_screen_lichthi', Math.random());
  };
  return (
    accountAccepted && (
      <Button colorScheme="red" onClick={handleSaveAll}>
        <AiOutlineSave style={{ marginRight: '10px' }} />
        Lưu lịch thi
      </Button>
    )
  );
};

export default SaveSchedule;
