import { FormControl,  Checkbox, CheckboxGroup } from '@chakra-ui/react'
import React from 'react'

const ButtonCheckBox = () => {
  return (
    
      <FormControl as='fieldset'>
          <FormControl as='legend'>{props.title}</FormControl>
          

      </FormControl>
      
  )
}

export default ButtonCheckBox