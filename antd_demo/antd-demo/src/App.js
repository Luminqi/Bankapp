import React, { Component } from 'react';
import Layout from './Layout/Layout.js';
import store from './Store.js'
import { Provider, connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import './App.css';

addLocaleData([...en, ...zh]);

const mapStateToProps = (state, ownProps) => {
    return {
        locale: state.lang.locales,
        messages: state.lang.messages
    };
};
const ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <ConnectedIntlProvider>
                <Layout />
            </ConnectedIntlProvider>
        </Provider>
    );
  }
}

export default App;
