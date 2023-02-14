import { Box, Select } from "@chakra-ui/react";

const EditBoxGv1 = () => {

    const changeGv1InData = (e) => {
        
    }

    return (
        <Box border='1px' background='lightyellow' h='100%' w='100%' position='absolute' left='0' top='0'>
            <Select placeholder='Select option' onChange={changeGv1InData}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>

            </Select>
        </Box>
    )
}

export default EditBoxGv1;