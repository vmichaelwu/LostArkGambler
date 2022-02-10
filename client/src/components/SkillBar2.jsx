import React from 'react';
import Bar from './Bar.jsx';

const SkillBar2 = ({ level }) => {
  return (
    <div className='skillbar'>
      <span className='text'>Skill Bar 2:</span>
      {level.map((item) => (
        <Bar item={item} />
      ))}
    </div>
  );
};

export default SkillBar2;
