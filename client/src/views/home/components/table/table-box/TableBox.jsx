import React from "react";
import { Box, GridItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import dragAndDrogSlice from "../../../../../stores/slices/dragAndDrogSlice";
import importFileSlice from "../../../../../stores/slices/importFileSlice";
import { useDispatch } from "react-redux";
import Gv2Box from "./gv2-box/Gv2Box";
const TableBox = (props) => {
    let { index } = props;
    let data = props.datalist;
    

    const dispatch = useDispatch();
    const [color, setColor] = useState("#FED049");

    const colorDefaults = {
        waiting: "#ffa700",
        confirm: "green",
        refuse: "red",
    };
    const backgroundColors = {
        confirm: "#C0EEE4",
        waiting: "#ffff0047",
        refuse: "#ff040440",
        "": "tomato",
    };

    let backgroundColor = "white";

    if (data.mon != "")
    {
        backgroundColor = backgroundColors[data.stt];
    }

    // add Gv 2
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "box",
        drop: (item) => {
            addGv2(item.name, index);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    // Edit Gv 2
    const [{ isOverFix }, dropFix] = useDrop(() => ({
        accept: "boxFix",
        drop: (item) => {
            editGv2(item.id,item['nowId']=data.id);
        },
        collect: (monitor) => ({
            isOverFix: !!monitor.isOver(),
        }),
    }));

    const addGv2 = (name, index) =>
    {
        console.log(index);
        // console.log(name);
        dispatch(dragAndDrogSlice.actions.addGv2({ name, index }));
        // dispatch(importFileSlice.actions.deleteFreeTimeTeachers(name))
    };
    const editGv2 = (idFirst,idSecond) => {
        console.log({ idFirst,idSecond})
        dispatch(dragAndDrogSlice.actions.editGv2({ idFirst,idSecond}));
    };
    return (
        <>
            <GridItem ref={drop} backgroundColor={backgroundColor} {...props} p={2}>
                <Box borderBottom="1px" borderColor="black" minH='73'>
                    <Text id="monHoc">{data.mon}</Text>
                    <Text id="lop">{data.lop}</Text>
                    <Text id="giangVien">{data.gv1}</Text>
                </Box>
                <div ref={dropFix}>
                    <Box style={{ minHeight: "20px" }} color={colorDefaults[data.stt]} mt={1} id="giangVien2">
                        <Gv2Box id={data.id} gv2={data.gv2} index={index} />
                    </Box>
                </div>
            </GridItem>
        </>
    );
};

export default TableBox;
