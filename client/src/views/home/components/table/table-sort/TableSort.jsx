import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import TableBox from "../table-box/TableBox";

const TableSort = ({ data, caThi }) => {
    const arrayA = data(caThi);
    const sortedArray = arrayA.sort((a, b) => (a.ten_Phong > b.ten_Phong ? 1 : -1));
    while (sortedArray.length < 4) {
        sortedArray.push({});
    }

    // console.log(sortedArray);
    sortedArray.forEach((e,index) => {
        if (Object.keys(e).length == 0) {
        } else {
            
            if(e.ten_Phong.slice(-1)-1!==index) {
                sortedArray[e.ten_Phong.slice(-1)-1]=e
                sortedArray[index]={}
            }
        }
    });

    // console.log(sortedArray);
    console.log(sortedArray);

    return (
        <GridItem>
            <Grid templateRows="repeat(4, 1fr)" h="100%">
                {sortedArray.map((e) => {
                    return <TableBox key={e.id} data={e} />;
                })}
            </Grid>
        </GridItem>
    );
};

export default TableSort;
