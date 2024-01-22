import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { AiOutlineSave } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@src/core/store/store';
import { getSelectorAllLichThi2 } from '@src/selector/selectorLichThi2';
import { getSelectorCaRanhGv } from '@src/selector/selectorCaRanh';
import { onThunkPutAllCaRanh } from '@src/core/store/reducer/caranh/thunk';
import { onThunkPutAllLichThi2 } from '@src/core/store/reducer/lichthi2/thunk';
import { socket } from '@src/core/socket/socket';
import { onThunkPutSttGiangVien } from '@src/core/store/reducer/giangvien/thunk';

interface TableConfirmProps {
  gv: string;
}
type Props = TableConfirmProps;

const ButtonSave: React.FunctionComponent<Props> = ({ gv }) => {
  const dispatch = useDispatch<AppDispatch>();
  const all_lich_thi = useSelector(getSelectorAllLichThi2);
  const all_ca_ranh_gv = useSelector(getSelectorCaRanhGv);
  const handelSaveAll = () => {
    if (confirm('Lưu lại thời gian biểu?')) {
      dispatch(onThunkPutAllCaRanh(all_ca_ranh_gv));
      dispatch(onThunkPutAllLichThi2(all_lich_thi));
      dispatch(onThunkPutSttGiangVien({ MaNV: gv }));
      socket.emit('update_ca_ranh_gv', Math.random());
    }
  };

  return (
    <Flex w="100%" justify="end" pr={6}>
      <Button
        colorScheme="teal"
        onClick={handelSaveAll}
        w="150px"
        textTransform="uppercase">
        <AiOutlineSave style={{ marginRight: '10px' }} />
        Lưu
      </Button>
    </Flex>
  );
};

export default ButtonSave;
