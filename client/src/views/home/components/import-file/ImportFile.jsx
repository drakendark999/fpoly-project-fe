import React from "react";
import { FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import { useDispatch } from "react-redux";
import importFileSlice from "./importFileSlice";

// import * as XLSX from "xlsx";

const ImportFile = (props) => {
  const dispatch = useDispatch();

  const { setTable } = props;
  // const [table, setTable] = useState({});

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    let teachers = [];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        // setTable({
        //   cols: resp.cols,
        //   rows: resp.rows,
        // });

        teachers = resp.rows.map((item, index) => {
          return { name: item[1], bomon: item[4], caRanh: "1,3,4,6" };
        });

        // Loại bỏ tên các cột A, B, C, D, E và các trường IDNV, Mã NV, Họ Và Tên, Đối tượng (loại Hơp đồng), Bộ Môn, Ghi Chú
        teachers = teachers.slice(3, teachers.length - 1);

        // Loại bỏ item vô nghĩa tên rỗng, undefined, ...
        teachers = teachers.filter(
          (teacher) =>
            teacher.name &&
            teacher.name.length &&
            teacher.bomon &&
            teacher.name.length
        );
        dispatch(importFileSlice.actions.freeTimeTeachers(teachers));
      }
    });
  };

  // const handleFileSelect = (e) => {
  //   const files = e.target.files;
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const bstr = e.target.result;
  //     const wb = XLSX.read(bstr, { type: "binary" });
  //     const wsname = wb.SheetNames[0];
  //     const ws = wb.Sheets[wsname];
  //     const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
  //     setTable(data);
  //   };
  //   reader.readAsBinaryString(files[0]);
  // };

  return (
    <FormControl>
      <input type="file" onChange={fileHandler} style={{ padding: "10px" }} />
    </FormControl>
  );
};

export default ImportFile;
