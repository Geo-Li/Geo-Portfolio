const TimelineItem = ({ startTime, title, duration, institution, details }) => {
  return (
    <div>
      <ol
        className="flex flex-col md:flex-row relative border-l 
        border-stone-200 dark:border-stone-700"
      >
        <li className="mb-10 ml-4">
          <div
            className="absolute w-3 h-3 mt-1.5 -left-1.5 border 
            bg-stone-200 dark:bg-stone-700 rounded-full 
            border-white dark:border-stone-900 "
          />
          <div
            className="flex flex-row gap-4 flex-wrap 
            items-center justify-start text-xs md:text-sm"
          >
            {startTime && (
              <span
                className="inline-block px-2 py-1 font-semibold 
                text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md"
              >
                {startTime}
              </span>
            )}
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
              {title}
            </h3>
            <div
              className="my-1 text-sm font-normal leading-none 
              text-stone-400 dark:text-stone-500"
            >
              {duration}
            </div>
          </div>
          <div className="ml-10 my-2 font-semibold">@ {institution}</div>
          <p
            className="my-2 text-base font-normal 
            text-stone-500 dark:text-stone-400"
          >
            {details}
          </p>
        </li>
      </ol>
    </div>
  );
};

export default TimelineItem;
