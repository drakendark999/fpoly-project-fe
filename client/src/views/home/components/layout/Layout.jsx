import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../header/Header";
import Table from "../table/Table";
import FormSelect from "../form-select/FormSelect";
import ImportFile from "../import-file/ImportFile";
import SelectList from "../select-list/SelectList";


const Layout = () => {
    return (
        <>
            <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                <GridItem colSpan={4}>
                    <Header />
                    <FormSelect />
                    <Table />
                </GridItem>
                <GridItem colSpan={1} >
                    <ImportFile />
                    <SelectList />
                </GridItem>
            </Grid> 
        </>
    );
};

export default Layout;
