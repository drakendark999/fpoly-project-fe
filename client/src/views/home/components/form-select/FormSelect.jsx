import React from 'react'
import DateTime from '../date-time/DateTime';
import ButtonRadio from '../button-radio/ButtonRadio';
import { Flex } from '@chakra-ui/react';

const FormSelect = () => { 
  const phanBiet = [
    1,2
  ]

  // console.log(phanBiet)

  const toaNha = [
    { id: 1, name: 'Tòa F'},
    { id: 2, name: 'Tòa P'},
    { id: 3, name: 'Tòa T'},
  ]
  const nganh = [
    { id: 1, name: 'UDPM'},
    { id: 2, name: 'CNTT'},
    { id: 3, name: 'Đồ họa'},
  ]
  return (
    <Flex justify= "space-between" align="center" my={3}>
      <DateTime />
      <div>
        <ButtonRadio data={toaNha} phanBiet={phanBiet[0]} title='Tòa nhà'/>
      </div>
      
      <div>
        <ButtonRadio data={nganh} phanBiet={phanBiet[1]} title='Ngành'/>
      </div>

    </Flex>
  );
};

export default FormSelect;
