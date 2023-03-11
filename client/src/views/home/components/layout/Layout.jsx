import React, { useEffect, useState } from "react";
import { Grid, GridItem, Button, Box, Flex } from "@chakra-ui/react";
import Header from "../header/Header";
// import Table from "../table/Table";
import FormSelect from "../form-select/FormSelect";
// import ImportFile from "../import-file/ImportFile";
import SelectList from "../select-list/SelectList";
import Paginator from "../paginator/Paginator";
import Table from "../table/Table";
// import DragDrop from "../drag-drop/DragDrop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import ButtonSave from "../button-save-database/ButtonSave";
import TableImport from "../table/table-import/TableImport";
import DateTime from '../date-time/DateTime';

const Layout = () =>
{
    return (
        <DndProvider backend={HTML5Backend}>
            <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={1}>
                <GridItem colSpan={3}>
                    <Header />
                    <Flex justify='space-between'>
                        <TableImport />
                        <DateTime/>
                    </Flex>
                    <FormSelect />
                    <Table />
                    <Flex justify='end'>
                        <ButtonSave />
                    </Flex>
                </GridItem>
                <GridItem
                    colSpan={1}
                    borderLeft="1px"
                    borderColor="black"
                    ml={2}
                    pl={2}
                    py={2}
                >
                    <SelectList />
                </GridItem>
            </Grid>
        </DndProvider>
    );
};

export default Layout;
