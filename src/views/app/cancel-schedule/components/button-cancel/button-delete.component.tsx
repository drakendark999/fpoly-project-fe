import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectorAllLichThi2Cancel } from '@src/selector/selectorLichThi2';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import AlerToDo from '@src/core/components/alert-to-do.component';

const ButtonCancel: React.FunctionComponent = () => {
  const all_data_cancel = useSelector(getSelectorAllLichThi2Cancel);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    all_data_cancel.forEach((item) => {
      dispatch(lichThi2Action.deleteCancelLichThi({ id: item.id }));
    });
    alert('Nhớ lưu lại nha');
  };

  return (
    <AlerToDo
      title={'Hủy toàn bộ'}
      headerAlert={'Thông báo hủy toàn bộ ca hủy của giảng viên'}
      bodyAlert={'Bạn có chắc hủy toàn bộ ca hủy của giảng viên ?'}
      handleAccept={handleDeleteAll}
      colorButton="purple"
      colorAlert="purple"
    />
  );
};

export default ButtonCancel;
