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
  const dispatch = useDispatch();
  // const setDateLocal = () => {
  //   let date = new Date();
  //   let newDate = moment(date).format('YYYY-MM-DD')
  //   localStorage.setItem("date", newDate)
  // }

  // useEffect(() => {
  //   let date = new Date();
  //   let newDate = moment(date).format('YYYY-MM-DD')
  //   localStorage.setItem("date", newDate)
  // },[])



  // console.log(startDate)
  const handleChangeTime = (date) => {
    // console.log(date)
    setStartDate(date)
    // console.log(startDate)    
    let newDate = moment(date).format('YYYY-MM-DD')
    // localStorage.setItem("date", newDate)
    // console.log(newDate)
    // dispatch(filterWithDate(newDate))
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
