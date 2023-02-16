import React from "react";
import { Box, Button, GridItem, Text, Stack, Select } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import dragAndDrogSlice from "../../../../../stores/slices/dragAndDrogSlice";
// import importFileSlice from "../../../../../stores/slices/importFileSlice";
import { useDispatch, useSelector } from "react-redux";
import Gv2Box from "./gv2-box/Gv2Box";
import EditBoxGv1 from "./EditBoxGv1";
import { getLichThi } from "../../../../../selectors/selectors";

const TableBox = (props) => {
    let data = props.data;
   
    const [editCheck, setEditCheck] = useState(true);
    const [boxEdit, setBoxEdit] = useState(false)
    const dispatch = useDispatch();
    const [color, setColor] = useState("#FED049");
    const [colorGV1, setColorGV1] = useState(false);
    let index = props.index;

    const colorDefaults = {
        pending: "#ffa700",
        confirmed: "green",
        rejected: "red",
    };
    const backgroundColors = {
        confirmed: "#C0EEE4",
        pending: "#ffff0047",
        rejected: "#ff040440",
        "": "tomato",
    };

    let backgroundColor = "white";

    if (data.mon != "") {
        backgroundColor = backgroundColors[data.stt];
    }

 

    // add Gv 2
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "box",
        drop: (item) => {
            addGv2(item.name, data.id);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    // Edit Gv 2
    const [{ isOverFix }, dropFix] = useDrop(() => ({
        accept: "boxFix",
        drop: (item) => {
            editGv2(item.id, (item["nowId"] = data.id));
        },
        collect: (monitor) => ({
            isOverFix: !!monitor.isOver(),
        }),
    }));

    const addGv2 = (name, id) => {

        dispatch(dragAndDrogSlice.actions.addGv2({ name, id }));
        // dispatch(importFileSlice.actions.deleteFreeTimeTeachers(name))
    };
    const editGv2 = (idFirst, idSecond) => {
        // console.log({ idFirst,idSecond})
        dispatch(dragAndDrogSlice.actions.editGv2({ idFirst, idSecond }));
    };

    // CLick Gv1

    const editGv1 = () => {
        editCheck ? setEditCheck(false) : setEditCheck(true)
    }

    const boxEditGv1 = () => {
        boxEdit ? setBoxEdit(false) : setBoxEdit(true)
    }

    const changeGv1InData = (e) => {
        let objNew = {
            id: data.id,
            mon: data.mon,
            ten_Phong: data.ten_Phong,
            lop: data.lop,
            gv1: e.target.value,
            gv2: data.gv2,
            stt: data.stt,
            caThi: data.caThi
          }
          
        dispatch(dragAndDrogSlice.actions.editGv1([index,objNew]))
        // const arrOld = useSelector(getLichThi);
        // console.log(arrOld)
        setBoxEdit(false)
        setEditCheck(true)
        setColorGV1(true)
    }

    return (
        <>
            <GridItem ref={drop} backgroundColor={backgroundColor}  p={2} position='relative' border='1px'>
                <Box borderBottom="1px" borderColor="black" minH='73' >
                    <Text id="monHoc">{data.mon}</Text>
                    <Text id="lop">{data.lop}</Text>
                    {/* <Text id="giangVien">{data.gv1}</Text> */}
                    <Text id="giangVien" cursor='pointer' style={{
                        color: colorGV1?"red":"black"
                    }} onClick={boxEditGv1}>{data.gv1}</Text>

                </Box>
                <div ref={dropFix}>
                    <Box style={{ minHeight: "20px" }} color={colorDefaults[data.stt]} mt={1} id="giangVien2">
                        <Gv2Box id={data.id} gv2={data.gv2} />
                    </Box>
                </div>
                {boxEdit ? <Box bg='#E5E0FF' boxShadow='0px 0px 3px #cdcdcd' maxH='76px' w='100%' position='absolute' left='100px' zIndex='1000' top='13px'>
                    <Select value={data.gv1} onChange={changeGv1InData}>
                        <option value='locth5'>locth5</option>
                        <option value='longnv36'>longnv36</option>
                        <option value='hotb'>hotb</option>
                        <option value='ngahth4'>ngahth4</option>
                    </Select>
                </Box> : ""}
            </GridItem>
        </>
    );
};

export default TableBox;
