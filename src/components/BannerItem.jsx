import React from "react";

const BannerItem = ({ finished, plan }) => {
  const isCrossed = finished ? "line-through" : "";

  return (
    // TODO: in the future classify by boolean "finished",
    // if finished, then cross them and maybe put them into drop menu
    <li className={isCrossed}>
      {plan}
    </li>
  );
};

export default BannerItem;
