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
import moment from 'moment';
import { StatusEnum } from '@src/core/libs/constants';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import { caRanhAction } from '@src/core/store/reducer/caranh';

interface GV1BoxProps {
  data: LichThi2Model | object;
  handleShiftClick: (shiftIndex: number) => void;
  index: number;
  styles: any;
}

type Props = GV1BoxProps;

const GV1Box: React.FunctionComponent<Props> = ({ data, styles }) => {
  const dispatch = useDispatch();
  const [activeBox, setActiveBox] = useState(false);
  const handleStatusGv1 = (data: LichThi2Model, status: StatusEnum) => {
    const id = data.id;

    // console.log("data", data.ngay_Thi);
    // Chặn hủy ngày thi (sau 3 ngày)
    const currentTime = moment();
    const dataNgayThi = data.ngay_Thi;
    const ngayThi = moment(dataNgayThi, 'YYYY-MM-DD HH:mm:ss');
    // const duration = moment.duration(ngayThi - currentTime);
    const duration = moment.duration(ngayThi.diff(currentTime));

    const days = duration.days();
    // const hours = duration.hours();
    // const minutes = duration.minutes();
    // const seconds = duration.seconds();

    if (status === StatusEnum.CANCEL) {
      console.log('day', days);
      // if (days < 1) {
      //   alert(
      //     'Không thể hủy ca thi, phải báo hủy ca thi trước ngày thi 1 ngày',
      //   );
      //   return;
      // }

      const accept = confirm('Bạn có chắc muốn hủy ca thi này không ?');
      if (accept) {
        const GV2 = data.GV2;

        dispatch(lichThi2Action.statusGv1({ id, status }));
        if (GV2) {
          const ngay_Thi = data.ngay_Thi;
          const ca_Thi = data.ca_Thi;
          dispatch(caRanhAction.cancelCaRanhGV2({ GV2, ngay_Thi, ca_Thi }));
        }
        // handleShiftClick(index);
      } else {
        console.log('Hủy gì mà hủy , tiền không đó :v');
        return;
      }
    } else {
      const accept = confirm('Bạn bận rồi à ? Buồn dị !');
      const GV1 = data.GV1;

      if (accept) {
        dispatch(lichThi2Action.statusGv1({ id, status, GV1 }));
      }
    }
  };

  return (
    <Box
      boxShadow={activeBox ? styles.boxShadow : ''}
      backgroundColor={activeBox ? styles.color : ''}
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
          <Text as="span" color={'red'}>
            {(data as LichThi2Model).GV1}
          </Text>
          {(data as LichThi2Model).GV1 &&
          (data as LichThi2Model).status_GV1 === StatusEnum.CANCEL ? (
            <Text as="span" color={'black'}>
              {' (Đang chờ xét duyệt hủy)'}
            </Text>
          ) : (
            <></>
          )}
        </Text>
      </Box>
      <Text mt={1} textAlign={'left'} pl={'2px'}>
        <Text as="span" fontWeight={'bold'}>
          GV2 :{'  '}
        </Text>
        <Text as="span">{(data as LichThi2Model).GV2}</Text>
        <Text as="span"></Text>
      </Text>
      <Box pos="absolute" right="5px" bottom="35px">
        <Menu variant="custom" onClose={() => setActiveBox(false)}>
          <MenuButton onClick={() => setActiveBox(true)}>
            <BsSignIntersection />
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() =>
                handleStatusGv1(data as LichThi2Model, StatusEnum.CANCEL)
              }>
              Hủy lớp
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleStatusGv1(data as LichThi2Model, StatusEnum.BUSY)
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
            <MenuItem>Hủy lớp</MenuItem>
            <MenuItem>Báo bận</MenuItem>
          </MenuList>
        </Menu> */}
      </Box>
    </Box>
  );
};

export default GV1Box;
