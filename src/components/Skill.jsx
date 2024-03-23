import React from "react";
import skill from "../data/skill";
import SkillItem from "./SkillItem";
import Title from "./Title";

const Skill = () => {
  return (
    <div className="flex items-center justify-center mb-10 mx-auto">
      <div
        className="w-full text-center 
                 border border-stone-900
                 rounded-lg shadow sm:p-6 
               dark:border-white p-4"
      >
        <h5
          className="mb-4 md:mb-8 text-2xl md:text-3xl font-bold 
                   text-gray-900 dark:text-white"
        >
          Skills
        </h5>
        {skill.map((skill, index) => (
          <SkillItem
            key={skill.id}
            category={skill.category}
            sets={skill.sets}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
