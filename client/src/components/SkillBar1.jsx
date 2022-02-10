import React from 'react';
import Bar from './Bar.jsx';

const SkillBar1 = ({ level }) => {
  return (
    <div className='skillbar'>
      Skill Bar 1:
      {level.map((item) => (
        <Bar item={item} />
      ))}
    </div>
  );
};

export default SkillBar1;
