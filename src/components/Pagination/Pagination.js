import React from 'react';
import classes from './Pagination.css';

const pagination = props => (
  <ul className={classes.Pagination}>
    <li className={classes.PageItem}>
      <button onClick={props.clicked.bind(this, 1)}>1</button>
    </li>
    <li>
      <button onClick={props.clicked.bind(this, 2)}>2</button>
    </li>
  </ul>
);

export default pagination;
