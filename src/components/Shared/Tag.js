import React from "react";

const Tag = ({ title, color }) => {
  return (
    <span
      style={{ color: `${color}`, background: `${color}30` }}
      className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
    >
      {title}
    </span>
  );
};

export default Tag;
