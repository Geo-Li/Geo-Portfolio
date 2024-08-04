const Tab = ({ tabs, activeTab, handleTab }) => {
  const selectedStyle =
    "scale-125 transform translate-y-[-7px] transition duration-300\
    border-teal-300 text-teal-300 dark:border-rose-300 dark:text-rose-300";

  return (
    <div className="flex justify-center my-3">
      <div className="border-b-2 border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-gray-500 dark:text-gray-400">
          {tabs.map(({ label, id }) => (
            <li key={id} onClick={() => handleTab(id)}>
              <div
                className={`cursor-pointer font-medium text-xl text-center 
                inline-block mx-2.5 p-4 border-b-4 hover:border-teal-300 hover:text-teal-300
                dark:hover:border-rose-300 dark:hover:text-rose-300
                ${
                  activeTab === id
                    ? selectedStyle
                    : "border-transparent"
                }`}
              >
                {label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tab;
