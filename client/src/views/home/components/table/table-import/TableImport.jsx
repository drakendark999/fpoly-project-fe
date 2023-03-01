import {
  FormControl,
  Text,
  FormLabel,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { ExcelRenderer } from "react-excel-renderer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLichThi2 } from "../../../../../selectors/selectors";
import lichThi2Slice from "../../../../../stores/slices/lichThi2Slice";
import { addLichThi2, getAllLichThi2 } from "../../../../../stores/slices/lichThi2Slice";

const TableImport = () => {
  let [kyThi, setKyThi] = useState("fa22");
  const dispatch = useDispatch();



  const handleSubmit = (e) => {
    console.log("Kỳ thi:", kyThi);
    let file = e.target.files[0];
    let lichThi = [];
    let lichThiTrung = [];
    let lichThiImport = [];

    let formatRemove = (str, characterToRemove) => {
        let re = new RegExp(characterToRemove.join('|'), 'g');
        return str.replaceAll(re, '');
    }

    ExcelRenderer(file, (err, resp) => {
      if (err) {
        console.log(err);
      }
    //   Delete headers đầu
      let rowsTable = resp.rows.slice(1);

      lichThi = rowsTable.reduce((array, item) => {
        let arrCS = ['_T', '_F', '_P', '_2'];
        // Lọc rows trống và rows không có phòng thi
        // Xử lý chuỗi để add db
        if (item.length > 0 && item[11] && item[16] && item[1]) {
            let x = {
                maKy_Thi: (item[22] && item[22].includes('Block')) ? `${kyThi}_B${item[22].slice(-1)}` : kyThi,
                idKhu_Vuc: (item[16].includes('CS3')) ? 'pmqt' : 'nk',
                idToa_Nha: (item[11].includes('(Nha ')) ? (item[11].slice(item[11].indexOf('(Nha '))).charAt(5) : null,
                ten_Phong: (item[11].includes('(')) ? item[11].slice(0, item[11].indexOf('(')).trim() : item[11],
                ma_Lop: formatRemove(item[6], arrCS),
                bo_Mon: item[4],
                ma_Mon: item[1],
                dot_Thi: (item[15] && item[15].includes('Đợt')) ? parseInt(item[15].slice(-1)) : item[15],
                ngay_Thi: new Date(Date.UTC(0, 0, item[7] - 1)).toISOString().slice(0,10),
                ca_Thi: item[8],
                so_SV: item[10],
                GV1: item[12],
                GV2: item[13],
                status: 'pending',
            
            }
            x.maLich_Thi = x.maKy_Thi + '_' + x.idKhu_Vuc + '_' + x.idToa_Nha + '_' + x.ten_Phong + 
            '_' + x.ma_Lop + '_' + x.dot_Thi + '_' + x.ngay_Thi + '_' + x.ca_Thi;
              
            array.push(x);
        }

        return array;
      }, []);

      console.log('Tổng cộng có: ', lichThi.length, "ca thi");
    //   Check trùng phòng, trùng ngày, trùng ca

    let checks = Object.values(lichThi.reduce((c, v) => {
        let k = v.ten_Phong + '-' + v.ca_Thi + '-' + v.ngay_Thi;
        c[k] = c[k] || [];
        c[k].push(v);
        return c;
      }, {}))

    lichThiTrung = checks.reduce((c, v) => v.length > 1 ? c.concat(v) : c, []);
    lichThiImport = checks.reduce((c, v) => v.length === 1 ? c.concat(v) : c, []);
      
      console.log("Các ca thi bị trùng, cần kiểm tra lại:", lichThiTrung);
      console.log("Ca thi hợp lệ: ", lichThiImport);
      let dataImport = { lichThiImport }
      dispatch(addLichThi2(dataImport));
    });

  };

  return (
    <FormControl p={2}>
      <Text as="b" display="block">
        Thêm lịch thi bằng file Excel
      </Text>
      <Flex alignItems="center">
        <FormLabel>Nhập kỳ thi (VD: fa22 = Fall 2022)</FormLabel>
        <Input
          type="text"
          maxLength="4"
          maxWidth={150}
          disabled
          value={kyThi}
          onChange={(e) => setKyThi(e.target.value)}
        />
      </Flex>
      <Flex alignItems="center">
        <FormLabel>Chọn file:</FormLabel>
        <input
          type="file"
          onChange={handleSubmit}
          disabled
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
          application/vnd.ms-excel"
          style={{ padding: "10px" }}
        />
      </Flex>
    </FormControl>
  );
};

export default TableImport;
