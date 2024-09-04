import '/Users/preethamyerragudi/AptLock/src/assets/css/Pipeline.css';

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';


type PipelineStage = 'new' | 'contacted' | 'interested' | 'siteVisit' | 'reVisit' | 'negotiation' | 'wonLost';

interface Contact {
  id: string;
  name: string;
}

interface Pipeline {
  new: Contact[];
  contacted: Contact[];
  interested: Contact[];
  siteVisit: Contact[];
  reVisit: Contact[];
  negotiation: Contact[];
  wonLost: Contact[];
}

const initialPipeline: Pipeline = {
  new: [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
  ],
  contacted: [
    { id: '3', name: 'Emily Johnson' },
  ],
  interested: [],
  siteVisit: [],
  reVisit: [],
  negotiation: [],
  wonLost: [],
};

function Pipeline() {
  const [pipeline, setPipeline] = useState<Pipeline>(initialPipeline);

  const onDragEnd = (result: DropResult) => {
    console.log('Drag End:', result);
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceColumn = pipeline[source.droppableId as PipelineStage];
    const destColumn = pipeline[destination.droppableId as PipelineStage];
    const sourceItems = Array.from(sourceColumn);
    const destItems = Array.from(destColumn);
    const [removed] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, removed);

    setPipeline({
      ...pipeline,
      [source.droppableId]: sourceItems,
      [destination.droppableId]: destItems,
    });
    console.log('Pipeline after update:', pipeline);
  };

  return (
    <div className="pipeline">
      <h1>Pipeline</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(pipeline).map(([key, value]) => (
          <Droppable droppableId={key} key={key}>
            {(provided, snapshot) => (
              <div
                className={`column ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</h2>
                {value.map((item: Contact, index: number) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`item ${snapshot.isDragging ? 'dragging' : ''}`}
                      >
                        {item.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default Pipeline;
