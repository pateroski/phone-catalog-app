import React from 'react';
import classes from './Pagination.module.css';

const pagination = props => {
  return (
    <ul className={classes.Pagination}>
      <li className={classes.PageItem}>
        <button
          className={classes.NavigateBtn}
          onClick={props.clicked.bind(this, 1)}>
          1
        </button>
      </li>
      <li className={classes.PageItem}>
        <button
          className={classes.NavigateBtn}
          onClick={props.clicked.bind(this, 2)}>
          2
        </button>
      </li>
    </ul>
  );
};

export default pagination;
