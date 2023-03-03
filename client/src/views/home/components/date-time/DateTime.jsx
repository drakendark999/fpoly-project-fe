import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './dataTime.scss';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment'
import lichThi2Slice from '../../../../stores/slices/lichThi2Slice';
import dragAndDrogSlice from '../../../../stores/slices/dragAndDrogSlice';

const DateTime = () =>
{
  const [startDate, setStartDate] = useState(new Date());
  // const [startDate, setStartDate] = useState('2022-12-18');
  const dispatch = useDispatch();
  




  const handleChangeTime = (date) => {
 
    setStartDate(date)
   
    let newDate = moment(date).format('YYYY-MM-DD')

    dispatch(dragAndDrogSlice.actions.setDate(newDate))
    dispatch(lichThi2Slice.actions.setDate(newDate))
  }


  return (
    <Box as='div' borderRadius='base' border='1px' borderColor='black' color='black' px={4} py={2} my={4} w={170}>
      Ngày: <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={handleChangeTime} />
    </Box>
  );
};

export default DateTime;
