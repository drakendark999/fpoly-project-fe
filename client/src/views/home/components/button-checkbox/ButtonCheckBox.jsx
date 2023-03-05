import { FormControl, FormLabel, Checkbox, GridItem, Grid } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import lichThi2Slice from "../../../../stores/slices/lichThi2Slice";
// import { nganhLichThi } from "../../../../selectors/selectors";
import dragAndDrogSlice from "../../../../stores/slices/dragAndDrogSlice";

const ButtonCheckBox = (props) => {

  const dispatch = useDispatch()
  const [nganhL, setNganhL] = useState([])
  // console.log("Ngành: ", nganhL)
  useEffect(() => {
    dispatch(dragAndDrogSlice.actions.setNganhLT(nganhL))
    // dispatch(lichThi2Slice.actions.setNganhLT(nganhL))
  }, [nganhL])
  const handleChangeStatus = (e, d) => {

    if (d.target.checked) {
      let arr = [...nganhL, e]
      setNganhL(arr)

    }else{
      // console.log("Fail")
      dispatch(dragAndDrogSlice.actions.deleteNganhLT(e))
      let newArr = nganhL.filter(item => {
        return item == e ? false : true
      })
      // console.log(nganhL)
      setNganhL(newArr)
    }
  }

  const handleChangeStatus2 = (e, d) => {

    if (d.target.checked) {
      let arr = [...nganhL, e]
      setNganhL(arr)

    }else{
      // console.log("Fail")
      dispatch(lichThi2Slice.actions.deleteNganhLT(e))
      let newArr = nganhL.filter(item => {
        return item == e ? false : true
      })
      // console.log(nganhL)
      setNganhL(newArr)
    }
  }
  return (
    <FormControl as="fieldset" w="400px">
      <FormLabel as="legend">{props.title}</FormLabel>

      <Grid templateColumns="repeat(4, 1fr)" gap={1}>
        {props.data.map((item, index) => {
          return (
            <GridItem key={index}>
              <Checkbox size="md" onChange={(e) => {
                handleChangeStatus(item.name, e)
                handleChangeStatus2(item.name, e)
              }}>
                {item.name}
              </Checkbox>
            </GridItem>
          );
        })}
      </Grid>
    </FormControl>
  );

};

export default ButtonCheckBox;
