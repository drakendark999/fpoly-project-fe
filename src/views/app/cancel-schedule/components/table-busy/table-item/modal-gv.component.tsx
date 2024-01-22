import React from 'react';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { giangVienAction } from '@src/core/store/reducer/giangvien';
import {
  getAllGiangVienFilter_BaseBM,
  getSelectorAllGiangVien,
} from '@src/selector/selectorGiangVien';

const ModalGv: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dataAllGiangVien = useSelector(getSelectorAllGiangVien);
  const dataGv = useSelector(getAllGiangVienFilter_BaseBM);
  const optionsBoMon = [
    { value: '', label: 'Tất cả' },
    ...dataAllGiangVien
      .filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.BoMon === value.BoMon),
      )
      .map((teacher) => {
        return {
          value: teacher.BoMon,
          label: teacher.BoMon,
        };
      }),
  ];

  return (
    <Box cursor="pointer" key={Math.random()}>
      <Button colorScheme="green" onClick={onOpen}>
        Đổi giảng viên
      </Button>
      <Modal
        key={`cancel_${Math.random()}`}
        isCentered
        size="xl"
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thay đổi giảng viên 1</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="report">
              <Thead />
              <Tbody>
                <Tr>
                  <Th>Bộ môn</Th>
                  <Td>
                    <Select
                      placeholder="Chọn bộ môn"
                      onChange={(e) => {
                        console.log('result', e.target.value);
                        dispatch(giangVienAction.setFIter(e.target.value));
                      }}>
                      {optionsBoMon.map((e) => {
                        return (
                          <option key={`${e.label} ${e.value}`} value={e.value}>
                            {e.label}
                          </option>
                        );
                      })}
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Th>Giảng viên</Th>
                  <Td>
                    <Select placeholder="Chọn giảng viên">
                      {dataGv.map((e) => {
                        return (
                          <option value="longnv36" color="red">
                            <Flex justify="space-between" w="100%" color="red">
                              <Text color="red">{e.MaNV}</Text>
                              <Text>
                                Đã xếp: <strong>{e.count}</strong> ca
                              </Text>
                            </Flex>
                          </option>
                        );
                      })}
                    </Select>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3}>
              Lưu
            </Button>
            <Button onClick={onClose}>Hủy</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ModalGv;
