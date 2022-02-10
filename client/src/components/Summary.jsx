import React from 'react';
import Data from './Data.jsx';

const Summary = ({
  counter1,
  counter2,
  counterFailed,
  skill1,
  skill2,
  failedSkill,
}) => {
  return (
    <div className='stats'>
      <div>Summary</div>
      <div>Skill 1: {Math.round((counter1 / skill1.length) * 100, 1)}</div>
      <div>Skill 2: {Math.round((counter2 / skill2.length) * 100, 1)}</div>
      <div>
        Failed Skills:
        {Math.round((counterFailed / failedSkill.length) * 100, 1)}
      </div>
    </div>
  );
};

export default Summary;
