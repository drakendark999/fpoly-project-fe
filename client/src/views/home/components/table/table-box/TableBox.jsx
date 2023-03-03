import React from "react";
import { Box, GridItem, Text, Select } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { useDrop, useDrag } from "react-dnd";
import dragAndDrogSlice from "../../../../../stores/slices/dragAndDrogSlice";
// import importFileSlice from "../../../../../stores/slices/importFileSlice";
import { useDispatch, useSelector } from "react-redux";
import Gv2Box from "./gv2-box/Gv2Box";
import EditBoxGv1 from "./EditBoxGv1";
import { giangVien2Selector } from "../../../../../selectors/selectors";
import "./tableBox.scss";
import { getLichThi1 } from "../../../../../selectors/selectors";

const TableBox = (props) => {
    let data = props.data;
    let arrayAll = useSelector(getLichThi1)
    // console.log(arrayAll)

    const [editCheck, setEditCheck] = useState(true);
    const [boxEdit, setBoxEdit] = useState(false);
    const dispatch = useDispatch();
    const [color, setColor] = useState("#FED049");
    const [colorGV1, setColorGV1] = useState("black");
    // let index = props.index;

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
            canDrop: monitor.canDrop(),
        }),
    }));
    const backgroundColorDrop = isOver ? "yellow" : "white";

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
    };
    const editGv2 = (idFirst, idSecond) => {
        dispatch(dragAndDrogSlice.actions.editGv2({ idFirst, idSecond }));
    };

    // CLick Gv1

    const editGv1 = () => {
        editCheck ? setEditCheck(false) : setEditCheck(true);
    };

    const boxEditGv1 = () => {
        boxEdit ? setBoxEdit(false) : setBoxEdit(true);
    };

    const changeGv1InData = (e) => {
        let ide = 0;
        let objNew = {
            id: data.id,
            maKy_Thi: data.maKy_Thi,
            idKhu_Vuc: data.idKhu_Vuc,
            idToa_Nha: data.idToa_Nha,
            GV1: e.target.value,
            ten_Phong: data.ten_Phong,
            ma_Lop: data.ma_Lop,
            ma_Mon: data.ma_Mon,
            bo_Mon: data.bo_Mon,
            dot_Thi: data.dot_Thi,
            ngay_Thi: data.ngay_Thi,
            ca_Thi: data.ca_Thi,
            maLich_Thi: data.maLich_Thi,
            GV2: data.GV2,
            status: data.status
        };
        // console.log(objNew)
        // console.log(index)
        arrayAll.forEach((item,index) => {
            if(item.id == objNew.id){
                ide = index
            }
        })
        // console.log(ide)

        // Xác nhận thay đổi gv1 ko?
        const accept = confirm("Bạn chắc chắn sẽ thay đổi giảng viên 1???");
        if (!accept) return;

        dispatch(dragAndDrogSlice.actions.editGv1([ide, objNew]));

        setBoxEdit(false);
        setEditCheck(true);

        // Thay đổi giảng viên 1 sẽ chớp
        const intervalId = setInterval(() => {
            setColorGV1((colorGV1) => {
                return colorGV1 === "red" ? "blue" : "red";
            });
        }, 500);

        return () => clearInterval(intervalId);
    };

    const dropOS = useRef(null);

    const handleClickOutside = (e) => {
        if (dropOS.current && !dropOS.current.contains(e.target)) {
            setBoxEdit(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // select GV2

    const listGv2 = useSelector(giangVien2Selector);
    // console.log(listGv2)

    const closeEditGV = () => {
        setBoxEdit(false);
    };

    return (
        <>
            <div ref={dropOS}>
                <GridItem
                    h="100%"
                    ref={drop}
                    style={{
                        backgroundColorDrop,
                        animation: isOver ? "blink 1s infinite" : "none",
                    }}
                    backgroundColor={backgroundColor}
                    p={2}
                    position="relative"
                    border="1px"
                >
                    <Box borderBottom="1px" borderColor="black" minH="73">
                        <Text id="monHoc">{data.ma_Mon}</Text>
                        <Text id="lop">{data.ma_Lop}</Text>
                        {/* <Text id="giangVien">{data.gv1}</Text> */}
                        <Text
                            id="giangVien"
                            cursor="pointer"
                            style={{
                                color: colorGV1,
                            }}
                            onClick={boxEditGv1}
                        >
                            {data.GV1}
                        </Text>
                    </Box>

                    <div ref={dropFix}>
                        <Box style={{ minHeight: "20px" }} color={colorDefaults[data.stt]} mt={1} id="giangVien2">
                            <Gv2Box id={data.id} gv2={data.GV2} />
                        </Box>
                    </div>
                    {boxEdit ? (
                        <Box bg="#E5E0FF" boxShadow="0px 0px 3px #cdcdcd" maxH="76px" w="100%" position="absolute" left="100px" zIndex="1000" top="13px">
                            <Select value={data.GV1} onChange={changeGv1InData}>
                                {listGv2.map((item, index) => {
                                    return (
                                        <option key={index} value={item.MaNV}>
                                            {item.MaNV}
                                        </option>
                                    );
                                })}
                            </Select>
                        </Box>
                    ) : (
                        ""
                    )}
                </GridItem>
            </div>
        </>
    );
};

export default TableBox;
