import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import TableBox from "../table-box/TableBox";

const TableSort = ({ data, caThi,lengthP,phong }) => {
    // console.log(data(caThi))
    const lengthPhong = lengthP
    const arrayA = data(caThi);
  
    

    const sortedArray = arrayA.sort((a, b) => (a.ten_Phong > b.ten_Phong ? 1 : -1));
    while (sortedArray.length < lengthPhong) {
        sortedArray.push({});
    }
    
    const arrayEnd = [];
    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (Object.keys(sortedArray[i]).length !== 0) {
            phong.forEach((itemPhong,index)=>{
               
                if(sortedArray[i].ten_Phong==itemPhong.tenPhong){
                    arrayEnd[index]= sortedArray[i]
                }
                
            })
            // arrayEnd[sortedArray[i].ten_Phong.slice(-1) - 1] = sortedArray[i];
        } 
    }
    for (let i = 0; i < arrayEnd.length - 1; i++) {
        if(arrayEnd[i]==undefined){
            arrayEnd[i] ={}
        }
    }
    console.log('arrayEnd',arrayEnd)
    return (
        <GridItem>
            <Grid templateRows={`repeat(${lengthPhong}, 1fr)`} h="100%">
                {arrayEnd.map((e, index) => {
                    return <TableBox key={index} data={e} index={e.inDex} />;
                })}
            </Grid>
        </GridItem>
    );
};

export default TableSort;
