import { GridItem, Flex, Checkbox, Text } from '@chakra-ui/react';
import { TimeTableModel } from '@src/core/data/time-table';
import { lichThi2Action } from '@src/core/store/reducer/lichthi2';
import { getSelectorFilterCaThi_LichThi2 } from '@src/selector/selectorLichThi2';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
interface TableHeadProps {
  timetable: TimeTableModel;
}
type Props = TableHeadProps;
const TableHead: React.FunctionComponent<Props> = (props) => {
  const timeTable = props.timetable;
  const dispatch = useDispatch();
  const ca_thi_list = useSelector(getSelectorFilterCaThi_LichThi2);

  const changeCa = (ca: number) => {
    if (ca_thi_list.includes(ca)) {
      const ca_thi_list_remove = ca_thi_list.filter((e) => e != ca);
      dispatch(lichThi2Action.setCa(ca_thi_list_remove));
    } else {
      const ca_thi_list_add = [...ca_thi_list, ca];
      dispatch(lichThi2Action.setCa(ca_thi_list_add));
    }
  };
  return (
    <GridItem py={2} layerStyle="schedule">
      <Flex justify="center">
        <Text as="b">Ca {timeTable.ca} </Text>
        <Checkbox
          defaultChecked={ca_thi_list.includes(timeTable.ca) ? true : false}
          size="sm"
          colorScheme="gray"
          ml={2}
          onChange={() => changeCa(timeTable.ca)}
        />
      </Flex>
      <Text fontSize="sm" display="block">
        ({timeTable.time})
      </Text>
    </GridItem>
  );
};

export default TableHead;
