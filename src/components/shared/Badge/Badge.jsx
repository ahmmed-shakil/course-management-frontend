import React from "react";

const Badge = ({ bg, text }) => {
  return (
    <div className={`${bg} ${text} text-sm py-1 px-2 rounded-md`}>Badge</div>
  );
};

export default Badge;
