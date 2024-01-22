import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/layout';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './dataTime.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSelectorAllNgayThi,
  getSelectorFilterDate_LichThi2,
} from '@src/selector/selectorLichThi2';
import moment from 'moment';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import { caRanhAction } from '@src/core/store/reducer/caranh';

const DateTime: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const allNgayThi = useSelector(getSelectorAllNgayThi);
  const firstDay = allNgayThi[0]?.ngay_Thi;
  const ngayThi = useSelector(getSelectorFilterDate_LichThi2);

  useEffect(() => {
    if (firstDay && !ngayThi) {
      const dataNewDay = moment(firstDay).toDate();
      const newDate = moment(dataNewDay).format('YYYY-MM-DD');

      dispatch(lichThi2Action.addDateToFIlterDate(newDate));
      dispatch(caRanhAction.addDateToFIlterDate(newDate));
    } else {
      //   console.log("Có ngày thi");
      //   console.log("Có ngày thi", moment(ngaythi).toDate());
    }
  }, [ngayThi, firstDay]);

  const handleChangeDate = (date: Date) => {
    handleDispatchDate(date);
  };

  const handleDispatchDate = (date: Date) => {
    const newDate = moment(date).format('YYYY-MM-DD');
    dispatch(lichThi2Action.addDateToFIlterDate(newDate));
    dispatch(caRanhAction.addDateToFIlterDate(newDate));
  };

  const handlePreChangeTime = () => {
    if (ngayThi) {
      const date = moment(ngayThi).toDate();
      const newDate = moment(date).subtract(1, 'days').toDate();
      //   console.log("prev", newDate);
      handleDispatchDate(newDate);
    }
  };

  const handleNextChangeTime = () => {
    if (ngayThi) {
      const date = moment(ngayThi).toDate();
      const newDate = moment(date).add(1, 'days').toDate();
      //   console.log("next", newDate);
      handleDispatchDate(newDate);
    }
  };

  return (
    <Flex as="div" justify="end" align="center" color="black" my={4}>
      <MdNavigateBefore id="icon" onClick={handlePreChangeTime} />
      <DatePicker
        selected={ngayThi ? moment(ngayThi).toDate() : new Date()}
        onChange={handleChangeDate}
        dateFormat="dd/MM/yyyy"
        autoComplete="off"
      />
      <MdNavigateNext
        id="icon"
        style={{ position: 'absolute', zIndex: '999' }}
        onClick={handleNextChangeTime}
      />
    </Flex>
  );
};

export default DateTime;
