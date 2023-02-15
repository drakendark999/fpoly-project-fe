import { Button } from "@chakra-ui/react"
import { getLichThi } from "../../../../selectors/selectors"
import { useSelector, useDispatch } from "react-redux"
import { fetchUpdateLichThi } from "../../../../stores/slices/dragAndDrogSlice"

const ButtonSave = () => {
    const dispatch = useDispatch();

    let arr = useSelector(getLichThi)
    const saveDatabase = () => {
        console.log(arr)
        dispatch(fetchUpdateLichThi(arr))
    }

    return(
        <Button colorScheme='blue' onClick={saveDatabase}>Save</Button>
    )
}

export default ButtonSave