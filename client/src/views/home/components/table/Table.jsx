import React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import TableBox from "./table-box/TableBox";
import TableHead from "./table-head/TableHead";
import TableSideBar from "./table-sidebar/TableSideBar";
const Table = () => {
    const style = {
        border: "1px",
        borderColor: "black",
        
    };

    const height = {
        height: "120px",
    };
    const arrayA = [
        { id: 1, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
        { id: 2, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "refuse" },
        { id: 3, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "confirm" },
        { id: 4, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
        { id: 5, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
        { id: 6, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "confirm" },
        { id: 7, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
        { id: 8, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "refuse" },
        { id: 9, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "confirm" },
        { id: 10, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
        { id: 11, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
        { id: 12, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "confirm" },
        { id: 13, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
        { id: 14, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "confirm" },
        { id: 15, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
        { id: 16, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
        { id: 17, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "confirm" },
        { id: 18, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    ];

    return (
        <Grid templateColumns="repeat(9, 1fr)" textAlign="center">
            {/* Header table*/}

            <GridItem {...style}>
                <strong>Phòng</strong>
            </GridItem>
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
                
                    <Grid height='100%'>
                        <TableSideBar {...style}  count="1" />
                        <TableSideBar {...style} count="2" />
                        <TableSideBar {...style}  count="2" />
                    </Grid>
               
            </GridItem>
            {/* Body content box */}
            <GridItem colSpan={8}>
                <Grid templateColumns="repeat(8, 1fr)">
                    {arrayA.map((e, index) => {
                        return <TableBox  datalist={e} key={index} {...style} />;
                    })}
                </Grid>
            </GridItem>
        </Grid>
    );
};

export default Table;
