import React from 'react'
import DateTime from '../date-time/DateTime';
import ButtonRadio from '../button-radio/ButtonRadio';
import { Flex } from '@chakra-ui/react';

const FormSelect = () => { 
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
    <Flex justify= "space-between" align="center" my={4}>
      <DateTime />
      <div>
        <ButtonRadio data={toaNha} title='Tòa nhà'/>
      </div>
      
      <div>
        <ButtonRadio data={nganh} title='Ngành'/>
      </div>

    </Flex>
  );
};

export default FormSelect;
