import React from "react";
// import {Select} from  "chakra-react-select"
import { Box, Flex, Text } from "@chakra-ui/react";
import Select from "react-select";
import SelectBox from "./select-box/SelectBox";
import { useState } from "react";
import { useSelector } from "react-redux";
import ImportFile from "../import-file/ImportFile";
import "./selectList.scss";
import { freeTimeTeachersSelector } from "../../../../selectors/selectors";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import importFileSlice from "../../../../stores/slices/importFileSlice";

const SelectList = () => {
  const [table, setTable] = useState({});
  const dispatch = useDispatch();
  const options = [
    { value: "cung chuyen mon", label: "Cùng chuyên môn" },
    { value: "cung bo mon", label: "Cùng bộ môn" },
    { value: "dang co mat tai truong", label: "Đang có mặt tại trường" },
    {
      value: "giang vien dang duoc phan it gio",
      label: "Giảng viên đang được phân ít giờ",
    },
  ];

  // let { rows, cols } = table;
  // let teachers = [];
  // if (rows) {
  //   teachers = rows.map((item, index) => {
  //     return { name: item[2], bomon: item[4], caRanh: "1,3,4,6" };
  //   });

  // Loại bỏ tên các cột A, B, C, D, E và các trường IDNV, Mã NV, Họ Và Tên, Đối tượng (loại Hơp đồng), Bộ Môn, Ghi Chú
  // teachers = teachers.slice(3, teachers.length - 1);

  // Loại bỏ item vô nghĩa tên rỗng, undefined, ...
  // teachers = teachers.filter(
  //   (teacher) => teacher.name && teacher.name.length
  // );
  // }



  let teachers = useSelector(freeTimeTeachersSelector);

  // console.log(teachers);

  // Hàm handleOnDragEnd
  const handleOnDragEnd = (result) => {
    // console.log(result)
    if (!result.destination) return;

    const { source, destination } = result;
    const arr = Array.from(teachers)
    console.log(arr)
    // console.log(source, destination)
    const [remove] = arr.splice(source.index,1)
    console.log(remove)
    
    arr.splice(destination.index,0,remove);
    dispatch(importFileSlice.actions.dropDragInColGV2(arr))
    console.log(arr)
  }

  return (
    <>
      <Flex direction="column">
        <ImportFile setTable={setTable} />
        <Select
          maxMenuHeight={120}
          options={options}
          style={{ width: "100%" }}
        />
        <Text
          as="b"
          fontSize="md"
          textTransform="uppercase"
          textAlign="center"
          display="block"
          my={3}
        >
          Danh sách giảng viên rảnh
        </Text>
        <DragDropContext onDragEnd={result => {
          handleOnDragEnd(result)
        }}>
          {/* {teachers.map((e, index) => {
              return <SelectBox draggable key={index} datalist={e} />;
            })} */}

          <Droppable droppableId="listGV2">
            {(provided, snapshot) => {
              return (
                <Box
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="listGV2"
                  h={600}

                  overflowY="auto"
                >
                  {teachers.map((e, index) => {
                    {
                      return (
                        <Draggable
                          key={e.name}
                          draggableId={e.name}
                          index={index}
                        >
                          {(provided) => (
                            <Box
                              border='1px' borderColor='gray' borderRadius='base' py={3} px={5} m={3} cursor='pointer'
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Flex justify='space-between'>
                                <Text id='tenGV' as='b'>{e.name}</Text>
                                <Text id='boMon' as='abbr'>
                                  Bộ môn: <span>{e.bomon}</span>
                                </Text>
                              </Flex>
                              <Text id='caRanh' as='i' fontSize='sm' display='block'>
                                Ca rảnh: {e.caRanh}
                              </Text>
                            </Box>
                          )}
                        </Draggable>
                      )
                    }
                  })}{provided.placeholder}
                </Box>
              );
            }}
          </Droppable>
        </DragDropContext>
      </Flex>
    </>
  );
};

export default SelectList;
