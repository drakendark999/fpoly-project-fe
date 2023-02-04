import React from 'react'
// import {Select} from  "chakra-react-select"
import Select  from 'react-select';

const SelectList = () => {
    const options =[
        {value:'giang vien 1',label:"Giang Vien 1"},
        {value:'giang vien 2',label:"Giang Vien 2"},
        {value:'giang vien 3',label:"Giang Vien 3"},
        {value:'giang vien 3',label:"Giang Vien 3"},
        {value:'giang vien 3',label:"Giang Vien 3"},
    ]
    return (
        <> 
            <Select maxMenuHeight={120} options={options} style={{width:'100%'}}/>
        </>
    );
};

export default SelectList;
