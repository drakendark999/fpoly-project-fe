import React, { useEffect, useState, useRef } from "react";
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

    const options = allTeachers
        .filter((value, index, self) => index === self.findIndex((t) => t.BoMon === value.BoMon))
        .map((teacher) => {
            return {
                value: teacher.BoMon,
                label: teacher.BoMon,
            };
        });

    let handleOptionsChange = (e) => {
        // console.log(e.value);
        dispatch(giangVien2Slice.actions.setFilterValue(e.value));
    };

    const [offset, setOffset] = useState(0);
    const selectRoll = useRef();
    useEffect(() => {
        const onScroll = () => {
            setOffset(window.pageYOffset);
        };
        // clean up code
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // console.log(offset);

    const [boxStyle, setBoxStyle] = useState({
    position: "unset",
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    // console.log(scrollTop);
    if (scrollTop >= 260) {
      setBoxStyle({
        position: "fixed",
        top: "0",
      });
    } else {
      setBoxStyle({
        position: "unset",
      });
    }
  };
    return (
        <>
            <Flex direction="column" >
                <ImportFile setTable={setTable} />
                <Select onChange={handleOptionsChange} maxMenuHeight={120} options={options} style={{ width: "100%" }} />

                <Text as="b" fontSize="md" textTransform="uppercase" textAlign="center" display="block" my={3}>
                    Danh sách giảng viên rảnh
                </Text>
                <Text as="i" display="block" textAlign="center">
                    Tổng cộng: {teachers.length} GV2
                </Text>

                <Box h={750} overflowY="auto" className="scroll" style={boxStyle}>
                    {teachers.map((e, index) => {
                        return <SelectBox key={index} datalist={e} />;
                    })}
                </Box>
            </Flex>
        </>
    );
};

export default SelectList;
