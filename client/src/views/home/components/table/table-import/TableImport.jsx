import React, { useState, useRef } from "react";
import {
  Text,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";
import { IoClose, IoDownloadOutline, IoCloudUploadOutline } from "react-icons/io5";
import { ExcelRenderer } from "react-excel-renderer";
import { useDispatch } from "react-redux";
import { addLichThi2 } from "../../../../../stores/slices/lichThi2Slice";
import * as XLSX from "xlsx";


const TableImport = () => {
  let [season, setSeason] = useState("fa");
  let [year, setYear] = useState("22");
  let [kyThi, setKyThi] = useState(season + year);
  let [dataExport, setDataExport] = useState([]);
  let [dataImport, setDataImport] = useState([]);

  let s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  };

  let formatRemove = (str, characterToRemove) => {
    let re = new RegExp(characterToRemove.join("|"), "g");
    return str.replaceAll(re, "");
  };

  let exportFile = () => {
    let dataHeaders = [
      "STT",
      "Mã môn",
      "Tên môn đầy đủ",
      "Bộ môn",
      "Hình thức thi",
      "Kỳ thi / Kiểm tra",
      "CLASS",
      "Ngày thi",
      "Ca",
      "Giờ thi",
      "Số lượng SV",
      "Phòng thi 1",
      "GV chấm thi 1",
      "Giảng viên chấm 2",
      "Hạn nộp điểm quá trình",
      "Đợt thi",
      "Cơ sở",
      "Ghi chú",
      "Hạn nộp điểm cuối môn",
      "IT hỗ trợ	",
      "Trực server",
      "Giám thị hành lang",
      "Block",
    ];
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(dataExport);
    // Thêm header
    XLSX.utils.sheet_add_aoa(ws, [dataHeaders], { origin: "A1" });
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    // Download file
    XLSX.writeFile(wb, `Danh sách ca thi bị trùng ${kyThi}.xlsx`);
  };

  let importFile = () => {
    if (
      confirm(
        "Thao tác này sẽ sẽ xóa dữ liệu lịch thi hiện tại & upload dữ liệu mới, bạn có chắc chắn?"
      )
    ) {
      let lichThiUpload = dataImport.reduce((array, item) => {
        let arrCS = ["_T", "_F", "_P", "_2"];
        // Lọc rows trống và rows không có phòng thi
        // Xử lý chuỗi để add db
        if (item.length > 0 && item[11] && item[16] && item[1]) {
          let x = {
            maKy_Thi:
              item[22] && item[22].includes("Block")
                ? `${kyThi}_B${item[22].slice(-1)}`
                : kyThi,
            idKhu_Vuc: item[16].includes("CS3") ? "pmqt" : "nk",
            idToa_Nha: item[11].includes("(Nha ")
              ? item[11].slice(item[11].indexOf("(Nha ")).charAt(5)
              : null,
            ten_Phong: item[11].includes("(")
              ? item[11].slice(0, item[11].indexOf("(")).trim()
              : item[11],
            ma_Lop: formatRemove(item[6], arrCS),
            bo_Mon: item[3],
            ma_Mon: item[1],
            dot_Thi:
              item[15] && item[15].includes("Đợt")
                ? parseInt(item[15].slice(-1))
                : item[15],
            ngay_Thi: new Date(Date.UTC(0, 0, item[7] - 1))
              .toISOString()
              .slice(0, 10),
            ca_Thi: item[8],
            so_SV: item[10],
            GV1: item[12],
            GV2: item[13],
            status: "",
          };
          x.maLich_Thi =
            x.maKy_Thi +
            "_" +
            x.idKhu_Vuc +
            "_" +
            x.idToa_Nha +
            "_" +
            x.ten_Phong +
            "_" +
            x.ma_Lop +
            "_" +
            x.dot_Thi +
            "_" +
            x.ngay_Thi +
            "_" +
            x.ca_Thi;

          array.push(x);
        }

        return array;
      }, []);

      let dataAccess = { lichThiUpload };
      dispatch(addLichThi2(dataAccess));
    }
  };

  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const shortenFileName = (fileName) => {
    if (fileName.length < 50) {
      return fileName;
    }

    const start = fileName.slice(0, 25);
    const end = fileName.slice(-25);
    return `${start}...${end}`;
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // console.log(selectedFile);
    console.log("Kỳ thi:", kyThi);
    setDataExport([]);
    setDataImport([]);

    let file = selectedFile;
    let lichThi = [];
    let lichThiTrung = [];
    let lichThiImport = [];

    ExcelRenderer(file, (err, resp) => {
      if (err) {
        console.log(err);
      }

      lichThi = resp.rows.reduce((array, item) => {
        if (item.length === 23) {
          array.push(item);
        }
        return array;
      }, []);

      lichThi = lichThi.slice(1);

      // Check trùng ngày, trùng ca, trùng giờ
      // [7]: Ngày thi, [8]: Ca, [11]: Phòng
      let checks = Object.values(
        lichThi.reduce((c, v) => {
          let k = v[7] + "-" + v[8] + "-" + v[11].trim();
          c[k] = c[k] || [];
          c[k].push(v);
          return c;
        }, {})
      );

      lichThiTrung = checks.reduce(
        (c, v) => (v.length > 1 ? c.concat(v) : c),
        []
      );
        // Định dạng ngày khi xuất excel
      lichThiTrung.forEach((item) => {
        if(typeof(item[7]) === 'number')   
          item[7] = new Date(Date.UTC(0, 0, item[7] - 1)).toLocaleDateString("vi-VN")
      });

      // console.log(lichThiTrung);
      lichThiImport = checks.reduce(
        (c, v) => (v.length === 1 ? c.concat(v) : c),
        []
      );

      setDataImport(lichThiImport);
      setDataExport(lichThiTrung);
    });
  };

  const cancelUpload = () => {
    if (dataImport.length > 0) {
      let result = confirm("Bạn muốn thay đổi file?");
      if (result) {
        dataImport.length = 0;
        setSelectedFile(null);
        fileInputRef.current.value = null;
      }
    } else {
      setSelectedFile(null);
      fileInputRef.current.value = null;
    }
  };

  return (
    <Box
      as="fieldset"
      border="1px solid black"
      borderRadius="md"
      textAlign="center"
      mb="20px"
      pb={2}
      minW="460px"
    >
      <Text as="legend" p={2} mt={2} fontWeight={500} textAlign="center">
        Thêm mới lịch thi bằng file Excel
      </Text>
      <Box>
        <input
          ref={fileInputRef}
          onChange={handleFileSelect}
          hidden
          type="file"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          style={{ padding: "10px" }}
        />

        {dataImport.length ? (
          <Box>
            <Flex
              mx={5}
              mb={1}
              p="18px 8px 8px"
              justify="space-between"
              boxShadow="sm"
              rounded="md"
              bg="white"
            >
              <Text mt={-2} mx={2}>
                {shortenFileName(selectedFile.name)}
              </Text>
              <IoClose
                onClick={cancelUpload}
                color="red"
                cursor="pointer"
                style={{ position: "relative", bottom: "3px" }}
              />
            </Flex>
            <Flex alignItems="center" columnGap="2" mx={5} my={2}>
              <Text>
                Có tổng cộng <b color="blue">{dataImport.length}</b> ca thi hợp
                lệ:
              </Text>
              <Button colorScheme="messenger"  onClick={importFile}>
              <IoCloudUploadOutline fontSize="20px" style={{marginRight: '4px'}} /> Tải lên server
              </Button>
            </Flex>
            <Flex alignItems="center" columnGap="2" mx={5} my={2}>
              <Text>
                Có tổng cộng <b color="red">{dataExport.length - 1}</b> ca thi
                bị trùng:
              </Text>
              <Button background="#E53E3E" color="white" onClick={exportFile}>
                 <IoDownloadOutline fontSize="20px" style={{marginRight: '4px'}} /> Tải file Excel
              </Button>
            </Flex>
          </Box>
        ) : !selectedFile ? (
          <Button
            size="sm"
            w="90%"
            border="2px dashed gray"
            borderColor="gray"
            borderRadius="md"
            cursor="pointer"
            // fontWeight="nomal"
            mb={2}
            // mx={4}
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
              <Text mt={-2} mx={2}>
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

export default TableImport;
