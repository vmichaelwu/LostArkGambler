import React from 'react';
import Bar from './Bar.jsx';

const SkillBar2 = ({ level }) => {
  return (
    <div>
      {level.map((item) => (
        <Bar item={item} />
      ))}
    </div>
  );
};

export default SkillBar2;
