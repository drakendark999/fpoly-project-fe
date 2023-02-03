import React from 'react'
import { Box,Text} from '@chakra-ui/react'

const ContentBox = (props) => {
  
  return (
    <Box
      p='4' 
      bg='green.400'
    >
        <Text fontSize='2xl'>{props.coso||props.hocky}</Text>
        <Text fontSize='lg'>{props.user||props.hockyh}</Text>
    </Box>
   
  )
}

export default ContentBox
