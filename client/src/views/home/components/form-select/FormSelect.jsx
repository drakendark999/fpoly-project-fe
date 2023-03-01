import React from 'react'
import DateTime from '../date-time/DateTime';
import ButtonRadio from '../button-radio/ButtonRadio';
import { Flex } from '@chakra-ui/react';
import ButtonCheckBox from '../button-checkbox/ButtonCheckBox';

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
    { id: 3, name: 'TKĐH'},
    { id: 3, name: 'Kinh tế'},
    { id: 3, name: 'Tiếng anh'},
    { id: 3, name: 'Cơ bản'},
  ]
  return (
    <Flex justify= "space-between" align="top" my={3}>
      <DateTime />
      <div>
        <ButtonRadio data={toaNha} phanBiet={phanBiet[0]} title='Tòa nhà'/>
      </div>
      
      <div>
        <ButtonCheckBox data={nganh} phanBiet={phanBiet[1]} title='Ngành'/>
        {/* <ButtonRadio data={nganh} phanBiet={phanBiet[1]} title='Ngành'/> */}
      </div>

    </Flex>
  );
};

export default FormSelect;
