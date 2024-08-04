// For packages
import { useEffect, useState } from "react";
// For components
import BackendButtonGroup from "@/components/button/BackendButtonGroup";
import Title from "@/components/Title";
import SkillItem from "./SkillItem";
import SkillFormItem from "@/components/form/SkillFormItem";
// For types
import { CategoryEnum } from "@/types/enum/category";
// For backend functions
import { FetchAllDocs } from "@/hooks/firestore/FetchFirestore";

const Skill = ({ canEdit }) => {
  const [skills, setSkills] = useState([]);
  const [categorizedSkills, setCategorizedSkills] = useState({});

  useEffect(() => {
    async function fetchSkills() {
      try {
        const documents = await FetchAllDocs("skill");
        setSkills(documents);
        setCategorizedSkills(categorizeData(documents, "category"));
      } catch (error) {
        console.error("Error fetching skills: ", error);
      }
    }
    fetchSkills();
  }, []);

  function categorizeData(data, field) {
    return data.reduce((accumulator, item) => {
      const key = item[field];
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(item);
      return accumulator;
    }, {});
  }

  return (
    <div
      className="flex items-center justify-center my-10 mx-auto
      w-full lg:w-3/4"
    >
      <div className="flex flex-col justify-start">
        <div className="flex justify-between">
          <Title>Skill</Title>
          <BackendButtonGroup
            canEdit={canEdit}
            updateFormTitle="Update Skill"
            docData={skills}
            createFormTitle="Create Skill"
            FormItem={SkillFormItem}
          />
        </div>
        <div className="mt-5 space-y-10">
          {Object.keys(categorizedSkills).map((category) => (
            <SkillItem
              key={category}
              category={category}
              skillSet={categorizedSkills[category]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
