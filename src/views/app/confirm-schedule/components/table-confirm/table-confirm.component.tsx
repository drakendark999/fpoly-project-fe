import React from 'react';
import { Flex, Grid, GridItem, Radio, RadioGroup } from '@chakra-ui/react';
import { timeTableCaThi, TimeTableModel } from '@src/core/data/time-table';
import TableHead from './table-head/table-head.component';
import TableContent from './table-content/table-content.component';
import { BlockEnum } from '@src/core/libs/constants';
import { useDispatch, useSelector } from 'react-redux';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import {
  getSelectorFIlterBlock_LichThi2,
  getSelectorLichThiByBlock,
  getSelectorNgayThiByBlock,
} from '@src/selector/selectorLichThi2';
import { getSelectorCaRanhGv } from '@src/selector/selectorCaRanh';

interface TableConfirmProps {
  gv: string;
}
type Props = TableConfirmProps;

const TableConfirm: React.FunctionComponent<Props> = ({ gv }) => {
  const dispatch = useDispatch();
  const handleChangeBlock = (e: BlockEnum) => {
    dispatch(lichThi2Action.setBlock(e));
  };

  const lich_thi_base_block = useSelector(getSelectorLichThiByBlock);
  const all_ngay_thi_base_block = useSelector(getSelectorNgayThiByBlock);
  const list_ca_ranh_gv = useSelector(getSelectorCaRanhGv);
  const block_select = useSelector(getSelectorFIlterBlock_LichThi2);

  const list_ca_ranh_gv_sort = [...list_ca_ranh_gv].sort((a, b) =>
    a.ngay_Thi > b.ngay_Thi ? 1 : -1,
  );

  return (
    <Grid templateColumns="repeat(7, 1fr)" mx={6} mt={4} mb={6}>
      <GridItem colSpan={7} zIndex={2}>
        <Grid templateColumns="repeat(7, 1fr)">
          <GridItem bg="white">
            <Flex align="center" w="100%" h="100%">
              <RadioGroup
                defaultValue={block_select}
                w="100%"
                onChange={handleChangeBlock}>
                <Flex justify="space-evenly">
                  <Radio colorScheme="red" value={BlockEnum.B1}>
                    Block 1
                  </Radio>
                  <Radio colorScheme="green" value={BlockEnum.B2}>
                    Block 2
                  </Radio>
                </Flex>
              </RadioGroup>
            </Flex>
          </GridItem>
          {timeTableCaThi.map((item: TimeTableModel) => {
            return <TableHead key={item.time} timetable={item} />;
          })}
        </Grid>
      </GridItem>
      <GridItem
        colSpan={7}
        maxHeight="calc(100vh - 235px)"
        overflowY={'scroll'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
        <TableContent
          lichthi={lich_thi_base_block}
          allngaythi={all_ngay_thi_base_block}
          data_caranh={list_ca_ranh_gv_sort}
          gv={gv}
        />
      </GridItem>
    </Grid>
  );
};

export default TableConfirm;
