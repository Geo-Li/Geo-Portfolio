// For packages
import { useState, useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
// For components
import BackendButtonGroup from "@/components/button/BackendButtonGroup";
import Column from "@/components/dnd/Column";
import FuturePlanFormItem from "@/components/form/FuturePlanFormItem";
import Title from "@/components/Title";
// For backend
import { FetchAllDocs } from "@/hooks/firestore/FetchFirestore";
import { UpdateDocField } from "@/hooks/firestore/UpdateFirestore";

const FuturePlans = ({ canEdit }) => {
  const [plans, setPlans] = useState({ todo: [], finished: [] });

  // Update items
  useEffect(() => {
    async function fetchFuturePlans() {
      try {
        const documents = await FetchAllDocs("future plan");
        const todoPlans = documents.filter((doc) => !doc.finished);
        const finishedPlans = documents.filter((doc) => doc.finished);

        setPlans({
          todo: todoPlans,
          finished: finishedPlans,
        });
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    }
    fetchFuturePlans();
  }, []);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped nowhere
    if (!destination) {
      return;
    }

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceColumn = plans[source.droppableId];
    const destColumn = plans[destination.droppableId];
    const [removed] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, removed);
    setPlans({
      ...plans,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
    // Reflect the change on the backend
    if (canEdit && sourceColumn !== destColumn) {
      UpdateDocField("future plan", removed.id, "finished", !removed.finished);
    }
    alert("Sorry you are not Geo, changes are not saved");
  }
  // canEdit = true;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-2/3">
        <div className="flex justify-between">
          <Title>Future Plans</Title>
          <BackendButtonGroup
            canEdit={canEdit}
            updateFormTitle="Update Future Plan"
            docData={plans.todo + plans.finished}
            createFormTitle="Create Future Plan"
            FormItem={FuturePlanFormItem}
          />
        </div>
        <div
          className="flex justify-center sm:p-4 text-sm
          border-2 rounded-md border-black
          dark:border-white p-6
          sm:space-x-4 space-x-2"
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <Column columnTitle="To Do" items={plans.todo} columnId="todo" />
            <Column
              columnTitle="Finished"
              items={plans.finished}
              columnId="finished"
            />
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default FuturePlans;
