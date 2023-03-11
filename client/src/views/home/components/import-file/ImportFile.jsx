import React, { useState, useRef } from "react";
import { Box, Button, Flex, FormControl, Text } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

import { ExcelRenderer } from "react-excel-renderer";
import { useDispatch, useSelector } from "react-redux";
import { giangVien2Selector } from "../../../../selectors/selectors";
import { addGV2 } from "../../../../stores/slices/giangVien2Slice";

const ImportFile = (props) => {
  const dispatch = useDispatch();
  let teachersFromDb = useSelector(giangVien2Selector);

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    let teachers = [];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        teachers = resp.rows.reduce((teachers, item) => {
          if (item.length >= 5 && item[0] && item.length <= 6) {
            teachers.push({
              idNV: item[0],
              MaNV: item[1],
              hoVaTen: item[2],
              doiTuong: item[3],
              BoMon: item[4],
              ghiChu: item[5],
              count: 0,
            });
          }

          return teachers;
        }, []);

        //Delete dòng đầu tiêu đề;
        teachers = teachers.slice(1);
        let results = [];

        // Check duplicates idNV trong file excel, nếu duplicate thì chỉ lấy cái đầu
        teachers.forEach((d) => {
          let found = false;
          results.forEach((r) => {
            if (!found && r.idNV === d.idNV) found = true;
          });
          if (!found) results.push(d);
        });

        // Lọc rows chưa có idNV trong db để thêm
        results = results.filter((md) =>
          teachersFromDb.every((fd) => fd.idNV !== md.idNV)
        );

        // console.log(results);
        results.forEach((x) => dispatch(addGV2(x)));
      }
    });
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const shortenFileName = (fileName) => {
    if (fileName.length < 30) {
      return fileName;
    }

    const start = fileName.slice(0, 15);
    const end = fileName.slice(-15);
    return `${start}...${end}`;
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log(selectedFile);
    let fileObj = selectedFile;
    let teachers = [];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        teachers = resp.rows.reduce((teachers, item) => {
          if (item.length >= 5 && item[0] && item.length <= 6) {
            teachers.push({
              idNV: item[0],
              MaNV: item[1],
              hoVaTen: item[2],
              doiTuong: item[3],
              BoMon: item[4],
              ghiChu: item[5],
              count: 0,
            });
          }

          return teachers;
        }, []);

        //Delete dòng đầu tiêu đề;
        teachers = teachers.slice(1);
        let results = [];

        // Check duplicates idNV trong file excel, nếu duplicate thì chỉ lấy cái đầu
        teachers.forEach((d) => {
          let found = false;
          results.forEach((r) => {
            if (!found && r.idNV === d.idNV) found = true;
          });
          if (!found) results.push(d);
        });

        // Lọc rows chưa có idNV trong db để thêm
        results = results.filter((md) =>
          teachersFromDb.every((fd) => fd.idNV !== md.idNV)
        );

        // console.log(results);
        results.forEach((x) => dispatch(addGV2(x)));

        // alert('tải lên danh sách GV2 thành công!')
        setSelectedFile(null);
        fileInputRef.current.value = null;
      }
    });
  };

  const cancelUpload = () => {
    setSelectedFile(null);
    fileInputRef.current.value = null;
  };

  return (
    // <FormControl>
    //   <Text as="b" display="block" textAlign="center">
    //     Thêm mới GV2 bằng file excel
    //   </Text>
    //   <input
    //     type="file"
    //     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
    //   application/vnd.ms-excel"
    //     onChange={fileHandler}
    //     style={{ padding: "10px" }}
    //   />
    // </FormControl>

    <Box
      as="fieldset"
      border="1px solid black"
      borderRadius="md"
      textAlign="center"
      mb="20px"
      ml={3}
      pb={2}
    >
      <Text as="legend" p={2} mt={2} fontWeight={500} textAlign="center">
        Thêm mới GV2 bằng file excel
      </Text>
      <Box>
        <input
          hidden
          type="file"
          id="fileInput"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          // onChange={fileHandler}
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
        {!selectedFile ? (
          <Button
            size="sm"
            w="90%"
            border="2px dashed gray"
            borderColor="gray"
            borderRadius="md"
            cursor="pointer"
            // fontWeight="nomal"
            mb={2}
            type="button"
            bg="transparent"
            onClick={() => fileInputRef.current.click()}
          >
            Chọn File
          </Button>
        ) : (
          <div>
            <Flex
              mx={5}
              mb={1}
              p="10px 5px 5px"
              justify="space-between"
              boxShadow="sm"
              rounded="md"
              bg="white"
            >
              <Text mt={-2} mx={1}>
                {shortenFileName(selectedFile.name)}
              </Text>
              <IoClose
                onClick={cancelUpload}
                color="red"
                cursor="pointer"
                style={{ position: "relative", bottom: "3px" }}
              />
            </Flex>
            <Flex px={3} justify="space-around">
              <Button
                size="sm"
                colorScheme="yellow"
                bg="#FADA9D"
                cursor="pointer"
                // fontWeight="nomal"
                my={2}
                px={5}
                type="button"
                onClick={() => fileInputRef.current.click()}
              >
                Thay đổi file
              </Button>
              <Button
                size="sm"
                colorScheme="cyan"
                bg="#95BDFF"
                cursor="pointer"
                // fontWeight="nomal"
                my={2}
                px={5}
                type="button"
                onClick={handleUpload}
              >
                Tải lên
              </Button>
            </Flex>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default ImportFile;
