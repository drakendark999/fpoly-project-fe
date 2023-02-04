import React from 'react'
import { Flex,Spacer } from '@chakra-ui/react'
import ContentBox from '../content-box/ContentBox'

const Header = () => {
  const value = {
    coso : 'Cơ sở Hồ Chí Minh',
    user : 'user longnv36',
    hocky: 'Học kỳ Spring 2023',
    hockyh: 'Học kỳ H',
    color:'red'
  }
  
  return (
    <Flex gap='3'>
      <ContentBox coso={value.coso} user={value.user}/>
      
      <ContentBox hocky={value.hocky} hockyh={value.hockyh}/>
    </Flex>
  )
}

export default Header
