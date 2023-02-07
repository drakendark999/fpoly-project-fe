import { Flex } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import "./test.css";

const Test = () => {
    // const handleDragStart = (e) => {
    //     // e.preventDefault();
    //     console.log(123);
    // };
    // const handleDragOver = (e) => {
    //     e.preventDefault();
    //     console.log(456);
    // };
    // const handleDrop = (e) => {
    //     // e.preventDefault();
    //     console.log(789);
    // };
    const [items, setItems] = useState(["item 1", "item 2", "item 3"]);
    const [draggedItem, setDraggedItem] = useState([123,456]);
    

    const onDragStart = (index) => {
        // setDraggedItem(items[index]);
    };

    const onDrag = (event) => {
        event.preventDefault();
    };

    const onDrop = (index) => {
        // const newItems = items.filter((item, i) => i !== index);
        // const newIDragtems = items.filter((item, i) => i == index);
        
        // setItems([...newItems]);
        // setDraggedItem([...newIDragtems]);
        // console.log(items)
    };

    const onDragEnd = (e,index) => {
        // const newItems = items.filter((item, i) => i !== index);
        // const newIDragtems = items.filter((item, i) => i == index);
       console.log(index)
        
        // setItems([...newItems]);
        // setDraggedItem(null);
    };
   
    return (
        <>
            {/* <Flex justifyContent="space-between">
                <div className="w-30">
                    <h1 draggable onDragStart={(e) => handleDragStart(e)}>
                        Tiêu để 1
                    </h1>
                </div>
                <div className="w-30" droppable="true" onDrop={(e) => handleDrop(e)} onDragOver={(e) => handleDragOver(e)}>
                    <h2>Tiêu đề 2</h2>
                   
                </div>
            </Flex> */}
            <h2>List of Itemsdwadwaddwadwad</h2>
            <Flex justifyContent='space-between' w='500px'>
                <div className="items-container" onDragOver={onDrag} onDrop={(index) => onDrop(index)}  >
                    {items.map((item, index) => (
                        
                        <div className="item" key={item} onDragEnd={(e,index)=>onDragEnd(e,index)}  draggable onDragStart={() => onDragStart(index)} >
                            {item}
                            
                        </div>
                    ))}
                </div>
                <div className="items-container" droppable="true" onDragOver={onDrag} >
                    <h2>list item drop</h2>
                    {draggedItem.map((item, index) => (
                        <div className="item" key={item}  >
                            {item}
                        </div>
                    ))}
                </div>
            </Flex>
        </>
    );
};

export default Test;
