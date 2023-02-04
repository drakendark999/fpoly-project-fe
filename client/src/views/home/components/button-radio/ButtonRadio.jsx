import { FormControl,FormLabel, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import React from 'react'

const ButtonRadio = (props) => {
    // console.log(props.data[0].name);
    return (
    <FormControl as='fieldset'>
        <FormLabel as='legend'>{props.title}</FormLabel>
        
            <RadioGroup  defaultValue={props.data[0].name}>
                <HStack spacing='24px'>
                    {props.data.map((item, index) => {
                        return (
                            <Radio key={index} value={item.name}>{item.name}</Radio>
                        )
                    })}
                </HStack>
            </RadioGroup>

    </FormControl>
  )
}

export default ButtonRadio
