import { Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useDrag } from "react-dnd";

const Gv2Box = ({ gv2, id }) => {
    const [{ isDragging }, dragFix] = useDrag(
        useMemo(() => ({
            type: "boxFix",
            item: { id: id },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        }),[id])
    );
    return <Text ref={dragFix}>{gv2}</Text>;
};

export default Gv2Box;
