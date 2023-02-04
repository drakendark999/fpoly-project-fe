import React from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Header from "../header/Header";
import Table from "../table/Table";
import FormSelect from "../form-select/FormSelect";
import ImportFile from "../import-file/ImportFile";


const Layout = () => {
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
            <GridItem colSpan={3}>
                <Header />
                <FormSelect />
                <Table />
            </GridItem>
            <GridItem colSpan={1}>
                <Box textAlign='right'>
                    <ImportFile title="Import file"/>
                </Box>
            </GridItem>
        </Grid>
    );
};

export default Layout;
