// For packages
import { useEffect, useState } from "react";
// For components
import BackendButtonGroup from "@/components/button/BackendButtonGroup";
import TimelineFormItem from "@/components/form/TimelineFormItem";
import TimelineItem from "./TimelineItem";
import Title from "../Title";
// For backend functions
import { FetchAllDocs } from "@/hooks/firestore/FetchFirestore";

const Timeline = ({ canEdit }) => {
  const [timelines, setTimelines] = useState([]);

  useEffect(() => {
    async function fetchTimelines() {
      try {
        const documents = await FetchAllDocs("timeline");
        setTimelines(documents);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    }
    fetchTimelines();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-7/12">
        <div className="flex justify-between">
          <Title>Timeline</Title>
          <BackendButtonGroup
            canEdit={canEdit}
            updateFormTitle="Update Timeline"
            docData={timelines}
            createFormTitle="Create Timeline"
            FormItem={TimelineFormItem}
          />
        </div>
        {timelines.map((item) => (
          <TimelineItem
            key={item.id}
            startTime={item.startTime}
            title={item.title}
            duration={item.duration}
            institution={item.institution}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
