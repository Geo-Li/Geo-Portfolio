import React from "react";

const BannerItem = ({ finished, plan }) => {
  return (
    // TODO: in the future classify by boolean "finished",
    // if finished, then cross them and maybe put them into drop menu
    <li>
      {plan}
    </li>
  );
};

export default BannerItem;
