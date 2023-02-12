import React from "react";
import { Box, GridItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import dragAndDrogSlice from "../../../../../stores/slices/dragAndDrogSlice";
import importFileSlice from "../../../../../stores/slices/importFileSlice";
import { useDispatch } from "react-redux";


const TableBox = (props) => {
    let {index} = props;
    let data = props.datalist;

    const dispatch=useDispatch()
    const [color, setColor] = useState("#FED049");
    const acceptClick = () => {
        setColor("green");
    };
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

    const [{ isOver },drop] = useDrop(() => ({
        accept:'box',
        drop:(item)=>{addGv2(item.name,index)},
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));
    const addGv2=(name,index) =>{
       
        
        dispatch(dragAndDrogSlice.actions.addGv2({name,index}))
        dispatch(importFileSlice.actions.deleteFreeTimeTeachers(name))
    }
    return (
        <>
            <GridItem ref={drop}  backgroundColor={backgroundColors[data.stt]} {...props} p={2}>
                <Box borderBottom="1px" borderColor="black">
                    <Text id="monHoc">{data.mon}</Text>
                    <Text id="lop">{data.lop}</Text>
                    <Text id="giangVien">{data.gv1}</Text>
                </Box>
                <div>
                    <Box color={colorDefaults[data.stt]} mt={1} id="giangVien2" onClick={acceptClick}>
                        {data.gv2}
                    </Box>
                </div>
            </GridItem>
        </>
    );
};

export default TableBox;
