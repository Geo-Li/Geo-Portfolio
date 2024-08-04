// For packages
import { useState } from "react";
// For components
import Skill from "@/components/Skill";
import Timeline from "@/components/timeline/Timeline";
// For functions
import { useValidateGeo } from "@/hooks/router/GeoValidation";

const AboutPage = () => {
  const [canEdit, setCanEdit] = useState(false);
  useValidateGeo(setCanEdit);

  return (
    <div className="pt-[12vh] space-y-[8vh]">
      <Skill canEdit={canEdit} />
      <Timeline canEdit={canEdit} />
    </div>
  );
};

export default AboutPage;
