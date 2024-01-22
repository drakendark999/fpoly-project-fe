import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { timeTableCaThi, TimeTableModel } from '@src/core/data/time-table';
import TableHead from './table-head.component';
import TableSideBarShowRoom from './table-side-bar.component';
// import TableSort from './table-sort.component';
import {
  handleDataPhongBaseLichThi,
  handleSortLichThiBaseCaThi,
} from '@src/core/libs/handle-data';
import { useSelector } from 'react-redux';
import { getDataPhongHandleFilter } from '@src/selector/selectorPhong';
import { getDataLichThi2HandleFIlter } from '@src/selector/selectorLichThi2';
import TableSort from './table-sort.component';

const TableHome: React.FunctionComponent = () => {
  const all_data_phong_handle_filter = useSelector(getDataPhongHandleFilter);
  const all_data_lichthi2_handle_filter = useSelector(
    getDataLichThi2HandleFIlter,
  );

  const handle_data_phong = handleDataPhongBaseLichThi(
    all_data_phong_handle_filter,
    all_data_lichthi2_handle_filter,
  );

  return (
    <Grid templateColumns="repeat(7, 1fr)" textAlign="center">
      {/* Header table*/}
      <GridItem w={'100% '} colSpan={7} zIndex={2}>
        <Grid templateColumns="repeat(7, 1fr)">
          <Flex
            justifyContent="center"
            alignItems="center"
            py={2}
            layerStyle="schedule">
            <strong>Phòng</strong>
          </Flex>
          {timeTableCaThi.map((item: TimeTableModel) => {
            return <TableHead key={item.time} timetable={item} />;
          })}
        </Grid>
      </GridItem>
      {/* Body table */}
      <GridItem
        textAlign={'center'}
        colSpan={7}
        maxHeight="calc(100vh - 280px)"
        overflowY={'scroll'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
        <Grid templateColumns={'repeat(7,1fr)'}>
          {/* Danh sách phòng */}
          <GridItem>
            <Grid height="100%" dir="column" templateColumns="repeat(1, 1fr)">
              {handle_data_phong.map((e, index) => {
                return (
                  <TableSideBarShowRoom
                    key={`${e.tenPhong}_${e.id}_${index}`}
                    ten_phong={e.tenPhong}
                  />
                );
              })}
            </Grid>
          </GridItem>
          {/* Body content box */}
          <GridItem colSpan={6}>
            {/* t01 */}

            {/* t02 */}
            <Grid templateColumns="repeat(6, 1fr)" h="100%">
              {timeTableCaThi.map((e, index) => {
                return (
                  <TableSort
                    key={`${e.ca}_${e.time}_${index}`}
                    data_phong={handle_data_phong}
                    length_phong={handle_data_phong.length}
                    data_lichthi={() =>
                      handleSortLichThiBaseCaThi(
                        e.ca,
                        all_data_lichthi2_handle_filter,
                      )
                    }
                    caThi={e.ca}
                  />
                );
              })}

              {/* <TableSort />
              <TableSort />
              <TableSort /> */}
              {/* <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={1}
          />
          <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={2}
          />
          <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={3}
          />
          <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={4}
          />
          <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={5}
          />
          <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={6}
          /> */}
            </Grid>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default TableHome;
