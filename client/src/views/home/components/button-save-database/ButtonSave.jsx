import { Button } from "@chakra-ui/react"
import { getLichThi } from "../../../../selectors/selectors"
import { useSelector, useDispatch } from "react-redux"
import { fetchUpdateLichThi } from "../../../../stores/slices/dragAndDrogSlice"

const ButtonSave = () => {
    const dispatch = useDispatch();

    let arr = useSelector(getLichThi)
    const saveDatabase = () => {
        if (confirm("Bạn có muốn lưu danh sách lịch thi?")) {
            // user clicked OK
            console.log(arr)
            dispatch(fetchUpdateLichThi(arr))
        } else {
            // user clicked Cancel
            return 0;
        }

    }

    return (
        <Button colorScheme='blue' onClick={saveDatabase}>Save</Button>
    )
}

export default ButtonSave