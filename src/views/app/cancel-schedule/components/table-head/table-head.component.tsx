import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

const TableHead: React.FunctionComponent = () => {
  return (
    <Grid templateColumns="repeat(8, 1fr)">
      <GridItem layerStyle="confirm">Phòng</GridItem>
      <GridItem layerStyle="confirm">Ca Thi</GridItem>
      <GridItem layerStyle="confirm">Mã môn</GridItem>
      <GridItem layerStyle="confirm">Bộ môn</GridItem>
      <GridItem layerStyle="confirm">Ngày thi</GridItem>
      <GridItem layerStyle="confirm">Giảng viên 1</GridItem>
      <GridItem layerStyle="confirm">Giảng viên 2</GridItem>
      <GridItem layerStyle="confirm" w="400px">
        Trạng thái
      </GridItem>
    </Grid>
  );
};

export default TableHead;
