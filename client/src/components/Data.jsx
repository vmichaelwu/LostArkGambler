import React, { useState } from 'react';

const Data = ({ stats }) => {
  const [current, setCurrent] = useState(0);
  return <span>{console.log(stats)}</span>;
};

export default Data;
