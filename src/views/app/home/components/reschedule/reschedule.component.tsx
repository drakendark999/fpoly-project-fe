import React, { useState, ChangeEventHandler } from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdPublishedWithChanges,
} from 'react-icons/md';
import { TimeTableModel, timeTableCaThi } from '@src/core/data/time-table';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectorAllPhong } from '@src/selector/selectorPhong';
import { PhongModel } from '@src/core/models/phong/phong.model';
import { dateToYYYYmmDDFormatter } from '@src/core/libs/formatters';
import moment from 'moment';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import { giangVienAction } from '@src/core/store/reducer/giangvien';
import { getSelectorAllCaRanh } from '@src/selector/selectorCaRanh';
import { caRanhAction } from '@src/core/store/reducer/caranh';
import { getSelectorAllGiangVien } from '@src/selector/selectorGiangVien';
import { jwtAccount } from '@src/core/libs/ultis';
import { getSelectorAccount } from '@src/selector/selectorAccount';

interface RescheduleProps {
  ngay_Thi: string;
  ca_Thi: number;
  phong_Thi: string;
  toa_nha: number;
  id_lichThi: number;
  gv1: string;
  gv2: string;
}
type Props = RescheduleProps;

const Reschedule: React.FunctionComponent<Props> = ({
  ngay_Thi,
  ca_Thi,
  phong_Thi,
  toa_nha,
  id_lichThi,
  gv1,
  gv2,
}) => {
  const distpatch = useDispatch();
  const arrayGV = useSelector(getSelectorAllGiangVien).filter(
    (e) => e.doiTuong === 'CBNV',
  );
  const { accessToken: token } = useSelector(getSelectorAccount);
  const MaGV = jwtAccount(token);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountAccepted] = useState(arrayGV.filter((e) => e.MaNV === MaGV));

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [startDate, setStartDate] = useState(
    ngay_Thi ? moment(ngay_Thi).toDate() : new Date(),
  );
  const [toanha, setValueDataToaNha] = useState<number>(toa_nha);
  const [caSelect, setCaSelect] = useState<number>(ca_Thi);
  const [phong_select, setPhongSelect] = useState<string>(phong_Thi);
  const alldataPhong = useSelector(getSelectorAllPhong);
  const all_ca_ranh_gv = useSelector(getSelectorAllCaRanh);
  const phong_filter_data_by_toa_nha: PhongModel[] = alldataPhong.filter(
    (e) => {
      return e.idToaNha === toanha;
    },
  );

  const handleChangePhong = (e: string) => {
    setValueDataToaNha(Number(e));
  };
  const handleSelectPhong: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setPhongSelect(e.target.value.trim());
  };
  const handleSelectCa: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCaSelect(Number(e.target.value));
  };
  const handleNextChangeTime = () => {
    const newDate = moment(startDate).add(1, 'days').toDate();
    setStartDate(newDate);
  };
  const handlePrevChangeTime = () => {
    const newDate = moment(startDate).subtract(1, 'days').toDate();
    setStartDate(newDate);
  };

  // Còn 1 trường hợp nữa nhưng mà nhớ thì làm không thì thôi

  const handleSubmit = () => {
    const find_ca_ranh_gv = all_ca_ranh_gv.find(
      (e) =>
        e.MaNV === gv1 &&
        e.ngay_Thi?.includes(dateToYYYYmmDDFormatter(startDate)) &&
        e.caXacNhan.includes(caSelect.toString()),
    );
    console.log('find_ca_ranh_gv', find_ca_ranh_gv?.ngay_Thi);
    console.log('ngay', startDate.toISOString());
    if (find_ca_ranh_gv) {
      if (find_ca_ranh_gv?.ngay_Thi !== startDate.toISOString()) {
        return alert('Ca này giảng viên 1 đã bận nên không thế đổi');
      } else {
        distpatch(
          lichThi2Action.moveLichThi({
            id: id_lichThi,
            ngay_Thi: dateToYYYYmmDDFormatter(startDate),
            ca_Thi: caSelect,
            ten_Phong: phong_select,
            idToa_Nha: toanha,
          }),
        );
        distpatch(
          caRanhAction.moveCaBanGiangVien({
            oldNgayThi: ngay_Thi,
            ngay_Thi: dateToYYYYmmDDFormatter(startDate),
            MaNV: gv1,
            ca: caSelect,
            caOld: ca_Thi,
          }),
        );
      }
    } else {
      if (caSelect && phong_select && startDate) {
        distpatch(
          lichThi2Action.moveLichThi({
            id: id_lichThi,
            ngay_Thi: dateToYYYYmmDDFormatter(startDate),
            ca_Thi: caSelect,
            ten_Phong: phong_select,
            idToa_Nha: toanha,
          }),
        );

        distpatch(
          caRanhAction.moveCaBanGiangVien({
            oldNgayThi: ngay_Thi,
            ngay_Thi: dateToYYYYmmDDFormatter(startDate),
            MaNV: gv1,
            ca: caSelect,
            caOld: ca_Thi,
          }),
        );
        if (gv2) {
          distpatch(lichThi2Action.deleteGv2(id_lichThi));
          distpatch(giangVienAction.decreaseCount(gv2));
          distpatch(
            caRanhAction.addCaRanhGv2({
              ngay_Thi: dateToYYYYmmDDFormatter(startDate),
              MaNV: gv2,
              ca: ca_Thi,
            }),
          );
        }
      } else {
        return alert('Hãy điền đủ thông tin ');
      }
    }
  };

  return (
    accountAccepted &&
    accountAccepted.length > 0 && (
      <Box pos="absolute" right="5px" bottom="12px" cursor="pointer">
        <Box onClick={onOpen}>
          <MdPublishedWithChanges />
        </Box>
        <Modal
          isCentered
          size="xl"
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Dời ca thi</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Table variant="report">
                <Thead />
                <Tbody>
                  <Tr>
                    <Th>Ngày</Th>
                    <Td>
                      <Flex as="div" justify="end" align="center" color="black">
                        <MdNavigateBefore
                          id="icon"
                          onClick={handlePrevChangeTime}
                        />
                        <DatePicker
                          dateFormat="dd/MM/yyyy"
                          selected={startDate}
                          onChange={(date: Date) => setStartDate(date)}
                          autoComplete="off"
                        />
                        <MdNavigateNext
                          id="icon"
                          style={{ position: 'absolute', zIndex: '999' }}
                          onClick={handleNextChangeTime}
                        />
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>Tòa nhà</Th>
                    <Td>
                      <RadioGroup
                        defaultValue={toa_nha.toString()}
                        onChange={(e: string) => handleChangePhong(e)}>
                        <HStack spacing="24px">
                          <Radio value={'1'}>Tòa F</Radio>
                          <Radio value={'2'}>Tòa P</Radio>
                          <Radio value={'3'}>Tòa T</Radio>
                        </HStack>
                      </RadioGroup>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>Ca</Th>
                    <Td>
                      <Select
                        defaultValue={ca_Thi}
                        placeholder="Chọn ca"
                        onChange={(e) => handleSelectCa(e)}>
                        {timeTableCaThi.map((e: TimeTableModel, index) => {
                          return (
                            <option
                              key={`${e.ca} ${e.time} ${index}`}
                              value={e.ca}>{`Ca ${e.ca} (${e.time})`}</option>
                          );
                        })}
                      </Select>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>Phòng</Th>
                    <Td>
                      <Select
                        defaultValue={phong_Thi}
                        placeholder="Chọn phòng"
                        onChange={(e) => handleSelectPhong(e)}>
                        {phong_filter_data_by_toa_nha.map(
                          (e: PhongModel, index) => {
                            return (
                              <option
                                key={`${e.tenLoaiPhong} ${index} `}
                                value={e.tenPhong}>
                                {e.tenPhong}
                              </option>
                            );
                          },
                        )}
                      </Select>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
                Lưu
              </Button>
              <Button onClick={onClose}>Hủy</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  );
};

export default Reschedule;
