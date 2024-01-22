import React from 'react';
import { Flex, Grid, Text } from '@chakra-ui/react';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import { StatusEnum } from '@src/core/libs/constants';
import AlerToDo from '@src/core/components/alert-to-do.component';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import { useDispatch } from 'react-redux';
import { caRanhAction } from '@src/core/store/reducer/caranh';

interface TableItemProps {
  data_gv_cancel: LichThi2Model;
}
type Props = TableItemProps;
const TableItemCancel: React.FunctionComponent<Props> = ({
  data_gv_cancel,
}) => {
  const dispatch = useDispatch();

  const handleDeleteCancel = () => {
    dispatch(lichThi2Action.deleteCancelLichThi({ id: data_gv_cancel.id }));
    alert('Nhớ lưu lại nha !');
  };

  const handleAcceptAlert = () => {
    dispatch(
      caRanhAction.acceptCancelCaRanh({
        ngay_Thi: data_gv_cancel.ngay_Thi,
        MaNV: data_gv_cancel.GV1,
        caXacNhan: data_gv_cancel.ca_Thi,
      }),
    );
    dispatch(lichThi2Action.acceptToCancelCaThi({ id: data_gv_cancel.id }));
    // console.log('Đã xác nhận', data.id);
    console.log('Đã xác nhận', data_gv_cancel.id);
  };

  const handleRecovery = () => {
    // dispatch(
    //   cacCaRanhSlice.actions.acceptCancelCaRanh({
    //     ngay_Thi: data.ngay_Thi,
    //     MaNV: data.GV1,
    //     caXacNhan: data.ca_Thi,
    //   })
    // );
    dispatch(lichThi2Action.recoverCathi({ id: data_gv_cancel.id }));
    dispatch(
      caRanhAction.recoveyCaRanhCancel({
        ngay_Thi: data_gv_cancel.ngay_Thi,
        MaNV: data_gv_cancel.ghiChu,
        caXacNhan: data_gv_cancel.ca_Thi,
      }),
    );
    console.log('Hồi phục ca thi', data_gv_cancel);
  };

  return (
    <Grid templateColumns="repeat(8, 1fr)" minH="70px" layerStyle="cancel">
      <Flex layerStyle="cancelItem">{data_gv_cancel.ten_Phong}</Flex>
      <Flex layerStyle="cancelItem">{data_gv_cancel.ca_Thi}</Flex>
      <Flex layerStyle="cancelItem">{data_gv_cancel.ma_Mon}</Flex>
      <Flex layerStyle="cancelItem">{data_gv_cancel.bo_Mon}</Flex>
      <Flex layerStyle="cancelItem">
        {data_gv_cancel.ngay_Thi.split('T')[0]}
      </Flex>
      <Flex layerStyle="cancelItem">
        {data_gv_cancel.GV1 || data_gv_cancel.ghiChu}
      </Flex>
      <Flex layerStyle="cancelItem"> {data_gv_cancel.GV2}</Flex>
      <Flex w="400px" px={6} py={4}>
        <Flex w="100%" justify="space-between" align="center">
          <Text>
            {data_gv_cancel.status_cancel !== StatusEnum.CANCEL
              ? 'Báo hủy'
              : 'Đã xác nhận'}
          </Text>

          {data_gv_cancel.status_cancel !== StatusEnum.CANCEL && (
            <AlerToDo
              title={' xóa hủy ca'}
              headerAlert={'Thông báo không cho giảng viên hủy ca thi'}
              bodyAlert={
                'Bạn có chắc xóa bỏ yêu cầu hủy ca thi của giảng viên ?'
              }
              handleAccept={handleDeleteCancel}
              colorButton="purple"
              colorAlert="purple"
            />
          )}

          {data_gv_cancel.status_cancel !== StatusEnum.CANCEL ? (
            <AlerToDo
              title={'Xác nhận'}
              headerAlert={'Thông báo hủy ca thi'}
              bodyAlert={'Bạn có chắc hủy ca thi ?'}
              handleAccept={handleAcceptAlert}
              colorButton="red"
              colorAlert="red"
            />
          ) : (
            <AlerToDo
              title={'Hồi Phục'}
              headerAlert={'Thông báo hồi phục ca thi'}
              bodyAlert={'Bạn có chắc hồi phục ca thi này ?'}
              handleAccept={handleRecovery}
              colorButton="green"
              colorAlert="green"
            />
          )}
        </Flex>
      </Flex>
    </Grid>
  );
};

export default TableItemCancel;
