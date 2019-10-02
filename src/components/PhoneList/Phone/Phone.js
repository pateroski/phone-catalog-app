import React from 'react';
import classes from './Phone.css';

const phone = props => (
  <div className={classes.PhoneCard}>
    <img src={props.thumbnail} alt={props.name} />
    <div className={classes.Description}>
      <span className={classes.Name}>{props.name}</span>
      <span className={classes.Price}>{props.price}</span>
    </div>
    <button className={classes.ShowMoreBtn} onClick={props.clicked}>
      Ver más
    </button>
  </div>
);

export default phone;
