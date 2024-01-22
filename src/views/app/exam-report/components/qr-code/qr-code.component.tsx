import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import React from 'react';

const QRCode: React.FunctionComponent = () => {
  return (
    <Flex flexDir="column" h="100%" p={4} align="center" justify="center">
      <Image
        mx="auto"
        src="data:image/png;base64,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"
      />
      <Table variant="report">
        <Thead />
        <Tbody>
          <Tr>
            <Th>Họ & Tên GV2</Th>
            <Td>Nguyễn Văn Long</Td>
          </Tr>
          <Tr>
            <Th>Thời điểm</Th>
            <Td>21/07/2023 17:45:33</Td>
          </Tr>
          <Tr>
            <Td colSpan={2} textAlign="center">
              <Button colorScheme="teal" variant="outline">
                GV2 đã vào phòng
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
};

export default QRCode;
