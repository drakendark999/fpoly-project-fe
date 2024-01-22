import { Flex } from '@chakra-ui/react';
import React from 'react';
import ToaNha from './toa-nha/toa-nha.component';
import DotThi from './dot-thi/dot-thi.component';
import BoMon from './bo-mon/bo-mon.component';

const FilterHome: React.FunctionComponent = () => {
  return (
    <Flex justify="space-between" mb={3}>
      <ToaNha title="Tòa nhà" />
      <DotThi />
      <BoMon />
    </Flex>
  );
};

export default FilterHome;
