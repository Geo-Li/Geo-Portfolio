// For packages
import { useState } from "react";
// For components
import GoogleCalendar from "@/components/GoogleCalendar";
import FuturePlans from "@/components/FuturePlans";
// For functions
import { useValidateGeo } from "@/hooks/router/GeoValidation";

const SchedulePage = () => {
  const [canEdit, setCanEdit] = useState(false);
  useValidateGeo(setCanEdit);

  return (
    <div className="flex flex-col space-y-[8vh] pt-[12vh]">
      <FuturePlans canEdit={canEdit} />
      <GoogleCalendar />
    </div>
  );
};

export default SchedulePage;
