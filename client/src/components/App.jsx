import React, { useState, useEffect } from 'react';
import SkillBar1 from './SkillBar1.jsx';
import SkillBar2 from './SkillBar2.jsx';
import FailedBar from './FailedBar.jsx';

const App = () => {
  const [skill1, setSkill1] = useState([]);
  const [skill2, setSkill2] = useState([]);
  const [failedSkill, setFailedSkill] = useState([]);
  const [scrollChance, setScrollChance] = useState(0.75);

  const reset = (event) => {
    event.preventDefault();
    setSkill1([]);
    setSkill2([]);
    failedSkill([]);
    setScrollChance(0.75);
  };

  const generateRandomNumber = (event) => {
    const rng = Math.random();
    console.log(rng);
    if (rng < scrollChance) {
      // success cases
      if (event.target.name === 'skill1') {
        if (skill1.length === 8) {
          alert('maxed out');
        } else {
          let temp = skill1.slice(0);
          temp.push(1);
          setScrollChance(scrollChance - 0.1);
          setSkill1(temp);
        }
      }
      if (event.target.name === 'skill2') {
        if (skill2.length === 8) {
          alert('maxed out');
        } else {
          let temp = skill2.slice(0);
          temp.push(1);
          setScrollChance(scrollChance - 0.1);
          setSkill2(temp);
        }
      }

      if (event.target.name === 'failedSkill') {
        if (failedSkill.length === 8) {
          alert('maxed out');
        } else {
          let temp = failedSkill.slice(0);
          temp.push(0);
          setFailedSkill(temp);
        }
      }
    } else {
      // fail cases
      if (event.target.name === 'skill1') {
        if (skill1.length === 8) {
          alert('maxed out');
        } else {
          let temp = skill1.slice(0);
          temp.push(0);
          setSkill1(temp);
        }
      } else if (event.target.name === 'skill2') {
        if (skill2.length === 8) {
          alert('maxed out');
        } else {
          let temp = skill2.slice(0);
          temp.push(0);
          setSkill2(temp);
        }
      } else {
        if (failedSkill.length === 8) {
          alert('maxed out');
        } else {
          let temp = failedSkill.slice(0);
          temp.push(1);
          setFailedSkill(temp);
          setScrollChance(scrollChance + 0.1);
        }
      }
    }
  };

  return (
    <div>
      <div name='percent' class='title'>
        {scrollChance.toString().slice(0, 4)}
      </div>
      <SkillBar1 className='bar' level={skill1} />
      <SkillBar2 className='bar' level={skill2} />
      <FailedBar className='bar' level={failedSkill} />
      <button name='skill1' class='button' onClick={generateRandomNumber}>
        Level Skill 1
      </button>
      <button name='skill2' class='button' onClick={generateRandomNumber}>
        Level Skill 2
      </button>
      <button name='failedSkill' class='button' onClick={generateRandomNumber}>
        Level Failed Skill
      </button>
      <button name='reset' class='button' onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default App;
