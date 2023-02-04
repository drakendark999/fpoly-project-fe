import React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

const TableSideBar = (props) => {
    return (
        <GridItem>
            <Flex {...props} h='100%' justifyContent='center' alignItems="center">
                <strong>Phòng {props.count}</strong>
            </Flex>
        </GridItem>
    );
};

export default TableSideBar;
