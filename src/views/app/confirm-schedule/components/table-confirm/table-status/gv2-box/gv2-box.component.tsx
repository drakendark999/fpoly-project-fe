import React, { useState } from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { BsSignIntersection } from 'react-icons/bs';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import { useDispatch } from 'react-redux';
import { StatusEnum } from '@src/core/libs/constants';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import moment from 'moment';
import { timeTableCaThi } from '@src/core/data/time-table';

interface GV2BoxProps {
  data: LichThi2Model | object;
  handleShiftClick: (shiftIndex: number) => void;
  index: number;
  styles: any;
}

type Props = GV2BoxProps;

const GV2Box: React.FunctionComponent<Props> = ({ data, styles }) => {
  const dispatch = useDispatch();
  const [activeBox, setActiveBox] = useState(false);
  const handleStautusGv2 = (data: LichThi2Model, status: StatusEnum) => {
    const currentTime = moment();
    const ngayThi = moment(data.ngay_Thi, 'YYYY-MM-DD');
    // Lấy thời gian bắt đầu của ca thi
    const gioThiBatDau = timeTableCaThi[data.ca_Thi - 1].time.split(' - ')[0];

    const ngayGioThi = moment(
      `${ngayThi.format('YYYY-MM-DD')} ${gioThiBatDau}`,
      'YYYY-MM-DD HH:mm',
    );

    // Kiểm tra thời gian báo bận
    const timeBusy = ngayGioThi.subtract(30, 'minutes');
    if (currentTime.isAfter(timeBusy)) {
      alert('Bạn không thể báo bận trước 30 phút so với thời gian thi.');
      return;
    }

    const id = data.id;
    const accept = confirm('Bạn bận rồi à ?');
    if (accept) {
      dispatch(lichThi2Action.statusGv2({ id, status }));
    } else {
      console.log('hủy gì mà hủy');
      return;
    }
  };

  return (
    <Box
      boxShadow={activeBox ? styles.boxShadow : ''}
      layerStyle="schedule"
      p={1}
      borderRadius="5px"
      minHeight={`105px`}
      pos="relative">
      <Box
        borderBottom={'1px solid black'}
        textAlign={'left'}
        pl={'2px'}
        w="180px">
        <Text>
          <Text as="span" fontWeight={'bold'}>
            Phòng :{' '}
          </Text>

          <Text as="span">{(data as LichThi2Model).ten_Phong}</Text>
        </Text>

        <Text>
          <Text as="span" fontWeight={'bold'}>
            Mã môn :{' '}
          </Text>
          <Text as="span">{(data as LichThi2Model).ma_Mon}</Text>
        </Text>
        <Text>
          <Text as="span" fontWeight={'bold'}>
            Mã lớp :{' '}
          </Text>
          <Text as="span">{(data as LichThi2Model).ma_Lop}</Text>
        </Text>
        <Text mb={2}>
          <Text as="span" fontWeight={'bold'}>
            GV1 :{'  '}
          </Text>
          <Text as="span">{(data as LichThi2Model).GV1}</Text>
        </Text>
      </Box>
      <Text mt={1} textAlign={'left'} pl={'2px'}>
        <Text as="span" fontWeight={'bold'}>
          GV2 :{'  '}
        </Text>
        <Text as="span" color={'red'}>
          {(data as LichThi2Model).GV2}
        </Text>
        <Text as="span"></Text>
      </Text>
      <Box pos="absolute" right="5px" bottom="2px">
        <Menu variant="custom" onClose={() => setActiveBox(false)}>
          <MenuButton onClick={() => setActiveBox(true)}>
            <BsSignIntersection />
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() =>
                handleStautusGv2(data as LichThi2Model, StatusEnum.BUSY)
              }>
              Báo bận
            </MenuItem>
          </MenuList>
        </Menu>
        {/* <Menu variant="custom">
          <MenuButton>
            <BsSignIntersection />
          </MenuButton>
          <MenuList>
            <MenuItem>Báo bận</MenuItem>
          </MenuList>
        </Menu> */}
      </Box>
    </Box>
  );
};

export default GV2Box;
