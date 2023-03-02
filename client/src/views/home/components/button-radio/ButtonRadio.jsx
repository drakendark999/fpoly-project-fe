import { FormControl, FormLabel, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import dragAndDrogSlice from '../../../../stores/slices/dragAndDrogSlice'
import { useEffect } from 'react'
import { getLichThi2, filterLichThi } from '../../../../selectors/selectors'
import lichThi2Slice from '../../../../stores/slices/lichThi2Slice'

const ButtonRadio = (props) => {
    // console.log(props.data[0].name);
    const dispatch = useDispatch();
    const phanBiet = props.phanBiet;
    // let lichThi2 = useSelector(filterLichThi);
    const [toaNhaValue, setToaNhaValue] = useState('Tòa F');

    // console.log("Lịch thi: ", lichThi2);

    const handleButtonRadio = (value) => {
        let toaNha = value.substr(4, 1)
        setToaNhaValue(value);
        dispatch(lichThi2Slice.actions.setToaNha(toaNha))
    }

    return (
        
        <FormControl as='fieldset'>
            <FormLabel as='legend'>{props.title}</FormLabel>

            <RadioGroup defaultValue={props.data[0].name} >
                <HStack spacing='24px'>
                    {props.data.map((item, index) => {
                        return (
                            <Radio key={index} value={item.name} onChange={() => {
                                handleButtonRadio(item.name)
                            }}>{item.name}</Radio>
                        )
                    })}
                </HStack>
            </RadioGroup>

        </FormControl>
    )
}

export default ButtonRadio
