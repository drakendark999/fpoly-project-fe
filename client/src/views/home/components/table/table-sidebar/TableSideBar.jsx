import React from 'react'
import { Flex, Grid,GridItem} from '@chakra-ui/react'

const TableSideBar = (props) => {
  return (
    <Grid>
      <Flex {...props} alignItems='center'>
        <strong>Phòng {props.count}</strong>
      </Flex>
    </Grid>
  )
}

export default TableSideBar
