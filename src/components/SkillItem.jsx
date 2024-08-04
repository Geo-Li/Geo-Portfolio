const SkillItem = ({ category, skillSet }) => {
  return (
    <div
      className="relative flex flex-col items-start
      border-color rounded-border p-7"
    >
      <div>
        <h3
          className="absolute lg:-top-5 lg:left-3 -top-4 left-2 bg-color
          text-xl lg:text-2xl text-color font-semibold px-2 "
        >
          {category}
        </h3>
        <div
          className="flex justify-start items-center flex-wrap gap-2
          dark:text-white"
        >
          {skillSet.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-row items-center space-x-1 rounded-border border-color"
            >
              <div
                className="scale-125 pl-3"
                dangerouslySetInnerHTML={{ __html: skill.icon }}
              />
              <span
                className="items-center justify-center
                p-3 font-medium text-sm lg:text-base"
              >
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
