import React from 'react';
import Bar from './Bar.jsx';

const SkillBar1 = ({ level }) => {
  return (
    <div>
      {level.map((item) => (
        <Bar item={item} />
      ))}
    </div>
  );
};

export default SkillBar1;
