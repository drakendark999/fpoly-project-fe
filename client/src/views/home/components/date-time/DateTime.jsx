import React from 'react'
import moment from 'moment';
import { Box } from '@chakra-ui/react';

const DateTime = () => {
  return (
    <Box as='div' borderRadius='base' border='1px' borderColor='black' color='black' px={4} py={2} my={4} w={170}>
      Ngày: {moment().format('L')}
    </Box>
  );
};

export default DateTime;
