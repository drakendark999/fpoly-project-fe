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

    // const arrayA = [
    //     { id: 1, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 2, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "refuse" },
    //     { id: 3, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 4, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 5, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 6, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 7, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 8, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "refuse" },
    //     { id: 9, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 10, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 11, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 12, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 13, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 14, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 15, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 16, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 17, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 18, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 19, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 20, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 21, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "refuse" },
    //     { id: 22, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 23, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 24, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 25, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 26, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 27, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 28, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 29, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 30, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 31, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "refuse" },
    //     { id: 32, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "refuse" },
    //     { id: 33, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 34, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 35, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 36, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 37, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 38, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 39, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 40, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 41, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "refuse" },
    //     { id: 42, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "refuse" },
    //     { id: 43, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "", stt: "" },
    //     { id: 44, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 45, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 46, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "waiting" },
    //     { id: 47, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 48, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
    //     { id: 49, mon: "IT18207", lop: "WEB1013", gv1: "locth5", gv2: "longnv36", stt: "confirm" },
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
                    <TableSideBar {...style} count="1" />
                    <TableSideBar {...style} count="2" />
                    <TableSideBar {...style} count="2" />
                    
                </Grid>
            </GridItem>
            {/* Body content box */}
            <GridItem autoRows colSpan={8} >
                
                <Grid templateColumns="repeat(8, 1fr)">
                    {arrayA.map((e, index) => {
                        return <TableBox datalist={e} key={index} {...style} />;
                    })}
                </Grid>
            </GridItem>
        </Grid>
    );
};

export default Table;
