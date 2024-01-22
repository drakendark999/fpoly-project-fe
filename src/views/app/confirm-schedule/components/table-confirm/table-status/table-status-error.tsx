import React from 'react';
import { Button, GridItem, Flex } from '@chakra-ui/react';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { StatusEnum } from '@src/core/libs/constants';
import { useDispatch } from 'react-redux';
import { caRanhAction } from '@src/core/store/reducer/caranh';
// import {
//   StatusEnum.FREE,
//   StatusEnum.BUSY,
// } from "../../../../../../constants/status-caranh";

interface TableStatusErrorProps {
  gv: string;
  ngay: string;
}

type Props = TableStatusErrorProps;

const TableStatusError: React.FunctionComponent<Props> = ({ gv, ngay }) => {
  const dispatch = useDispatch();
  const scheduleList = Array(6).fill(`${StatusEnum.FREE}`);
  const [schedule, setSchedule] = useState(scheduleList);

  const hanldeAdd = (index: number) => {
    const newSchedule = [...schedule];

    newSchedule[index] =
      newSchedule[index] === `${StatusEnum.FREE}`
        ? `${StatusEnum.BUSY}`
        : `${StatusEnum.FREE}`;
    setSchedule(newSchedule);

    const dataNew: number[] = [];
    newSchedule.forEach((e, i) => {
      if (e == `${StatusEnum.BUSY}`) {
        dataNew.push(i + 1);
      }
    });

    const caBanAdd = dataNew.join(',');
    dispatch(
      caRanhAction.addCaban({
        MaNV: gv,
        ngay_Thi: ngay,
        caXacNhan: caBanAdd,
      }),
    );
    console.log('caMoi', caBanAdd);
  };
  return (
    <>
      {schedule.map((item, index) => {
        return (
          <GridItem
            key={index}
            textAlign="center"
            py={3}
            borderBottom="1px"
            borderColor="gray.300">
            <Flex align="center" justify="center">
              <Button
                color="#EFFCF9"
                bgColor={item === `${StatusEnum.FREE}` ? '#14b39c' : 'tomato'}
                colorScheme={item === `${StatusEnum.FREE}` ? 'green' : 'red'}
                onClick={() => hanldeAdd(index)}>
                {item}
              </Button>
            </Flex>
          </GridItem>
        );
      })}
    </>
  );
};

export default TableStatusError;
