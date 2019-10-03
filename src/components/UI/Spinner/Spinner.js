import React from 'react';
import classes from './Spinner.module.css';

import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const spinner = props =>
  props.visible ? (
    <Aux>
      <Backdrop show={props.visible} />
      <div className={classes.Container} hidden={props.visible}>
        <div className={classes.Spinner}></div>
      </div>
    </Aux>
  ) : null;

export default spinner;
