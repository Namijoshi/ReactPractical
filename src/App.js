import React, { Component } from 'react';
import './App.css';
import LIST from './container/list'
import {withStyles} from '@material-ui/core'

import {Provider} from 'react-redux'
import store from './store'

const styles={
  root:{
   
    textAlign:'center',
    marginTop:' 20%'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className={this.props.classes.root}>
      <LIST/>
      </div>
       </Provider>
    );
  }
}

export default withStyles(styles)(App);
