import React, { useState, useEffect } from 'react';
import SkillBar1 from './SkillBar1.jsx';
import SkillBar2 from './SkillBar2.jsx';
import FailedBar from './FailedBar.jsx';

const App = () => {
  const [skill1, setSkill1] = useState([]);
  const [skill2, setSkill2] = useState([]);
  const [failedSkill, setFailedSkill] = useState([]);
  const [scrollChance, setScrollChance] = useState(0.75);

  useEffect(() => {
    console.log('hello world!');
  }, []);

  const generateRandomNumber = (event) => {
    if (Math.random() < scrollChance) {
      // success cases
      console.log('success ' + scrollChance);
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
          temp.push(1);
          setScrollChance(scrollChance - 0.1);
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
          temp.push(0);
          setFailedSkill(temp);
        }
      }
    }
  };

  return (
    <div>
      <div>{scrollChance.toString().slice(0, 4)}</div>
      <SkillBar1 level={skill1} />
      <SkillBar2 level={skill2} />
      <FailedBar level={failedSkill} />
      <button name='skill1' class='button' onClick={generateRandomNumber}>
        Level Skill 1
      </button>
      <button name='skill2' class='button' onClick={generateRandomNumber}>
        Level Skill 2
      </button>
      <button name='failedSkill' class='button' onClick={generateRandomNumber}>
        Level Failed Skill
      </button>
    </div>
  );
};

export default App;
