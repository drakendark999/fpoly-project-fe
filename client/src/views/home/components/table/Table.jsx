import React from 'react'
import { Grid,GridItem } from '@chakra-ui/react'
import TableBox from '../table-box/TableBox'
import TableHead from '../table-head/TableHead'

const Table = () => {
    const style = {
        border : '1px',
        borderColor : 'black',
        p: '8'
    }
    
  return (
    <Grid templateColumns='repeat(9, 1fr)'  textAlign='center' >
        <GridItem border={style.border} borderColor={style.borderColor} p={style.p}>Phòng</GridItem>
        <TableHead border={style.border} borderColor={style.borderColor} p={style.p}/>
        <TableBox border={style.border} borderColor={style.borderColor} p={style.p} count='1'/>
        <TableBox border={style.border} borderColor={style.borderColor} p={style.p} count='2'/>
    </Grid>
  )
}

export default Table
