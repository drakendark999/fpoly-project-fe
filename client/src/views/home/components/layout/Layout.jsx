import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../header/Header";
import Table from "../table/Table";
import FormSelect from "../form-select/FormSelect";
import { useState } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

const Layout = () => {
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
        <Flex flexDirection="column">
            <Header />
            <FormSelect />
            <Table />
            {console.log(table)}
            <input type="file" onChange={fileHandler} style={{ padding: "10px" }} />
        </Flex>
    );
};

export default Layout;
