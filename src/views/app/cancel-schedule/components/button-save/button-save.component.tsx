import React from 'react';
import { Button } from '@chakra-ui/react';
import { AiOutlineSave } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectorAllLichThi2Cancel } from '@src/selector/selectorLichThi2';
import { getSelectorAllCaRanh } from '@src/selector/selectorCaRanh';
import { AppDispatch } from '@src/core/store/store';
import { onThunkPutAllCaRanh } from '@src/core/store/reducer/caranh/thunk';
import { onThunkPutAllLichThi2 } from '@src/core/store/reducer/lichthi2/thunk';

const ButtonSave: React.FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const all_lichthi_cancel = useSelector(getSelectorAllLichThi2Cancel);
  const all_ca_ranh = useSelector(getSelectorAllCaRanh);

  const handleSave = () => {
    const accept = confirm('Xác nhận lưu ? ');
    if (!accept) {
      return;
    } else {
      dispatch(onThunkPutAllCaRanh(all_ca_ranh));
      dispatch(onThunkPutAllLichThi2(all_lichthi_cancel));
    }
  };

  return (
    <Button
      colorScheme="teal"
      onClick={handleSave}
      w="150px"
      textTransform="uppercase"
      ml={6}>
      <AiOutlineSave style={{ marginRight: '10px' }} />
      Lưu
    </Button>
  );
};

export default ButtonSave;
