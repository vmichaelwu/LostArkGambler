import React from 'react';
import Bar from './Bar.jsx';

const FailedBar = ({ level }) => {
  return (
    <div className='skillbar'>
      Negative Bar 1:
      {level.map((item) => (
        <Bar item={item} />
      ))}
    </div>
  );
};

export default FailedBar;
