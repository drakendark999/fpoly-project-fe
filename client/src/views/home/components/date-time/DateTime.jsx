import React, { useState } from 'react'
import { Box } from '@chakra-ui/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './dataTime.scss';


const DateTime = () =>
{
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Box as='div' borderRadius='base' border='1px' borderColor='black' color='black' px={4} py={2} my={4} w={170}>
      Ngày: <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
    </Box>
  );
};

export default DateTime;
