import { Grid, GridItem } from '@chakra-ui/react';
import TableHead from '../table-head/table-head.component';
import TableItemBusy from './table-item/table-item-busy.component';
import { useSelector } from 'react-redux';
import { getSelectorAccount } from '@src/selector/selectorAccount';
import { getSelectorAllLichThi2Busy } from '@src/selector/selectorLichThi2';
import { jwtAccount } from '@src/core/libs/ultis';
import { allowGvBySubject } from '@src/core/data/allow-gv';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import { StatusEnum } from '@src/core/libs/constants';

const TableBusy: React.FunctionComponent = () => {
  const { accessToken } = useSelector(getSelectorAccount);
  let getAllBusyData = useSelector(getSelectorAllLichThi2Busy);
  const MaGV = jwtAccount(accessToken);

  const boMonAccept = allowGvBySubject.find((e) => e.gv === MaGV);
  if (boMonAccept) {
    getAllBusyData = getAllBusyData.filter((e) =>
      boMonAccept.cnbm.includes(e.bo_Mon),
    );
  }

  return (
    <Grid templateColumns="repeat(8, 1fr)" mx={6} mt={4}>
      <GridItem colSpan={8}>
        <TableHead />
      </GridItem>
      <GridItem
        colSpan={8}
        maxHeight="calc(100vh - 280px)"
        overflowY={'scroll'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
        {boMonAccept ? (
          <>
            {getAllBusyData &&
              getAllBusyData.map((item: LichThi2Model, index) => {
                return item.status_cancel === StatusEnum.BUSY ? (
                  <TableItemBusy
                    key={`${index.toString()}_${item.maKy_Thi}_${item.id} ${
                      item.status_cancel
                    }`}
                    data_gv_busy={item}
                    index={index}
                  />
                ) : (
                  <></>
                );
              })}
          </>
        ) : (
          <></>
        )}
      </GridItem>
    </Grid>
  );
};

export default TableBusy;
