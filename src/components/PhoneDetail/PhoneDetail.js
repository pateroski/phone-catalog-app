import React from 'react';
import classes from './PhoneDetail.module.css';

const phoneDetail = props => (
  <div className={classes.PhoneCard}>
    <img src={props.phone.image} alt={props.phone.name} />
    <div className={classes.Description}>
      <span className={classes.Name}>{props.phone.name}</span>
      <span className={classes.Price}>{props.phone.price}</span>
    </div>
    <button
      className={classes.ShowExitBtn}
      onClick={props.clicked.bind(this, false)}>
      Salir
    </button>
  </div>
);

export default phoneDetail;
