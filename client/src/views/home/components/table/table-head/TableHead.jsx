import React from "react";
import { GridItem } from "@chakra-ui/react";

const TableHead = (props) => {
    let arr = [];
    for (let i = 1; i <= 8; i++){
        arr.push(i);
    }
    return (
        <>
            {arr.map((e, index) => {
                return (
                    <GridItem {...props} key={index + 1}>
                        <strong>Ca {e}</strong>
                    </GridItem>
                )
            })}
            {/* <GridItem {...props}>Ca 1</GridItem>
            <GridItem {...props}>Ca 2</GridItem>
            <GridItem {...props}>Ca 3</GridItem>
            <GridItem {...props}>Ca 4</GridItem>
            <GridItem {...props}>Ca 5</GridItem>
            <GridItem {...props}>Ca 6</GridItem>
            <GridItem {...props}>Ca 7</GridItem>
            <GridItem {...props}>Ca 8</GridItem> */}
        </>
    );
};

export default TableHead;
