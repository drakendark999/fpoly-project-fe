import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import { SelectOption } from '../select-option/SelectOption'

const ContentBox = (props) =>
{
  return (
    <Flex my={1}>
      <Text textTransform='capitalize' minW='80px' fontSize='md'>{props.title} :</Text>
      <Text ml={3}>{props.content}</Text>
    </Flex>

  )
}

export default ContentBox
