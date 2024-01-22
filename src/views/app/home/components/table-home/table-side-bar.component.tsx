import { Flex } from '@chakra-ui/react';
import React from 'react';

interface TableSideBarShowRoomModel {
  ten_phong: string;
}

type Props = TableSideBarShowRoomModel;

const TableSideBarShowRoom: React.FunctionComponent<Props> = (props) => {
  const { ten_phong } = props;
  return (
    <Flex
      h="100%"
      minH={'115px'}
      justifyContent="center"
      alignItems="center"
      layerStyle="schedule">
      <strong>{ten_phong}</strong>
    </Flex>
  );
};

export default TableSideBarShowRoom;
