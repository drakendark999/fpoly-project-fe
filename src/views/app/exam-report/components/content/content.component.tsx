import { Button } from '@chakra-ui/button';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { Checkbox } from '@chakra-ui/react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { Textarea } from '@chakra-ui/textarea';
import React, { useRef } from 'react';

const Content: React.FunctionComponent = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  return (
    <Box layerStyle="reportItem" p={4}>
      <Text
        textAlign="center"
        textTransform="uppercase"
        fontWeight="600"
        fontSize="lg"
        mb={2}>
        GV1 báo cáo
      </Text>

      <Table variant="report">
        <Thead />
        <Tbody>
          <Tr>
            <Th>Ngày</Th>
            <Td>21/07/2023</Td>
          </Tr>
          <Tr>
            <Th>Ca</Th>
            <Td>5</Td>
          </Tr>
          <Tr>
            <Th>Phòng</Th>
            <Td>T1101</Td>
          </Tr>
          <Tr>
            <Th>Mã Môn</Th>
            <Td>PRO220</Td>
          </Tr>
          <Tr>
            <Th>Môn</Th>
            <Td>Dự án tốt nghiệp (TKTW-Single page Application)</Td>
          </Tr>
          <Tr>
            <Th w="130px">Tình hình thi</Th>
            <Td>
              <Stack direction="column">
                <Checkbox>Bình thường</Checkbox>
                <Checkbox>Ghi chú thêm</Checkbox>
                <Textarea placeholder="Ghi chú thêm" />
              </Stack>
            </Td>
          </Tr>
          <Tr>
            <Th colSpan={2} borderRight={0}>
              Đính kèm phiếu chấm theo mẫu excel
              <input
                ref={fileInputRef}
                // onChange={handleFileSelect}
                hidden
                type="file"
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                style={{ padding: '10px' }}
              />
              <Button
                size="sm"
                w="100%"
                border="2px dashed gray"
                borderColor="gray"
                borderRadius="md"
                cursor="pointer"
                mt={2}
                type="button"
                bg="transparent"
                onClick={() =>
                  fileInputRef.current && fileInputRef.current.click()
                }>
                Chọn File
              </Button>
            </Th>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default Content;
