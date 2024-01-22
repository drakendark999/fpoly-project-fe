import { Text } from '@chakra-ui/react';
import { allowGv } from '@src/core/data/allow-gv';
import { jwtAccount } from '@src/core/libs/ultis';
import { caRanhAction } from '@src/core/store/reducer/caranh';
import { giangVienAction } from '@src/core/store/reducer/giangvien';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import { getSelectorAccount } from '@src/selector/selectorAccount';
import React, { useMemo, useState } from 'react';
import { useDrag } from 'react-dnd';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
export interface DragBoxFixModel {
  id: number;
  gv2: string;
  ca: number;
  date: string;
}
interface Gv2BoxModel {
  lichthi_id: number;
  giangvien2: string;
  ca_thi: number;
  ngay_thi: string;
}

type Props = Gv2BoxModel;
const Gv2Box: React.FunctionComponent<Props> = (props) => {
  const { lichthi_id, giangvien2, ca_thi, ngay_thi } = props;
  const dispatch = useDispatch();
  const { accessToken: token } = useSelector(getSelectorAccount);
  const MaGV = jwtAccount(token);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountAccepted] = useState(allowGv.includes(MaGV));

  const [, dragFix] = useDrag(
    useMemo(
      () => ({
        type: 'boxFix',
        item: {
          id: lichthi_id,
          gv2: giangvien2,
          ca: ca_thi,
          date: ngay_thi,
        } as DragBoxFixModel,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }),
      [lichthi_id, giangvien2],
    ),
  );

  const handleDeleteGv2 = () => {
    dispatch(lichThi2Action.deleteGv2(lichthi_id));
    dispatch(giangVienAction.decreaseCount(giangvien2));
    dispatch(
      caRanhAction.addCaRanhGv2({
        ngay_Thi: ngay_thi.trim(),
        MaNV: giangvien2,
        ca: ca_thi,
      }),
    );
  };

  return (
    <Text
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      as="b"
      //   ref={accountAccepted ? dragFix : null}
      ref={dragFix}>
      {giangvien2}
      {giangvien2 && accountAccepted ? (
        <AiFillCloseCircle
          onClick={handleDeleteGv2}
          style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}
        />
      ) : (
        ''
      )}
    </Text>
  );
};

export default Gv2Box;
