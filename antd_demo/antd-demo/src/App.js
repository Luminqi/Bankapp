import React, { Component } from 'react';
import Layout from './Layout/Layout.js';
import store from './Store.js'
import { Provider } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
  }
}

export default App;
