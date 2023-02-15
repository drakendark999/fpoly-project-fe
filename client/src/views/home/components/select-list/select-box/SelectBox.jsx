import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

const SelectBox = (props) => {
  let data = props.datalist;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { name: data.MaNV },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box
      style={{ opacity: isDragging ? "0" : "1" }}
      ref={drag}
      border="1px"
      borderColor="gray"
      borderRadius="base"
      py={3}
      px={5}
      m={3}
      cursor="pointer"
    >
      <Flex justify="space-between">
        <Text id="tenGV" as="b">
          {data.MaNV}
        </Text>
        <Text id="boMon" as="abbr">
          Bộ môn: <span>{data.BoMon}</span>
        </Text>
      </Flex>
      {/* <Text id="caRanh" as="i" fontSize="sm" display="block">
                Ca rảnh: {data.caRanh}
            </Text> */}
      <Text id="hoTen" as="i" fontSize="sm" display="block">
        Họ tên: {data.hoVaTen}
      </Text>
    </Box>
  );
};

export default SelectBox;
