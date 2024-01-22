import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Select from 'react-select';
import FacultyMember from './faculty-member/faculty-member.component';
import GiangVien from './giangvien/giangvien.component';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllGiangVienFiter,
  getSelectorAllGiangVien,
} from '@src/selector/selectorGiangVien';
import { giangVienAction } from '@src/core/store/reducer/giangvien';
import { handleDataCaRanhBaseMaNV } from '@src/core/libs/handle-data';
import {
  getDataCaRanhHandleFIlter,
  getSelectorFilterDate_CaRanh,
} from '@src/selector/selectorCaRanh';

const RightSideBar: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const dataAllGiangVien = useSelector(getSelectorAllGiangVien);
  const dataAllGiangVienFilter = useSelector(getAllGiangVienFiter);
  const dataDateFilter = useSelector(getSelectorFilterDate_CaRanh);
  const dataCaRanhFIlter = useSelector(getDataCaRanhHandleFIlter);
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
    <>
      <Flex direction="column">
        <Select
          placeholder="Chọn bộ môn"
          onChange={(e) => {
            dispatch(giangVienAction.setFIter(e?.value ? e.value : ''));
          }}
          options={optionsBoMon}
          //   style={{ width: '100%' }}
        />

        <FacultyMember />

        <Text
          as="b"
          fontSize="md"
          textTransform="uppercase"
          textAlign="center"
          display="block"
          my={2}>
          Danh sách giảng viên ({dataAllGiangVienFilter.length})
        </Text>

        <Box
          maxHeight="calc(100vh - 215px)"
          pr={1}
          overflowY={'scroll'}
          css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
          {dataAllGiangVienFilter.map((e, index) => {
            return (
              <GiangVien
                key={`${e.MaNV}_${index}`}
                infor_giangvien={e}
                date={dataDateFilter}
                status_ca_gv={handleDataCaRanhBaseMaNV(
                  dataCaRanhFIlter,
                  e.MaNV ? e.MaNV : '',
                )}
              />
            );
          })}

          {/* {teachers.map((e, index) => {
            return (
              <SelectBox
                key={index}
                datalist={e}
                ide={index}
                date={date}
                caBan={caBan}
              />
            );
          })} */}
        </Box>
      </Flex>
    </>
  );
};

export default RightSideBar;
