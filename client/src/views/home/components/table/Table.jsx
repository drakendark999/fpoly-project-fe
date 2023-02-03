import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import TableBox from "./table-box/TableBox";
import TableHead from "./table-head/TableHead";
import TableSideBar from "./table-sidebar/TableSideBar";
const Table = () => {
    const style = {
        border: "1px",
        borderColor: "black",
        p: "8",
    };
    const arrayA = [
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
        { id: 1, name: "dwadwahdwakj" },
    ];

    return (
        <Grid templateColumns="repeat(9, 1fr)" textAlign="center">
            {/* Header table*/}

            <GridItem {...style}>Phòng</GridItem>
            <TableHead {...style} />
            {/* Body table */}
            <GridItem>
                {/* {arrayA.map((e, index) => {
                    return (
                        <>
                            <TableSideBar {...style} count={index+1} />
                        </>
                    );
                })} */}
                
                <TableSideBar {...style} count="1" />
                <TableSideBar {...style} count="2" />
            </GridItem>
            {/* Body content box */}
            <GridItem colSpan={8}>
                <Grid templateColumns="repeat(8, 1fr)">
                    {arrayA.map((e, index) => {
                       return (
                       <TableBox key={index} {...style} />
                       )
                    })}
                </Grid>
            </GridItem>
        </Grid>
    );
};

export default Table;
