import React, { useEffect, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Header from './components/header/header.component';
import TableConfirm from './components/table-confirm/table-confirm.component';
import ButtonSave from './components/button-save/button-save.component';
import { getSelectorAllKyThi } from '@src/selector/selectorKyThi';
import { useSelector } from 'react-redux';
import { getSelectorAllTimeAllow } from '@src/selector/selectorTimeAllow';
import moment from 'moment';
interface ConfirmProps {
  gv: string;
}

type Props = ConfirmProps;

const Confirm: React.FunctionComponent<Props> = ({ gv }) => {
  const ky_thi = useSelector(getSelectorAllKyThi);
  const timeAllowArray = useSelector(getSelectorAllTimeAllow);
  const timeAllow = timeAllowArray.filter(
    (e) => e.maKy_Thi === ky_thi[0]?.maKyThi && e.role === 'confirm',
  );
  // console.log('timeAllow', timeAllow);
  const timeEnd = timeAllow[0]?.timeEnd;
  const timeStart = timeAllow[0]?.timeStart;

  const [remainingTime, setRemainingTime] = useState('');
  const [isTimeExpired, setIsTimeExpired] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime: any = moment();
      const endTime: any = moment(timeEnd, 'YYYY-MM-DD HH:mm:ss').add(
        7,
        'hours',
      );
      const startTime: any = moment(timeStart, 'YYYY-MM-DD HH:mm:ss').add(
        7,
        'hours',
      );

      // Check if timeEnd and timeStart exist
      if (!timeEnd || !timeStart) {
        clearInterval(intervalId);
        return;
      }

      //Tính time còn lại
      const duration1: any = moment.duration(endTime - currentTime);
      // console.log('duration1', duration1);

      const days = duration1.days();
      const hours = duration1.hours();
      const minutes = duration1.minutes();
      const seconds = duration1.seconds();

      //Check time start?
      const duration2: any = moment.duration(startTime - currentTime);
      // console.log('duration2', duration2);

      const days2 = duration2.days();
      const hours2 = duration2.hours();
      const minutes2 = duration2.minutes();
      const seconds2 = duration2.seconds();

      if (duration2 > 0) {
        setRemainingTime(
          // eslint-disable-next-line no-useless-escape
          `Chưa đến thời gian xác nhận, còn lại: ${days2} Ngày - ${hours2}h${minutes2}\'${seconds2}s `,
        );
      } else {
        setRemainingTime(
          duration1 < 0
            ? 'Hết thời gian xác nhận'
            : // eslint-disable-next-line no-useless-escape
              `Thời gian xác nhận còn lại: ${days} Ngày - ${hours}h${minutes}\'${seconds}s `,
        );
      }
      if (duration1 < 0) {
        setIsTimeExpired(true);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeEnd, timeStart]);

  const startTime: any = moment(timeStart, 'YYYY-MM-DD HH:mm:ss').add(
    7,
    'hours',
  );
  const currentTime: any = moment();
  const duration2: any = moment.duration(startTime - currentTime);
  // console.log('dur', duration2);

  return (
    <Box>
      <Header gv={gv} />
      <TableConfirm gv={gv} />
      <Flex justify="space-between" ml={10} align="center">
        <Text color="red" fontSize="20px" fontWeight="bold" w={700}>
          {isTimeExpired ? 'Hết thời gian xác nhận!!!' : remainingTime}
        </Text>
        {(!timeEnd || !timeStart || duration2 <= 0) && !isTimeExpired && (
          <ButtonSave gv={gv} />
        )}
      </Flex>
    </Box>
  );
};

export default Confirm;
