import React from 'react'
// import {Select} from  "chakra-react-select"
import { Box, Flex, Text } from '@chakra-ui/react'
import Select from 'react-select';
import SelectBox from './select-box/SelectBox';
import ImportFile from '../import-file/ImportFile';

const SelectList = () => {
    const options =[
        {value:'cung chuyen mon',label:"Cùng chuyên môn"},
        {value:'cung bo mon',label:"Cùng bộ môn"},
        {value:'dang co mat tai truong',label:"Đang có mặt tại trường"},
        {value:'giang vien dang duoc phan it gio',label:"Giảng viên đang được phân ít giờ"},
    ]
    const giangVien = [
        {name: 'longnv26', bomon: "UDPM", caRanh: '1,3,4,6'},
        {name: 'longnv26', bomon: "UDPM", caRanh: '1,3,4,6'},
        {name: 'longnv26', bomon: "UDPM", caRanh: '1,3,4,6'},
        {name: 'longnv26', bomon: "UDPM", caRanh: '1,3,4,6'},
        {name: 'longnv26', bomon: "UDPM", caRanh: '1,3,4,6'},
        {name: 'longnv26', bomon: "UDPM", caRanh: '1,3,4,6'},
        {name: 'longnv26', bomon: "UDPM", caRanh: '1,3,4,6'},
        {name: 'longnv26', bomon: "UDPM", caRanh: '1,3,4,6'},
        {name: 'longnv26', bomon: "UDPM", caRanh: '1,3,4,6'},
    ]
    return (
        <> 
            <Select maxMenuHeight={120} options={options} style={{ width: '100%' }} />
                        
            <Flex direction='column' borderLeft='1px' borderColor='gray' pl={4} ml={3}>
                <ImportFile />
                <Text as='b' fontSize='md' textTransform='uppercase' textAlign='center' display='block'>
                    Danh sách giảng viên rảnh
                </Text>

                <Box h={600} overflowY='auto'>
                    {giangVien.map((e, index) => {
                        return (
                            <SelectBox draggable key={index} datalist = {e} />
                        )
                    })}
                </Box>
            </Flex>
        </>
    );
};

export default SelectList;
