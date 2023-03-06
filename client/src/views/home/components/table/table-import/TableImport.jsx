import {
  FormControl,
  Text,
  FormLabel,
  Input,
  Flex,
  Select,
  Button,
} from "@chakra-ui/react";
import { ExcelRenderer } from "react-excel-renderer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addLichThi2} from "../../../../../stores/slices/lichThi2Slice";
import * as XLSX from "xlsx"
import { saveAs } from 'file-saver';

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
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  }
  
  let formatRemove = (str, characterToRemove) => {
    let re = new RegExp(characterToRemove.join("|"), "g");
    return str.replaceAll(re, "");
  };

  let exportFile = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(dataExport);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });
    const file = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    saveAs(file, `Ca thi bị trùng ${kyThi}.xlsx`);
  }

  let importFile = () => {
    if(confirm('Thao tác này sẽ sẽ xóa dữ liệu lịch thi hiện tại & upload dữ liệu mới, bạn có chắc chắn?')) {
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
            status: "pending",
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

      let dataAccess = {lichThiUpload};
      dispatch(addLichThi2(dataAccess))
      
    }
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log("Kỳ thi:", kyThi);
    setDataExport([]);
    setDataImport([]);

    let file = e.target.files[0];
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
      lichThiImport = checks.reduce(
        (c, v) => (v.length === 1 ? c.concat(v) : c),
        []
      );
      setDataImport(lichThiImport);

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

      if (lichThiTrung.length) {
        lichThiTrung.unshift(dataHeaders);
        setDataExport(lichThiTrung);
      }

      alert('Vui lòng confirm thông tin ca thi mà bạn uploads!')
    });
  };

  return (
    <FormControl p={2} display="flex" flexDirection="column" rowGap="2">
      <Text as="b" display="block">
        Thêm lịch thi bằng file Excel
      </Text>
      <Flex alignItems="center" maxW="350">
        <FormLabel width="100%" margin="0">
          Chọn kì thi:
        </FormLabel>
        <Select
          maxW="250"
          variant="filled"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        >
          <option value="sp">Spring</option>
          <option value="su">Summer</option>
          <option value="fa">Fall</option>
        </Select>
        <Select
          maxW="100"
          variant="filled"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="22">2022</option>
          <option value="23">2023</option>
        </Select>
      </Flex>
      <Flex alignItems="center">
        <FormLabel>Chọn file:</FormLabel>
        <input
          type="file"
          onChange={handleSubmit}
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
          application/vnd.ms-excel"
          style={{ padding: "10px" }}
        />
      </Flex>
      {dataImport.length ? (
          <Flex alignItems="center" columnGap="2">
            <Text>
              Có tổng cộng <b color="blue">{dataImport.length}</b> ca thi hợp lệ:
            </Text>
            <Button colorScheme="blue" onClick={importFile}>Upload lên server</Button>
          </Flex>
      ) : ("")}
      {dataExport.length ? (
          <Flex alignItems="center" columnGap="2">
            <Text>
              Có tổng cộng <b color="red">{dataExport.length-1}</b> ca thi bị trùng:
            </Text>
            <Button colorScheme="red" onClick={exportFile}>Download file Excel</Button>
          </Flex>
      ) : ( "")}

    </FormControl>
  );
};

export default TableImport;
