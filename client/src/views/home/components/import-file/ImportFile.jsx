import React, { useEffect } from "react";
import { FormControl, Input, Button, Text } from "@chakra-ui/react";

import { ExcelRenderer } from "react-excel-renderer";
import { useDispatch, useSelector } from "react-redux";
import { giangVien2Selector } from "../../../../selectors/selectors";
import { addGV2 } from "../../../../stores/slices/giangVien2Slice";

const ImportFile = (props) => {
  const dispatch = useDispatch();
  let teachersFromDb = useSelector(giangVien2Selector)

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    let teachers = [];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {

        teachers = resp.rows.reduce((teachers, item) => {
          if (item.length >= 5 && item[0]) {
            teachers.push({
              idNV: item[0],
              MaNV: item[1],
              hoVaTen: item[2],
              doiTuong: item[3],
              BoMon: item[4],
              ghiChu: item[5],
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
        results = results.filter(md =>
          teachersFromDb.every(fd => fd.idNV !== md.idNV));

          // console.log(results);
        results.forEach(x => dispatch(addGV2(x)))
      }
    });
  };


  return (
    <FormControl >
      <Text as="b" display="block" textAlign="center">Thêm mới GV2 bằng file excel</Text>
      <input
        type="file"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
      application/vnd.ms-excel"
        onChange={fileHandler}
        style={{ padding: "10px" }}
      />
    </FormControl>
  );
};

export default ImportFile;
