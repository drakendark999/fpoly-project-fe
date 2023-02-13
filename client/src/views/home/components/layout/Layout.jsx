import React, { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../header/Header";
// import Table from "../table/Table";
import FormSelect from "../form-select/FormSelect";
// import ImportFile from "../import-file/ImportFile";
import SelectList from "../select-list/SelectList";
import Paginator from "../paginator/Paginator";
// import DragDrop from "../drag-drop/DragDrop";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { useSelector } from "react-redux";
import { getLichThi } from "../../../../selectors/selectors";
const Layout = () => {

    // Get data
    let arrayA = useSelector(getLichThi)
  
    
    return (
        <DndProvider backend={HTML5Backend} >
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem colSpan={4}>
                    <Header />
                    <FormSelect />
                    {/* <Table arrayA={data} /> cmt sẵn */} 
                    <Paginator arrayA={arrayA}  itemsPerPage={24} />
                </GridItem>
                <GridItem colSpan={1} borderLeft='1px' borderColor='black' ml={2} pl={2} py={2} >
                    <SelectList />
                </GridItem>
            </Grid>
        </DndProvider>
    );
};

export default Layout;
