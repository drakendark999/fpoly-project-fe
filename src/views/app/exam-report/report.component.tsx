import React from 'react';
import Header from './components/header/header.component';
import { Box, Grid, GridItem } from '@chakra-ui/layout';
import Content from './components/content/content.component';
import QRCode from './components/qr-code/qr-code.component';

const Report: React.FunctionComponent = () => {
  return (
    <Box>
      <Header />
      <Grid
        layerStyle="report"
        templateColumns="repeat(5, 1fr)"
        w="70%"
        mx="auto"
        my={8}>
        <GridItem colSpan={3}>
          <Content />
        </GridItem>
        <GridItem colSpan={2}>
          <QRCode />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Report;
