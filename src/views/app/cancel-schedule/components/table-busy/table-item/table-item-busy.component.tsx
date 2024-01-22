import React from 'react';
import { Flex, Grid, Text } from '@chakra-ui/react';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import ModalGv from './modal-gv.component';
interface TableItemBusyProps {
  data_gv_busy: LichThi2Model;
  index: number;
}
type Props = TableItemBusyProps;
const TableItemBusy: React.FunctionComponent<Props> = ({
  data_gv_busy,
  index,
}) => {
  return (
    <Grid templateColumns="repeat(8, 1fr)" minH="70px" layerStyle="cancel">
      <Flex layerStyle="cancelItem">{data_gv_busy.ten_Phong}</Flex>
      <Flex layerStyle="cancelItem">{data_gv_busy.ca_Thi}</Flex>
      <Flex layerStyle="cancelItem">{data_gv_busy.ma_Mon}</Flex>
      <Flex layerStyle="cancelItem">{data_gv_busy.bo_Mon}</Flex>
      <Flex layerStyle="cancelItem">{data_gv_busy.ngay_Thi.split('T')[0]}</Flex>
      <Flex layerStyle="cancelItem">
        {data_gv_busy.GV1 ? data_gv_busy.GV1 : data_gv_busy.GV1_busy}
      </Flex>
      <Flex layerStyle="cancelItem">{data_gv_busy.GV2}</Flex>
      <Flex w="400px" px={6} py={4} align="center" justify="space-between">
        <Text>Giảng viên ca này đã bận</Text>
        <ModalGv
          key={`${index}_${data_gv_busy.id}_${data_gv_busy.status_cancel}`}
        />
      </Flex>
    </Grid>
  );
};

export default TableItemBusy;
