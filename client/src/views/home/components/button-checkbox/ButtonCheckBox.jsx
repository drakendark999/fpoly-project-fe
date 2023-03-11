import { FormControl, FormLabel, Checkbox, GridItem, Grid, Flex, HStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import lichThi2Slice from "../../../../stores/slices/lichThi2Slice";
// import { nganhLichThi } from "../../../../selectors/selectors";
import dragAndDrogSlice from "../../../../stores/slices/dragAndDrogSlice";

const ButtonCheckBox = (props) =>
{

  const dispatch = useDispatch()
  const [nganhL, setNganhL] = useState([])
  // console.log("Ngành: ", nganhL)
  useEffect(() =>
  {
    dispatch(dragAndDrogSlice.actions.setNganhLT(nganhL))
    // dispatch(lichThi2Slice.actions.setNganhLT(nganhL))
  }, [nganhL])
  const handleChangeStatus = (e, d) =>
  {

    if (d.target.checked)
    {
      let arr = [...nganhL, e]
      setNganhL(arr)

    } else
    {
      // console.log("Fail")
      dispatch(dragAndDrogSlice.actions.deleteNganhLT(e))
      let newArr = nganhL.filter(item =>
      {
        return item == e ? false : true
      })
      // console.log(nganhL)
      setNganhL(newArr)
    }
  }

  const handleChangeStatus2 = (e, d) =>
  {

    if (d.target.checked)
    {
      let arr = [...nganhL, e]
      setNganhL(arr)

    } else
    {
      // console.log("Fail")
      dispatch(lichThi2Slice.actions.deleteNganhLT(e))
      let newArr = nganhL.filter(item =>
      {
        return item == e ? false : true
      })
      // console.log(nganhL)
      setNganhL(newArr)
    }
  }
  return (
    <FormControl as="fieldset" >
      <FormLabel as="legend">{props.title}</FormLabel>

      <HStack spacing='20px'>
        {props.data.map((item, index) =>
        {
          return (
            <Checkbox key={index} size="md" onChange={(e) =>
            {
              handleChangeStatus(item.name, e)
              handleChangeStatus2(item.name, e)
            }}>
              {item.name}
            </Checkbox>
          );
        })}
      </HStack>
    </FormControl>
  );

};

export default ButtonCheckBox;
