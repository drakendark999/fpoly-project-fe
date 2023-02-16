import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import TableBox from "../table-box/TableBox";

const TableSort = ({ data, caThi }) => {
    // console.log(data(caThi))

    const arrayA = data(caThi);
    console.log(arrayA)

    const sortedArray = arrayA.sort((a, b) => (a.ten_Phong > b.ten_Phong ? 1 : -1));
    while (sortedArray.length < 4) {
        sortedArray.push({});
    }
    const arrayEnd = [];
    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (Object.keys(sortedArray[i]).length !== 0) {
            arrayEnd[sortedArray[i].ten_Phong.slice(-1) - 1] = sortedArray[i];
        } 
    }
    for (let i = 0; i < arrayEnd.length - 1; i++) {
        if(arrayEnd[i]==undefined){
            arrayEnd[i] ={}
        }
    }

    console.log(arrayEnd)
   
   
    

    // sortedArray.forEach((e, index) => {
    //     if (Object.keys(e).length == 0) {
    //     } else {
    //         if (e.ten_Phong.slice(-1) - 1 !== index) {
    //             let temp = sortedArray[e.ten_Phong.slice(-1) - 1];
    //             sortedArray[e.ten_Phong.slice(-1) - 1] = e;
    //             sortedArray[index] = temp;
    //         }
    //     }
    // });
    


    return (
        <GridItem>
            <Grid templateRows="repeat(4, 1fr)" h="100%">
                {arrayEnd.map((e, index) => {
                    return <TableBox key={index} data={e} index={e.inDex} />;
                })}
            </Grid>
        </GridItem>
    );
};

export default TableSort;
