import React, { useEffect, useState } from "react";
// import {Select} from  "chakra-react-select"
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Select from "react-select";
import SelectBox from "./select-box/SelectBox";
import ImportFile from "../import-file/ImportFile";
import "./selectList.scss";

import { getGiangVien2, giangVien2FilterValue, giangVien2Selector } from "../../../../selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import giangVien2Slice, { addGV2, fetchAllGV2 } from "../../../../stores/slices/giangVien2Slice";

const SelectList = () => {
  const [table, setTable] = useState({});
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchAllGV2());

  }, []);

  let allTeachers = useSelector(giangVien2Selector);
  let teachers = useSelector(getGiangVien2);
  
  const options = (allTeachers.filter((value, index, self) =>
  index === self.findIndex(t => ( t.BoMon === value.BoMon)))).map(teacher => {
    return {
      value: teacher.BoMon,
      label: teacher.BoMon
    }
  });
  

  let handleOptionsChange = (e) => {
    // console.log(e.value);
    dispatch(giangVien2Slice.actions.setFilterValue(e.value));
  }

  // const options = [
  //   { value: "cung chuyen mon", label: "Cùng chuyên môn" },
  //   { value: "cung bo mon", label: "Cùng bộ môn" },
  //   { value: "dang co mat tai truong", label: "Đang có mặt tại trường" },
  // ];

  return (
    <>
    
      <Flex direction="column">
        <ImportFile setTable={setTable} />
        <Select onChange={handleOptionsChange}
          maxMenuHeight={120}
          options={options}
          style={{ width: "100%" }}
        />
               
        <Text
          as="b"
          fontSize="md"
          textTransform="uppercase"
          textAlign="center"
          display="block"
          my={3}
        >
          Danh sách giảng viên rảnh
        </Text>
        <Text as="i" display="block" textAlign="center">Tổng cộng: {teachers.length} GV2</Text>

        <Box h={550} overflowY="auto">
          {teachers.map((e, index) => {
            return <SelectBox key={index} datalist={e} />;
          })}
        </Box>
      </Flex>
    </>
  );
};

export default SelectList;
