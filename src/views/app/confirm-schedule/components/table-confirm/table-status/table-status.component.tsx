import { Button, Flex, GridItem } from '@chakra-ui/react';
import { StatusEnum } from '@src/core/libs/constants';
import { CaRanhModel } from '@src/core/models/caranh/ca-ranh.model';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import React, { useState } from 'react';
import GV1Box from './gv1-box/gv1-box.component';
import GV2Box from './gv2-box/gv2-box.component';
import { caRanhAction } from '@src/core/store/reducer/caranh';
import { useDispatch } from 'react-redux';

interface TableStatusProps {
  data: CaRanhModel;
  gv: string;
  datalichthi: LichThi2Model[];
}

type Props = TableStatusProps;
const TableStatus: React.FunctionComponent<Props> = ({
  data,
  datalichthi,
  gv,
}) => {
  const dispatch = useDispatch();
  const styles = {
    color: '#E6FFFD',
    boxShadow: '5px 5px 10px 0px #cdcdcd',
    border: '1px solid #a8a8a8',
  };
  const id = data.id;
  const caxacnhan = data.caXacNhan.replace(/"/g, '');
  const dataXacNhan = caxacnhan
    .split(',')
    .map(Number)
    .sort((a, b) => a - b)
    .map((e) => e - 1);

  const scheduleList = Array(6).fill(`${StatusEnum.FREE}`);
  for (let i = 0; i < scheduleList.length; i++) {
    dataXacNhan.forEach((e) => {
      if (i == e) {
        scheduleList[i] = `${StatusEnum.BUSY}`;
      }
    });
  }

  const [schedule, setSchedule] = useState(scheduleList);

  const lastSchedule = schedule.map((e, index) => {
    if (e === `${StatusEnum.BUSY}`) {
      for (let i = 0; i < datalichthi.length; i++) {
        if (datalichthi[i].ca_Thi == index + 1) {
          if (
            datalichthi[i].GV1.toLocaleLowerCase() === gv.toLocaleLowerCase()
          ) {
            return {
              gv: 'GV1',
              data: datalichthi[i],
            };
          }
          if (
            datalichthi[i].GV2.toLocaleLowerCase() === gv.toLocaleLowerCase()
          ) {
            return {
              gv: 'GV2',
              data: datalichthi[i],
            };
          }
        }
      }
      return {
        gv: e,
        data: {},
      };
    } else {
      return {
        gv: e,
        data: {},
      };
    }
  });

  const handleShiftClick = (shiftIndex: number) => {
    const newSchedule = [...schedule];
    newSchedule[shiftIndex] =
      newSchedule[shiftIndex] === `${StatusEnum.FREE}`
        ? `${StatusEnum.BUSY}`
        : `${StatusEnum.FREE}`;
    setSchedule(newSchedule);

    const dataNew = [];
    for (let i = 0; i < newSchedule.length; i++) {
      if (newSchedule[i] === `${StatusEnum.BUSY}`) {
        dataNew.push(i + 1);
      }
    }
    const caBanUpdate = dataNew.join(',');
    console.log('caMoi', caBanUpdate);

    dispatch(caRanhAction.updateCaBan({ id, caBanUpdate }));
  };

  return (
    <>
      {lastSchedule.map((item, index) => {
        return (
          <GridItem
            key={`${item.gv} giang vien ${index}`}
            w="200px"
            textAlign="center"
            borderBottom="1px"
            borderColor="gray.300"
            py={4}>
            <Flex h="100%" align="center" justify="center">
              {item.gv === 'GV1' ? (
                <GV1Box
                  data={item.data}
                  handleShiftClick={handleShiftClick}
                  index={index}
                  styles={styles}
                />
              ) : item.gv === 'GV2' ? (
                <GV2Box
                  data={item.data}
                  handleShiftClick={handleShiftClick}
                  index={index}
                  styles={styles}
                />
              ) : (
                <Button
                  color="#EFFCF9"
                  bgColor={
                    item.gv === `${StatusEnum.FREE}` ? '#14b39c' : 'tomato'
                  }
                  colorScheme={
                    item.gv === `${StatusEnum.FREE}` ? 'green' : 'red'
                  }
                  onClick={() => handleShiftClick(index)}>
                  {item.gv}
                </Button>
              )}
            </Flex>
          </GridItem>
        );
      })}
    </>
  );
};

export default TableStatus;
