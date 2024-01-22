import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import TableStatus from '../table-status/table-status.component';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import { NgayThiModel } from '@src/core/models/ngaythi/ngaythi.model';
import { CaRanhModel } from '@src/core/models/caranh/ca-ranh.model';
import TableStatusError from '../table-status/table-status-error';
import moment from 'moment';

interface TableContentProps {
  lichthi: LichThi2Model[];
  allngaythi: NgayThiModel[];
  data_caranh: CaRanhModel[];
  gv: string;
}
type Props = TableContentProps;
const TableContent: React.FunctionComponent<Props> = ({
  lichthi,
  allngaythi,
  data_caranh,
  gv,
}) => {
  return (
    <>
      {allngaythi.map((e, index) => {
        const dataGv = data_caranh.find((item) => item.ngay_Thi == e.ngay_Thi);

        return (
          <Grid
            templateColumns="repeat(7, 1fr)"
            key={`${e.maKy_Thi} ${index} lichxacnhan`}>
            <GridItem
              // bg="#97B1AA"
              // border="1px"
              // borderColor="gray.300"
              layerStyle="confirm"
              textAlign="center"
              fontWeight="bold">
              <Flex h="100%" justify="center" align="center">
                {/* Thứ sáu <br />
                21/07/2023 */}
                {moment(e.ngay_Thi).format('DD-MM-YYYY')}
              </Flex>
            </GridItem>

            {dataGv ? (
              <TableStatus
                data={dataGv}
                gv={gv}
                datalichthi={lichthi.filter(
                  (item) =>
                    item.ngay_Thi === e.ngay_Thi &&
                    (item.GV1.toLocaleLowerCase() === gv.toLocaleLowerCase() ||
                      item.GV2.toLocaleLowerCase() === gv.toLocaleLowerCase()),
                )}
              />
            ) : (
              <TableStatusError gv={gv} ngay={e.ngay_Thi} />
            )}
          </Grid>
        );
      })}
    </>
  );
};

export default TableContent;
