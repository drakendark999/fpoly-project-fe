import React from "react";
import { Box, GridItem, Text } from "@chakra-ui/react";
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
        'waiting': '#ffa700',
        'confirm': 'green',
        'refuse': 'red'
    }
    const backgroundColors = {
        'confirm': '#C0EEE4',
        'waiting': '#ffff0047',
        'refuse': '#ff040440',
        '':'tomato'
    }

    return (
        <>
            
            <GridItem backgroundColor={backgroundColors[data.stt]} {...props}  p={2}>
                <Box  borderBottom='1px' borderColor='black'>
                    <Text id="monHoc">{data.mon}</Text>
                    <Text id="lop">{data.lop}</Text>
                    <Text id="giangVien">{data.gv1}</Text>
                </Box>
                <div>
                    <Box color={colorDefaults[data.stt]} mt={1} id="giangVien2" onClick={acceptClick}>{data.gv2}</Box>    
                </div>
            </GridItem>
        </>
    );
};

export default TableBox;
