import React, { useState } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import Header from './components/header/header.component';
import TableHome from './components/table-home/table-home.component';
import FilterHome from './components/filter-home/filter-home.component';
import RightSideBar from './components/right-side-bar/right-side-bar.component';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from 'react-redux';
import { getSelectorAccount } from '@src/selector/selectorAccount';
import { jwtAccount } from '@src/core/libs/ultis';
import { allowGv } from '@src/core/data/allow-gv';

const Home: React.FunctionComponent = () => {
  const { accessToken: token } = useSelector(getSelectorAccount);
  const MaGV = jwtAccount(token);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountAccepted] = useState(allowGv.includes(MaGV));
  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        <Header />
        <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={1}>
          <GridItem colSpan={accountAccepted ? 4 : 5} pos="relative" pb={2}>
            <FilterHome />
            <TableHome />
          </GridItem>
          {accountAccepted && (
            <GridItem
              colSpan={1}
              borderLeft="1px"
              borderColor="black"
              pl={4}
              py={2}>
              <RightSideBar />
            </GridItem>
          )}
        </Grid>
      </Box>
    </DndProvider>
  );
};

export default Home;
