import { Button } from "@chakra-ui/react";
import { getLichThi } from "../../../../selectors/selectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpdateLichThi } from "../../../../stores/slices/dragAndDrogSlice";

const ButtonSave = () => {
  const dispatch = useDispatch();

  let arr = useSelector(getLichThi);
  const saveDatabase = () => {
    if (confirm("Bạn có muốn lưu danh sách lịch thi?")) {
      // user clicked OK
      
      dispatch(fetchUpdateLichThi(arr));
    } else {
      // user clicked Cancel
      return 0;
    }
  };

  return (
    <Button colorScheme="blue" mt={2} onClick={saveDatabase}>
      Lưu lịch thi
    </Button>
  );
};

export default ButtonSave;
