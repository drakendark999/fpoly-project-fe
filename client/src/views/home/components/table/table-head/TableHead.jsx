import React from "react";
import { GridItem, Text } from "@chakra-ui/react";

const TableHead = (props) => {
    return (
        <>
            <GridItem py={2} {...props}>
                <Text as='b'>Ca 1</Text>
                <Text fontSize='sm' display='block'>(7:30 - 9:30)</Text>
                </GridItem>
            <GridItem py={2} {...props}>
                <Text as='b'>Ca 2</Text>
                <Text fontSize='sm' display='block'>(9:45 - 11:45)</Text>
                </GridItem>
            <GridItem py={2} {...props}>
                <Text as='b'>Ca 3</Text>
                <Text fontSize='sm' display='block'>(13:00 - 15:00)</Text>
                </GridItem>
            <GridItem py={2} {...props}>
                <Text as='b'>Ca 4</Text>
                <Text fontSize='sm' display='block'>(15:15 - 17:15)</Text>
                </GridItem>
            <GridItem py={2} {...props}>
                <Text as='b'>Ca 5</Text>
                <Text fontSize='sm' display='block'>(17:30 - 19:30)</Text>
                </GridItem>
            <GridItem py={2} {...props}>
                <Text as='b'>Ca 6</Text>
                <Text fontSize='sm' display='block'>(19:30 - 21:30)</Text>
                </GridItem>
            <GridItem py={2} {...props}>
                <Text as='b'>Ca 7</Text>
                <Text fontSize='sm' display='block'>(online)</Text>
                </GridItem>
            <GridItem py={2} {...props}>
                <Text as='b'>Ca 8</Text>
                <Text fontSize='sm' display='block'>(online)</Text>
                </GridItem>
        </>
    );
};

export default TableHead;
