import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import ColumnItem from "./ColumnItem";

const Column = ({ columnTitle, columnId, items }) => {
  return (
    <div className="flex flex-col w-1/2">
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
        {columnTitle}
      </h2>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-stone-100 dark:bg-neutral-800 px-4 rounded-lg shadow-inner
            overflow-y-auto h-[45vh]"
          >
            {items.map((item, index) => (
              <Draggable
                key={columnId + index}
                draggableId={columnId + index}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={provided.draggableProps.style}
                    className="my-4"
                  >
                    <ColumnItem
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
