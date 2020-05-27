import React from 'react';

const CoverBase = ({ className, title }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
    </div>
  );
};

export default CoverBase;
