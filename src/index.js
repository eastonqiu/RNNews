/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import App from './containers';
import codePush from "react-native-code-push";
import SplashScreen from "rn-splash-screen";

const store = createStore();

export default class Root extends Component {

  componentDidMount() {
    codePush.sync();
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

