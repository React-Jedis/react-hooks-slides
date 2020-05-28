import React from "react";

const CoverBase = ({ className, title, speakers = [] }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="speakers">
        {speakers.map((speaker) => (
          <span>{speaker}</span>
        ))}
      </div>
    </div>
  );
};

export default CoverBase;
