import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';

import Home from './shared/containers/Home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-Wrapper">
            <Home />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
