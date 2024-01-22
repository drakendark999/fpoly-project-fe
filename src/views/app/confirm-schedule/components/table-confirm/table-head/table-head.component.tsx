import { GridItem, Text } from '@chakra-ui/react';
import { TimeTableModel } from '@src/core/data/time-table';
import React from 'react';
interface TableHeadProps {
  timetable: TimeTableModel;
}
type Props = TableHeadProps;
const TableHead: React.FunctionComponent<Props> = (props) => {
  const timeTable = props.timetable;
  return (
    <GridItem layerStyle="confirm" textAlign="center" py={2}>
      <Text as="b">Ca {timeTable.ca}</Text>
      <Text fontSize="sm" display="block">
        ({timeTable.time})
      </Text>
    </GridItem>
  );
};

export default TableHead;
