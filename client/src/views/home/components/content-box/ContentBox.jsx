import React from 'react'
import { Box,Text} from '@chakra-ui/react'

const ContentBox = (props) => {
  
  return (
    <Box px={8} py={2} bg='gray.400' borderRadius='sm'>
        <Text fontSize='md'>{props.coso||props.hocky}</Text>
        <Text fontSize='md'>{props.user||props.hockyh}</Text>
    </Box>
   
  )
}

export default ContentBox
