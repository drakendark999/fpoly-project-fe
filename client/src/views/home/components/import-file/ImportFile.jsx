import React from 'react'
import { FormControl, Input } from '@chakra-ui/react'
import { useState } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

const ImportFile = (props) => {
  const [table, setTable] = useState({});
  
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
                console.log(table.cols)
            }
        });
    };
  return (
    <FormControl >
        <input type="file" onChange={fileHandler} style={{ padding: "10px" }} />
    </FormControl>
  )
}

export default ImportFile