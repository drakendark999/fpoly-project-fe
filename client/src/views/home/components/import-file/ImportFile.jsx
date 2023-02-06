import React from "react";
import { FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
// import * as XLSX from "xlsx";

const ImportFile = (props) => {
    const {  setTable } = props;
    // const [table, setTable] = useState({});

    const fileHandler = (event) => {
        let fileObj = event.target.files[0];

        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                setTable({
                    cols: resp.cols,
                    rows: resp.rows,
                });
               
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
