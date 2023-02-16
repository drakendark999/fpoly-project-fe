import { Box, Select } from "@chakra-ui/react";

const EditBoxGv1 = () => {
    const changeGv1InData = (e) => {
        let objNew = {
            id: data.id,
            mon: data.mon,
            ten_Phong: data.ten_Phong,
            lop: data.lop,
            gv1: e.target.value,
            gv2: data.gv2,
            stt: data.stt,
            caThi: data.caThi
          }
          console.log(objNew)
        dispatch(dragAndDrogSlice.actions.editGv1([index,objNew]))
        // const arrOld = useSelector(getLichThi);
        // console.log(arrOld)
        setBoxEdit(false)
        setEditCheck(true)
        setColorGV1(true)
    }

    return (
        <Box border='1px' background='lightyellow' h='100%' w='100%' position='absolute' left='0' top='0'>
            <Select placeholder='Select option' onChange={changeGv1InData}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
                <option value='option4'>Option 4</option>

            </Select>
        </Box>
    )
}

export default EditBoxGv1;