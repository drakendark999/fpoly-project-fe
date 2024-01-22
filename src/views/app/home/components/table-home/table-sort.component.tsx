import { GridItem, Grid } from '@chakra-ui/react';
import React from 'react';
import TableBox from './table-box.component';
import { PhongModel } from '@src/core/models/phong/phong.model';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import { handleSortLichThiBasePhong } from '@src/core/libs/handle-data';

interface TableSortModel {
  data_phong: PhongModel[];
  length_phong: number;
  data_lichthi: () => LichThi2Model[];
  caThi: number;
}
type Props = TableSortModel;

const TableSort: React.FunctionComponent<Props> = (props) => {
  const { caThi, data_lichthi, data_phong, length_phong } = props;
  // console.log('cathi', caThi);
  // console.log('data', data_lichthi());
  // console.log('dataphong', data_phong);
  const lichthi_handle_sort = handleSortLichThiBasePhong(
    length_phong,
    data_lichthi(),
    data_phong,
  );
  return (
    <GridItem>
      <Grid templateRows={`repeat(${length_phong}, 1fr)`} h="100%">
        {lichthi_handle_sort.map((e, index) => {
          return (
            <TableBox
              key={`index_${index}_lich_thi`}
              data_sort_base_cathi={data_lichthi()}
              caThi={caThi}
              data_table_box={e}
              // index={e.inDex}
            />
          );
        })}
      </Grid>
    </GridItem>
  );
};

export default TableSort;
