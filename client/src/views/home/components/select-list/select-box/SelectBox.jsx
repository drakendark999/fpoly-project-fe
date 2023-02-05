import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

const SelectBox = (props) =>
{
  let data = props.datalist;
  return (
    <Box border='1px' borderColor='gray' borderRadius='base' py={3} px={5} m={3} cursor='pointer'>
      <Flex justify='space-between'>
        <Text id='tenGV' as='b'>{ data.name }</Text>
        <Text id='boMon' as='abbr'>
          Bộ môn: <span>{ data.bomon}</span>
      </Text>
      </Flex>
      <Text id='caRanh' as='i' fontSize='sm' display='block'>
        Ca rảnh: {data.caRanh}
      </Text>
    </Box>
  )
}

export default SelectBox