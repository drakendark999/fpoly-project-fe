import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import TableBox from "./table-box/TableBox";
import TableHead from "./table-head/TableHead";
import TableSideBar from "./table-sidebar/TableSideBar";
import TableChild from "./TableChild";
import TableSort from "./table-sort/TableSort";
import { useSelector, useDispatch } from "react-redux";
import { getLichThi, getLichThi2 } from "../../../../selectors/selectors";

import { getAllLichThi2 } from "../../../../stores/slices/lichThi2Slice";

const Table = (props) => {
    const dispatch = useDispatch();
    let lichThi2 = useSelector(getLichThi2);
    useEffect(() => {
        dispatch(getAllLichThi2());
    }, []);
    console.log("Lịch thi: ", lichThi2);

    const style = {
        border: "1px",
        borderColor: "black",
    };
    
    let arrayA = useSelector(getLichThi);
    

   
    

    const sortByCaThi = (caThi)=>{
        let index;
        let sortArray = arrayA.filter((e, i)=>{
            if(e.caThi==caThi){
                index = i
            }
            return e.caThi==caThi
        })
        // console.log("arrayA: ",arrayA)
        sortArray = sortArray.sort(function(a, b) {
            return a.ten_Phong.slice(-1) - b.ten_Phong.slice(-1); ;
          });
          sortArray.map((item, id) => {
            arrayA.map((arA, iarA) => {
                if(item.id == arA.id){
                    sortArray[id] = {
                        ...item,
                        inDex: iarA
                    }
                }
            })
          })
        //   console.log(sortArray)
        // console.log("i: ",index)
        return  sortArray
    }
    
    
    return (
        <Grid templateColumns="repeat(7, 1fr)" textAlign="center">
            {/* Header table*/}

            <GridItem {...style}>
                <Flex h="100%" justifyContent="center" alignItems="center">
                    <strong>Phòng </strong>
                </Flex>
            </GridItem>
            <TableHead {...style} />
            {/* Body table */}
            <GridItem>
                <Grid height="100%" direction="column" minH="355px" templateColumns="repeat(1, 1fr)">
                    <TableSideBar {...style} count="T1101" />
                    <TableSideBar {...style} count="T1102" />
                    <TableSideBar {...style} count="T1103" />
                    <TableSideBar {...style} count="T1104" />
                </Grid>
            </GridItem>
            {/* Body content box */}
            <GridItem colSpan={6}>
                {/* t01 */}
                {/* {phongThi.map((item, i) => {
                    return (
                        <Grid templateColumns="repeat(8, 1fr)" key={item + i}>
                            {arrCa.map((c) => {
                                return arrayAMemo.map((e, index) => {
                                    if ((item == e.ten_Phong) & (e.caThi === c)) {
                                        return <TableBox datalist={e} index={index} key={e.id} {...style} />;
                                    } else {
                                        return <TableBox datalist={{}} index={index} key={e.id} {...style} />;
                                    }
                                });
                            })}
                        </Grid>
                    );
                })} */}
                {/* t02 */}
                <Grid templateColumns="repeat(6, 1fr)" h="100%">
                    {/* {arrayA.map((e, index) => {
                        return <TableBox datalist={e} index={index} key={index} {...style} />;
                    })} */}

                    <TableSort data={sortByCaThi} caThi={1} />
                    <TableSort data={sortByCaThi} caThi={2} />
                    <TableSort data={sortByCaThi} caThi={3} />
                    <TableSort data={sortByCaThi} caThi={4} />
                    <TableSort data={sortByCaThi} caThi={5} />
                    <TableSort data={sortByCaThi} caThi={6} />
                    <TableSort data={sortByCaThi} caThi={7} />
                    <TableSort data={sortByCaThi} caThi={8} />
                    
                </Grid>
            </GridItem>
        </Grid>
    );
};

export default Table;
