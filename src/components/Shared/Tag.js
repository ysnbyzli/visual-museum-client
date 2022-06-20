import React from "react";

const Tag = ({ title, color }) => {
  return (
    <div
      style={{
        background: `${color}25`,
        color: `${color}`,
        border: `1px solid ${color}80`,
      }}
      className="px-2 py-1 text-xs"
    >
      {title}
    </div>
  );
};

export default Tag;
