import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import TableBox from "./table-box/TableBox";
import TableHead from "./table-head/TableHead";
import TableSideBar from "./table-sidebar/TableSideBar";
import TableChild from "./TableChild";

function useInterval(callback, delay) {
    const savedCallback = useCallback(callback, []);
    useEffect(() => {
        const id = setInterval(savedCallback, delay);
        return () => clearInterval(id);
    }, [delay, savedCallback]);
}

const Table = (props) => {
    const { arrayA } = props;
    const arrayAMemo = useMemo(() => arrayA, [arrayA]);

    const style = {
        border: "1px",
        borderColor: "black",
    };
    // console.log(arrayA)

    let phongThi = [];
    arrayA.map((item, index) => {
        phongThi.push(item.ten_Phong);
    });

    let arrCa = [1, 2, 3, 4, 5, 6, 7, 8];
    // console.log(arrCa)
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
                {phongThi.map((item, i) => {
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
                })}
                {/* t02 */}
                {/* <Grid templateColumns="repeat(8, 1fr)">
                    {arrayA.map((e, index) => {
                        return <TableBox datalist={e} index={index} key={e.id} {...style} />;
                    })}
                </Grid> */}
            </GridItem>
        </Grid>
    );
};

export default Table;
