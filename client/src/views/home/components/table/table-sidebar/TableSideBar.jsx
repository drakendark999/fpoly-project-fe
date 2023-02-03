import React from 'react'
import { Grid,GridItem} from '@chakra-ui/react'

const TableSideBar = (props) => {
  return (
    <Grid >
      <GridItem {...props}>
        Phòng {props.count}
      </GridItem>
    </Grid>
  )
}

export default TableSideBar
