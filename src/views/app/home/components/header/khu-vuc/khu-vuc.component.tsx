import { Flex, Text } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import React, { ChangeEventHandler } from 'react';
import { useDispatch } from 'react-redux';

const KhuVuc: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const data = {
    hocKy: [
      { name: 'Spring 2022', id: 'spring-2022' },
      { name: 'Summer 2022', id: 'summer-2022' },
      { name: 'Fall 2022', id: 'fall-2022' },
    ],
    maKyThi: 'FA22',
    coSo: 'Hồ Chí Minh',
    khuVuc: [
      { name: 'Phần mềm Quang Trung', id: 'pmqt' },
      { name: 'Nguyễn Kiệm', id: 'nk' },
      { name: 'Google Meet', id: 'ggm' },
    ],
  };

  const handleChangeKhuVuc: ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(lichThi2Action.addKhuVuctoFilterKhuVuc(e.target.value));
  };

  return (
    <Flex layerStyle="filter" pr="0">
      <Text textTransform="capitalize" minW="80px" fontSize="md">
        Khu vực:
      </Text>
      <Select
        variant="unstyled"
        size="md"
        onChange={(e) => handleChangeKhuVuc(e)}>
        {data.khuVuc.map((item, index) => {
          return (
            <option
              key={`${index}_${item.id}`}
              style={{ backgroundColor: '#1fc198bd', margin: '5px 10px' }}
              value={item.id}>
              {item.name}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};

export default KhuVuc;
