import React from 'react';
import Bar from './Bar.jsx';

const SkillBar1 = ({ level }) => {
  return (
    <div className='skillbar'>
      <span className='text'>Skill Bar 1:</span>
      {level.map((item) => (
        <Bar item={item} />
      ))}
    </div>
  );
};

export default SkillBar1;
