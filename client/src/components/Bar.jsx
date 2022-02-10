import React from 'react';
import style from './Bar.styles.css';

const Bar = ({ item }) => {
  if (item === 1) {
    return (
      <span>
        <button class='button is-primary success'>Success</button>
      </span>
    );
  } else {
    return (
      <span>
        <button class='button is-danger failed'>Failed!</button>
      </span>
    );
  }
};
export default Bar;
