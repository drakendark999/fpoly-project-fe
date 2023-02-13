import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDrag } from "react-dnd";

const Gv2Box = ({ gv2, index, id }) => {
    const [changeGv2, setChangeGv2] = useState(gv2);
    const [{ isDragging }, dragFix] = useDrag(() => ({
        type:'boxFix',
        item :{id:id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
    }));
    return <Text ref={dragFix}>{gv2}</Text>;
};

export default Gv2Box;
