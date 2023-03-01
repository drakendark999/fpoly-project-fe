import { FormControl, FormLabel, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterWithToaNha } from '../../../../stores/slices/dragAndDrogSlice'
import { useEffect } from 'react'
import { filterWithChuyenNganh } from '../../../../stores/slices/dragAndDrogSlice'

const ButtonRadio = (props) => {
    // console.log(props.data[0].name);
    const dispatch = useDispatch();
    const phanBiet = props.phanBiet;

    useEffect(() => {
        // let date = new Date();
        // let newDate = moment(date).format('YYYY-MM-DD')
        localStorage.setItem("Toa nha", "F")
        localStorage.setItem("Chuyen nganh", 'UDPM')
      },[])

    const handleChangeStateWithToaNha = (value) => {
        let toaNha = value.substr(4, 1)
        localStorage.setItem("Toa nha", toaNha)
        // console.log(toaNha)
        dispatch(filterWithToaNha(toaNha))
    }

    const handleChangeStateWithChuyenNganh = (value) => {
        // console.log(value)
        localStorage.setItem("Chuyen nganh", value)
        dispatch(filterWithChuyenNganh(value))
    }

    return (
        
        <FormControl as='fieldset'>
            <FormLabel as='legend'>{props.title}</FormLabel>

            <RadioGroup defaultValue={props.data[0].name} >
                <HStack spacing='24px'>
                    {props.data.map((item, index) => {
                        return (
                            <Radio key={index} value={item.name} onClick={() => {
                                if(phanBiet == 1){
                                    handleChangeStateWithToaNha(item.name)
                                }else{
                                    handleChangeStateWithChuyenNganh(item.name)
                                }
                            }}>{item.name}</Radio>
                        )
                    })}
                </HStack>
            </RadioGroup>

        </FormControl>
    )
}

export default ButtonRadio
