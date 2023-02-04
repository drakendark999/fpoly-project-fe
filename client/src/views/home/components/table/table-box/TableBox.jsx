import React from "react";
import { Box, GridItem } from "@chakra-ui/react";
import { useState } from "react";

const TableBox = (props) =>
{

    let data = props.datalist
    const [color, setColor] = useState("#FED049");
    const acceptClick = () =>
    {
        setColor('green')
    }
    const colorDefaults = {
        'waiting': '#FED049',
        'confirm': 'green',
        'refuse': 'red'
    }

    return (
        <>
            
            <GridItem {...props}  p={2}>
                <Box borderBottom='1px' borderColor='black'>
                    <p id="monHoc">{data.mon}</p>
                    <p id="lop">{data.lop}</p>
                    <p id="giangVien">{data.gv1}</p>
                </Box>
                <div>
                    <Box   color={colorDefaults[data.stt]} mt={1} id="giangVien2" onClick={acceptClick}>{data.gv2}</Box>    
                </div>
            </GridItem>
        </>
    );
};

export default TableBox;
