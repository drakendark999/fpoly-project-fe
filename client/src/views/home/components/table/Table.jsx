import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import TableBox from "./table-box/TableBox";
import TableHead from "./table-head/TableHead";
import TableSideBar from "./table-sidebar/TableSideBar";
import TableChild from "./TableChild";
import TableSort from "./table-sort/TableSort";
import { useSelector } from "react-redux";
import { getLichThi } from "../../../../selectors/selectors";

// function useInterval(callback, delay) {
//     const savedCallback = useCallback(callback, []);
//     useEffect(() => {
//         const id = setInterval(savedCallback, delay);
//         return () => clearInterval(id);
//     }, [delay, savedCallback]);
// }

const Table = (props) => {
    

    const style = {
        border: "1px",
        borderColor: "black",
    };
    // console.log(arrayA)
    let arrayA = useSelector(getLichThi);
    // console.log(arrayA)
    // let arrayA = [
    //     {
    //         id: 1,
    //         mon: "WEB 1043",
    //         ten_Phong: "T1103",
    //         lop: "WE 18202",
    //         gv1: "loc th5",
    //         gv2: "abc",
    //         caThi: 1,
    //     },
    //     {
    //         id: 2,
    //         mon: "WEB 1043",
    //         ten_Phong: "T1103",
    //         lop: "WE 18202",
    //         gv1: "loc th5",
    //         gv2: "abc",
    //         caThi: 2,
    //     },
    //     {
    //         id: 3,
    //         mon: "WEB 1043",
    //         ten_Phong: "T1103",
    //         lop: "WE 18202",
    //         gv1: "loc th5",
    //         gv2: "abc",
    //         caThi: 3,
    //     },
    //     {
    //         id: 4,
    //         mon: "WEB 1043",
    //         ten_Phong: "T1101",
    //         lop: "WE 18202",
    //         gv1: "loc th5",
    //         gv2: "abc",
    //         caThi: 4,
    //     },
    //     {
    //         id: 5,
    //         mon: "WEB 1043",
    //         ten_Phong: "T1101",
    //         lop: "WE 18202",
    //         gv1: "loc th5",
    //         gv2: "xyz",
    //         caThi: 1,
    //     },
    // ];
    // console.log(arrayA)
    

    const sortByCaThi = (caThi)=>{
        let index;
        let sortArray = arrayA.filter((e, i)=>{
            if(e.caThi==caThi){
                index = i
            }
            return e.caThi==caThi
        })
        sortArray = sortArray.sort(function(a, b) {
            return a.ten_Phong.slice(-1) - b.ten_Phong.slice(-1); ;
          });
        //   console.log(sortArray)
        // console.log("i: ",index)
        return [sortArray,index]
    }
    
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
                <Grid height="100%" direction="column" minH="355px" templateColumns="repeat(1, 1fr)">
                    <TableSideBar {...style} count="T1101" />
                    <TableSideBar {...style} count="T1102" />
                    <TableSideBar {...style} count="T1103" />
                    <TableSideBar {...style} count="T1104" />
                </Grid>
            </GridItem>
            {/* Body content box */}
            <GridItem colSpan={8}>
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
                <Grid templateColumns="repeat(8, 1fr)" h="100%">
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
