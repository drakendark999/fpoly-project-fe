import React from 'react'
import { Box, Text, Select, Flex, Grid } from '@chakra-ui/react'

export const SelectOption = (props) =>
{
  return (
    <Flex my={1}>
      <Text textTransform='capitalize' minW='80px' fontSize='md'>{props.title} :</Text>
      <Select variant='unstyled'>
        {props.data.map((item, index) =>
        {
          return (
            <option style={{ backgroundColor: "#1fc198bd", margin: "5px 10px" }} value={item} key={index}>
              &nbsp;&nbsp;&nbsp;
              {item}
            </option>
          )
        })}
      </Select>
    </Flex>

  )
}
