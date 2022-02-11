import React, { useState, useEffect } from 'react';
import SkillBar1 from './SkillBar1.jsx';
import SkillBar2 from './SkillBar2.jsx';
import FailedBar from './FailedBar.jsx';
import Summary from './Summary.jsx';

const App = () => {
  const [skill1, setSkill1] = useState([]);
  const [skill2, setSkill2] = useState([]);
  const [failedSkill, setFailedSkill] = useState([]);

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counterFailed, setCounterFailed] = useState(0);

  const [scrollChance, setScrollChance] = useState(0.75);

  const reset = (event) => {
    event.preventDefault();
    setSkill1([]);
    setSkill2([]);
    setFailedSkill([]);
    setCounter1(0);
    setCounter2(0);
    setCounterFailed(0);
    setScrollChance(0.75);
  };

  useEffect(() => {
    let counter1 = 0;
    for (var x = 0; x < skill1.length; x++) {
      if (skill1[x] === 1) {
        counter1++;
      }
    }
    setCounter1(counter1);
  }, [skill1]);

  useEffect(() => {
    let counter2 = 0;
    for (var x = 0; x < skill2.length; x++) {
      if (skill2[x] === 1) {
        counter2++;
      }
    }
    setCounter2(counter2);
  }, [skill2]);

  useEffect(() => {
    let failedCounter = 0;
    for (var x = 0; x < failedSkill.length; x++) {
      if (failedSkill[x] === 1) {
        failedCounter++;
      }
    }
    setCounterFailed(failedCounter);
  }, [failedSkill]);

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
          setScrollChance(scrollChance - 0.1);
          temp.push(1);
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
          setScrollChance(scrollChance + 0.1);
          setSkill1(temp);
        }
      } else if (event.target.name === 'skill2') {
        if (skill2.length === 8) {
          alert('maxed out');
        } else {
          let temp = skill2.slice(0);
          temp.push(0);
          setScrollChance(scrollChance + 0.1);
          setSkill2(temp);
        }
      } else {
        if (failedSkill.length === 8) {
          alert('maxed out');
        } else {
          let temp = failedSkill.slice(0);
          temp.push(0);
          setFailedSkill(temp);
          setScrollChance(scrollChance + 0.1);
        }
      }
    }
  };

  return (
    <div>
      <div className='container'>
        <iframe
          src='https://giphy.com/embed/9VvlHYBpcRadeNDCCa'
          width='250'
          height='250'
          frameBorder='0'
          class='giphy-embed'
          allowFullScreen
        ></iframe>
        <span name='percent' class='title'>
          {scrollChance.toString().slice(0, 4)}
        </span>
      </div>
      <SkillBar1 className='bar' level={skill1} />
      <SkillBar2 className='bar' level={skill2} />
      <FailedBar className='bar' level={failedSkill} />
      <span className='summary'>
        <Summary
          className='summary'
          counter1={counter1}
          counter2={counter2}
          counterFailed={counterFailed}
          skill1={skill1}
          skill2={skill2}
          failedSkill={failedSkill}
        />
        <span className='navigation'>
          <button
            name='skill1'
            class='button is-info nav'
            onClick={generateRandomNumber}
          >
            Level Skill 1
          </button>
          <button
            name='skill2'
            class='button is-info nav'
            onClick={generateRandomNumber}
          >
            Level Skill 2
          </button>
          <button
            name='failedSkill'
            class='button is-info nav'
            onClick={generateRandomNumber}
          >
            Level Failed
          </button>
          <button name='reset' class='button is-info nav' onClick={reset}>
            Reset Skills
          </button>
        </span>
      </span>
    </div>
  );
};

export default App;
