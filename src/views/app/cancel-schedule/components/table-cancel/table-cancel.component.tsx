import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import TableHead from '../table-head/table-head.component';
import TableBody from './table-body/table-body.component';

const TableCancle: React.FunctionComponent = () => {
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
        <TableBody />
      </GridItem>
    </Grid>
  );
};

export default TableCancle;
