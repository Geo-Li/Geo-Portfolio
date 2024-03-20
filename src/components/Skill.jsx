import React from "react";
import skill from "../data/skill";
import SkillItem from "./SkillItem";
import Title from "./Title";

const Skill = () => {
  return (
    <div className="flex items-center justify-center mb-10 mx-auto">
      <div
        className="w-full p-4 text-center 
                 border border-stone-900
                 rounded-lg shadow sm:p-8 
               dark:border-white"
      >
        <h5
          className="mb-2 text-2xl md:text-3xl font-bold 
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
