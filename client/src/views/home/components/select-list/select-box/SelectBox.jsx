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
  
  const styles = {
    border: '2px dashed gray',
    padding: '10px 20px',
  }

  if (isDragging) {
    styles.opacity = 0.5;
    styles.transform = 'scale(0.8)';
    styles.cursor = 'grabbing';
  } else {
    styles.cursor = 'grab';
  }

  return (
    <Box
      style={styles}
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
          <span>{data.BoMon}</span>
        </Text>
      </Flex>
      {/* <Text id="caRanh" as="i" fontSize="sm" display="block">
                Ca rảnh: {data.caRanh}
            </Text> */}
      <Text id="hoTen" as="i" fontSize="sm" display="block" mt={1}>
        Họ tên: {data.hoVaTen}
      </Text>
       <Text fontSize="sm" display="block" mt={1}>
        Số ca thi đã tham gia: <strong>{data.count}</strong>
      </Text>
    </Box>
  );
};

export default SelectBox;
