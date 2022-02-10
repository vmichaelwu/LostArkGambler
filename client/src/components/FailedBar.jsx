import React from 'react';
import Bar from './Bar.jsx';

const FailedBar = ({ level }) => {
  return (
    <div className='skillbar'>
      <span className='text'>Failed Bar:</span>
      {level.map((item) => (
        <Bar item={item} />
      ))}
    </div>
  );
};

export default FailedBar;
