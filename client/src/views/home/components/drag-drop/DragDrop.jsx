import React, { useState } from 'react'
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable } from '../../../../helpers/StrictModeDtoppabe';
import './dragDrop.css';

const DragDrop = () =>
{
  const finalSpaceCharacters = [
  {
    id: 0,
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id: 1,
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id: 2,
    name: 'KVN',
    thumb: '/images/kvn.png'
  },
  {
    id: 3,
    name: 'Mooncake',
    thumb: '/images/mooncake.png'
  },
  {
    id: 4,
    name: 'Quinn Ergon',
    thumb: '/images/quinn.png'
  }
  ]
  
  const [data, setData] = useState(finalSpaceCharacters);

  function handleOnDragEnd (result)
  {
    if (!result.destination) return;

    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setData(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="data">
            {(provided) => (
              <section {...provided.droppableProps} ref={provided.innerRef}>
              <ul className="characters" >
                {data.map((item, index) =>
                {
                  return (
                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                      {(provided) => (
                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <p>
                            {item.name}
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
                </ul>
                </section>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  )
}

export default DragDrop;


