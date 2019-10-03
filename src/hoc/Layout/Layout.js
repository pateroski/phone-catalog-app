import React, {Component} from 'react';
import classes from './Layout.module.css';

import Aux from './../Aux/Aux';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <header className={classes.Header}>Phone Catalog App</header>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
