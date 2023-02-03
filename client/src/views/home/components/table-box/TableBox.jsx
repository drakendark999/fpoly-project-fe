import React from "react";
import { GridItem } from "@chakra-ui/react";

const TableBox = (props) => {
    return (
        <>
            <GridItem {...props}>room {props.count}</GridItem>
            <GridItem {...props}>data</GridItem>
            <GridItem {...props}>data</GridItem>
            <GridItem {...props}>data</GridItem>
            <GridItem {...props}>data</GridItem>
            <GridItem {...props}>data</GridItem>
            <GridItem {...props}>data</GridItem>
            <GridItem {...props}>data</GridItem>
            <GridItem {...props}>data</GridItem>
        </>
    );
};

export default TableBox;
