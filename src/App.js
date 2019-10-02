import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';
import PhoneListContainer from './containers/PhoneListContainer/PhoneListContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Switch>
            <Route path="/" exact component={PhoneListContainer} />
          </Switch>
        </Layout>
      </Aux>
    );
  }
}

export default App;
