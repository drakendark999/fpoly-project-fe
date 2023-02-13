import React, { useEffect } from "react";
// import {Select} from  "chakra-react-select"
import { Box, Flex, Text } from "@chakra-ui/react";
import Select from "react-select";
import SelectBox from "./select-box/SelectBox";
import { useState } from "react";
import { useSelector } from "react-redux";
import ImportFile from "../import-file/ImportFile";
import "./selectList.scss";
import { freeTimeTeachersSelector } from "../../../../selectors/selectors";

import { useDispatch } from "react-redux";
// import importFileSlice from "../../../../stores/slices/importFileSlice";

const SelectList = () => {
    const [table, setTable] = useState({});
    const dispatch = useDispatch();
    const options = [
        { value: "cung chuyen mon", label: "Cùng chuyên môn" },
        { value: "cung bo mon", label: "Cùng bộ môn" },
        { value: "dang co mat tai truong", label: "Đang có mặt tại trường" },
        {
            value: "giang vien dang duoc phan it gio",
            label: "Giảng viên đang được phân ít giờ",
        },
    ];

    // let { rows, cols } = table;
    // let teachers = [];
    // if (rows) {
    //   teachers = rows.map((item, index) => {
    //     return { name: item[2], bomon: item[4], caRanh: "1,3,4,6" };
    //   });

    // Loại bỏ tên các cột A, B, C, D, E và các trường IDNV, Mã NV, Họ Và Tên, Đối tượng (loại Hơp đồng), Bộ Môn, Ghi Chú
    // teachers = teachers.slice(3, teachers.length - 1);

    // Loại bỏ item vô nghĩa tên rỗng, undefined, ...
    // teachers = teachers.filter(
    //   (teacher) => teacher.name && teacher.name.length
    // );
    // }

    let teachers = useSelector(freeTimeTeachersSelector);
    let [listTeacher, setListTeacher] = useState(teachers);
    useEffect(()=>{

    },[listTeacher])

    return (
        <>
            <Flex direction="column">
                <ImportFile setTable={setTable} />
                <Select maxMenuHeight={120} options={options} style={{ width: "100%" }} />
                <Text as="b" fontSize="md" textTransform="uppercase" textAlign="center" display="block" my={3}>
                    Danh sách giảng viên rảnh
                </Text>

                <Box h={600} overflowY="auto">
                    {teachers.map((e, index) => {
                    return <SelectBox key={index} datalist={e} />;
                })}
                </Box>
            </Flex>
        </>
    );
};

export default SelectList;
