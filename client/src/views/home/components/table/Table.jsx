import React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import TableBox from "./table-box/TableBox";
import TableHead from "./table-head/TableHead";
import TableSideBar from "./table-sidebar/TableSideBar";
const Table = (props) => {
    const { arrayA } = props;
    const style = {
        border: "1px",
        borderColor: "black",
    };
    // console.log(arrayA)

    
    // ];

    return (
        <Grid templateColumns="repeat(9, 1fr)" textAlign="center">
            {/* Header table*/}

            <GridItem {...style}>
                <Flex h="100%" justifyContent="center" alignItems="center">
                    <strong>Phòng </strong>
                </Flex>
            </GridItem>
            <TableHead {...style} />
            {/* Body table */}
            <GridItem>
                <Grid height="100%" direction='column' minH='355px'templateColumns="repeat(1, 1fr)">
                    <TableSideBar {...style} count="T1101" />
                    <TableSideBar {...style} count="T1102" />
                    <TableSideBar {...style} count="T1103" />
                    <TableSideBar {...style} count="T1104" />
                </Grid>
            </GridItem>
            {/* Body content box */}
            <GridItem  colSpan={8} >
                
                <Grid templateColumns="repeat(8, 1fr)">
                    {arrayA.map((e, index) => {
                        return <TableBox datalist={e} index={index} key={e.id} {...style} />;
                    })}
                </Grid>
            </GridItem>
        </Grid>
    );
};

export default Table;
